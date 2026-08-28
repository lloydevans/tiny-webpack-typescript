import { defineConfig } from "vitest/config";

// Scope the default test run to the template source; the benchmark suite in
// bench/ has its own config and runs only via `npm run mutation-bench`.
export default defineConfig({
	test: {
		include: ["src/**/*.test.ts"],
	},
});
