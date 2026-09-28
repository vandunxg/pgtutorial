# English-to-Vietnamese translation rules

Adapted from the translation guidance in vandunxg/JavaGuide and adjusted for English PostgreSQL documentation. These rules govern every Vietnamese article here. See AGENTS.md for crawling and UI instructions.

## 1. Objective

Write concise, natural Vietnamese technical documentation that preserves every meaning, condition, qualification, example, and relationship in the English source.

- Translate the complete source. Never summarize, expand, omit, or reorder it.
- Do not add translator opinions, explanations, or outside knowledge.
- Keep English source files unchanged; write Vietnamese only to the matching Vietnamese path.
- Use a direct technical style. Avoid ornate language and word-for-word phrasing that makes Vietnamese unnatural.
- Preserve the source's point of view. Use “bạn” only where the source addresses its reader.
- Keep terminology consistent within and across articles.

## 2. Structure and technical material

Keep title intent, heading hierarchy, section order, paragraphs, lists, tables, callouts, examples, summaries, and cross-references aligned with the source.

Keep unchanged:
- SQL statements, identifiers, function and type names, operators, parameters, commands, filenames, output, errors, and configuration keys.
- URLs, link destinations, route slugs, anchor IDs, HTML attributes, Markdown directives, and syntax markers.
- Numeric values, symbols, units, example data, and query results.

Translate headings, prose, table descriptions, captions, alt text, labels, and explanatory comments. In code blocks, preserve executable code exactly. Translate only natural-language comments or user-facing sample strings when this cannot change behavior or expected output. If unsure whether text is expected output, leave it unchanged and flag it for review.

Do not change code to make it more idiomatic. Do not silently correct source errors; record them separately.

## 3. Terminology

Use English-first terms where Vietnamese developers commonly use the English technical term and translation would sound awkward, less precise, or inconsistent with PostgreSQL terminology. Translate ordinary language and sentence grammar; do not turn whole sentences into English.

Prefer English for technical concepts such as PostgreSQL, SQL, database, schema, table, row, column, query, result set, data type, constraint, primary key, foreign key, index, sequence, transaction, view, materialized view, trigger, function, procedure, operator, expression, clause, join, subquery, CTE, cursor, NULL, DEFAULT, CHECK, UNIQUE, JSON, JSONB, UUID, timestamp, interval, array, enum, range, composite type, commit, rollback, savepoint, locking, deadlock, isolation level, execution plan, partitioning, replication, backup, restore, role, privilege, authentication, authorization, extension, psql, and PL/pgSQL.

Keep SQL keywords, built-in types, function names, product names, and identifiers in their original spelling and casing. The list above is a default, not a whitelist: decide by meaning and context. Do not append a Vietnamese gloss after every English term. Explain a difficult term briefly on first use only when the source explains it or the translation would otherwise be unclear.

Add new terminology decisions to catalog/GLOSSARY.md and keep one term for one concept in the same section.

## 4. Metadata and links

If source articles contain frontmatter:
- Preserve keys, route/slug, dates, IDs, and machine-readable values.
- Translate human-readable title and description fields in the Vietnamese counterpart only.
- Quote YAML strings containing colon-space, ending with a colon, or containing space-hash.
- Validate frontmatter after editing. Never change English metadata.

Preserve external URLs and targets. Map internal links to Vietnamese counterparts when available; keep English links in English articles. Preserve heading anchors when possible. If translated headings generate different anchors, use stable explicit IDs and verify both languages. Never silently drop a link, image, note, or citation.

## 5. Completeness review

For each article:
1. Compare headings, lists, tables, code fences, links, and section order.
2. Confirm every prose section is translated and no substantive section was added.
3. Check code, commands, and examples for unintended changes.
4. Check internal routes, anchors, metadata, and glossary consistency.
5. Run an independent review for omissions, mistranslations, terminology drift, and accidental code edits.
6. Mark the article reviewed only after these checks pass.

Natural-sounding text alone is not enough: the translation must also be complete and faithful.
