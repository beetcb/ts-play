type Example = { key: 'k'; methods: Function }

/**
 * infer gotcha
 * @example
 * fix with type casting:
 * ```ts
 * let willBeInferredAsMutableString = 'red' as const
 * // or
 * let willBeInferredAsMutableString: 'red' | 'green' = 'red'
 * ```
 */
let willBeInferredAsMutableString = 'red'
;((color: 'red' | 'green') => {})(willBeInferredAsMutableString) // Argument of type 'string' is not assignable to parameter of type '"red" | "green"'.

/**
 * generics used to create dynamic object props (based on one Type)
 */
type Dynamic<T> = { [K in keyof T]: T[K] }
type Example2 = Dynamic<{ key: string; more: number; boo: boolean }>

/**
 * generics used to exclude object methods
 */
type ExcludeFunc<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T]
type Result3 = Pick<Example, ExcludeFunc<Example>>

/**
 * foo type guard
 */
type Foo =
  | {
      id: string
      op: string
    }
  | {
      id: string
    }
;(foo: Foo) => {
  foo.op // Property 'op' does not exist on type 'Foo'.Property 'op' does not exist on type '{ id: string; }'.'
  if ('op' in foo) foo.op // works well
}
