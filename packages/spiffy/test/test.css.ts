import { css } from '../src'

export const foo = css`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ isVisible }) => isVisible && `visibility: visible;`}
`