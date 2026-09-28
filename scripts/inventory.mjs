import { readFile } from "node:fs/promises";

const catalog = JSON.parse(
  await readFile(new URL("../catalog/articles.json", import.meta.url), "utf8")
);
const byStatus = catalog.reduce((counts, article) => {
  const status = article.vietnameseStatus ?? "discovered";
  counts[status] = (counts[status] ?? 0) + 1;
  return counts;
}, {});

console.log(`Catalog records: ${catalog.length}`);
for (const [status, count] of Object.entries(byStatus).sort(([a], [b]) => a.localeCompare(b))) {
  console.log(`${status}: ${count}`);
}
