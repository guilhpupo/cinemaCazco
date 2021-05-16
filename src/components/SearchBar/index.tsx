import Button from 'components/Button'
import { MdSearch as SearchIcon } from 'react-icons/md'
import React, { useState } from 'react'

import { Wrapper, InputBar, TextField, RadioGroup } from './styles'
import RadioButton, {
  RadioButtonColors,
  RadioValues
} from 'components/RadioButton'

export type SearchBarProps = {
  radioColor?: RadioButtonColors
}

const SearchBar = ({ radioColor }: SearchBarProps) => {
  const [text, setText] = useState('')
  const [radioValue, setRadioValue] = useState<RadioValues>('movie')

  function onValueChange(value: RadioValues) {
    setRadioValue(value)
  }
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault()
        console.log(`buscar: ${text} em ${radioValue}`)
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
      <RadioGroup>
        <RadioButton
          color={radioColor}
          onChange={() => onValueChange('movie')}
          checked={radioValue === 'movie'}
        >
          Movies
        </RadioButton>
        <RadioButton
          color={radioColor}
          onChange={() => onValueChange('series')}
          checked={radioValue === 'series'}
        >
          TV Shows
        </RadioButton>
      </RadioGroup>
    </Wrapper>
  )
}

export default SearchBar
