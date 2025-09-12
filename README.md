## typescript

| no  | title                                       |
| --- | ------------------------------------------- |
| 1   | [튜플](./8-study/ex1.md)                    |
| 2   | [타입, 인터페이스](./8-study/ex2.md)        |
| 3   | [any, unknown, never](./8-study/ex3.md)     |
| 4   | [모듈](./8-study/ex4.md)                    |
| 5   | [함수 타입 지정](./8-study/ex5.md)          |
| 6   | [ReactNode, ReactElement](./8-study/ex6.md) |
| 7   | [PropsWithChildren](./8-study/ex7.md)       |

## setting

```
pnpm i typescript -D
npx tsc <파일명>
```

- 타입스크립트 설치 후 실행

```
tsc --init
```

- tsconfig.json 파일 생성

```
tsc
```

- 컴파일러 샐행
- .ts 파일 컴파일 후 dist (설정으로 지정해둔 폴더)에 결과 파일 저장

```
tsc -p
```

- 각 폴더마다 다른 설정 후 특정 설정 파일로 컴파일
