// class as type(more like an <interface>)
class Box {
  size(this: Box) {
    return 0
  }
}

// <modifier: private>: only accessiable inside this class
class Box2 {
  private size() {}
}
class Box3 {
  constructor(private size: () => void) {
    // shorthand property init
    this.size = () => {}
  }
}

// <modifier: protected>: only accessiable inside this class, but make it accessible inside the classes inherited from it
class Box4 {
  protected size() {}
}

// <modifier: readonly>: initialized once, immutable
class Box5 {
  private readonly name = 'INIT'
}

// <abstract class>: make some restrictions to the extended classes
abstract class Box6 {
  abstract someMethodNeedToBeImplementedBySubClass(): void
}
class SubBox6 extends Box6 {
  someMethodNeedToBeImplementedBySubClass() {}
}

// implementation of singleton pattern with ts
class SingletonImpl {
  // store once instance
  private static instance: SingletonImpl
  // disable `new` operator
  private constructor() {}
  static initOnce() {
    if (!SingletonImpl.instance) {
      SingletonImpl.instance = new SingletonImpl()
    }
    return SingletonImpl.instance
  }
}

// <implements>: standardize multi classes
interface Z {
  id: string
}
class Box7 implements Z {
  id = 'init7'
  iddeeper = 'init7'
}
class Box8 implements Box7 {
  id = 'init8'
  iddeeper = 'init8'
  iddeeeper = 'init8'
}
// ...
