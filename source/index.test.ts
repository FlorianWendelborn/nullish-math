import { describe, expect, it } from 'vitest'

import { ns } from '.'

describe('ns.add()', () => {
	it('supports null #value', () => {
		expect(ns(null).add(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		expect(ns(42).add(null).end()).toBe(null)
	})

	it('supports a single NullSafeMath parameter', () => {
		expect(ns(42).add(ns(21)).end()).toBe(63)
	})

	it('supports a single number parameter', () => {
		expect(ns(42).add(21).end()).toBe(63)
	})

	it('supports multiple null parameters', () => {
		expect(ns(42).add(null, null).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(ns(42).add(19, null, ns(21)).end()).toBe(null)
		expect(ns(42).add(ns(21), 19, ns(-1)).end()).toBe(81)
	})

	it('supports multiple number parameters', () => {
		expect(ns(42).add(19, 21, 4096).end()).toBe(4178)
	})
})

describe('ns.subtract()', () => {
	it('supports null #value', () => {
		expect(ns(null).subtract(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		expect(ns(42).subtract(null).end()).toBe(null)
	})

	it('supports a single NullSafeMath parameter', () => {
		expect(ns(42).subtract(ns(21)).end()).toBe(21)
	})

	it('supports a single number parameter', () => {
		expect(ns(42).subtract(21).end()).toBe(21)
	})

	it('supports multiple null parameters', () => {
		expect(ns(42).subtract(null, null).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(ns(42).subtract(19, null, ns(21)).end()).toBe(null)
		expect(ns(42).subtract(ns(21), 19, ns(-1)).end()).toBe(3)
	})

	it('supports multiple number parameters', () => {
		expect(ns(42).subtract(19, 21, 4096).end()).toBe(-4094)
	})
})

describe('ns.multiply()', () => {
	it('supports null #value', () => {
		expect(ns(null).multiply(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		expect(ns(42).multiply(null).end()).toBe(null)
	})

	it('supports a single NullSafeMath parameter', () => {
		expect(ns(42).multiply(ns(21)).end()).toBe(882)
	})

	it('supports a single number parameter', () => {
		expect(ns(42).multiply(21).end()).toBe(882)
	})

	it('supports multiple null parameters', () => {
		expect(ns(42).multiply(null, null).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(ns(42).multiply(19, null, ns(21)).end()).toBe(null)
		expect(ns(42).multiply(ns(21), 19, ns(-1)).end()).toBe(-16758)
	})

	it('supports multiple number parameters', () => {
		expect(ns(42).multiply(19, 21, 4096).end()).toBe(68640768)
	})
})

describe('ns.divide()', () => {
	it('supports null #value', () => {
		expect(ns(null).divide(42).end()).toBe(null)
	})

	it('supports a single null parameter', () => {
		expect(ns(42).divide(null).end()).toBe(null)
	})

	it('supports a single NullSafeMath parameter', () => {
		expect(ns(42).divide(ns(21)).end()).toBe(2)
	})

	it('supports a single number parameter', () => {
		expect(ns(42).divide(21).end()).toBe(2)
	})

	it('supports multiple null parameters', () => {
		expect(ns(42).divide(null, null).end()).toBe(null)
	})

	it('supports multiple mixed parameters', () => {
		expect(ns(42).divide(19, null, ns(21)).end()).toBe(null)
		expect(ns(42).divide(ns(3), 7, ns(-2)).end()).toBe(-1)
	})

	it('supports multiple number parameters', () => {
		expect(ns(42).divide(3, 7, -2).end()).toBe(-1)
	})
})
