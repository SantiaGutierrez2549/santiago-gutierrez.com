import Section from '@/components/Section'
import Client from './client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { homeQuery } from '@/sanity/queries'
import { HomeQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'
import LinkFrame from '@/components/LinkFrame'
import Carousel from '@/components/Carousel'
import SanityImageWrapper from '@/components/SanityImageWrapper'
import Link from 'next/link'
import BannerFrame from '@/components/BannerFrame'

export default async function Home() {
  const homeInfo = await sanityFetch<HomeQueryResult>({ query: homeQuery })
  invariant(homeInfo)

  return (
    <main>
      <div className='w-full relative'>
        <SanityImageWrapper id={homeInfo.homeImage?.asset?._ref} />
        <p className='absolute left-8 bottom-1/3 sm:w-1/2 w-full text-sm text-bg text-left bg-bgDark/50 backdrop-blur rounded-xl p-1'>
          {homeInfo.slogan}
        </p>
      </div>
      <Client />

      <h2 className='text-h2  text-center py-4'>Upcoming</h2>
      <Carousel>
        {homeInfo.upcomingWorks!.map(work => (
          <LinkFrame
            key={work._key}
            className='h-full w-full'
            innerClassName='h-full w-full p-4'
            title={work.title}
            subtitle={work.subtitle}
            banner={work.banner}
          />
        ))}
      </Carousel>

      <div className='relative w-full py-8'>
        <SanityImageWrapper
          className='h-full w-full absolute object-cover top-0 left-0 -z-10'
          id={homeInfo.highlightsBackground?.asset?._ref}
        />
        <h2 className='text-h2 text-center py-4'>Highlights</h2>
        <div className='space-y-8 sm:px-[10%]'>
          {homeInfo.highlights!.map((x, i) => (
            <LinkFrame
              key={x._id}
              title={x.title}
              subtitle={x.subtitle!}
              href=''
              banner={x.banner}
              className={`aspect-square w-[400px] max-w-full bg-bg2 rounded-lg p-4 relative`}
              style={{
                marginLeft: i % 2 === 0 ? 'max(0px, calc(100% - 400px))' : 0
              }}
            />
          ))}
        </div>
      </div>

      <div className='w-full'>
        <h2 className='text-h2  text-center py-4'>Featured Work</h2>
        <div className='w-full'>
          {homeInfo.featuredWorks?.map(work => {
            return (
              <div className='relative h-[400px] sm:flex'>
                <Link
                  href={`/work/${work.type}/${work.slug.current}`}
                  className='h-full w-full absolute top-0 left-0'
                />
                <div className='px-4 space-x-3'>
                  <div className='flex-none w-fit'>{work.title}</div>
                  <div className='flex-none w-fit italic'>{work.subtitle}</div>
                </div>
                <div className='sm:!pl-8'>
                  <SanityImageWrapper
                    id={work.banner?.image?.asset?._ref}
                    className='w-full '
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
