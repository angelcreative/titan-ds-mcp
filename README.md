# titan-foundations

Titan design system tokens and tooling. This repository contains:

- **Titan tokens** — Base CSS variables (`titan.css`) and theme overrides (e.g. `_insights.css`, `_audiense.css`) under `titan-foundations/tokens/`. Apps load `titan.css` plus one theme and set `data-theme="…"` on `<html>`.
- **titan-aria** — A React component library in `packages/titan-aria` that integrates [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) with Titan. Components use React Aria for behavior and accessibility and Titan CSS variables for appearance. Your app loads Titan (base + theme) first, then `titan-aria/styles`; no tokens are duplicated in the package.

See:

- [Titan themes](titan-foundations/tokens/themes/README.md) for load order and available themes.
- [titan-aria](packages/titan-aria/README.md) for installation, load order, and usage of the React Aria + Titan components.
