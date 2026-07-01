'use client'

export default function BackLink() {
  return (
    <div
      onClick={() => window.history.back()}
      className='absolute left-0 top-0 -z-10 h-full w-full cursor-pointer'
    />
  )
}
