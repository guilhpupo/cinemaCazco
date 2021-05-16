import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.medium} 0;
    position: relative;
    width: 100%;
  `}
`
export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    ${media.lessThan('medium')`
        position: absolute;
        top: 0;
        right: 0;
        margin: ${theme.spacings.xsmall};        
    `}
  `}
`
export const LogoWrapper = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

export const SearchBarWrapper = styled.div`
  justify-self: center;
`

type FullScreenSearchProps = {
  isOpen: boolean
}

export const FullScreenSearch = styled.div<FullScreenSearchProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`

export const SearchSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 ${theme.spacings.large};
  `}
`
