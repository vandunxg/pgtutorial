# pgtutorial.com UI reconnaissance

Date: 2026-09-28

## Scope and method

Inspected the source homepage, PostgreSQL Triggers article, and CREATE TABLE article through their publicly indexed HTML. This records structure and visible controls only; no source article body or proprietary assets are copied into this repository.

Direct access to robots.txt and sitemap.xml was unavailable through the current inspection surface. Check them again from a normal browser or crawler before implementing broad crawling.

## Observed shared navigation

The homepage and both inspected article pages expose the same global links:
- Home
- PL/pgSQL
- Functions, with Aggregate, Window, String, and Date Functions
- Administration
- Playground

Article pages also expose a search input and a long course outline. The outline repeats across pages and groups links by topics such as Getting Started, Filtering Rows, Working with Tables, Sorting and Limiting, Joins, Grouping, Data Types, Subqueries, CTEs, Views, Functions, Indexes, Stored Procedures, and Triggers. Other parts of the site include Python tutorials.

## Observed article structure and controls

The inspected articles contain:
- Article title and short summary
- Nested headings and explanatory prose
- SQL examples with a Copy control
- Try it links beside runnable examples
- Tables and query output
- Summary and a quiz area
- Helpful / not helpful feedback controls
- Previous and next article links
- Search and course navigation

The source HTML presents the course outline after article content in its text order. A visual browser inspection is still needed to determine exact placement, sticky behavior, dimensions, colors, and responsive breakpoints.

## Rights and scope

The homepage states Copyright © 2025 pgtutorial.com. All Rights Reserved. Do not publish copied article text, source CSS, logo, or source assets in this public project without redistribution permission.

## Next UI reconnaissance tasks

- Open representative pages at desktop and mobile widths in a visual browser.
- Record header, left/right navigation placement, sticky behavior, typography, code/output styling, and mobile menu behavior.
- Inspect search, theme controls, quiz, Try it links, and feedback interactions.
- Compare asset and UI reuse options with the site's rights terms.
- After this visual pass, record a decision on whether to retain rendered HTML structure or implement an independently authored compatible shell.
