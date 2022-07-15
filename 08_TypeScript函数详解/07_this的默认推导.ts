// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
  name: "why",
  eating() {
    console.log(this.name + " eating")
  }
}

info.eating()

export { }


// function add(num1: number, ...nums: number[]) {
//   return nums.reduce((pre, next) => pre + next, 0) + num1
// }
// add(1, 2, 3, 4, 5, 6)