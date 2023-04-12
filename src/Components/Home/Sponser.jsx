import { useState } from 'react'

export default function Sponser({ image }) {
  const [isHidden, setIsHidden] = useState(false)
  return (
    <div
      className="overflow-hidden relative"
      onMouseOver={() => setIsHidden(true)}
      onMouseLeave={() => setIsHidden(false)}
    >
      <img
        className={`-z-10 opacity-50 transition-all duration-500 absolute ${
          isHidden ? '-translate-x-full' : ''
        }}`}
        src={image}
        alt=""
      />
      <img
        src={image}
        alt=""
        className={`z-20  duration-500 transition-all ${!isHidden ? 'translate-x-full' : ''}`}
      />
    </div>
  )
}
