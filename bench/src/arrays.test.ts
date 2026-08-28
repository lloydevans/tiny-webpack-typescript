import { describe, expect, it } from "vitest";
import { chunk, compact, difference, first, intersection, last, partition, range, rotate, unique, windowed, zip } from "./arrays";

describe("chunk", () => {
	it("splits into fixed-size chunks", () => {
		expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
		expect(chunk([1, 2], 5)).toEqual([[1, 2]]);
		expect(chunk([], 2)).toEqual([]);
		expect(chunk([1, 2], 0)).toEqual([]);
	});
});

describe("unique", () => {
	it("removes duplicates preserving order", () => {
		expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
		expect(unique([])).toEqual([]);
	});
});

describe("range", () => {
	it("builds half-open ranges", () => {
		expect(range(0, 4)).toEqual([0, 1, 2, 3]);
		expect(range(1, 10, 3)).toEqual([1, 4, 7]);
		expect(range(5, 5)).toEqual([]);
		expect(range(0, 3, 0)).toEqual([]);
	});
});

describe("zip", () => {
	it("pairs up to the shorter length", () => {
		expect(zip([1, 2, 3], ["a", "b"])).toEqual([
			[1, "a"],
			[2, "b"],
		]);
		expect(zip([], ["a"])).toEqual([]);
	});
});

describe("partition", () => {
	it("splits by predicate preserving order", () => {
		expect(partition([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([
			[2, 4],
			[1, 3],
		]);
		expect(partition([], () => true)).toEqual([[], []]);
	});
});

describe("intersection and difference", () => {
	it("computes the intersection without duplicates", () => {
		expect(intersection([1, 2, 2, 3], [2, 3, 4])).toEqual([2, 3]);
		expect(intersection([1], [2])).toEqual([]);
	});
	it("computes the difference", () => {
		expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
		expect(difference([1, 2], [1, 2])).toEqual([]);
	});
});

describe("compact", () => {
	it("drops null and undefined but keeps falsy values", () => {
		expect(compact([0, 1, null, 2, undefined, ""])).toEqual([0, 1, 2, ""]);
		expect(compact([null, undefined])).toEqual([]);
	});
});

describe("first and last", () => {
	it("returns boundary elements", () => {
		expect(first([1, 2, 3])).toBe(1);
		expect(last([1, 2, 3])).toBe(3);
		expect(first<number>([])).toBeUndefined();
		expect(last<number>([])).toBeUndefined();
	});
});

describe("rotate", () => {
	it("rotates left by the offset", () => {
		expect(rotate([1, 2, 3, 4], 1)).toEqual([2, 3, 4, 1]);
		expect(rotate([1, 2, 3, 4], -1)).toEqual([4, 1, 2, 3]);
		expect(rotate([1, 2, 3], 3)).toEqual([1, 2, 3]);
		expect(rotate([], 2)).toEqual([]);
	});
});

describe("windowed", () => {
	it("returns sliding windows", () => {
		expect(windowed([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[2, 3],
			[3, 4],
		]);
		expect(windowed([1, 2], 3)).toEqual([]);
		expect(windowed([1, 2], 0)).toEqual([]);
		expect(windowed([1, 2], 2)).toEqual([[1, 2]]);
	});
});
