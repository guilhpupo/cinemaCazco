import styled, { css, DefaultTheme } from 'styled-components'

type ContainerProps = {
  size?: 'normal' | 'small'
}

const containerModifiers = {
  normal: (theme: DefaultTheme) => css`
    max-width: ${theme.grid.container};
  `,
  small: (theme: DefaultTheme) => css`
    max-width: calc(${theme.grid.container}*0.7);
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: ${theme.border.radius};
  `
}
export default styled.div<ContainerProps>`
  ${({ theme, size = 'normal' }) => css`
    width: 100%;
    padding: 0 ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    max-width: ${theme.grid.container};
    margin: 0 auto;
    ${!!size && containerModifiers[size](theme)}
  `}
`
