export function clamp(value: number, min: number, max: number): number {
	return Math.min(Math.max(value, min), max);
}

export function lerp(a: number, b: number, t: number): number {
	return a + (b - a) * t;
}

export function roundTo(value: number, decimals: number): number {
	const factor = 10 ** decimals;
	return Math.round(value * factor) / factor;
}

export function sum(values: readonly number[]): number {
	let total = 0;
	for (const value of values) {
		total += value;
	}
	return total;
}

export function mean(values: readonly number[]): number {
	return sum(values) / values.length;
}

export function median(values: readonly number[]): number {
	const sorted = [...values].sort((a, b) => a - b);
	const middle = Math.floor(sorted.length / 2);
	const upper = sorted[middle] ?? Number.NaN;
	if (sorted.length % 2 === 1) return upper;
	const lower = sorted[middle - 1] ?? Number.NaN;
	return (lower + upper) / 2;
}

export function minOf(values: readonly number[]): number {
	return values.reduce((result, value) => Math.min(result, value), Number.POSITIVE_INFINITY);
}

export function maxOf(values: readonly number[]): number {
	return values.reduce((result, value) => Math.max(result, value), Number.NEGATIVE_INFINITY);
}

export function isEven(value: number): boolean {
	return value % 2 === 0;
}

export function isOdd(value: number): boolean {
	return Math.abs(value % 2) === 1;
}

export function gcd(a: number, b: number): number {
	let x = Math.abs(a);
	let y = Math.abs(b);
	while (y !== 0) {
		const remainder = x % y;
		x = y;
		y = remainder;
	}
	return x;
}

export function lcm(a: number, b: number): number {
	return Math.abs(a * b) / gcd(a, b);
}

export function factorial(n: number): number {
	if (n < 0) return Number.NaN;
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
	return result;
}

export function fibonacci(n: number): number {
	if (n < 0) return Number.NaN;
	let previous = 0;
	let current = 1;
	for (let i = 0; i < n; i++) {
		const next = previous + current;
		previous = current;
		current = next;
	}
	return previous;
}

export function inRange(value: number, min: number, max: number): boolean {
	return value >= min && value <= max;
}

export function sign(value: number): number {
	if (value > 0) return 1;
	if (value < 0) return -1;
	return 0;
}

export function degreesToRadians(degrees: number): number {
	return (degrees * Math.PI) / 180;
}

export function radiansToDegrees(radians: number): number {
	return (radians * 180) / Math.PI;
}

export function percentage(part: number, whole: number): number {
	if (whole === 0) return Number.NaN;
	return (part / whole) * 100;
}
