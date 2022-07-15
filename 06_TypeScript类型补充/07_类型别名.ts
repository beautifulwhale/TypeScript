// type用于定义类型别名(type alias)
type IDType = string | number | boolean
type PointType = {
  x: number
  y: number
  z?: number
}

function printId(id: IDType) {

}

function printPoint(point: PointType) {

}
printPoint({ x: 123, y: 123 })

type Person1 = {
  id: number,
  name: string,
  age: number,
  friends: {
    name: string,
    age: number
  }
}