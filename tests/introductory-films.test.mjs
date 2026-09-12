import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { runInNewContext } from "node:vm";
import test from "node:test";
import ts from "typescript";

function renderFilm() {
  const output = ts.transpileModule(readFileSync("app/work/[slug]/IntroductoryFilm.tsx", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  runInNewContext(output, {
    exports,
    require(name) {
      if (name === "react/jsx-runtime") return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
      return { default: {} };
    },
  });
  return exports.default({ src: "/film.mp4", poster: "/poster.jpg", label: "Film", className: "" });
}

test("introductory films require explicit user playback and do not autoplay or loop", () => {
  const tree = renderFilm();
  const props = tree.props.children.props.children.props;
  assert.equal(props.autoPlay, undefined);
  assert.equal(props.poster, "/poster.jpg");
  assert.equal(props.preload, "none");
  assert.equal(props.muted, true);
  assert.equal(props.playsInline, true);
  assert.equal(props.controls, true);
  assert.equal(props.loop, undefined);
  assert.equal(props.width / props.height, 16 / 9);
});

test("built routes insert only their own film before the executive summary; Golden Paths remain", () => {
  const films = {
    "dotcare-ess": "dotcare-ess-promotional-film",
    "andalusia-health-app": "andalusia-health-app-film",
  };
  for (const slug of readdirSync("out/work")) {
    const html = readFileSync(`out/work/${slug}/index.html`, "utf8").split("</main>")[0];
    const sources = [...html.matchAll(/<source src="([^"]+)"/g)].map(match => match[1]);
    const film = films[slug];
    if (film) {
      assert.equal(sources[0], `/video/${film}.mp4`);
      assert(sources.some(src => src.includes("golden-path")));
      const at = html.indexOf(`/video/${film}.mp4`);
      assert(at > html.indexOf('class="project-hero"'));
      assert(at < html.indexOf('id="executive-summary"'));
      for (const suffix of [".mp4", "-poster.jpg"]) assert(existsSync(`out/video/${film}${suffix}`));
    } else {
      assert(!sources.some(src => Object.values(films).some(name => src.includes(name))));
    }
  }
});
