// 함수 변수의 타입도 선언할 수 있습니다.
type Fn = (a: number, b: number) => number
const multiply: Fn = function (a, b) {
  return a * b
}

// 또는, 화살표 함수(arrow function) 문법을 사용할 수도 있습니다.
const divide: (a: number, b: number) => number = (a, b) => {
  return a / b
}
