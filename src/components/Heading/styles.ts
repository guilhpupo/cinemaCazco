import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
  `,
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  orange: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    ${!!color && wrapperModifers[color](theme)}
    ${!!size && wrapperModifers[size](theme)}
  `}
`
