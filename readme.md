# nullish-math

`nullish-math` is a lightweight TypeScript package that provides basic math operations with support for `null` and `undefined` values and an immutable, chainable API. It is useful when working with numeric data that may contain nullish values, as it ensures that any calculations involving nullish values result in `null` values.

## Installation

To install `nullish-math`, use one of the following commands:

```sh
yarn add nullish-math
npm install nullish-math
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
