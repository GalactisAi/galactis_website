# Contact Sales Modal Context

This document captures the current architecture for `components/ContactSalesModal.tsx` so Copilot/Cursor can provide reliable assistance without re-opening large files.

## Purpose
The modal handles three intent-specific flows:
- **sales** → standard contact form for prospects
- **partner** → partner application with extra fields like partner type and regions served
- **support** → support/other issues with categories and account ID

The modal relies on Radix UI's `Dialog`, `react-hook-form`, and Zod schemas specific to each intent. Each intent has unique validation requirements and form fields.

## Key Behaviors
- `ContactSalesModal` receives an `intent` prop (`"sales" | "partner" | "support"`). The layout no longer exposes a dropdown; each trigger renders its own form variant.
- Zod schemas live near the top of the file and enforce per-intent validation.
- Submission hits `/api/contact` for sales/support and `/api/contact/partner` for partner flow.
- After submission, a confirmation panel replaces the form.
- Radix `Dialog.Close` handles cancel/close actions.

## Guidance for Future Changes
- Keep schemas synchronized with backend API expectations.
- When adding inputs, register them via `react-hook-form` and extend the relevant schema and TypeScript types.
- To add new intent types, extend the `FormIntent` union, add a schema, and branch the JSX similar to existing sections.

