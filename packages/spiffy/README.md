# Spiffy

This:

```ts
// styles.css.ts
import { css } from 'spiffy'

interface FooInterface {
  flexDirection?: 'row' | 'column'
  isVisible?: boolean;
  width?: number;
}
export const foo = css<FooInterface>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ isVisible }) => isVisible && `visibility: visible;`}
  ${({ width }) => `width: ${width}px;`}
`
```
will be turned into:
```css
.foo-xkj {
  display: flex;
  flex-direction: var(--foo-xkj-1);
  visibility: var(--foo-xkj-2);
  width: var(--foo-xkj-3);
}
.foo-xkj-a {
  --foo-xkj-1: row;
}
.foo-xkj-b {
  --foo-xkj-1: column;
}
.foo-xkj-c {
  --foo-xkj-2: visible;
}
```
```ts
interface FooInterface {
  flexDirection?: 'row' | 'column'
  isVisible?: boolean;
}
/** Generates class name and inline styles, based on type reflection */
export const foo = css<FooInterface>([
  ({ flexDirection }) => choose(flexDirection, ['row', 'column'], ['foo-xkj-a', 'foo-xkj-b']),
  ({ isVisible }) => choose(isVisible, [true], ['foo-xkj-c'])
], [
  ({ width }) => `--foo-xkj-3: ${width}px;`
])
```

Used like:

```tsx
import { foo } from './styles.css'

export const MyComponent = props => {
  const { className, style } = foo(props)
  return <div className={className} style={style}></div>
}
```

Or can simplify it as:

```tsx
export const MyComponent = props => <div {...foo(props)}></div>
```

Or with the Babel plugin:

```tsx
export const MyComponent = props => <div css={foo(props)}></div>
```