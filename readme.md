# nullsafe-math

`nullsafe-math` is a lightweight TypeScript package that provides basic math operations with support for `null` values and an immutable, chainable API. It is useful when working with numeric data that may contain `null` values, as it ensures that any calculations involving `null` values result in `null` values.

## Installation

To install `nullsafe-math`, use one of the following commands:

```sh
yarn add nullsafe-math
npm install nullsafe-math
```

## Usage

To use `nullsafe-math`, simply import the `ns()` function from the package:

```ts
import { ns } from 'nullsafe-math'
```

You can then use the `ns()` function to create a new `NullSafeMath` object with an initial value:

```ts
const value = ns(42)
```

You can chain together multiple math operations using the `add()`, `subtract()`, `multiply()`, and `divide()` methods:

```ts
const result = ns(42).add(21).multiply(2).subtract(10).end() // 116

// nulls result in nulls
const result = ns(42).add(null).multiply(2).subtract(10).end() // null
```

If any of the values passed to the math operation methods (`add()`, `subtract()`, `multiply()`, `divide()`) are `null`, the final value will be `null`.

## API

### `ns(value: number | null): NullSafeMath`

The `ns()` function creates a new `NullSafeMath` object with an initial value.

#### `add(...nums: NullSafeMath | number | null): NullSafeMath`

Returns a new instance of `NullSafeMath` with the sum of the current value and the given number(s).

#### `subtract(...nums: NullSafeMath | number | null): NullSafeMath`

Returns a new instance of `NullSafeMath` with the difference of the current value and the given number(s).

#### `multiply(...nums: NullSafeMath | number | null): NullSafeMath`

Returns a new instance of `NullSafeMath` with the product of the current value and the given number(s).

#### `divide(...nums: NullSafeMath | number | null): NullSafeMath`

Returns a new instance of `NullSafeMath` with the quotient of the current value and the given number(s).

#### `end(): number | null`

Returns the final value of the `NullSafeMath` instance. If any of the values passed to the math operation methods are `null`, the final value will be `null`.
