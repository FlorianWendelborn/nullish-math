import { describe, expect, it } from 'vitest'

import { nm } from '.'

describe('nm.add()', () => {
	it('supports null #value', () => {
		expect(nm(null).add(42).end()).toBe(null)

		// @ts-expect-error not allowed to pass a value that’s always nullish
		nm(42).add(null).end()
	})

	it('supports a single null parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).add(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).add(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).add(nm(21)).end()).toBe(63)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).add(21).end()).toBe(63)
	})

	it('supports a single mixed parameter', () => {
		expect(
			nm(42)
				.add(21 as number | null)
				.end(),
		).toBe(63)
	})
})

describe('nm.addMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).addMany().end()).toBe(42)
		expect(nm(null).addMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).addMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).addMany(undefined, undefined).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(nm(42).addMany(19, null, nm(21)).end()).toBe(null)
		expect(nm(42).addMany(undefined, 19, nm(21)).end()).toBe(null)
		expect(nm(42).addMany(nm(21), 19, nm(-1)).end()).toBe(81)
	})

	it('supports multiple number parameters', () => {
		expect(nm(42).addMany(19, 21, 4096).end()).toBe(4178)
	})
})

describe('nm.subtract()', () => {
	it('supports null #value', () => {
		expect(nm(null).subtract(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).subtract(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).subtract(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).subtract(nm(21)).end()).toBe(21)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).subtract(21).end()).toBe(21)
	})

	it('supports a single mixed parameter', () => {
		expect(
			nm(42)
				.subtract(21 as number | null)
				.end(),
		).toBe(21)
	})
})

describe('nm.subtractMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).subtractMany().end()).toBe(42)
		expect(nm(null).subtractMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).subtractMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).subtractMany(undefined, undefined).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(nm(42).subtractMany(19, null, nm(21)).end()).toBe(null)
		expect(nm(42).subtractMany(undefined, 19, nm(21)).end()).toBe(null)
		expect(nm(42).subtractMany(nm(21), 19, nm(-1)).end()).toBe(3)
	})

	it('supports multiple number parameters', () => {
		expect(nm(42).subtractMany(19, 21, 4096).end()).toBe(-4094)
	})
})

describe('nm.multiply()', () => {
	it('supports null #value', () => {
		expect(nm(null).multiply(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).multiply(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).multiply(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).multiply(nm(21)).end()).toBe(882)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).multiply(21).end()).toBe(882)
	})

	it('supports a single mixed parameter', () => {
		expect(
			nm(42)
				.multiply(21 as number | null)
				.end(),
		).toBe(882)
	})
})

describe('nm.multiplyMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).multiplyMany().end()).toBe(42)
		expect(nm(null).multiplyMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).multiplyMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).multiplyMany(undefined, undefined).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(nm(42).multiplyMany(19, null, nm(21)).end()).toBe(null)
		expect(nm(42).multiplyMany(undefined, 19, nm(21)).end()).toBe(null)
		expect(nm(42).multiplyMany(nm(21), 19, nm(-1)).end()).toBe(-16758)
	})

	it('supports multiple number parameters', () => {
		expect(nm(42).multiplyMany(19, 21, 4096).end()).toBe(68640768)
	})
})

describe('nm.divide()', () => {
	it('supports null #value', () => {
		expect(nm(null).divide(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).divide(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).divide(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).divide(nm(21)).end()).toBe(2)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).divide(21).end()).toBe(2)
	})

	it('supports a single mixed parameter', () => {
		expect(
			nm(42)
				.divide(21 as number | null)
				.end(),
		).toBe(2)
	})
})

describe('nm.divideMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).divideMany().end()).toBe(42)
		expect(nm(null).divideMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).divideMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
		// @ts-expect-error not allowed to pass a value that’s always nullish
		expect(nm(42).divideMany(undefined, undefined).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(nm(42).divideMany(19, null, nm(21)).end()).toBe(null)
		expect(nm(42).divideMany(undefined, 19, nm(21)).end()).toBe(null)
		expect(nm(42).divideMany(nm(3), 7, nm(-2)).end()).toBe(-1)
	})

	it('supports multiple number parameters', () => {
		expect(nm(42).divideMany(3, 7, -2).end()).toBe(-1)
	})
})
