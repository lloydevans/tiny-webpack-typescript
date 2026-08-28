# tiny-webpack-typescript

A tiny template for TypeScript + webpack projects: strict TypeScript, CSS support, dev server with HMR, unit tests with Vitest, and CI out of the box.

## Requirements

- Node.js >= 24 (current LTS)

## Usage

| Command              | Description                                  |
| -------------------- | -------------------------------------------- |
| `npm start`          | Dev server with hot reload (localhost:8080)  |
| `npm run serve-prod` | Dev server with production build             |
| `npm run build`      | Development build to `build/`                |
| `npm run build-prod` | Minified production build to `build/`        |
| `npm run typecheck`  | Type-check without emitting                  |
| `npm test`           | Run unit tests once                          |
| `npm run test-watch` | Run unit tests in watch mode                 |

## Notes

- Targets ES2022; adjust `target` in [tsconfig.json](tsconfig.json) if you need to support older browsers.
- TypeScript is pinned to the 6.x line because ts-loader depends on the TypeScript programmatic API, which the native TypeScript 7 compiler does not expose yet (expected in 7.1).
