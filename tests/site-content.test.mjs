import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("homepage makes the beginner guide the primary action", async () => {
  const page = await read("app/page.tsx");
  assert.match(page, /Start the beginner guide/);
  assert.match(page, /href="\/beginner-guide\/"/);
  assert.match(page, /Fan-made, fact-checked guide/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
});

test("all required guide areas have dedicated routes", async () => {
  const files = await Promise.all([
    "app/beginner-guide/page.tsx", "app/gameplay-loop/page.tsx",
    "app/mistakes/page.tsx", "app/endings/page.tsx", "app/faq/page.tsx",
  ].map(read));
  for (const file of files) {
    assert.match(file, /alternates: \{ canonical:/);
    assert.match(file, /ArticleShell/);
  }
});

test("sitemap includes every public HTML route and the formal domain", async () => {
  const sitemap = await read("app/sitemap.ts");
  const site = await read("app/lib/site.ts");
  assert.match(site, /https:\/\/keepthedoorlocked-wiki\.wiki/);
  for (const route of ["beginner-guide", "gameplay-loop", "mistakes", "endings", "faq", "sources"]) {
    assert.match(sitemap, new RegExp(route));
  }
});
