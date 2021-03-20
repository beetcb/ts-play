// merge interface
enum Gender {
  MALE,
  FEMALE,
}
interface A {
  id: string
}
interface B {
  gender: Gender
}
interface Human extends A, B {
  name: 'Geek'
}

// function interface
interface Func {
  (param: number): void
}
function func(param: number): void {} // Versions that cannot be reused

// function in interface
interface Mixed {
  func1: { (a: number): void }
  func2(a: number): void
  func3: (a: number) => void
}

// optional property
interface Optional {
  id?: string
  func?(param: number): void
}
;(o?: number): void => {} // function parameter
class OptionalClass {
  chineseName?: string
} // class optional property
