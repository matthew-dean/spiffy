import { expect } from 'chai'
import type * as CSS from 'csstype'

import { css } from '../src'
interface FooInterface {
  flexDirection?: CSS.Properties['flexDirection']
  isVisible?: boolean
  width?: number
}
export const foo = css<FooInterface>(({
  flexDirection,
  isVisible,
  width
}) => `
  display: flex;
  flex-direction: ${flexDirection};
  visibility: ${isVisible && 'visible'};
  width: ${width}px;
`)

describe('Test', () => {
  it('does something?', () => {
    console.log(foo)
    expect(1).to.eq(1)
  })
})