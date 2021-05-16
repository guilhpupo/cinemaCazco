import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    height: 100vh;
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};

    max-width: ${theme.grid.container};
    margin: 0 auto;
  `}
`
