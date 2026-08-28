export function chunk<T>(items: readonly T[], size: number): T[][] {
	if (size <= 0) return [];
	const result: T[][] = [];
	for (let i = 0; i < items.length; i += size) {
		result.push(items.slice(i, i + size));
	}
	return result;
}

export function unique<T>(items: readonly T[]): T[] {
	return [...new Set(items)];
}

export function range(start: number, end: number, step = 1): number[] {
	if (step <= 0) return [];
	const result: number[] = [];
	for (let value = start; value < end; value += step) {
		result.push(value);
	}
	return result;
}

export function zip<A, B>(left: readonly A[], right: readonly B[]): [A, B][] {
	return left.slice(0, right.length).map((a, i) => [a, right[i] as B]);
}

export function partition<T>(items: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
	const matching: T[] = [];
	const rest: T[] = [];
	for (const item of items) {
		if (predicate(item)) {
			matching.push(item);
		} else {
			rest.push(item);
		}
	}
	return [matching, rest];
}

export function intersection<T>(left: readonly T[], right: readonly T[]): T[] {
	const rightSet = new Set(right);
	return unique(left.filter((item) => rightSet.has(item)));
}

export function difference<T>(left: readonly T[], right: readonly T[]): T[] {
	const rightSet = new Set(right);
	return left.filter((item) => !rightSet.has(item));
}

export function compact<T>(items: readonly (T | null | undefined)[]): T[] {
	const result: T[] = [];
	for (const item of items) {
		if (item !== null && item !== undefined) {
			result.push(item);
		}
	}
	return result;
}

export function first<T>(items: readonly T[]): T | undefined {
	return items[0];
}

export function last<T>(items: readonly T[]): T | undefined {
	return items[items.length - 1];
}

export function rotate<T>(items: readonly T[], offset: number): T[] {
	const shift = offset % items.length;
	return [...items.slice(shift), ...items.slice(0, shift)];
}

export function windowed<T>(items: readonly T[], size: number): T[][] {
	if (size <= 0) return [];
	const result: T[][] = [];
	for (let i = 0; i + size <= items.length; i++) {
		result.push(items.slice(i, i + size));
	}
	return result;
}
