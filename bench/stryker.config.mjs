// Stryker benchmark workload: a fixed set of utility functions and tests used
// to measure mutation testing performance on a machine or CI runner. Run with
// `npm run mutation-bench`. Not part of the CI quality gate.
const config = {
	testRunner: "vitest",
	vitest: {
		configFile: "bench/vitest.config.mts",
	},
	mutate: ["bench/src/**/*.ts", "!bench/src/**/*.test.ts"],
	thresholds: { high: 80, low: 60, break: null },
	reporters: ["clear-text", "progress"],
};

export default config;
