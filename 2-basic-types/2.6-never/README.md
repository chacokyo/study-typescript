## any, unknown

: 최상위 타입 / 모든 값을 나타낼 수 있는 타입

## never

: 최하위 타입 / 절대로 발생하지 않아야 하는 상황 표현

```ts
type Hamster = { name: 'hamster' }
type Jisu = { name: 'jisu' }

type User = Hamster | Jisu

function checkUser(user: User): string {
  switch (user.name) {
    case 'hamster':
      return 'im hamster'
    case 'jisu':
      return 'im jisu'
    default:
      const _exhaustedCheck: never = user
      return _exhaustedCheck
  }
}
```

```ts
// 추후 User에 type을 추가 했지만, case엔 추가하지 않은 경우
type Toki = { name: 'toki' }
type User = Hamster | Jisu | Toki
```

- exhaustedCheck: 목록 확인 상수명
- 그냥 default 시엔 모든 경우를 다뤘는지 체크 x
- never 추가시 누락된 case 잡아줌
