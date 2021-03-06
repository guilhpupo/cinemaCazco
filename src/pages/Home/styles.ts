import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    min-height: 100vh;
  `}
`

export const Sliders = styled.section`
  ${({ theme }) => css`
    > h2:nth-child(n + 2) {
      margin-top: ${theme.spacings.medium};
    }
  `}
`
