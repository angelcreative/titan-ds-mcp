# Titan theme CSS files

Theme files **override** variables defined in `titan.css`. They are not meant to be used with `@import`; load them as separate stylesheets.

## Load order

1. **titan.css** (base tokens)
2. **One theme file** (overrides for that product)

Example in HTML:

```html
<link rel="stylesheet" href="tokens/css/titan.css" />
<link rel="stylesheet" href="tokens/themes/_insights.css" />
```

Then set the theme on the root element:

```html
<html data-theme="insights">
```

## Available themes

| File | `data-theme` | Brand color |
|------|--------------|-------------|
| `_neutral.css` | `neutral` | Black / gray |
| `_audiense.css` | `audiense` | Pomegranate |
| `_demand.css` | `demand` | Aquamarine |
| `_insights.css` | `insights` | Blueberry |
| `_linkedin.css` | `linkedin` | Indigo |
| `_tweetbinder.css` | `tweetbinder` | Ocean |
| (digital) | `digital` | Indigo (inline in titan.css) |

Theme files only reassign semantic tokens (e.g. `--button-primary`, `--link-color`); they use the same `--color-*` primitives from titan.css.
