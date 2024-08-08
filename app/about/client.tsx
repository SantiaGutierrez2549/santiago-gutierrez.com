'use client'

import { Description } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'
import { useState } from 'react'
import { Hydra, Reactive } from 'reactive-frames'

export default function Client({
  short,
  medium,
  long
}: {
  short: ({
    _key: string
  } & Description)[]
  medium: ({
    _key: string
  } & Description)[]
  long: ({
    _key: string
  } & Description)[]
}) {
  const [bioState, setBioState] = useState(0)
  const bioList = [short, medium, long]
  return (
    <>
      <PortableText value={bioList[bioState]} />
      <div className='w-full flex space-x-6'>
        <button
          onClick={() => setBioState(0)}
          className={`${bioState === 0 ? 'font-bold' : ''}`}>
          short
        </button>
        <button
          onClick={() => setBioState(1)}
          className={`${bioState === 1 ? 'font-bold' : ''}`}>
          medium
        </button>
        <button
          onClick={() => setBioState(2)}
          className={`${bioState === 2 ? 'font-bold' : ''}`}>
          long
        </button>
      </div>
    </>
  )
}
