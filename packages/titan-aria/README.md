# titan-aria

React Aria components styled with **Titan** design system tokens. This library provides accessible, unstyled-primitives behavior (via [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html)) and applies Titan’s look by using CSS variables from Titan (`titan.css` + a theme).

The package does **not** bundle Titan. Your app must load Titan (base CSS + one theme) first, then this library’s CSS.

## Installation

```bash
npm install titan-aria react react-dom react-aria-components
```

**Peer dependencies:** `react`, `react-dom`, `react-aria-components`.

## Load order (important)

Load styles in this order so Titan variables are defined before titan-aria uses them:

1. **Titan base** — `titan.css`
2. **One Titan theme** — e.g. `_insights.css`, `_audiense.css`, etc.
3. **titan-aria styles** — `titan-aria/styles`

Set the theme on the document so the theme’s variables apply:

```html
<html data-theme="insights">
```

### Example (Vite / app entry)

```ts
// main.tsx or App.tsx
import 'path/to/titan.css';        // or your Titan base
import 'path/to/themes/_insights.css';
import 'titan-aria/styles';
```

Or with link tags in `index.html`:

```html
<link rel="stylesheet" href="/titan.css" />
<link rel="stylesheet" href="/themes/_insights.css" />
```

Then in your JS bundle:

```ts
import 'titan-aria/styles';
```

## Usage

Import components from `titan-aria`. They use React Aria’s API; titan-aria adds a small `Button` wrapper with a `variant` prop and re-exports the rest from `react-aria-components`.

### Button (with variant)

The only custom wrapper is `Button`; it supports `variant`: `'primary' | 'secondary' | 'tertiary'`.

```tsx
import { Button } from 'titan-aria';

<Button variant="primary" onPress={() => {}}>Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="tertiary">Learn more</Button>
```

### TextField

```tsx
import { TextField, Label, Input, FieldError } from 'titan-aria';

<TextField name="email" isRequired>
  <Label>Email</Label>
  <Input />
  <FieldError />
</TextField>
```

Helper/description text can be rendered inside `TextField` (e.g. a `<span>` with `slot="description"`) or as custom content; React Aria Components does not export a standalone `Description` component.

### Other components

All other exports (e.g. `Select`, `Dialog`, `Tabs`, `Checkbox`, `Switch`, `Menu`, `Tooltip`, `Popover`) are re-exported from `react-aria-components` and are styled by `titan-aria/styles` via Titan CSS variables. Use the [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) docs for their APIs.

## Build

```bash
npm run build
```

Output: `dist/` (JS, types, and `titan-aria.css`). The `./styles` export points to `dist/titan-aria.css`.
