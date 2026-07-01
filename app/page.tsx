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
      <div className='w-full relative h-[calc(90vh-45px)] overflow-hidden shadow-xl'>
        <SanityImageWrapper
          id={homeInfo.homeImage?.asset?._ref}
          className='w-full h-full object-cover'
        />
      </div>

      <Client>
        <p className='text-fg backdrop-blur-sm bg-bg/75 rounded-xl px-3 py-2 text-[22px] inline-block w-fit relative z-50 sm:max-w-[75%]'>
          {homeInfo.slogan}
        </p>
      </Client>

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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:px-[10%] pt-12'>
          {homeInfo.highlights!.map((x, i) => (
            <div
              key={x._id}
              className={`aspect-square bg-bgDark/30 backdrop-blur rounded-lg p-4 relative flex flex-col`}>
              {x.banner && (
                <BannerFrame noHeight banner={x.banner} className='mb-4' />
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
      <div className='w-full py-8 px-4'>
        <div className='w-full'>
          {homeInfo.featuredWorks?.map(work => {
            return (
              <div
                className='relative h-[400px] sm:flex bg-bgDark/20 rounded-lg p-4'
                key={work._id}>
                <Link
                  href={`/works/${work.type}/${work.slug.current}`}
                  className='h-full w-full absolute top-0 left-0'
                />
                <div className='px-4 py-3'>
                  <h2 className='text-2xl font-bold'>{work.title}</h2>
                  <h3 className='text-base'>{work.subtitle!}</h3>
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
