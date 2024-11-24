export type NullishNumber = NullishMath | number | null | undefined

export class NullishMath {
	readonly #value: number | null

	constructor(value: NullishNumber) {
		this.#value = NullishMath.unwrap(value)
	}

	/**
	 * Calculates the average of the provided numbers. By default, `null`s are excluded from the average. This can be changed by setting the `treatNullishAsZero` option. With this flag, nullish numbers get counted as a `0` and thus impact the average.
	 */
	static average = (
		numbers: NullishNumber[],
		options: {
			treatNullishAsZero?: boolean
		} = {
			treatNullishAsZero: false,
		},
	): NullishMath => {
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

	/**
	 * Calculates the maximum of the provided numbers. Ignores `null` and `undefined`. Returns `null` if no proper number was provided
	 */
	static max = (numbers: NullishNumber[]): NullishMath => {
		let max: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (max === null || number > max) max = number
		}

		return nm(max)
	}

	/**
	 * Calculates the minimum of the provided numbers. Ignores `null` and `undefined`. Returns `null` if no proper number was provided
	 */
	static min = (numbers: NullishNumber[]): NullishMath => {
		let min: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (min === null || number < min) min = number
		}

		return nm(min)
	}

	/**
	 * Converts the input to either `number | null`. General-purpose equivalent of `nm.end()`
	 */
	static unwrap(value: NullishNumber) {
		if (value === null) return null
		if (value === undefined) return null
		if (typeof value === 'number') return value
		return value.end()
	}

	/**
	 * Returns a new instance of `NullishMath` with the sum of the current value and the given number.
	 */
	add(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value + n)
	}

	/**
	 * Returns a new instance of `NullishMath` with the sum of the current value and the given numbers.
	 */
	addMany(...numbers: NullishNumber[]) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n)

			if (n === null) return new NullishMath(null)

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

	/**
	 * Returns a new instance of `NullishMath` with the difference of the current value and the given number.
	 */
	subtract(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value - n)
	}

	/**
	 * Returns a new instance of `NullishMath` with the difference of the current value and the given numbers.
	 */
	subtractMany(...numbers: NullishNumber[]) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n)

			if (n === null) return new NullishMath(null)

			result = result - n
		}

		return new NullishMath(result)
	}

	/**
	 * Returns a new instance of `NullishMath` with the product of the current value and the given number.
	 */
	multiply(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value * n)
	}

	/**
	 * Returns a new instance of `NullishMath` with the product of the current value and the given numbers.
	 */
	multiplyMany(...numbers: NullishNumber[]) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n)

			if (n === null) return new NullishMath(null)

			result = result * n
		}

		return new NullishMath(result)
	}

	/**
	 * Returns a new instance of `NullishMath` with the quotient of the current value and the given number.
	 */
	divide(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value / n)
	}

	/**
	 * Returns a new instance of `NullishMath` with the quotient of the current value and the given numbers.
	 */
	divideMany(...numbers: NullishNumber[]) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n)

			if (n === null) return new NullishMath(null)

			result = result / n
		}

		return new NullishMath(result)
	}

	/**
	 * Returns the final value of the `NullishMath` instance. If any of the values passed to the math operation methods are `null` or `undefined`, the final value will be `null`.
	 */
	end() {
		return this.#value
	}
}

/**
 * Creates a new `NullishMath` object with an initial value.
 */
export function nm(value: NullishNumber) {
	return new NullishMath(value)
}
