import React from 'react'
import { useHistory } from 'react-router-dom'

import { Wrapper } from './styles'

export type LogoProps = {
  size?: 'normal' | 'small'
}
const Logo = ({ size = 'normal' }: LogoProps) => {
  const history = useHistory()
  return (
    <Wrapper
      size={size}
      onClick={(e) => {
        e.preventDefault()
        if (history.location.pathname != '/') history.push('/')
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 769 310"
        aria-label="Cinema Cazco Logo"
      >
        <path fill="#f27326" d="M481 148h162v162H481z" />
        <path
          fill="#fafafa"
          d="M509 175h108v23l-64 60h64v25H508v-24l64-60h-63z"
        />
        <g className="c">
          <path
            d="M406 243v15c0 17-9 27-26 27s-26-10-26-27v-58c0-17 9-28 26-28s26 11 26 28v11h-17v-12c0-8-3-11-9-11s-9 3-9 11v60c0 8 3 10 9 10s9-2 9-10v-16h17zM472 284h-17l-3-20h-22l-3 20h-15l17-110h26zm-39-35h16l-8-56z"
            fill="#fafafa"
          />
        </g>
        <g className="c">
          <path
            d="M707 243v15c0 17-9 27-26 27s-26-10-26-27v-58c0-17 9-28 26-28s26 11 26 28v11h-16v-12c0-8-3-11-9-11s-9 3-9 11v60c0 8 3 10 9 10s9-2 9-10v-16h16zM716 200c0-18 9-28 27-28s26 10 26 28v58c0 17-9 28-26 28s-27-11-27-28zm18 59c0 7 3 10 9 10s9-3 9-10v-60c0-8-3-11-9-11s-9 3-9 11z"
            fill="#fafafa"
          />
        </g>
        <path
          d="M387 134q-13 0-20-5a25 25 0 01-9-13 58 58 0 01-3-19V58a61 61 0 013-19 23 23 0 019-13q7-4 20-4 11 0 18 3a21 21 0 019 11 46 46 0 013 17v9h-20v-9a65 65 0 000-9 10 10 0 00-3-6l-7-2c-3 0-6 1-8 3a11 11 0 00-3 6 52 52 0 00-1 9v47a41 41 0 001 10 10 10 0 004 6 11 11 0 007 2q5 0 7-2a11 11 0 003-7 63 63 0 000-8V92h20v8a52 52 0 01-2 18 23 23 0 01-10 11q-6 5-18 5zM432 132V23h20v109zM470 132V23h14l27 62V23h17v109h-13l-28-65v65zM545 132V23h47l1 14h-27v31h21v14h-21v36h27v14zM604 132l2-109h22l16 75 16-75h21l2 109h-15l-2-76-16 76h-12l-17-76-1 76zM694 132l22-109h22l23 109h-19l-5-25h-19l-5 25zm26-38h15l-8-46zM290 145a145 145 0 10-145 145 145 145 0 00145-145zm-30-39a5 5 0 11-5 5 5 5 0 015-5zm-9 44l-1 10-81-33 46-56a105 105 0 0136 79zM139 17a5 5 0 11-5 5 5 5 0 015-5zm6 27a105 105 0 0140 8l-46 56-46-50a105 105 0 0152-14zM23 121a5 5 0 115-5 5 5 0 01-5 5zm17 41a105 105 0 0125-81l48 52zm36 97a5 5 0 115-5 5 5 0 01-5 5zm-26-63l76-30 2 88a106 106 0 01-78-58zm92-33a20 20 0 1120-20 20 20 0 01-20 20zm76 86a5 5 0 115-5 5 5 0 01-5 5zm-54 5l-2-91 79 32a106 106 0 01-77 59z"
          fill="#fafafa"
        />
        <path
          d="M257 253c-13 11-44 32-44 32 61-18 121 8 121 8l8-64c-41-6-65 7-85 24z"
          fill="#fafafa"
        />
      </svg>
    </Wrapper>
  )
}

export default Logo
