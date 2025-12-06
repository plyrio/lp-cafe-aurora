<!-- Copilot/AI agent instructions for the lp-cafe-aurora repo -->
# Copilot instructions — lp-cafe-aurora

This file contains concise, actionable guidance for AI coding agents working in this repository.

- Repository type: React + TypeScript + Vite (custom `rolldown-vite` alias).
- Primary UI styling: Tailwind CSS; many utility classes are placed directly in JSX.

Key commands

- Run dev server: `npm run dev` (runs `vite`).
- Build: `npm run build` (runs `tsc -b && vite build`). Note: TypeScript build runs first; keep `tsconfig.*` references in mind.
- Lint: `npm run lint` (runs `eslint .`).

Architecture & patterns (big picture)

- Entry: `src/main.tsx` → `src/App.tsx` composes the page from `src/components/sections/*` and `src/components/layout/*`.
- Layout vs Section: `src/components/layout` contains global layout pieces (Header, Footer, Logo, NavLinks, Actions). `src/components/sections` contains page sections composed into `App` (Hero, Menu, About, etc.).
- Reusable UI: small, composable components live under `src/components/ui` (e.g. `Button`, `Section`). `Section` is used as the canonical wrapper for page sections — prefer reusing it unless a section needs special layout.
- Data/config: non-visual data lives under `src/constants` (e.g. `productsList.ts`, `footerMenus.ts`, `socialMedias.ts`). Use these for sample data and translations.
- Utilities: single-purpose utilities such as `src/utils/formatCurrency.ts` exist — follow the same pattern for small helpers.

Project-specific conventions

- Tailwind-first: Styling is done almost entirely with Tailwind classes inside JSX. Expect many long className strings and pass `className` through components.
- Custom fonts & utilities: `src/index.css` defines `@font-face` and custom utility classes (e.g. `.font-brand`, `.font-aurorabold`, `.bg-hero`, `.bg-footer`). Refer to that file when adding new design tokens or background images.
- Image imports: images are imported in modules (e.g. `src/constants/productsList.ts`) and used as component props. Vite asset imports are allowed.
- Strict TS config: `tsconfig.app.json` and `tsconfig.node.json` are strict; keep type safety in mind and add types where appropriate.
- Path alias: `@/*` is configured in `tsconfig.json` (baseUrl + paths). Use it when appropriate, but the codebase currently uses relative imports (no obligation to migrate all imports).

Build/Runtime quirks & integrations

- Vite uses a customized package alias: `vite` is overridden to `rolldown-vite@7.2.5` in `package.json`. Do not change `vite` without verifying compatibility.
- `vite.config.ts` uses `@vitejs/plugin-react` with `babel-plugin-react-compiler`. The React Compiler is enabled; it affects dev/build performance and sometimes requires special handling of JSX transforms or Babel plugins.
- Tailwind integration: `@tailwindcss/vite` is in use; CSS entry point is `src/index.css` which `@import "tailwindcss"`.

Common code smells to watch for

- Repeated Tailwind strings: some components duplicate the same long class strings (e.g. `Section`). Consider refactoring to a small utility or ensure `className` merging via `twMerge` is used correctly.
- Missing `key` in iterables: some lists may render elements without unique `key` props — follow React best practices when editing lists.

Files to inspect first when asked to change UI or layout

- `src/components/ui/Section.tsx` — canonical section wrapper.
- `src/components/layout/Header.tsx` — header and mobile menu toggles.
- `src/components/layout/Footer.tsx` — footer structure and `footerMenus` usage.
- `src/index.css` — custom fonts and background utility classes.
- `src/constants/productsList.ts` — example of asset imports.

How to reason about changes

- Visual changes: edit or extend `src/index.css` for global tokens (fonts, bg images) and then modify components under `components/sections` or `components/layout`.
- Data changes: update `src/constants/*` files; components read from these constants directly.
- Type changes: update `tsconfig.app.json` only if necessary — prefer adding narrow types/interfaces in `src/`.

If you change dependencies

- Run `npm install` and verify `npm run dev` (dev server) starts. Building requires `tsc -b` to succeed; ensure any added types are included in `tsconfig` scope.

Notes & limitations

- There are no tests in the repository; avoid writing instructions that rely on existing test execution.
- The project is localized in Portuguese in some copy; preserve language/context when editing content.

If unsure, ask the developer these quick questions

1. Should I add or modify Tailwind tokens in `src/index.css` or prefer inline classes? (affects consistency)
2. If I add runtime dependencies, should I update lockfile and deploy steps? (clarifies release expectations)

End of agent guide.
