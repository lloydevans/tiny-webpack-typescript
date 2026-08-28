import { describe, expect, it } from "vitest";
import {
	clamp,
	degreesToRadians,
	factorial,
	fibonacci,
	gcd,
	inRange,
	isEven,
	isOdd,
	lcm,
	lerp,
	maxOf,
	mean,
	median,
	minOf,
	percentage,
	radiansToDegrees,
	roundTo,
	sign,
	sum,
} from "./numbers";

describe("clamp", () => {
	it("returns the value when inside the range", () => {
		expect(clamp(5, 0, 10)).toBe(5);
	});
	it("clamps below and above", () => {
		expect(clamp(-1, 0, 10)).toBe(0);
		expect(clamp(11, 0, 10)).toBe(10);
	});
	it("keeps boundary values", () => {
		expect(clamp(0, 0, 10)).toBe(0);
		expect(clamp(10, 0, 10)).toBe(10);
	});
});

describe("lerp", () => {
	it("interpolates at the endpoints and midpoint", () => {
		expect(lerp(0, 10, 0)).toBe(0);
		expect(lerp(0, 10, 1)).toBe(10);
		expect(lerp(0, 10, 0.5)).toBe(5);
		expect(lerp(10, 20, 0.25)).toBe(12.5);
	});
});

describe("roundTo", () => {
	it("rounds to the given decimals", () => {
		expect(roundTo(3.14159, 2)).toBe(3.14);
		expect(roundTo(3.145, 2)).toBe(3.15);
		expect(roundTo(1234.5678, 0)).toBe(1235);
	});
});

describe("sum, mean, median", () => {
	it("sums values", () => {
		expect(sum([])).toBe(0);
		expect(sum([1, 2, 3])).toBe(6);
		expect(sum([-1, 1])).toBe(0);
	});
	it("computes the mean", () => {
		expect(mean([2, 4, 6])).toBe(4);
		expect(mean([])).toBeNaN();
	});
	it("computes the median for odd and even counts", () => {
		expect(median([3, 1, 2])).toBe(2);
		expect(median([4, 1, 3, 2])).toBe(2.5);
		expect(median([5])).toBe(5);
		expect(median([])).toBeNaN();
	});
	it("handles zero values in the median", () => {
		expect(median([0])).toBe(0);
		expect(median([0, 4])).toBe(2);
	});
});

describe("minOf and maxOf", () => {
	it("finds extremes", () => {
		expect(minOf([3, 1, 2])).toBe(1);
		expect(maxOf([3, 1, 2])).toBe(3);
		expect(minOf([-5, 5])).toBe(-5);
		expect(maxOf([-5, 5])).toBe(5);
	});
});

describe("parity", () => {
	it("detects even numbers", () => {
		expect(isEven(2)).toBe(true);
		expect(isEven(3)).toBe(false);
		expect(isEven(0)).toBe(true);
	});
	it("detects odd numbers", () => {
		expect(isOdd(3)).toBe(true);
		expect(isOdd(2)).toBe(false);
		expect(isOdd(-3)).toBe(true);
	});
});

describe("gcd and lcm", () => {
	it("computes gcd", () => {
		expect(gcd(12, 8)).toBe(4);
		expect(gcd(7, 13)).toBe(1);
		expect(gcd(0, 5)).toBe(5);
		expect(gcd(-12, 8)).toBe(4);
	});
	it("computes lcm", () => {
		expect(lcm(4, 6)).toBe(12);
		expect(lcm(0, 6)).toBe(0);
		expect(lcm(3, 5)).toBe(15);
		expect(lcm(0, 0)).toBeNaN();
	});
});

describe("factorial", () => {
	it("computes factorials", () => {
		expect(factorial(0)).toBe(1);
		expect(factorial(1)).toBe(1);
		expect(factorial(5)).toBe(120);
		expect(factorial(-1)).toBeNaN();
	});
});

describe("fibonacci", () => {
	it("computes fibonacci numbers", () => {
		expect(fibonacci(0)).toBe(0);
		expect(fibonacci(1)).toBe(1);
		expect(fibonacci(2)).toBe(1);
		expect(fibonacci(7)).toBe(13);
		expect(fibonacci(-1)).toBeNaN();
	});
});

describe("inRange", () => {
	it("checks inclusive bounds", () => {
		expect(inRange(5, 0, 10)).toBe(true);
		expect(inRange(0, 0, 10)).toBe(true);
		expect(inRange(10, 0, 10)).toBe(true);
		expect(inRange(-1, 0, 10)).toBe(false);
		expect(inRange(11, 0, 10)).toBe(false);
	});
});

describe("sign", () => {
	it("returns the sign", () => {
		expect(sign(42)).toBe(1);
		expect(sign(-42)).toBe(-1);
		expect(sign(0)).toBe(0);
	});
});

describe("angle conversion", () => {
	it("converts both ways", () => {
		expect(degreesToRadians(180)).toBeCloseTo(Math.PI);
		expect(degreesToRadians(90)).toBeCloseTo(Math.PI / 2);
		expect(radiansToDegrees(Math.PI)).toBeCloseTo(180);
		expect(radiansToDegrees(Math.PI / 2)).toBeCloseTo(90);
	});
});

describe("percentage", () => {
	it("computes percentages", () => {
		expect(percentage(1, 4)).toBe(25);
		expect(percentage(3, 4)).toBe(75);
		expect(percentage(1, 0)).toBeNaN();
	});
});
