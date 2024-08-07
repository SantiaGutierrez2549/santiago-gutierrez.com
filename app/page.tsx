import Section from '@/components/Section'
import Client from './client'
import { sanityFetch } from '@/sanity/lib/fetch'
import { homeQuery } from '@/sanity/queries'
import { HomeQueryResult } from '@/sanity/sanity-types'
import invariant from 'tiny-invariant'
import LinkFrame from '@/components/LinkFrame'
import Carousel from '@/components/Carousel'

export default async function Home() {
  const homeInfo = await sanityFetch<HomeQueryResult>({ query: homeQuery })
  invariant(homeInfo)

  return (
    <main>
      <Client />

      <Section>
        <h2 className='text-h2'>Upcoming Works</h2>
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
      </Section>

      <Section>
        <h2 className='text-h2'>Highlights</h2>
        <div className='space-y-8'>
          {homeInfo.highlights!.map((x, i) => (
            <LinkFrame
              key={x._id}
              title={x.title}
              subtitle={x.subtitle!}
              href=''
              banner={x.banner}
              className={`aspect-square w-[400px] max-w-full ${i % 2 === 0 ? 'float-left' : 'float-right text-right'} bg-bg2 rounded-lg p-4`}
            />
          ))}
        </div>
      </Section>
    </main>
  )
}
