import React, { useState } from 'react'

import Logo from 'components/Logo'
import Button from 'components/Button'
import SearchBar from 'components/SearchBar'

import {
  MdSearch as SearchIcon,
  MdYoutubeSearchedFor as ReturnIcon
} from 'react-icons/md'

import MediaMatch from 'utils/components/MediaMatch'

import {
  ButtonWrapper,
  LogoWrapper,
  SearchBarWrapper,
  FullScreenSearch,
  SearchSection,
  Wrapper
} from './styles'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Wrapper>
      <LogoWrapper>
        <MediaMatch showOnMobo>
          <Logo size="small" />
        </MediaMatch>
        <MediaMatch showOnDesktop>
          <Logo />
        </MediaMatch>
      </LogoWrapper>

      <MediaMatch showOnMobo>
        <ButtonWrapper onClick={() => setIsOpen(true)}>
          <Button
            icon={<SearchIcon aria-label="Open Search" />}
            color="white"
          />
        </ButtonWrapper>
      </MediaMatch>

      <MediaMatch showOnDesktop>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
      </MediaMatch>

      <FullScreenSearch aria-hidden={!isOpen} isOpen={isOpen} role="search">
        <ButtonWrapper onClick={() => setIsOpen(false)}>
          <Button
            icon={<ReturnIcon aria-label="Close Search" />}
            color="white"
          />
        </ButtonWrapper>

        <SearchSection>
          <SearchBar />
        </SearchSection>
      </FullScreenSearch>
    </Wrapper>
  )
}

export default Header
