import { formatColor } from '@/sanity/lib/color'
import { sanityFetch } from '@/sanity/lib/fetch'
import { settingsQuery, socialsQuery } from '@/sanity/queries'
import { SettingsQueryResult, SocialsQueryResult } from '@/sanity/sanity-types'
import type { Metadata } from 'next'
import NavBar from './NavBar'
import './globals.css'
import Image from 'next/image'
import SanityImageWrapper from '@/components/SanityImageWrapper'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params
}>) {
  const data = await sanityFetch<SettingsQueryResult>({ query: settingsQuery })
  const socials = await sanityFetch<SocialsQueryResult>({ query: socialsQuery })

  const style = {
    '--bg': formatColor(data?.backgroundColor!),
    '--bg2': formatColor(data?.backgroundAltColor!),
    '--bgDark': formatColor(data?.backgroundDarkColor!),
    '--fg': formatColor(data?.foregroundColor!),
    '--fgDark': formatColor(data?.foregroundDarkColor!),
    '--accent': formatColor(data?.accentColor!),
    '--accent2': formatColor(data?.accentAltColor!),
    '--body': `${data?.bodyFont?.name}`,
    '--heading': `${data?.headingFont?.name}`,
    '--topbar': '60px'
  } as React.CSSProperties

  return (
    <html lang='en' style={style}>
      <head>
        {data?.bodyFont?.linkSource && (
          <link rel='stylesheet' href={data.bodyFont!.linkSource} />
        )}
        {data?.headingFont?.linkSource && (
          <link rel='stylesheet' href={data.headingFont!.linkSource} />
        )}
      </head>
      <body className={`bg-bg font-body text-fg`}>
        <NavBar title={data?.siteTitle ?? 'My Site'} socials={socials} />
        {children}
        <footer className='font-body *:px-4 *:sm:px-8'>
          <div className='bg-bgDark '>
            <SanityImageWrapper
              id={data!.logo!.asset!._ref}
              className='mx-auto invert'
            />
          </div>
          <div className='w-full bg-bgDark/50 py-4'>
            <p className='text-right mb-0'>
              Designed by Jay Reinier,{' '}
              <a href='https://jpalindrome.com'>Palindrome Systems</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
