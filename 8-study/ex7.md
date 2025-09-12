## PropsWithChildren

### props 객체 전체

```ts
function Container(props: PropsWithChildren) {
  return <div>{props.children}</div>
}
```

### 구조분해로 children만

```ts
function Container({ children }: PropsWithChildren) {
  return <div>{children}</div>
}
```

### 다른 props + children

```ts
type Props = { title: string }
function Container({ title, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
```

- PropsWithChildren<Props> = Props & {children?: ReactNode}
