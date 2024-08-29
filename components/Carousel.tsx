'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Children, useEffect, useRef, useState } from 'react'

export default function CarouselComponent({
  children
}: React.PropsWithChildren) {
  const [index, setIndex] = useState(0)
  const thisDiv = useRef<HTMLDivElement>(null!)
  useEffect(() => {
    thisDiv.current.scrollTo({
      left: thisDiv.current.children[index].offsetLeft,
      behavior: 'smooth'
    })
  }, [index])

  console.log('index', index)

  return (
    <div className='w-full relative'>
      <div
        className='w-full h-full overflow-hidden flex space-x-1'
        ref={thisDiv}>
        {Children.map(children, child => (
          <div className='w-full h-full flex-none'>{child}</div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-2'
        onClick={() => {
          setIndex(index === 0 ? Children.count(children) - 1 : index - 1)
        }}>
        <ChevronLeft />
      </button>
      <button
        className='absolute top-1/2 right-2'
        onClick={() => {
          setIndex((index + 1) % Children.count(children))
        }}>
        <ChevronRight />
      </button>
    </div>
  )
}
