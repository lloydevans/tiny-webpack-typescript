import { describe, expect, it } from "vitest";
import {
	camelToKebab,
	capitalise,
	countOccurrences,
	initials,
	isBlank,
	isPalindrome,
	ordinal,
	padCentre,
	reverseString,
	slugify,
	stripPrefix,
	stripSuffix,
	titleCase,
	truncate,
	wordCount,
} from "./strings";

describe("capitalise", () => {
	it("uppercases the first letter only", () => {
		expect(capitalise("hello")).toBe("Hello");
		expect(capitalise("h")).toBe("H");
		expect(capitalise("")).toBe("");
		expect(capitalise("hello world")).toBe("Hello world");
	});
});

describe("reverseString", () => {
	it("reverses text", () => {
		expect(reverseString("abc")).toBe("cba");
		expect(reverseString("")).toBe("");
		expect(reverseString("a")).toBe("a");
	});
});

describe("isPalindrome", () => {
	it("detects palindromes ignoring case and punctuation", () => {
		expect(isPalindrome("racecar")).toBe(true);
		expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
		expect(isPalindrome("hello")).toBe(false);
		expect(isPalindrome("")).toBe(true);
	});
});

describe("truncate", () => {
	it("returns short text unchanged", () => {
		expect(truncate("hi", 10)).toBe("hi");
		expect(truncate("exact", 5)).toBe("exact");
	});
	it("truncates with an ellipsis", () => {
		expect(truncate("hello world", 8)).toBe("hello...");
	});
	it("hard-cuts tiny widths", () => {
		expect(truncate("hello", 2)).toBe("he");
		expect(truncate("hello", 3)).toBe("hel");
	});
});

describe("countOccurrences", () => {
	it("counts non-overlapping occurrences", () => {
		expect(countOccurrences("banana", "an")).toBe(2);
		expect(countOccurrences("aaaa", "aa")).toBe(2);
		expect(countOccurrences("hello", "z")).toBe(0);
		expect(countOccurrences("hello", "")).toBe(0);
	});
});

describe("slugify", () => {
	it("builds url slugs", () => {
		expect(slugify("Hello, World!")).toBe("hello-world");
		expect(slugify("  spaced  out  ")).toBe("spaced-out");
		expect(slugify("already-slugged")).toBe("already-slugged");
		expect(slugify("!!!")).toBe("");
		expect(slugify("!hello!")).toBe("hello");
	});
});

describe("initials", () => {
	it("extracts uppercase initials", () => {
		expect(initials("Ada Lovelace")).toBe("AL");
		expect(initials("grace  brewster  hopper")).toBe("GBH");
		expect(initials("Cher")).toBe("C");
		expect(initials("")).toBe("");
	});
});

describe("camelToKebab", () => {
	it("converts camelCase to kebab-case", () => {
		expect(camelToKebab("helloWorld")).toBe("hello-world");
		expect(camelToKebab("aB")).toBe("a-b");
		expect(camelToKebab("plain")).toBe("plain");
		expect(camelToKebab("area51Zone")).toBe("area51-zone");
	});
});

describe("wordCount", () => {
	it("counts words", () => {
		expect(wordCount("one two three")).toBe(3);
		expect(wordCount("one  two")).toBe(2);
		expect(wordCount("  padded  ")).toBe(1);
		expect(wordCount("")).toBe(0);
		expect(wordCount("   ")).toBe(0);
	});
});

describe("isBlank", () => {
	it("detects blank strings", () => {
		expect(isBlank("")).toBe(true);
		expect(isBlank("   ")).toBe(true);
		expect(isBlank(" a ")).toBe(false);
	});
});

describe("titleCase", () => {
	it("capitalises every word", () => {
		expect(titleCase("hello world")).toBe("Hello World");
		expect(titleCase("SHOUTED TEXT")).toBe("Shouted Text");
	});
});

describe("stripPrefix and stripSuffix", () => {
	it("strips a matching prefix", () => {
		expect(stripPrefix("foobar", "foo")).toBe("bar");
		expect(stripPrefix("foobar", "bar")).toBe("foobar");
		expect(stripPrefix("foobar", "")).toBe("foobar");
	});
	it("strips a matching suffix", () => {
		expect(stripSuffix("foobar", "bar")).toBe("foo");
		expect(stripSuffix("foobar", "foo")).toBe("foobar");
		expect(stripSuffix("foobar", "")).toBe("foobar");
	});
});

describe("padCentre", () => {
	it("pads on both sides", () => {
		expect(padCentre("ab", 6)).toBe("  ab  ");
		expect(padCentre("ab", 5)).toBe(" ab  ");
		expect(padCentre("abc", 3)).toBe("abc");
		expect(padCentre("abc", 2)).toBe("abc");
		expect(padCentre("x", 3, "-")).toBe("-x-");
	});
});

describe("ordinal", () => {
	it("handles the teens specially", () => {
		expect(ordinal(11)).toBe("11th");
		expect(ordinal(12)).toBe("12th");
		expect(ordinal(13)).toBe("13th");
		expect(ordinal(111)).toBe("111th");
	});
	it("handles st, nd, rd, th", () => {
		expect(ordinal(1)).toBe("1st");
		expect(ordinal(2)).toBe("2nd");
		expect(ordinal(3)).toBe("3rd");
		expect(ordinal(4)).toBe("4th");
		expect(ordinal(21)).toBe("21st");
		expect(ordinal(22)).toBe("22nd");
		expect(ordinal(23)).toBe("23rd");
		expect(ordinal(10)).toBe("10th");
	});
});
