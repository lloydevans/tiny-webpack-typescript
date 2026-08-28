export function capitalise(text: string): string {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function reverseString(text: string): string {
	let result = "";
	for (const character of text) {
		result = character + result;
	}
	return result;
}

export function isPalindrome(text: string): boolean {
	const normalised = text.toLowerCase().replaceAll(/[^a-z0-9]/g, "");
	return normalised === reverseString(normalised);
}

export function truncate(text: string, maxLength: number): string {
	if (text.length <= maxLength) return text;
	if (maxLength <= 3) return text.slice(0, maxLength);
	return text.slice(0, maxLength - 3) + "...";
}

export function countOccurrences(text: string, search: string): number {
	if (search.length === 0) return 0;
	let count = 0;
	let index = text.indexOf(search);
	while (index !== -1) {
		count += 1;
		index = text.indexOf(search, index + search.length);
	}
	return count;
}

export function slugify(text: string): string {
	return text
		.toLowerCase()
		.replaceAll(/[^a-z0-9]+/g, "-")
		.replaceAll(/^-|-$/g, "");
}

export function initials(name: string): string {
	return name
		.split(" ")
		.map((part) => part.charAt(0).toUpperCase())
		.join("");
}

export function camelToKebab(text: string): string {
	return text.replaceAll(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function wordCount(text: string): number {
	const trimmed = text.trim();
	if (trimmed.length === 0) return 0;
	return trimmed.split(/\s+/).length;
}

export function isBlank(text: string): boolean {
	return text.trim().length === 0;
}

export function titleCase(text: string): string {
	return text
		.split(" ")
		.map((word) => capitalise(word.toLowerCase()))
		.join(" ");
}

export function stripPrefix(text: string, prefix: string): string {
	if (text.startsWith(prefix)) return text.slice(prefix.length);
	return text;
}

export function stripSuffix(text: string, suffix: string): string {
	if (text.endsWith(suffix)) return text.slice(0, text.length - suffix.length);
	return text;
}

export function padCentre(text: string, width: number, fill = " "): string {
	const left = Math.floor((width - text.length) / 2);
	return text.padStart(text.length + left, fill).padEnd(width, fill);
}

export function ordinal(n: number): string {
	const remainder100 = Math.abs(n) % 100;
	const remainder10 = Math.abs(n) % 10;
	if (remainder100 >= 11 && remainder100 <= 13) return String(n) + "th";
	if (remainder10 === 1) return String(n) + "st";
	if (remainder10 === 2) return String(n) + "nd";
	if (remainder10 === 3) return String(n) + "rd";
	return String(n) + "th";
}
