// const bbb = ''
declare const bbb: string

// const aaa = () => {}
declare const aaa: () => void

// const userConfig = {name: 'beet',func: () => {}}
declare namespace userConfig {
    const name: string
    const func: () => void
}

// callFunc(1) => 1
// callFunc('1') => [1]
declare function callFunc(params: number): number
declare function  callFunc(params: string): Array<number>

// organize types
declare namespace GreetingLib {
    interface LogOptions {
      verbose?: boolean;
    }
    interface AlertOptions {
      modal: boolean;
      title?: string;
      color?: string;
    }
  }