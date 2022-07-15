import {time} from "../12_TypeScript其他内容补充/src/utils/format";
import foo = time.foo;

const message = undefined

// const flag = Boolean(message)
// console.log(flag)

const flag:string = message ?? 'i am father'
console.log(flag)

function foo1(maybeString:string | undefined | null) {
    const sureString: string = maybeString;
    const ignoreUndefinedAndNull: string = maybeString!;
    console.log(ignoreUndefinedAndNull)
}
foo1('132')
foo1(undefined)

type NumFunc = () => number
function myFunc(defFunc:NumFunc| undefined) {
    const num1 = defFunc()
    // undefined时候拒绝调用改函数
    const num2 = defFunc!()
    console.log(num1)
    console.log(num2)
}
myFunc(() =>{return 1})
// myFunc(undefined)
