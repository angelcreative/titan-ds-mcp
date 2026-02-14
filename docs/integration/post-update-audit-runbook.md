# Post-Update Audit Runbook (Hybrid Aria Model)

Use this runbook after each relevant integration/update cycle to migrate snowflakes and prevent duplicate ownership.

## Trigger

Run when:

- `titan-aria` wrappers change (new wrappers, API behavior, styles).
- Foundational docs/rules/specs for core patterns change.
- Consumer apps report parity, accessibility, or theme regressions.

## Inputs

- `docs/integration/component-inventory.md`
- `docs/integration/decision-policy.md`
- `docs/integration/deduplication-roadmap.md`
- `docs/integration/consumer-verification-checklist.md`

## Procedure

1. **Capture update scope**
   - List changed wrappers, primitives, and affected specs/tokens.
2. **Map overlaps**
   - Compare with active `SnowflakeFallback` entries and duplicated implementations.
3. **Classify each overlap**
   - `migrate-now`: parity is good enough.
   - `wait`: missing parity details (document gap).
4. **Plan migrations**
   - Create migration tasks per component.
   - Include acceptance criteria (visual, interaction, accessibility).
5. **Deprecate local fallback**
   - Mark fallback artifacts as deprecated.
   - Update docs/rules to point to `AriaBase`/`TitanAriaWrapper`.
   - Run consumer verification checklist before removing artifacts.
6. **Close audit**
   - Update inventory status.
   - Record decisions and next review date.

## Minimum acceptance checklist per migrated component

- Visual parity in all supported themes.
- Keyboard/focus/aria parity.
- Empty/loading/error/success handling is preserved where applicable.
- Icon behavior follows Lucide + token contract (no hardcoded styling).

## Output template

Document this in each audit cycle:

- Audit date
- Wrapper/spec versions reviewed
- Components moved from `SnowflakeFallback` to `AriaBase`/`TitanAriaWrapper`
- Components kept as snowflake with reason
- Deprecated artifacts and removal target date
