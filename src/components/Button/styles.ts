import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const wrapperModifiers = {
  normal: () => css`
    width: 3.2rem;
    height: 3.2rem;
  `,
  small: () => css`
    width: 2.4rem;
    height: 2.4rem;
  `,
  darkBlue: (theme: DefaultTheme) => css`
    color: ${theme.colors.darkBlue};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `
}
export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, color, size }) => css`
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }

    ${!!color && wrapperModifiers[color](theme)};
    ${!!size && wrapperModifiers[size]()};
  `}
`
