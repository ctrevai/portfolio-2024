# trevai.com

Static landing page for Chom Trevai, in `public-html/`. Hosted on S3 + CloudFront. Any push to `main` that touches `public-html/**` deploys live, so work on a branch and open a PR. Never push straight to `main`.

Content strategy, drafts and publishing live in a separate private repo (`ctrevai/brand-engine`). Don't add ideas, drafts or notes here: this repo is public.

## Site conventions

- Plain HTML/CSS, no build step. Reuse tokens and classes from `public-html/style.css`; essay styles live in `public-html/writing/writing.css`.
- Essays go in `public-html/writing/<slug>.html`, copying the structure of `ai-is-compressed-experience.html`. Add each to the list in `public-html/writing/index.html` between `POSTS:START` and `POSTS:END`, newest first, and make it the first card in the homepage `#writing` section.
- Link to `index.html` explicitly in subfolders (don't rely on CloudFront folder resolution).
- The global `article` rule in `style.css` styles the skill badges; essay pages override it with `.post`.
- Check every page at 375px and 1280px wide, light and dark, before opening a PR.
- Bios and essays carry "Views are my own."
