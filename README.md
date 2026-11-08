# Bruun Software privacy policies

A static website for the public GitHub repository named `privacy`. It uses HTML, shared CSS and a small local JavaScript file for language navigation. No build tools or dependencies are required.

## Files and language folders

- `index.html` — app directory and contact details.
- `free-caffeine-tracker/index.html` — English policy at `/free-caffeine-tracker/`.
- `free-caffeine-tracker/<language-code>/index.html` — complete translated policy pages.
- `free-caffeine-tracker/language.js` — enables the labelled dropdown to navigate when a language is chosen.
- `styles.css` — shared responsive styles.
- `.nojekyll` — disables Jekyll processing on GitHub Pages.

All page, asset and language-navigation paths are relative and work under the GitHub Pages repository path `/privacy/`. Each policy page has the appropriate HTML `lang` attribute. Language options and links use native names, without flags. The current language is selected in the dropdown and identified in the link list.

| Native language name | Web language code | Policy path relative to repository root |
| --- | --- | --- |
| English | `en` | `free-caffeine-tracker/` |
| Suomi | `fi` | `free-caffeine-tracker/fi/` |
| Svenska | `sv` | `free-caffeine-tracker/sv/` |
| Dansk | `da` | `free-caffeine-tracker/da/` |
| Norsk bokmål | `nb` | `free-caffeine-tracker/nb/` |
| Deutsch | `de` | `free-caffeine-tracker/de/` |
| Nederlands | `nl` | `free-caffeine-tracker/nl/` |
| Français | `fr` | `free-caffeine-tracker/fr/` |
| Español | `es` | `free-caffeine-tracker/es/` |
| Italiano | `it` | `free-caffeine-tracker/it/` |
| Português (Portugal) | `pt-PT` | `free-caffeine-tracker/pt-PT/` |
| Polski | `pl` | `free-caffeine-tracker/pl/` |
| Čeština | `cs` | `free-caffeine-tracker/cs/` |
| Slovenčina | `sk` | `free-caffeine-tracker/sk/` |
| Magyar | `hu` | `free-caffeine-tracker/hu/` |
| Română | `ro` | `free-caffeine-tracker/ro/` |
| Hrvatski | `hr` | `free-caffeine-tracker/hr/` |
| Slovenščina | `sl` | `free-caffeine-tracker/sl/` |
| Eesti | `et` | `free-caffeine-tracker/et/` |
| Latviešu | `lv` | `free-caffeine-tracker/lv/` |
| Lietuvių | `lt` | `free-caffeine-tracker/lt/` |
| Türkçe | `tr` | `free-caffeine-tracker/tr/` |
| Bahasa Indonesia | `id` | `free-caffeine-tracker/id/` |
| Bahasa Melayu | `ms` | `free-caffeine-tracker/ms/` |

The codes are standard web language tags (BCP 47); `nb` specifies Norwegian Bokmål and `pt-PT` specifies Portuguese as used in Portugal.

## Translation review and policy revisions

All pages represent the same policy revision and retain the effective date **8 November 2026** (`2026-11-08`). When revising the policy, update every translation faithfully and keep the effective date consistent across that revision. If the actual initial publication date differs, update both the visible localized date and the machine-readable `datetime` value on every policy page before publication.

Preserve the app name, developer name, support email and all factual qualifications, including the distinction between consumption time and logging time, the possible extra drink retained for Undo, supported-watch limitations and third-party privacy practices.

## Language navigation and accessibility

With JavaScript enabled, choosing a language in the visibly labelled native select control immediately opens the complete policy in that language. A localized description explains this behavior before the control and is linked to it for assistive technology. The dropdown supports touch, a pointer and the keyboard. No language preference is stored and no language detection or redirect occurs on page load.

The **All languages** disclosure (translated on each page) contains ordinary links to every complete policy. It remains available without JavaScript; the inactive dropdown is hidden when the script does not run. The native disclosure supports keyboard and touch. Controls have visible focus indicators and the layout wraps at narrow widths.

## Enable GitHub Pages

1. Place these files at the root of the public `privacy` repository on its `main` branch.
2. In the repository on GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch** as the source.
4. Select the **main** branch and **/ (root)** folder, then click **Save**.
5. Wait for GitHub Pages to finish deploying.

- Website: `https://jburn.github.io/privacy/`
- Expected policy URL: `https://jburn.github.io/privacy/free-caffeine-tracker/`
- Example Finnish URL: `https://jburn.github.io/privacy/free-caffeine-tracker/fi/`

File creation alone does not publish the website.

## Local viewing

Open any page’s `index.html` directly to read it. For directory navigation, preview through a static web server serving the repository at `/privacy/`, as GitHub Pages does. No installation or build step is needed for the site itself.

The website uses no cookies, analytics, tracking integrations, external fonts or contact forms. The local script only enables explicit language navigation. GitHub operates the hosting service; this does not imply that GitHub keeps no hosting logs.
