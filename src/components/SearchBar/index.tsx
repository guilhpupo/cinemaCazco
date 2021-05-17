import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Button from 'components/Button'
import { MdSearch as SearchIcon } from 'react-icons/md'

import { Wrapper, InputBar, TextField } from './styles'

const SearchBar = () => {
  const [text, setText] = useState('')
  const history = useHistory()

  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        history.push(`/${text}`)
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
