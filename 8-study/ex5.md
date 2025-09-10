## 함수 타입 정의

```ts
interface Functions {
  fn1: () => void // 반환값이 없는 함수
  fn2: () => string // string을 반환하는 함수
  fn3: () => Promise<string> // 프로미스를 반환하는 비동기 함수
}
```

## 제네릭 타입

```ts
interface Functions {
  fn1: <T>(props: T) => T // 매개변수를 받아서 반환하는 함수
  fn2: <T, R>(Props: T) => R // 매개변수와 반환값의 타입이 다른 경우
}
```

- 제네릭으로 타입 유연하게 지정
- fn2<number, string>: 호출 시점에서 타입 지정
