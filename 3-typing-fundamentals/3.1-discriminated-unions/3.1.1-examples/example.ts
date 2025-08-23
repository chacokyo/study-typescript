interface Circle {
  kind: 'circle'
  radius: number
}

interface Square {
  kind: 'square'
  sideLength: number
}
// kind, type, tag
interface Rectangle {
  kind: 'rectangle'
  color: string
}
type Shape = Circle | Square | Rectangle

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.sideLength ** 2
    case 'rectangle':
      return shape.color
    default: {
      const _exhaustiveCheck: never = shape
      return _exhaustiveCheck
    }
  }
}

console.log(getArea({ kind: 'rectangle', color: 'pink' }))
