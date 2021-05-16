import React from 'react'

import {
  MdArrowForward as ArrowRight,
  MdArrowBack as ArrowLeft
} from 'react-icons/md'
import Slider, { SliderSettings } from 'utils/components/Slider'
import Card, { CardProps } from 'components/Card'

import { Wrapper } from './styles'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4.9,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: true,
        slidesToShow: 4.4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3.4
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.8
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 2.4
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 360,
      settings: {
        arrows: false,
        slidesToShow: 1.7
      }
    },
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

export type CardSliderProps = {
  items: CardProps[]
}

const CardSlider = ({ items }: CardSliderProps) => (
  <Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </Slider>
  </Wrapper>
)

export default CardSlider
