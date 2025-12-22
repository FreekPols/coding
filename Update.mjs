import { readFileSync } from 'fs';
import yaml from 'js-yaml';
import { execSync } from 'child_process';
import path from 'path';

// helper: parse frontmatter from a Markdown file
function getFrontmatter(srcPath) {
  try {
    const text = readFileSync(srcPath, 'utf-8');
    const match = /^---\s*([\s\S]*?)---/.exec(text);
    if (!match) return null;
    return yaml.load(match[1]);
  } catch {
    return null;
  }
}

function getGitUpdatedISO(filePathAbs) {
  try {
    // Zorg dat we vanuit de repo-root werken
    const repoRoot = execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
    const filePathRelToRepo = path.relative(repoRoot, filePathAbs);

    // Laatste commit-datum die dit bestand heeft aangepast
    const iso = execSync(`git log -1 --format=%cI -- "${filePathRelToRepo}"`, {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();

    return iso || null;
  } catch {
    return null;
  }
}

function formatDateNL(isoString) {
  try {
    const d = new Date(isoString);
    // bv. "22 dec 2025"
    return new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }).format(d);
  } catch {
    return isoString;
  }
}

const updateDateTransform = {
  name: 'update-date',
  doc: 'Add Updated date (frontmatter override, else from git) to top of document',
  stage: 'document',
  plugin: (_opts, utils) => {
    return (node, file) => {
      if (!file?.path) return node;

      const fm = getFrontmatter(file.path);

      // 1) frontmatter override (als je dat wil)
      // 2) anders git last-updated
      const updatedRaw = fm?.updated ?? getGitUpdatedISO(file.path);

      // Als je alleen wil tonen als er frontmatter "updated: true" staat:
      // const shouldShow = Boolean(fm?.updated);
      // const updatedRaw = shouldShow ? getGitUpdatedISO(file.path) : null;

      if (updatedRaw) {
        const updatedLabel = fm?.updated && typeof fm.updated === 'string'
          ? fm.updated
          : formatDateNL(updatedRaw);

        node.children.unshift({
          type: 'div',
          class: 'font-light text-sm mb-4 updated-date-container',
          children: [{ type: 'text', value: `Updated: ${updatedLabel}` }],
        });
      } else {
        node.children.unshift({
          type: 'div',
          class: 'font-light text-sm mb-4',
          children: [],
        });
      }

      return node;
    };
  },
};

export default updateDateTransform;
