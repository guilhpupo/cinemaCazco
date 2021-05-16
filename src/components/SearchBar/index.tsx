import Button from 'components/Button'
import { MdSearch as SearchIcon } from 'react-icons/md'
import React, { useState } from 'react'

import { Wrapper, InputBar, TextField } from './styles'

import { searchTitles } from 'services/titles'

const SearchBar = () => {
  const [text, setText] = useState('')

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        searchTitles(text)
      }}
    >
      <InputBar>
        <TextField
          placeholder="Search movies, TV shows..."
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          icon={<SearchIcon aria-label="Search" />}
          size="small"
          type="submit"
        />
      </InputBar>
    </Wrapper>
  )
}

export default SearchBar
