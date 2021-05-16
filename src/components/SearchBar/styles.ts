import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;

    ${media.greaterThan('medium')`
      width: 35rem;
      
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: ${theme.spacings.medium};
    `}
  `}
`
export const InputBar = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.lightGray};
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

export const RadioGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-end;
    margin-top: ${theme.spacings.xsmall};
  `}
`
