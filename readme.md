# nullish-math

`nullish-math` is a lightweight TypeScript package that provides basic math operations with support for `null` and `undefined` values and an immutable, chainable API. It is useful when working with numeric data that may contain nullish values, as it ensures that any calculations involving nullish values result in `null` values.

## Installation

To install `nullish-math`, use one of the following commands:

```sh
bun add nullish-math
npm install nullish-math
pnpm add nullish-math
yarn add nullish-math
```

## Usage

To use `nullish-math`, simply import the `nm()` function from the package:

```ts
import { nm } from 'nullish-math'
```

You can then use the `nm()` function to create a new `NullishMath` object with an initial value:

```ts
const value = nm(42)
```

You can chain together multiple math operations using the `add()`, `subtract()`, `multiply()`, and `divide()` methods:

```ts
const result = nm(42).add(21).multiply(2).subtract(10).end() // 116

// null results in null
const result = nm(42).add(null).multiply(2).subtract(10).end() // null

// undefined results in null
const result = nm(undefined).add(21).multiply(2).subtract(10).end() // null
```

If any of the values passed to the math operation methods (`add()`, `subtract()`, `multiply()`, `divide()`) are nullish, the final value will be `null`.

## API

### `nm(value: number | null | undefined): NullishMath`

The `nm()` function creates a new `NullishMath` object with an initial value.

#### `add(number: NullishMath | number | null | undefined): NullishMath`

Returns a new instance of `NullishMath` with the sum of the current value and the given number.

#### `addMany(...nums: Array<NullishMath | number | null | undefined>): NullishMath`

Returns a new instance of `NullishMath` with the sum of the current value and the given numbers.

#### `eq(toCompare: NullishMath | number | null | undefined): boolean`

Returns `true` if the result equals `toCompare`, treats null and undefined as equals.

#### `lt(toCompare: NullishMath | number | null | undefined): boolean | null`

Returns `true` if the result is strictly less than `toCompare`, returns `null` if either number is nullish.

#### `lte(toCompare: NullishMath | number | null | undefined): boolean | null`

Returns `true` if the result is less than or equal to `toCompare`, returns `null` if either number is nullish.

#### `gt(toCompare: NullishMath | number | null | undefined): boolean | null`

Returns `true` if the result is strictly greater than `toCompare`, returns `null` if either number is nullish.

#### `gte(toCompare: NullishMath | number | null | undefined): boolean | null`

Returns `true` if the result is greater than or equal to `toCompare`, returns `null` if either number is nullish.

#### `neq(toCompare: NullishMath | number | null | undefined): boolean`

Returns `true` if the result doesn’t equal `toCompare`, treats null and undefined as equals.

#### `subtract(number: NullishMath | number | null | undefined): NullishMath`

Returns a new instance of `NullishMath` with the difference of the current value and the given number.

#### `subtractMany(...nums: Array<NullishMath | number | null | undefined>): NullishMath`

Returns a new instance of `NullishMath` with the difference of the current value and the given numbers.

#### `multiply(number: NullishMath | number | null | undefined): NullishMath`

Returns a new instance of `NullishMath` with the product of the current value and the given number.

#### `multiplyMany(...nums: Array<NullishMath | number | null | undefined>): NullishMath`

Returns a new instance of `NullishMath` with the product of the current value and the given numbers.

#### `divide(number: NullishMath | number | null | undefined): NullishMath`

Returns a new instance of `NullishMath` with the quotient of the current value and the given number.

#### `divideMany(...nums: Array<NullishMath | number | null | undefined>): NullishMath`

Returns a new instance of `NullishMath` with the quotient of the current value and the given numbers.

#### `end(): number | null`

Returns the final value of the `NullishMath` instance. If any of the values passed to the math operation methods are `null` or `undefined`, the final value will be `null`.

### `NullishMath.average(Array<NullishMath | number | null | undefined>, options?: { treatNullishAsZero?: boolean }): NullishMath`

Calculates the average of the provided numbers. By default, `null`s are excluded from the average. This can be changed by setting the `treatNullishAsZero` option. With this flag, nullish numbers get counted as a `0` and thus impact the average.

### `NullishMath.max(Array<NullishMath | number | null | undefined>): NullishMath`

Calculates the maximum of the provided numbers. Ignores `null` and `undefined`. Returns `null` if no proper number was provided

### `NullishMath.min(Array<NullishMath | number | null | undefined>): NullishMath`

Calculates the minimum of the provided numbers. Ignores `null` and `undefined`. Returns `null` if no proper number was provided

### `NullishMath.unwrap(NullishMath | number | null | undefined): number | null`

Converts the input to either `number | null`. General-purpose equivalent of `nm.end()`

## Development

`nullish-math` uses [`bun`](https://bun.sh)

```sh
bun install
# bun run test
```
