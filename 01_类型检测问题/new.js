function mynew(Func,...args){
    let obj = {}
    obj.__proto__= Func.prototype;
    let result = Func.apply(obj,args)
    return result instanceof Object ? result : obj;
}

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.say = function () {
    console.log(this.name)
}

let p = mynew(Person, "huihui", 123)
p.say()
