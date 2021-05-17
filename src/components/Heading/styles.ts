import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};      
    `}
  `,
  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xlarge};      
    `}
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
