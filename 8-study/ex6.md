## ReactNode

```ts
let node: ReactNode
node = '문자열'
node = 123
node = <div>hello</div>
node = [<span key="1" />, 'text']
```

: 리액트가 렌더링할 수 있는 모든 것

- 문자열, 숫자, JSX, 배열, null, undefined, boolean 등

```ts
let element: ReactElement
element = <div>hello</div>
```

## ReactElement

: 리액트 컴포넌트가 반환하는 구체적인 객체

- JSX를 해석했을 때 React가 실제로 만들어내는 객체 형태의 결과물

> 리액트는 render 과정에서 다양한 값을 받아들이는데, 이걸 아우르는 게 ReactNode.  
> ReactElement는 ReactNode의 부분집합
