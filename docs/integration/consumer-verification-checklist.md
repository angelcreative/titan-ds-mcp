# Consumer Verification Checklist (Safe Removal Gate)

Use this checklist before removing local artifacts (`foundations/*.json`, docs, or rules) for components already stabilized in the hybrid Aria model.

## Scope

Applies to: `Menu`, `Select`, `Navbar`, and any future component moving from `SnowflakeFallback` to `AriaBase`/`TitanAriaWrapper`.

## Verification steps

1. **Consumer inventory**
   - List all apps/repos using the component.
   - Record current versions for `react-aria-components` and `@audienseco/titan-aria` (if used).

2. **Implementation source check**
   - Confirm each consumer uses React Aria + Titan tokens (directly or through `titan-aria` wrapper).
   - Confirm no consumer depends on local spec/rule generation for that component.

3. **Visual parity check**
   - Validate parity in all required themes (`audiense`, `demand`, `insights`, etc.).
   - Validate required states (empty/loading/error/success where relevant).

4. **Accessibility check**
   - Keyboard flow, focus visibility, labels/aria, disabled behavior.

5. **Icon policy check**
   - Lucide usage is consistent.
   - Icon color/size come from Titan tokens.

6. **Operational sign-off**
   - Product/design sign-off for parity.
   - Engineering sign-off for migration completeness.

## Evidence template

| Consumer repo/app | Aria/titan-aria version | Source is Aria/titan-aria | Theme parity | A11y parity | Sign-off |
| --- | --- | --- | --- | --- | --- |
| `<repo-a>` | `<x.y.z>` | yes/no | yes/no | yes/no | yes/no |

## Removal decision rule

Only remove local fallback artifacts when **all** active consumers are `yes` on:

- source is Aria/titan-aria
- theme parity
- a11y parity
- sign-off

If any entry is `no`, keep local fallback artifacts and set a new review date.
