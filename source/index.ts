export type NullishNumber =
	| number
	| NullishMath<NullishNumber>
	| null
	| undefined

type NotOnlyNullish<T extends NullishNumber> = [T] extends [null]
	? 'Number cannot always be null'
	: [T] extends [undefined]
		? 'Number cannot always be undefined'
		: [T] extends [null | undefined]
			? 'Number cannot always be nullish'
			: T

type NotOnlyNullishArray<T extends NullishNumber[]> = [T] extends [null[]]
	? 'Number cannot always be null'[]
	: [T] extends [undefined[]]
		? 'Number cannot always be undefined'[]
		: [T] extends [Array<null | undefined>]
			? 'Number cannot always be nullish'[]
			: T

export class NullishMath<T extends NullishNumber> {
	readonly #value: number | null

	constructor(value: NotOnlyNullish<T>) {
		this.#value = NullishMath.unwrap(value as NullishNumber)
	}

	static average = (
		numbers: NullishNumber[],
		options: {
			treatNullishAsZero?: boolean
		} = {
			treatNullishAsZero: false,
		},
	): NullishMath<NullishNumber> => {
		let countValid = 0
		let sumValid = 0

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) {
				if (options.treatNullishAsZero) countValid += 1
				continue
			}

			countValid += 1
			sumValid += number
		}

		// division by zero
		if (countValid === 0) return nm(options.treatNullishAsZero ? 0 : null)

		return nm(sumValid).divide(countValid)
	}

	static max = (
		numbers: NullishNumber[],
	): NullishMath<NullishNumber> => {
		let max: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (max === null || number > max)
				max = number
		}

		return nm(max)
	}

	static min = (
		numbers: NullishNumber[],
	): NullishMath<NullishNumber> => {
		let min: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (min === null || number < min)
				min = number
		}

		return nm(min)
	}

	static unwrap(value: NullishNumber) {
		if (value === null) return null
		if (value === undefined) return null
		if (typeof value === 'number') return value
		return value.end()
	}

	add<T extends NullishNumber>(
		number: NotOnlyNullish<T>,
	): NullishMath<NullishNumber> {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null as NullishNumber)

		return new NullishMath(this.#value + n)
	}

	addMany<T extends Array<NullishNumber>>(...numbers: NotOnlyNullishArray<T>) {
		let result = this.#value

		if (result === null) return new NullishMath(null as NullishNumber)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null as NullishNumber)

			result = result + n
		}

		return new NullishMath(result)
	}

	/**
	 * Returns true if the two numbers are equal, including the case where both are null.
	 */
	eq(toCompare: NullishNumber): boolean {
		const n = NullishMath.unwrap(toCompare)
		return this.#value === n
	}

	/**
	 * Returns true if toCompare is strictly greater than the current number. Returns null if either number is null
	 */
	gt(toCompare: NullishNumber): boolean | null {
		const n = NullishMath.unwrap(toCompare)
		if (n === null) return null
		if (this.#value === null) return null
		return this.#value > n
	}

	/**
	 * Returns true if toCompare is greater than or equal to the current number. Returns null if either number is null
	 */
	gte(toCompare: NullishNumber): boolean | null {
		const n = NullishMath.unwrap(toCompare)
		if (n === null) return null
		if (this.#value === null) return null
		return this.#value >= n
	}

	/**
	 * Returns true if toCompare is strictly less than the current number. Returns null if either number is null
	 */
	lt(toCompare: NullishNumber): boolean | null {
		const n = NullishMath.unwrap(toCompare)
		if (n === null) return null
		if (this.#value === null) return null
		return this.#value < n
	}

	/**
	 * Returns true if toCompare is less than or equal to the current number. Returns null if either number is null
	 */
	lte(toCompare: NullishNumber): boolean | null {
		const n = NullishMath.unwrap(toCompare)
		if (n === null) return null
		if (this.#value === null) return null
		return this.#value <= n
	}

	/**
	 * Returns true if the two numbers are not equal, also returns false when both numbers are null
	 */
	neq(toCompare: NullishNumber): boolean {
		const n = NullishMath.unwrap(toCompare)
		return this.#value !== n
	}

	subtract<T extends NullishNumber>(
		number: NotOnlyNullish<T>,
	): NullishMath<NullishNumber> {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null as NullishNumber)

		return new NullishMath(this.#value - n)
	}

	subtractMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null as NullishNumber)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null as NullishNumber)

			result = result - n
		}

		return new NullishMath(result)
	}

	multiply<T extends NullishNumber>(
		number: NotOnlyNullish<T>,
	): NullishMath<NullishNumber> {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null as NullishNumber)

		return new NullishMath(this.#value * n)
	}

	multiplyMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null as NullishNumber)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null as NullishNumber)

			result = result * n
		}

		return new NullishMath(result)
	}

	divide<T extends NullishNumber>(
		number: NotOnlyNullish<T>,
	): NullishMath<NullishNumber> {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null as NullishNumber)

		return new NullishMath(this.#value / n)
	}

	divideMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null as NullishNumber)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null as NullishNumber)

			result = result / n
		}

		return new NullishMath(result)
	}

	end() {
		return this.#value
	}
}

export function nm<T extends NullishNumber>(value: NotOnlyNullish<T>) {
	return new NullishMath(value)
}
