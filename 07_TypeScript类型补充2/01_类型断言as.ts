// <img id="why"/>

// 1.类型断言 as
// const el = document.getElementById("why") as HTMLImageElement
// el.src = "url地址"

const element =  document.getElementById('test')! as HTMLElement


// 2.另外案例: Person是Student的父类
class Person {

}

class Student extends Person {
  studying() {

  }
}

function sayHello(p: Person) {
  // 类型断言可以断言子类实例  反之  子类不能断言父类
  (p as Student).studying()
}

const stu = new Person()
sayHello(stu)


// 3.了解: as any/unknown
const message1 = "Hello World"

const num: number = (message1 as unknown) as number;

let msg:boolean = (message1 as any) as boolean

