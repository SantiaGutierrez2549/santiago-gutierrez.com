'use client'

import Socials from '@/components/Socials'
import { About, SocialsQueryResult } from '@/sanity/sanity-types'
import { Menu, MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useState } from 'react'

export default function NavBar({
  title,
  socials
}: {
  title: string
  socials: SocialsQueryResult
}) {
  const segment = useSelectedLayoutSegment()
  const [nav, setNav] = useState(false)

  return (
    <>
      <nav className='sticky top-0 w-full z-30 bg-bgDark  backdrop-blur-sm'>
        <div className='w-full space-x-6 px-2 h-14 py-2 z-10 relative font-heading items-center md:flex hidden'>
          <Link
            href='/'
            className='text-[32px] font-heading tracking-wide whitespace-nowrap'>
            {title}
          </Link>
          <div className='grow'></div>
          <Link href='/' className={`heading `}>
            Home
          </Link>
          <Link
            href='/works'
            className={`${segment === 'works' ? 'accent' : ''} heading `}>
            Works
          </Link>
          <Link
            href='/about'
            className={`${segment === 'about' ? 'accent' : ''} heading `}>
            About
          </Link>
          <Link
            href='/news'
            className={`${segment === 'news' ? 'accent' : ''} heading `}>
            News
          </Link>
          <Link
            href='/calendar'
            className={`${segment === 'calendar' ? 'accent' : ''} heading `}>
            Calendar
          </Link>
          <Socials socials={socials} />
          <button className='button !h-10'>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
        <div
          className='md:hidden absolute top-0 left-0 p-1 cursor-pointer! bg-black/50 backdrop-blur-sm rounded-lg z-50 m-1'
          onClick={() => setNav(!nav)}>
          <MenuIcon className='invert' />
        </div>
      </nav>
      {nav && (
        <div
          className='sm:hidden flex h-screen w-screen backdrop-blur-sm fixed top-0 left-0 flex-col justify-around items-center z-40 bg-bgDark/70 '
          onClick={() => setNav(false)}>
          <div
            className='absolute top-0 left-0 p-1 cursor-pointer! bg-black/50 backdrop-blur-sm rounded-lg z-50 m-1'
            onClick={() => setNav(!nav)}>
            <MenuIcon className='invert' />
          </div>
          <div className='h-[5%]'></div>
          <Link
            onClick={() => setNav(false)}
            href='/'
            className={`block  ${segment === '' ? 'accent' : ''} heading`}>
            home
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/works'
            className={`block  ${segment === 'works' ? 'accent' : ''} heading`}>
            works
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/about'
            className={`block  ${segment === 'about' ? 'accent' : ''} heading`}>
            about
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/news'
            className={`block  ${segment === 'news' ? 'accent' : ''} heading`}>
            news
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/calendar'
            className={`block  ${segment === 'calendar' ? 'accent' : ''} heading`}>
            calendar
          </Link>
          <Socials socials={socials} />
          <button className='button' onClick={() => setNav(false)}>
            <Link href='/contact'>Contact</Link>
          </button>
          <div className='h-[5%]'></div>
        </div>
      )}
    </>
  )
}
