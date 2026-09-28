import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "AGENTS.md",
  "TRANSLATION_RULES.md",
  "catalog/articles.json",
  "catalog/PROGRESS.md",
  "README.md",
  "site/index.html"
];

for (const file of requiredFiles) {
  await access(new URL("../" + file, import.meta.url));
}

const catalogPath = new URL("../catalog/articles.json", import.meta.url);
const catalog = JSON.parse(await readFile(catalogPath, "utf8"));
if (!Array.isArray(catalog)) {
  throw new Error("catalog/articles.json must contain a JSON array");
}

for (const [index, article] of catalog.entries()) {
  if (!article.id || !article.sourceUrl || !article.englishTitle) {
    throw new Error(`Catalog record ${index} is missing id, sourceUrl, or englishTitle`);
  }
}

console.log(`Project scaffold check passed (${catalog.length} catalog records).`);
