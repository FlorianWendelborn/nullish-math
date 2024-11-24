export type NullishNumber = NullishMath | number | null | undefined

export class NullishMath {
	readonly #value: number | null

	constructor(value: NullishNumber) {
		this.#value = NullishMath.unwrap(value)
	}

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

	static max = (numbers: NullishNumber[]): NullishMath => {
		let max: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (max === null || number > max) max = number
		}

		return nm(max)
	}

	static min = (numbers: NullishNumber[]): NullishMath => {
		let min: number | null = null

		for (const rawNumber of numbers) {
			const number = NullishMath.unwrap(rawNumber)

			if (number === null) continue

			if (min === null || number < min) min = number
		}

		return nm(min)
	}

	static unwrap(value: NullishNumber) {
		if (value === null) return null
		if (value === undefined) return null
		if (typeof value === 'number') return value
		return value.end()
	}

	add(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value + n)
	}

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

	subtract(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value - n)
	}

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

	multiply(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value * n)
	}

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

	divide(number: NullishNumber): NullishMath {
		const n = NullishMath.unwrap(number)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value / n)
	}

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

	end() {
		return this.#value
	}
}

export function nm(value: NullishNumber) {
	return new NullishMath(value)
}
