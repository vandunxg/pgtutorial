# pgtutorial-vi

Vietnamese bilingual mirror project for the public learning site [pgtutorial.com](https://www.pgtutorial.com/).

The project keeps each English article as the immutable source and adds a Vietnamese counterpart under the same stable route. The target experience is the original site's UI with a language switch that stays on the equivalent article whenever that translation exists.

## Project status

This repository starts with project instructions and a workflow scaffold. No website content has been crawled or copied yet.

Read [AGENTS.md](AGENTS.md) before starting work and follow [TRANSLATION_RULES.md](TRANSLATION_RULES.md) for every English-to-Vietnamese translation.

## Content and rights

The source website currently identifies its content as copyrighted. Do not commit a full-text crawl, copied branding, or site assets to this public repository unless redistribution rights are confirmed. Keep unlicensed crawl output local and untracked. The project can store its own crawler, inventory, translation workflow, and original UI code.

## Planned layout

- `content/en/`: English source articles, unchanged, when redistribution is authorized.
- `content/vi/`: Vietnamese counterparts with matching relative paths.
- `catalog/`: public article inventory and language mapping, without article body text.
- `site/`: mirror UI and language switch implementation after source UI reconnaissance.
- `scripts/`: respectful crawl, extraction, validation, and build utilities.

## Development

The app scaffold is intentionally minimal until the original site's rendering and navigation have been inspected. Do not select a framework or recreate the UI from assumptions. Record findings and then choose the smallest implementation that preserves the site's layout and behavior.

## Attribution

Source articles belong to pgtutorial.com. This repository is an independent translation and UI project and is not affiliated with the source site.
