#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${repo_root}"

declare -a shadow_paths=()

for path in index.html index.txt 404.html .nojekyll _next _not-found 404; do
  [[ -e "${path}" ]] && shadow_paths+=("${path}")
done

while IFS= read -r path; do
  [[ -n "${path}" ]] && shadow_paths+=("${path}")
done < <(
  if [[ -d work ]]; then
    find work -type f \
      \( -name 'index.html' -o -name 'index.txt' -o -name '__next.*.txt' \) \
      -print 2>/dev/null | sort
  fi
)

while IFS= read -r path; do
  [[ -n "${path}" ]] && shadow_paths+=("${path}")
done < <(find . -maxdepth 1 -type f -name '__next.*.txt' -print 2>/dev/null | sed 's#^./##' | sort)

if (( ${#shadow_paths[@]} > 0 )); then
  {
    echo "Development stopped: root-level static export files can shadow the live Vinext routes."
    echo
    echo "Found:"
    printf '  - %s\n' "${shadow_paths[@]}"
    echo
    echo "Nothing was deleted. Run 'npm run dev:fresh' to move generated output into an ignored backup,"
    echo "or move the listed files yourself before starting the normal development server."
  } >&2
  exit 1
fi
