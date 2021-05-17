import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    min-height: 100vh;
  `}
`

export const TopSection = styled.section`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`
export const BottomSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`
export const Title = styled.h2``
export const Year = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.orange};
  `}
`
export const Rating = styled.h2`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    > svg {
      color: ${theme.colors.orange};
      align-self: center;
    }
  `}
`
export const SmallRating = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
  `}
`
export const Text = styled.p`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
  `}
`
export const TopLine = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-top: ${theme.spacings.xxsmall};
  `}
`
export const Span = styled.span`
  display: flex;
  align-items: center;
`
export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 30rem;

    display: block;
    margin: ${theme.spacings.xsmall} auto;

    background-color: ${theme.colors.lightGray};

    background-position: center center;
    background-size: cover;

    ${media.greaterThan('medium')`
    margin: ${theme.spacings.small} 0;
    `}
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin:${theme.spacings.small} 0 0 ${theme.spacings.small};
    `}
  `}
`

export const LoadingSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`
