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
import { DateTime } from 'luxon'
import ContentFrame from '@/components/ContentFrame'
import DateFrame from '@/components/DateFrame'

export default async function Home() {
  const homeInfo = await sanityFetch<HomeQueryResult>({ query: homeQuery })
  invariant(homeInfo)

  return (
    <main>
      <div className='w-full relative h-[calc(90vh-45px)] overflow-hidden'>
        <SanityImageWrapper
          id={homeInfo.homeImage?.asset?._ref}
          className='w-full h-full object-cover'
        />
      </div>
      <Client />
      <p className='text-fg text-center backdrop-blur rounded-xl p-1 text-[22px] w-full'>
        {homeInfo.slogan}
      </p>
      <Client />

      <p className='text-center'>
        <a href='/about' className='underline  text-right'>
          Read more...
        </a>
      </p>

      <h2 className='heading-strip'>Upcoming</h2>
      <Carousel>
        {homeInfo.upcomingWorks!.map(work => (
          <LinkFrame
            key={work._id}
            className='h-full w-full'
            innerClassName='h-full w-full py-4 px-8 flex flex-col sm:flex-row'>
            <div className='sm:h-full sm:flex sm:flex-col'>
              <div className='flex justify-end w-full'>
                <h2 className='text-h2 w-full mr-2'>{work.title}</h2>
                {work.date && <DateFrame date={work.date} />}
              </div>
              <h3 className='text-base'>{work.subtitle}</h3>
              <div className='grow'></div>
              {work.content && <ContentFrame content={work.content} />}
            </div>
            <SanityImageWrapper
              id={work.banner?.image?.asset?._ref}
              className='sm:w-[50%] w-full sm:h-full object-cover sm:ml-2'
            />
          </LinkFrame>
        ))}
      </Carousel>
      <h2 className='heading-strip'>Highlights</h2>
      <div className='relative w-full py-8 px-2'>
        <SanityImageWrapper
          className='h-full w-full absolute object-cover top-0 left-0 -z-10'
          id={homeInfo.highlightsBackground?.asset?._ref}
        />

        <div className='space-y-8 sm:px-[10%] pt-12'>
          {homeInfo.highlights!.map((x, i) => (
            <div
              key={x._id}
              className={`aspect-square w-[400px] max-w-full bg-bgDark/50 backdrop-blur rounded-lg p-4 relative flex flex-col`}
              style={{
                marginLeft: i % 2 === 0 ? 'max(0px, calc(100% - 400px))' : 0
              }}>
              {x.banner && (
                <BannerFrame noHeight banner={x.banner} className='' />
              )}

              <h2 className='text-2xl font-bold'>{x.title}</h2>
              <h3 className='text-base'>{x.subtitle!}</h3>
              {x.content && <ContentFrame content={x.content} />}
              <div className='grow' />
              <DateFrame date={x.date} />
            </div>
          ))}
        </div>
      </div>

      <h2 className='heading-strip'>Featured Work</h2>
      <div className='w-full pt-8 px-4'>
        <div className='w-full'>
          {homeInfo.featuredWorks?.map(work => {
            return (
              <div className='relative h-[400px] sm:flex'>
                <Link
                  href={`/works/${work.type}/${work.slug.current}`}
                  className='h-full w-full absolute top-0 left-0'
                />
                <div className='px-4 space-x-3'>
                  <div className='flex-none w-fit'>{work.title}</div>
                  <div className='flex-none w-fit italic'>{work.subtitle}</div>
                </div>
                <div className='sm:!pl-8'>
                  <SanityImageWrapper
                    id={work.banner?.image?.asset?._ref}
                    className='w-full rounded-lg'
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
