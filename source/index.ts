export type NullishNumber = number | NullishMath | null | undefined

type NotOnlyNullish<T extends NullishNumber> = T extends [null]
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

export class NullishMath {
	readonly #value: number | null

	constructor(value: NullishNumber) {
		this.#value = NullishMath.unwrap(value)
	}

	static unwrap(value: NullishNumber) {
		if (value === null) return null
		if (value === undefined) return null
		if (typeof value === 'number') return value
		return value.end()
	}

	add<T extends NullishNumber>(number: NotOnlyNullish<T>): NullishMath {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value + n)
	}

	addMany<T extends Array<NullishNumber>>(...numbers: NotOnlyNullishArray<T>) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null)

			result = result + n
		}

		return new NullishMath(result)
	}

	subtract<T extends NullishNumber>(number: NotOnlyNullish<T>): NullishMath {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null) return new NullishMath(null)

		return new NullishMath(this.#value - n)
	}

	subtractMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null)

			result = result - n
		}

		return new NullishMath(result)
	}

	multiply<T extends NullishNumber>(number: NotOnlyNullish<T>): NullishMath {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null) as T extends number | NullishMath
				? NullishMath
				: never

		return new NullishMath(this.#value * n) as T extends number | NullishMath
			? NullishMath
			: never
	}

	multiplyMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

			if (n === null) return new NullishMath(null)

			result = result * n
		}

		return new NullishMath(result)
	}

	divide<T extends NullishNumber>(number: NotOnlyNullish<T>): NullishMath {
		const n = NullishMath.unwrap(number as NullishNumber)

		if (this.#value === null || n === null)
			return new NullishMath(null) as T extends number | NullishMath
				? NullishMath
				: never

		return new NullishMath(this.#value / n) as T extends number | NullishMath
			? NullishMath
			: never
	}

	divideMany<T extends Array<NullishNumber>>(
		...numbers: NotOnlyNullishArray<T>
	) {
		let result = this.#value

		if (result === null) return new NullishMath(null)

		for (const _n of numbers) {
			const n = NullishMath.unwrap(_n as NullishNumber)

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
