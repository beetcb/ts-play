type Example = { key: 'k'; methods: Function }

/**
 * infer gotcha
 * @example
 * fix:
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
