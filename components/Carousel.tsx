'use client'

import { Children, useEffect, useRef, useState } from 'react'

export default function CarouselComponent({
  children
}: React.PropsWithChildren) {
  const [index, setIndex] = useState(0)
  const thisDiv = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    thisDiv.current.children[index]?.scrollIntoView({
      inline: 'start',
      behavior: 'smooth'
    })
  })

  return (
    <div className='w-full aspect-video p-2 relative'>
      <div
        className='w-full h-full overflow-hidden flex space-x-1 rounded-lg'
        ref={thisDiv}>
        {Children.map(children, child => (
          <div className='w-full h-full px-2 flex-none'>{child}</div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-0'
        onClick={() => {
          setIndex(index === 0 ? 4 : index - 1)
        }}>
        left
      </button>
      <button
        className='absolute top-1/2 right-0'
        onClick={() => {
          setIndex((index + 1) % 4)
        }}>
        right
      </button>
    </div>
  )
}
