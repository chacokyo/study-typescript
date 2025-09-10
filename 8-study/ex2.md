## 타입과 인터페이스

```ts
interface hamster = {
	name: 'jisu'
}
```

- interface: 객체 타입 정의

```ts
type hamster = 'jisu' | 'minha' // 유니언
type hamster = [number, number] // 튜플

let jisu: hamster
jisu //'jisu' 이거나 'minha'
```

- type: 유니얼, 튜플, 객체 타입 정의

> 객체 타입 정의만 필요 - interface  
> 튜플, 유니언, 리터럴, 객체 - type
