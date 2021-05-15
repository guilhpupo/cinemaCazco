import React from 'react'

import { MdSearch as SearchIcon } from 'react-icons/md'

import { Wrapper } from './styles'

export type SearchButtonProps = {
  type?: 'button' | 'submit'
  color?: 'white' | 'darkBlue'
  size?: 'normal' | 'small'
}
const SearchButton = ({
  color = 'darkBlue',
  size = 'normal',
  type = 'button'
}: SearchButtonProps) => (
  <Wrapper type={type} color={color} size={size}>
    <SearchIcon aria-label="Search" />
  </Wrapper>
)

export default SearchButton
