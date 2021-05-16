import styled, { css, DefaultTheme } from 'styled-components'
import { RadioButtonProps } from '.'

const wrapperModifiers = {
  white: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  orange: (theme: DefaultTheme) => css`
    color: ${theme.colors.orange};
  `
}
export const Wrapper = styled.div<Pick<RadioButtonProps, 'color'>>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    margin-left: ${theme.spacings.xsmall};
    > span {
      ${!!color && wrapperModifiers[color](theme)}
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
export const Radio = styled.input.attrs({ type: 'radio' })`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
  `}
`
