# Agent instructions

Read this file and TRANSLATION_RULES.md before crawling, translating, or changing the site.

## Goal

Build a bilingual learning site where the original English article remains unchanged, a complete Vietnamese counterpart sits at the same relative route, and both versions share equivalent navigation. Keep the page UI and reading experience as close as possible to pgtutorial.com.

This repository is only a scaffold. Do not claim content has been inventoried, crawled, translated, or visually matched until verified.

## Content rules

1. Treat English as canonical and immutable. Never replace, paraphrase, or improve source text.
2. Store Vietnamese separately and preserve the same relative path and article slug.
3. Translate the complete article: headings, prose, tables, captions, alt text, summaries, and navigation labels. Do not summarize, omit, or reorder.
4. Preserve SQL, commands, identifiers, filenames, URLs, output, query results, and code examples exactly. Translate only natural-language comments or reader-facing strings when it cannot change behavior or expected output.
5. Keep heading hierarchy, section order, lists, tables, examples, and article links aligned.
6. Do not add explanations or outside knowledge. Record suspected source errors separately instead of silently changing either language.
7. Follow TRANSLATION_RULES.md for every translation.

## Crawl and source handling

- Start from pgtutorial.com course/index pages. Check terms, robots.txt, sitemap.xml, canonical URLs, and crawl guidance first.
- Inventory course hierarchy, article titles, URLs, and stable slugs before fetching article bodies.
- Crawl conservatively: cache responses, identify the crawler, use a low request rate and backoff, and avoid request bursts.
- Fetch only public pages. Never bypass access controls, bot protections, or rate limits.
- Record provenance for each item: canonical URL, fetch time, title, and content hash.
- This is a public repository and the source site identifies its material as copyrighted. Do not commit a full-text crawl, branding, logo, or site assets unless redistribution rights are confirmed. Until then, keep crawl output local and untracked. Public URLs and metadata without article text are acceptable.
- Do not mirror third-party images by default.

## UI implementation

- First inspect the live site's header, course navigation, article layout, sidebar, breadcrumb, table of contents, typography, code blocks, tables, previous/next links, search, theme behavior, mobile layout, and interactions.
- Capture representative desktop and mobile screenshots and record tested routes.
- Choose the smallest approach based on the observed DOM, UI, rights, and maintainability. Do not select a framework or invent a design before reconnaissance.
- Preserve layout and behavior where rights permit; add only language controls. Do not use source branding as project identity.
- The language switch maps to the corresponding article. If its translation is missing, mark it unavailable or link to the translated course index.
- Verify direct routes, browser history, refresh, keyboard access, mobile navigation, anchors, code copy controls, and previous/next links in both languages.

## Structure

Once content exists, use matching relative paths:

    content/en/<course>/<section>/<slug>.md
    content/vi/<course>/<section>/<slug>.md
    catalog/articles.json
    site/
    scripts/
    reports/

The catalog contains metadata only: stable ID, English title, source URL, course/section order, relative paths, crawl time, source hash, and language status. Never put article body text in the public catalog.

## What agents should do next

### Phase 1: reconnaissance
1. Check terms/license, robots.txt, and sitemap.xml.
2. Browse all course and category indexes; record hierarchy, links, and counts.
3. Inspect representative pages with prose, SQL/output, tables, and function/API examples.
4. Record UI behavior and desktop/mobile screenshots.
5. Create a metadata-only inventory; record rights and crawl limitations.

### Phase 2: design
1. Compare preserving fetched HTML with extracting structured content and rendering it.
2. Choose based on actual site structure, behavior, rights, and maintenance.
3. Record the decision in reports/ before broad crawling.
4. Define stable page IDs and English/Vietnamese route mapping.

### Phase 3: crawl
1. Implement a resumable, cached, rate-limited crawler that follows site guidance.
2. Preserve headings, code, output, tables, links, image references, and order.
3. Keep unlicensed source copies local and untracked.
4. Validate extraction against representative live pages before scaling up.

### Phase 4: translate
1. Work in course order; preserve the English source alongside the translation.
2. Keep headings and anchors aligned.
3. Track each article as discovered, fetched, extracted, translated, reviewed, source-changed, or blocked.
4. Run an independent completeness review against the English source.

### Phase 5: UI and checks
1. Implement the mirror based on reconnaissance.
2. Check equivalent routes, links, anchors, missing translations, responsive layout, accessibility, and rendering.
3. Compare screenshots at matching viewport sizes.
4. Run extraction, translation-structure, link, and production build checks.

## Change discipline

Keep changes scoped to the active phase. Preserve existing user changes. Never fabricate counts, status, license findings, or visual parity. Do not publish scraped text or copied assets without confirmed rights. Report changed files, checks actually run, remaining gaps, and the next concrete phase.
