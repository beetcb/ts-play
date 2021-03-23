// intersection object types: merged interface replacement
type I1 = { id: string }
type I2 = { name: string }
const objIntersection: I1 & I2 = {
  id: 'hash',
  name: 'Geek',
}

// <intersection union types>: fetch common type
const unionIntersection: (number | string) & (boolean | string) = 'string'

// <discriminated union types>: type identifiers used by type guard, better then `typeof` `instanceof` `prop in obj`
type D1 = { type: 'D1'; propOnlyOnD1: string }
type D2 = { type: 'D2'; propOnlyOnD2: string }
;(d: D1 | D2) => {
  switch (d.type) {
    case 'D1':
      d.propOnlyOnD1
      break
    case 'D2':
      d.propOnlyOnD2
  }
}

// <type casting>: pick one specific sub type
const audio = <HTMLAudioElement>document.getElementById('audio') // original version
const audioInReact = document.getElementById('audio') as HTMLAudioElement //Avoiding jsx syntax

// <index-typed type>: only contain string-string key-value pairs
type onlyContainStringProperty = {
  [K: string]: string
}

// <function overloads>: define multiple function caller example
// when a function takes in and return's multi-possibility types
type multiPossibilities = string | number
function example(a: string, b: string): string
function example(a: number, b: number): number
function example(
  a: multiPossibilities,
  b: multiPossibilities
): multiPossibilities {
  if (typeof a === 'number' && typeof b === 'number') return a + b
  return ''
}
// using generics?
