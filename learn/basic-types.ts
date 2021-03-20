// <Primitive Type Define> Approach 2
;(two: number) => ''
// <Primitive Type Define> Approach 3: type can be inferred when we resign it
let three: boolean

// <Object Type Define>: key-type pairs
const obj = { name: '' } /* Equals */
const obj2: { name: string } = { name: '' } /* Bad Parctice */

// <Array Type Define>: sequence of types
let str: string[]
let str2: Array<string>

// <Tuple Type Define>: fixed length and type
let tuple: [number, number]

// <Enum Type Define>: create (automatically enumerated) constant identifiers
enum Mod {
  READ, // 0
  READ_WRITE, // 1
  READ_WRITE_EXCUTE, // 2
}
let sysUser = Mod.READ_WRITE

// <Anything Type Define>: flexible type, ts probably will ignore it's type
let cloudBeAnything: any // automatically assigned when ts can't infer the type

// <Unknown Type Define>: strict type that needs to be manually checked
let dontKnowMyTypeYet: unknown
dontKnowMyTypeYet = 'assign string' // ts won't infer this variable, we must manually check it

// <Never Type Define>: returns nothing, even not undefined
;(): never => {
  throw ''
}

// <Union Type Define>
let twoTypes: string | number

// <Literal Type Define>
let genderLiteral: 'female' | 'male'

// <Type Alias>: reuse types and make them readable
type stringOrNumber = string | number

/******************************************************/
// Function
let explicitFunc: (e: string) => void
;(func: { (a: number): void }) => {}
;(func: (a: number) => void) => {}

// difference between void and undefined
;(func: () => void): void => {
  func()
}
;(func: () => void): undefined => {
  func()
  return
}

export default {}
