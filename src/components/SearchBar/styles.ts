import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 80%;

    @media (min-width: 769px) {
      min-width: 30rem;
      width: 50%;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: calc(${theme.spacings.medium}*1.5);
    }
  `}
`
export const InputBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    height: 4rem;
    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
  `}
`

export const TextField = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.darkBlue};
    background-color: inherit;
    border: none;
    width: 100%;

    &:focus {
      outline: 0;
    }
  `}
`
