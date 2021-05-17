import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
  .keen-slider {
    display: flex;
    overflow: hidden;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .keen-slider__slide {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
  }
  .keen-slider[data-keen-slider-v] {
    flex-wrap: wrap;
  }
  .keen-slider[data-keen-slider-v] .keen-slider__slide {
    width: 100%;
  }
  .keen-slider[data-keen-slider-moves] * {
    pointer-events: none;
  }
`

export const Slider = styled.div``
export const Arrows = styled.div`
  > button {
    position: absolute;

    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width: 3rem;
    height: 100%;

    border: 0;
    background-color: transparent;
    cursor: pointer;

    > svg {
      width: 100%;
      color: white;
    }

    &:disabled {
      cursor: auto;
      > svg {
        color: transparent;
      }
    }
  }
`

export const ArrowLeft = styled.button`
  left: -3.5rem;
`
export const ArrowRight = styled.button`
  right: -3.5rem;
`
