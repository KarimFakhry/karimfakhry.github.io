#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
backup_dir=""

ensure_backup_dir() {
  if [[ -z "${backup_dir}" ]]; then
    backup_dir="${project_root}/.sites-runtime/cache-backups/dev-fresh-$(date +%Y%m%d-%H%M%S)"
    mkdir -p "${backup_dir}"
  fi
}

preserve_generated_path() {
  local relative_path="$1"
  local source_path="${project_root}/${relative_path}"

  if [[ -e "${source_path}" ]]; then
    ensure_backup_dir
    mv "${source_path}" "${backup_dir}/"
    echo "Preserved generated ${relative_path} in ${backup_dir}"
  fi
}

# Root-level static exports can shadow Vinext routes in Vite development.
# Keep recovery reversible by moving generated output into an ignored backup.
for relative_path in \
  .next \
  dist \
  _next \
  _not-found \
  404 \
  404.html \
  index.html \
  index.txt \
  .nojekyll \
  projects \
  screens \
  favicon.svg \
  file.svg \
  globe.svg \
  og.png \
  window.svg \
  work; do
  preserve_generated_path "${relative_path}"
done

shopt -s nullglob
for generated_text in "${project_root}"/__next.*.txt; do
  preserve_generated_path "${generated_text#"${project_root}/"}"
done
shopt -u nullglob

cd "${project_root}"
export WRANGLER_LOG_PATH=".wrangler/wrangler.log"
exec "${project_root}/node_modules/.bin/vite" --force --strictPort "$@"
