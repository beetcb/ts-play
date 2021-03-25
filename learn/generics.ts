// Generics: flexible & safe typed

// Function: merge (with generic type)
;<T>(obj: T) => {}

// Generic constrains: constrains flexible generic
;<T extends symbol | boolean | number | string>(obj: T) => {}
;<T extends { publicProp: string }>(obj: T) => {} // more specific constrains
;<T extends object, U extends keyof T>(obj: T, keyOfObj: U) => obj[keyOfObj] // safe when we use keyof constrains

// Some built-in generics: fettblog.eu/typescript-built-in-generics/
// Partial: makes every property optional
interface MakePropertyOptional {
  add: string
}
;(): MakePropertyOptional => {
  const obj: Partial<MakePropertyOptional> = {}
  const add = (() => {
    // network request inside
  })()
  obj.add = ' '
  return obj as MakePropertyOptional
}
// Required: opposite to Partial
interface MakeOptionalPropertyRequired {
  option?: boolean
}
;(): MakeOptionalPropertyRequired => {
  const optionalObj: Required<MakeOptionalPropertyRequired> = { option: true }
  return optionalObj
}

// NonNullable: refause null and undefined arguments
;<T>(arg: NonNullable<T>) => {}

// Pick: Pick<T, K> From T, pick a set of properties whose keys are in the union K
type PickTestType = { name: string }
type PickProperty<T> = Pick<T, keyof T>
type PickProperty2<T> = {
  [K in keyof T]: T[K]
}
type PickPropertyHardCoded = Pick<PickTestType, 'name'>
const pickTest: PickProperty<PickTestType> = { name: 'beetcb' }
const pickTest2: PickProperty2<PickTestType> = { name: 'beetcb' }

// Readonly
const array0: Readonly<Array<string>> = ['fixed', 'length', 'array']
const array00: ReadonlyArray<string> = ['same', 'as', 'array0']

// ...
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// Array: list of data (with generic type)
const array: Array<string> = []

// Promise: resolve (with generic type)
const promise: Promise<string> = new Promise((res) => res(''))
