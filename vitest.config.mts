import { defineConfig } from "vitest/config";

// Scope the default test run to the template source; the benchmark suites in
// benchmarks/ have their own configs and run only on demand.
export default defineConfig({
	test: {
		include: ["src/**/*.test.ts"],
	},
});
