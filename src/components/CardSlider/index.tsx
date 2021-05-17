import React, { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'

import Card, { CardProps } from 'components/Card'
import {
  BsChevronLeft as ArrowLeftIcon,
  BsChevronRight as ArrowRightIcon
} from 'react-icons/bs'

import sliderBreakpoints from './slider-breakpoints'

import { ArrowLeft, ArrowRight, Arrows, Wrapper } from './styles'
import MediaMatch from 'utils/components/MediaMatch'

export type CardSliderProps = {
  items: CardProps[]
  page?: number
}

const CardSlider = ({ items }: CardSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    spacing: 10,
    slidesPerView: 4.7,
    loop: false,
    mode: 'free-snap',
    resetSlide: true,
    breakpoints: sliderBreakpoints
  })

  useEffect(() => {
    if (slider) slider.refresh()
  }, [slider, items])

  return (
    <Wrapper className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <Card key={index} {...item} className="keen-slider__slide" />
        ))}
      </div>
      <MediaMatch showOnDesktop>
        {slider && (
          <Arrows>
            <ArrowLeft
              onClick={() => slider.prev()}
              disabled={currentSlide == 0}
            >
              <ArrowLeftIcon />
            </ArrowLeft>
            <ArrowRight
              onClick={() => slider.next()}
              disabled={currentSlide >= slider.details().size - 4}
            >
              <ArrowRightIcon />
            </ArrowRight>
          </Arrows>
        )}
      </MediaMatch>
    </Wrapper>
  )
}

export default CardSlider
