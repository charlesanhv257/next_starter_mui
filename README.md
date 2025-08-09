
# Next.js + MUI + Zustand + Atomic Design Starter

A senior-level starter project using Next.js 14 (Vite), Material-UI (MUI), Zustand, Atomic Design, ESLint, Prettier, GraphQL & REST API services.

## Features
- Next.js 14 (Vite)
- Material-UI (MUI) with custom theme
- Zustand for state management
- Atomic Design folder structure (atoms, molecules, organisms, templates)
- ESLint & Prettier integrated
- GraphQL & REST API service examples
- High reusability, maintainability, and extensibility

## Structure
```
src/
	components/
		atoms/
		molecules/
		organisms/
		templates/
	services/
		graphqlClient.ts
		restClient.ts
	store/
	theme/
	app/
```

## Usage
- Update endpoints in `src/services/graphqlClient.ts` and `src/services/restClient.ts`.
- Add new atoms/molecules/organisms/templates as needed.
- Use the shared MUI theme for all components.

## Scripts
- `npm run dev` — Start development server
- `npm run lint` — Run ESLint
- `npm run format` — Run Prettier

---
Replace placeholder endpoints and extend the starter as needed for your project.
