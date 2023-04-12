import { useState } from 'react'

export default function FlexCard() {
  const [slider, setSlider] = useState(2)

  function ClickHandler(num) {
    setSlider(num)
  }
  return (
    <div className="container mb-28 mt-12 flex  lg:flex-row  sm:flex-col justify-center sm:items-center w-[75vw] mx-auto h-[70vh]">
      <img
        className={`${slider === 0 ? 'active__Slider' : 'notActive__Slider'}`}
        src="/assets/Slider/1.jpg"
        alt="First Slider"
        onClick={() => ClickHandler(0)}
      />
      <img
        className={`${slider === 1 ? 'active__Slider' : 'notActive__Slider'}`}
        src="/assets/Slider/2.jpg"
        alt="Second Slider"
        onClick={() => ClickHandler(1)}
      />
      <img
        className={`${slider === 2 ? 'active__Slider' : 'notActive__Slider'}`}
        src="/assets/Slider/3.jpg"
        alt="Thrid Slider"
        onClick={() => ClickHandler(2)}
      />
      <img
        className={`${slider === 3 ? 'active__Slider' : 'notActive__Slider'}`}
        src="/assets/Slider/4.jpg"
        alt="Fourth Slider"
        onClick={() => ClickHandler(3)}
      />
      <img
        className={`${slider === 4 ? 'active__Slider' : 'notActive__Slider'}`}
        src="/assets/Slider/5.jpg"
        alt="Fifth Slider"
        onClick={() => ClickHandler(4)}
      />
    </div>
  )
}
