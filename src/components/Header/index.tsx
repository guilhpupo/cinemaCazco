import Logo from 'components/Logo'

import React, { useState } from 'react'
import MediaMatch from 'utils/components/MediaMatch'

import { MdSearch as SearchIcon, MdClose as CloseIcon } from 'react-icons/md'

import {
  ButtonWrapper,
  LogoWrapper,
  SearchBarWrapper,
  FullScreenSearch,
  SearchSection,
  Wrapper
} from './styles'
import Button from 'components/Button'
import SearchBar from 'components/SearchBar'

import Heading from 'components/Heading'

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
          <SearchBar radioColor="orange" />
        </SearchBarWrapper>
      </MediaMatch>

      <FullScreenSearch aria-hidden={!isOpen} isOpen={isOpen} role="search">
        <ButtonWrapper onClick={() => setIsOpen(false)}>
          <Button
            icon={<CloseIcon aria-label="Close Search" />}
            color="darkBlue"
          />
        </ButtonWrapper>

        <SearchSection>
          <Heading color="orange">Search</Heading>
          <SearchBar />
        </SearchSection>
      </FullScreenSearch>
    </Wrapper>
  )
}

export default Header
