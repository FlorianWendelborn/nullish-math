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
