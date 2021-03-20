// class as type
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
