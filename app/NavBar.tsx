'use client'

import Socials from '@/components/Socials'
import { About, SocialsQueryResult } from '@/sanity/sanity-types'
import { Menu, X } from 'lucide-react'
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
      <nav className='sticky top-0 w-full z-20 bg-bgDark text-fgDark backdrop-blur-sm'>
        <div className='w-full space-x-6 px-2 h-12 py-1 z-10 relative font-heading items-center sm:flex hidden'>
          <Link
            href='/'
            className='text-xl font-heading font-bold tracking-wide'>
            {title}
          </Link>
          <div className='grow'></div>
          <Link
            href='/work'
            className={`${segment === 'work' ? 'heading-accent' : 'heading'} text-fgDark`}>
            work
          </Link>
          <Link
            href='/about'
            className={`${segment === 'about' ? 'heading-accent' : 'heading'} text-fgDark`}>
            about
          </Link>
          <Link
            href='/news'
            className={`${segment === 'news' ? 'heading-accent' : 'heading'} text-fgDark`}>
            news
          </Link>
          <div className='grow'></div>
          <Socials socials={socials} />
          <button className='button !h-10'>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
        {nav && (
          <div className='hidden sm:flex h-screen w-screen bg-bg/80 backdrop-blur fixed top-0 left-0 flex-col justify-around items-center z-20'>
            <div className='h-[5%]'></div>
            <Link
              onClick={() => setNav(false)}
              href='/work'
              className={`block ${segment === 'work' ? 'heading-accent' : 'heading'}`}>
              work
            </Link>
            <Link
              onClick={() => setNav(false)}
              href='/about'
              className={`block ${segment === 'about' ? 'heading-accent' : 'heading'}`}>
              about
            </Link>
            <Link
              onClick={() => setNav(false)}
              href='/news'
              className={`block ${segment === 'news' ? 'heading-accent' : 'heading'}`}>
              news
            </Link>
            <Socials socials={socials} />
            <button className='button' onClick={() => setNav(false)}>
              <Link href='/contact'>Contact</Link>
            </button>
            <div className='h-[5%]'></div>
          </div>
        )}
      </nav>
    </>
  )
}
