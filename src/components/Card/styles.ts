import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.article`
  position: relative;
  width: 20rem;
  height: 28.8rem;

  ${media.greaterThan('medium')`
  width: 25rem;
  height: 36rem;
  `}

  ${media.lessThan('small')`
  width: 15rem;
  height: 21.6rem;
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ theme, src }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.lightGray};
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `}
`
export const Caption = styled.div`
  ${({ theme }) => css`
    text-align: right;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: ${theme.spacings.small};

    border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    padding: ${theme.spacings.small};
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
  `}
`

export const Rating = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
  `}
`
