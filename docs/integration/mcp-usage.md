# MCP Usage (Cursor + Titan)

This is the practical usage contract so you can request interfaces and get consistent Titan outputs.

## What MCP should do by default

1. Build requested components from `react-aria-components`.
2. Apply Titan semantic tokens/foundations for visuals.
3. Reuse `titan-aria` wrappers when they fit and avoid rework.
4. Use `lucide-react` for icons with Titan token-driven size/color.

## Ready-to-use prompts

### Generic UI request

```text
Create this UI with Titan rules:
- Use react-aria-components as base behavior/accessibility layer.
- Paint with Titan tokens/foundations from this repo.
- Reuse titan-aria wrappers if already available and appropriate.
- Use lucide-react for icons with token-based size/color.
- Do not create two active implementations of the same component.
```

### Navbar request

```text
Build page shell with navbar:
- Implement navbar with React Aria/titan-aria + tokens.
- Use foundations/navbar.json + docs/logos-and-navbar.md as the required structural contract.
- Keep exact icon policy and theme logo mapping.
```

### Menu/Select request

```text
Build filters area with Menu and Select:
- Use React Aria/titan-aria structure for Menu and Select.
- Use foundations/menu.json and foundations/select.json as operational token/structure contract.
- Keep tokens/theme behavior aligned with titan.css + active theme.
```

### Exploratory component request

```text
Create a new exploratory component pattern:
- Build with React Aria + Titan semantic tokens.
- Mark output as snowflake fallback (temporary).
- Keep empty/loading/error/success states and accessibility parity.
```

## Theme and style invariants

- Load order: `titan.css` -> one theme file -> component styles.
- Set `<html data-theme="...">`.
- Use semantic Titan tokens; avoid hardcoded brand values.

## Sources of truth

- Policy: `docs/integration/decision-policy.md`
- Inventory: `docs/integration/component-inventory.md`
- Fallback contract: `docs/integration/fallback-contract.md`
