import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
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
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 2.5rem;
      border-bottom: 0.5rem solid ${theme.colors.orange};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size, lineBottom }) => css`
    ${!!color && wrapperModifiers[color](theme)}
    ${!!size && wrapperModifiers[size](theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
