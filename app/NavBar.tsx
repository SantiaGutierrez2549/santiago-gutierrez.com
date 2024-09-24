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
      <nav className='sticky top-0 w-full z-30 bg-bgDark text-fgDark backdrop-blur-sm'>
        <div className='w-full space-x-6 px-2 h-14 py-2 z-10 relative font-heading items-center sm:flex hidden'>
          <Link
            href='/'
            className='text-[32px] font-heading tracking-wide whitespace-nowrap'>
            {title}
          </Link>
          <div className='grow'></div>
          <Link href='/' className={`heading text-fgDark`}>
            Home
          </Link>
          <Link
            href='/works'
            className={`${segment === 'works' ? 'heading-accent' : 'heading'} text-fgDark`}>
            Works
          </Link>
          <Link
            href='/about'
            className={`${segment === 'about' ? 'heading-accent' : 'heading'} text-fgDark`}>
            About
          </Link>
          <Link
            href='/news'
            className={`${segment === 'news' ? 'heading-accent' : 'heading'} text-fgDark`}>
            News
          </Link>
          <Link
            href='/calendar'
            className={`${segment === 'calendar' ? 'heading-accent' : 'heading'} text-fgDark`}>
            Calendar
          </Link>
          <Socials socials={socials} />
          <button className='button !h-10'>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
        <div
          className='sm:hidden absolute top-0 left-0 p-2 !cursor-pointer'
          onClick={() => setNav(!nav)}>
          <MenuIcon className='invert' />
        </div>
      </nav>
      {nav && (
        <div
          className='sm:hidden flex h-screen w-screen backdrop-blur-sm fixed top-0 left-0 flex-col justify-around items-center z-40 bg-bgDark/70 text-fgDark'
          onClick={() => setNav(false)}>
          <div
            className='absolute top-0 left-0 p-2 !cursor-pointer'
            onClick={() => setNav(!nav)}>
            <MenuIcon className='' />
          </div>
          <div className='h-[5%]'></div>
          <Link
            onClick={() => setNav(false)}
            href='/'
            className={`block text-fgDark ${segment === '' ? 'heading-accent' : 'heading'}`}>
            home
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/works'
            className={`block text-fgDark ${segment === 'works' ? 'heading-accent' : 'heading'}`}>
            works
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/about'
            className={`block text-fgDark ${segment === 'about' ? 'heading-accent' : 'heading'}`}>
            about
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/news'
            className={`block text-fgDark ${segment === 'news' ? 'heading-accent' : 'heading'}`}>
            news
          </Link>
          <Link
            onClick={() => setNav(false)}
            href='/calendar'
            className={`block text-fgDark ${segment === 'calendar' ? 'heading-accent' : 'heading'}`}>
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
