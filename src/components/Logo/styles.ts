import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 20rem;
  `,
  small: () => css`
    width: 11rem;
    height: 4.4rem;
  `
}
export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    cursor: pointer;
    svg {
      width: 100%;
      height: 100%;
    }
    ${!!size && wrapperModifiers[size]}
  `}
`
