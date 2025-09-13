## 제너릭 (<>)

```ts
type Wrapper<T> = { user: T }
const a: Wrapper<string> = { user: 'jisu' } // T : string
```

- <원하는 타입> : 유연한 타입 변경

## 타입 지정 (:)

```ts
type User = { name: string }
const a: User = { name: 'jisu' }
```

- 타입 고정
