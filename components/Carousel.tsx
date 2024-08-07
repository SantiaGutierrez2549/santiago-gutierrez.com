'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
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
    <div className='w-full aspect-video relative'>
      <div
        className='w-full h-full overflow-hidden flex space-x-1 rounded-lg'
        ref={thisDiv}>
        {Children.map(children, child => (
          <div className='w-full h-full flex-none'>{child}</div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-2'
        onClick={() => {
          setIndex(index === 0 ? 4 : index - 1)
        }}>
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-2'
        onClick={() => {
          setIndex((index + 1) % 4)
        }}>
        <ChevronRight />
      </button>
    </div>
  )
}
