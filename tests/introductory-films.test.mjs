import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { runInNewContext } from "node:vm";
import test from "node:test";
import ts from "typescript";

function mountFilm(reducedMotion = false) {
  let effect, intersection, preferenceChange, disconnected = false;
  const video = {
    autoplay: false, ended: false, paused: true, plays: 0,
    play() { this.paused = false; this.plays++; return Promise.resolve(); },
    pause() { this.paused = true; },
  };
  const motion = {
    matches: reducedMotion,
    addEventListener(_, callback) { preferenceChange = callback; },
    removeEventListener() { preferenceChange = undefined; },
  };
  const output = ts.transpileModule(readFileSync("app/work/[slug]/IntroductoryFilm.tsx", "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText;
  const exports = {};
  runInNewContext(output, {
    exports,
    require(name) {
      if (name === "react") return { useRef: () => ({ current: video }), useEffect: fn => { effect = fn; } };
      if (name === "react/jsx-runtime") return { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) };
      return { default: {} };
    },
    window: { matchMedia: () => motion },
    IntersectionObserver: class {
      constructor(callback) { intersection = callback; }
      observe() {}
      disconnect() { disconnected = true; }
    },
  });
  const tree = exports.default({ src: "/film.mp4", poster: "/poster.jpg", label: "Film", className: "" });
  const cleanup = effect();
  return {
    video, tree, cleanup,
    enter: () => intersection([{ isIntersecting: true }]),
    leave: () => intersection([{ isIntersecting: false }]),
    reduce: value => { motion.matches = value; preferenceChange(); },
    disconnected: () => disconnected,
  };
}

test("films play only in view, pause offscreen, and never restart the final frame", () => {
  const film = mountFilm();
  assert.equal(film.video.plays, 0);
  film.enter();
  assert.equal(film.video.autoplay, true);
  assert.equal(film.video.paused, false);
  film.leave();
  assert.equal(film.video.paused, true);
  film.video.ended = true;
  film.enter();
  assert.equal(film.video.plays, 1);
  assert.equal(film.video.autoplay, false);
  film.cleanup();
  assert.equal(film.disconnected(), true);
});

test("reduced motion retains the poster without autoplay, including preference changes", () => {
  const film = mountFilm(true);
  film.enter();
  assert.equal(film.video.plays, 0);
  assert.equal(film.video.paused, true);
  film.reduce(false);
  assert.equal(film.video.paused, false);
  film.reduce(true);
  assert.equal(film.video.paused, true);
  const props = film.tree.props.children.props.children.props;
  assert.equal(props.poster, "/poster.jpg");
  assert.equal(props.preload, "none");
  assert.equal(props.muted, true);
  assert.equal(props.playsInline, true);
  assert.equal(props.controls, true);
  assert.equal(props.loop, undefined);
  assert.equal(props.width / props.height, 16 / 9);
  film.cleanup();
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
