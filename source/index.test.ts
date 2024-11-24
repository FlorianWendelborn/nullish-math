import { describe, expect, it } from 'bun:test'

import { nm, NullishMath } from '.'

describe('NullishMath static methods', () => {
	it('correctly implements NullishMath.unwrap()', () => {
		expect(NullishMath.unwrap(null)).toBe(null)
		expect(NullishMath.unwrap(undefined)).toBe(null)
		expect(NullishMath.unwrap(nm(null))).toBe(null)
		expect(NullishMath.unwrap(nm(undefined))).toBe(null)
		expect(NullishMath.unwrap(nm(42))).toBe(42)
		expect(NullishMath.unwrap(42)).toBe(42)
	})

	it('correctly implements NullishMath.average() without options', () => {
		expect(NullishMath.average([]).end()).toBe(null)
		expect(NullishMath.average([null, undefined]).end()).toBe(null)
		expect(NullishMath.average([null, null]).end()).toBe(null)
		expect(NullishMath.average([undefined, 42]).end()).toBe(42)
		expect(NullishMath.average([null, 42]).end()).toBe(42)
		expect(NullishMath.average([undefined, 42, 1337]).end()).toBe(689.5)
		expect(NullishMath.average([null, 42, 1337]).end()).toBe(689.5)
		expect(NullishMath.average([42, 1337]).end()).toBe(689.5)
	})

	it('correctly implements NullishMath.average() with treatNullAsZero', () => {
		const o = { treatNullishAsZero: true } as const

		expect(NullishMath.average([], o).end()).toBe(0)
		expect(NullishMath.average([null, undefined], o).end()).toBe(0)
		expect(NullishMath.average([null, null], o).end()).toBe(0)
		expect(NullishMath.average([undefined, 42], o).end()).toBe(21)
		expect(NullishMath.average([null, 42], o).end()).toBe(21)
		expect(NullishMath.average([undefined, 10, 20], o).end()).toBe(10)
		expect(NullishMath.average([null, 10, 20], o).end()).toBe(10)
		expect(NullishMath.average([42, 1337], o).end()).toBe(689.5)
	})

	it('correctly implements NullishMath.max()', () => {
		expect(NullishMath.max([]).end()).toBe(null)
		expect(NullishMath.max([null, undefined]).end()).toBe(null)
		expect(NullishMath.max([null, null]).end()).toBe(null)
		expect(NullishMath.max([undefined, 42]).end()).toBe(42)
		expect(NullishMath.max([null, 42]).end()).toBe(42)
		expect(NullishMath.max([undefined, 42, 1337]).end()).toBe(1337)
		expect(NullishMath.max([null, 42, 1337]).end()).toBe(1337)
		expect(NullishMath.max([42, 1337]).end()).toBe(1337)
	})

	it('correctly implements NullishMath.min()', () => {
		expect(NullishMath.min([]).end()).toBe(null)
		expect(NullishMath.min([null, undefined]).end()).toBe(null)
		expect(NullishMath.min([null, null]).end()).toBe(null)
		expect(NullishMath.min([undefined, 42]).end()).toBe(42)
		expect(NullishMath.min([null, 42]).end()).toBe(42)
		expect(NullishMath.min([undefined, 42, 1337]).end()).toBe(42)
		expect(NullishMath.min([null, 42, 1337]).end()).toBe(42)
		expect(NullishMath.min([42, 1337]).end()).toBe(42)
	})
})

describe('nm.add()', () => {
	it('supports null #value', () => {
		expect(nm(null).add(42).end()).toBe(null)
		nm(42).add(null).end()
	})

	it('supports a single null parameter', () => {
		expect(nm(42).add(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		expect(nm(42).add(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).add(nm(21)).end()).toBe(63)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).add(21).end()).toBe(63)
	})

	it('supports a single mixed parameter', () => {
		expect(nm(42).add(21).end()).toBe(63)
	})
})

describe('nm.addMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).addMany().end()).toBe(42)
		expect(nm(null).addMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		expect(nm(42).addMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
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

describe('comparison operators', () => {
	it('nm.eq()', () => {
		expect(nm(null).eq(null)).toBe(true)
		expect(nm(null).eq(undefined)).toBe(true)
		expect(nm(undefined).eq(null)).toBe(true)

		expect(nm(undefined).eq(42)).toBe(false)
		expect(nm(42).eq(undefined)).toBe(false)

		expect(nm(1).eq(0)).toBe(false)
		expect(nm(1).eq(1)).toBe(true)
		expect(nm(1).eq(2)).toBe(false)
	})

	it('nm.lt()', () => {
		expect(nm(null).lt(null)).toBe(null)
		expect(nm(null).lt(undefined)).toBe(null)
		expect(nm(undefined).lt(null)).toBe(null)

		expect(nm(undefined).lt(42)).toBe(null)
		expect(nm(42).lt(undefined)).toBe(null)

		expect(nm(1).lt(0)).toBe(false)
		expect(nm(1).lt(1)).toBe(false)
		expect(nm(1).lt(2)).toBe(true)
	})

	it('nm.lte()', () => {
		expect(nm(null).lte(null)).toBe(null)
		expect(nm(null).lte(undefined)).toBe(null)
		expect(nm(undefined).lte(null)).toBe(null)

		expect(nm(undefined).lte(42)).toBe(null)
		expect(nm(42).lte(undefined)).toBe(null)

		expect(nm(1).lte(0)).toBe(false)
		expect(nm(1).lte(1)).toBe(true)
		expect(nm(1).lte(2)).toBe(true)
	})

	it('nm.gt()', () => {
		expect(nm(null).gt(null)).toBe(null)
		expect(nm(null).gt(undefined)).toBe(null)
		expect(nm(undefined).gt(null)).toBe(null)

		expect(nm(undefined).gt(42)).toBe(null)
		expect(nm(42).gt(undefined)).toBe(null)

		expect(nm(1).gt(0)).toBe(true)
		expect(nm(1).gt(1)).toBe(false)
		expect(nm(1).gt(2)).toBe(false)
	})

	it('nm.gte()', () => {
		expect(nm(null).gte(null)).toBe(null)
		expect(nm(null).gte(undefined)).toBe(null)
		expect(nm(undefined).gte(null)).toBe(null)

		expect(nm(undefined).gte(42)).toBe(null)
		expect(nm(42).gte(undefined)).toBe(null)

		expect(nm(1).gte(0)).toBe(true)
		expect(nm(1).gte(1)).toBe(true)
		expect(nm(1).gte(2)).toBe(false)
	})
})

describe('nm.subtract()', () => {
	it('supports null #value', () => {
		expect(nm(null).subtract(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		expect(nm(42).subtract(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		expect(nm(42).subtract(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).subtract(nm(21)).end()).toBe(21)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).subtract(21).end()).toBe(21)
	})

	it('supports a single mixed parameter', () => {
		expect(nm(42).subtract(21).end()).toBe(21)
	})
})

describe('nm.subtractMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).subtractMany().end()).toBe(42)
		expect(nm(null).subtractMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		expect(nm(42).subtractMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
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
		expect(nm(42).multiply(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		expect(nm(42).multiply(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).multiply(nm(21)).end()).toBe(882)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).multiply(21).end()).toBe(882)
	})

	it('supports a single mixed parameter', () => {
		expect(nm(42).multiply(21).end()).toBe(882)
	})
})

describe('nm.multiplyMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).multiplyMany().end()).toBe(42)
		expect(nm(null).multiplyMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		expect(nm(42).multiplyMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
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
		expect(nm(42).divide(null).end()).toBe(null)
	})

	it('supports a single undefined parameter', () => {
		expect(nm(42).divide(undefined).end()).toBe(null)
	})

	it('supports a single NullishMath parameter', () => {
		expect(nm(42).divide(nm(21)).end()).toBe(2)
	})

	it('supports a single number parameter', () => {
		expect(nm(42).divide(21).end()).toBe(2)
	})

	it('supports a single mixed parameter', () => {
		expect(nm(42).divide(21).end()).toBe(2)
	})
})

describe('nm.divideMany()', () => {
	it('supports no parameters', () => {
		expect(nm(42).divideMany().end()).toBe(42)
		expect(nm(null).divideMany().end()).toBe(null)
	})

	it('supports multiple null parameters', () => {
		expect(nm(42).divideMany(null, null).end()).toBe(null)
	})

	it('supports multiple undefined parameters', () => {
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
