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
              className='h-full w-full px-2'
              title={work.title}
              subtitle={work.subtitle}
              banner={work.banner}
            />
          ))}
        </Carousel>
      </Section>

      <Section>
        <h2 className='text-h2'>Highlights</h2>
        {homeInfo.highlights!.map(x => (
          <LinkFrame
            key={x._id}
            title={x.title}
            subtitle={x.subtitle!}
            href=''
          />
        ))}
      </Section>
    </main>
  )
}
