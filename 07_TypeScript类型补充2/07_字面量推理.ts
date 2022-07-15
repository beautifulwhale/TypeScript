// const info = {
//   name: "why",
//   age: 18
// }

// info.name = "kobe"

//

import {time} from "../12_TypeScript其他内容补充/src/utils/format";
import foo = time.foo;

type Method = 'GET' | 'POST'

// function request(url: string, method: Method){}

function request(options: Request) {
}

type Request = {
    url: string,
    method: Method
}

const options = {
    url: "https://www.coderwhy.org/abc",
    method: "POST",
} as const

request({url: options.url, method: options.method})

export {}


type a = 'get'

// 定义一个函数, 参数类型为 'get'
function f(a: a) {
    console.log(a)
}

f('a' as 'get') // 可以执行
f('b' as 'get')
// const args = [1,2] as const
// const angle = Math.atan2(...args)

// let y = 'x' as const;
// y = 'x'

const setCount = (n: number) => {
    return <const>{
        type: 'SET_COUNT',
        payload: n
    }
}
const resetCount = () => {
    return <const>{
        type: 'RESET_COUNT',
    }
}
type countType = ReturnType<typeof setCount> | ReturnType<typeof resetCount>
const countFn = ():countType => {
    // return {
    //     type:'SET_COUNT',
    //     payload: 1
    // }
    return  {
        type:'RESET_COUNT'
    }
}
const res:ReturnType<typeof setCount> = setCount(1)
console.log(res)
const res1:countType = countFn()
console.log(res1)


const actions = <const>{
    type:'SET_HOUR',
    payload:[1,2,4,10]
}
// actions.payload.push(3) // 现在这个是元组了 不允许在添加上数值
