import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		include: ["bench/src/**/*.test.ts"],
	},
});
