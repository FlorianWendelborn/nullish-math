type SupportedNumbers = NullSafeMath | number | null

export class NullSafeMath {
	#value: number | null

	constructor(value: SupportedNumbers) {
		if (value === null) this.#value = null
		else if (typeof value === 'number') this.#value = value
		else this.#value = value.end()
	}

	static unwrap(value: SupportedNumbers) {
		if (value === null) return null
		if (typeof value === 'number') return value
		return value.end()
	}

	add(...numbers: Array<SupportedNumbers>) {
		let result = this.#value

		if (result === null) return new NullSafeMath(null)

		for (const _n of numbers) {
			const n = NullSafeMath.unwrap(_n)

			if (n === null) return new NullSafeMath(null)

			result = result + n
		}

		return new NullSafeMath(result)
	}

	subtract(...numbers: Array<SupportedNumbers>) {
		let result = this.#value

		if (result === null) return new NullSafeMath(null)

		for (const _n of numbers) {
			const n = NullSafeMath.unwrap(_n)

			if (n === null) return new NullSafeMath(null)

			result = result - n
		}

		return new NullSafeMath(result)
	}

	multiply(...numbers: Array<SupportedNumbers>) {
		let result = this.#value

		if (result === null) return new NullSafeMath(null)

		for (const _n of numbers) {
			const n = NullSafeMath.unwrap(_n)

			if (n === null) return new NullSafeMath(null)

			result = result * n
		}

		return new NullSafeMath(result)
	}

	divide(...numbers: Array<SupportedNumbers>) {
		let result = this.#value

		if (result === null) return new NullSafeMath(null)

		for (const _n of numbers) {
			const n = NullSafeMath.unwrap(_n)

			if (n === null) return new NullSafeMath(null)

			result = result / n
		}

		return new NullSafeMath(result)
	}

	end() {
		return this.#value
	}
}

export function ns(value: SupportedNumbers) {
	return new NullSafeMath(value)
}
