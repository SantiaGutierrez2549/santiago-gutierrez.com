import BannerFrame from '@/components/BannerFrame'
import DateFrame from '@/components/DateFrame'
import LinkFrame from '@/components/LinkFrame'
import SanityImageWrapper from '@/components/SanityImageWrapper'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutSelectQuery, eventsQuery } from '@/sanity/queries'
import {
  AboutSelectQueryResult,
  EventsQueryResult
} from '@/sanity/sanity-types'
import { sortBy } from 'lodash'

export default async function Events({ children }) {
  const events = await sanityFetch<EventsQueryResult>({ query: eventsQuery })
  const today = new Date().toISOString().slice(0, 10)
  const eventsBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerEvents' }
  })) as any

  return (
    <>
      <div className='w-[100%] max-h-[50vh] relative overflow-hidden flex items-center'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={eventsBanner.value.asset._ref}
          className='w-full'
        />
      </div>
      <h2 className='heading-strip'>Calendar</h2>
      <Section>
        {sortBy(
          events.filter(event => event.date >= today),
          'date'
        ).map(event => (
          <LinkFrame
            className='textBox'
            key={event._id}
            title={event.title}
            subtitle={event.subtitle}
            href={`calendar/${event.slug}`}>
            <div className='flex justify-end'>
              <div className='text-right pb-2'>
                <DateFrame date={event.date} className='bg-fg text-bg' />
              </div>
            </div>
          </LinkFrame>
        ))}
      </Section>
      <h2 className='heading-strip'>Past Events</h2>
      <Section>
        {sortBy(
          events.filter(event => event.date < today),
          'date'
        )
          .slice(0, 50)
          .map(event => (
            <LinkFrame
              className='textBox !bg-fg/70 !text-bg'
              key={event._id}
              title={event.title}
              subtitle={event.subtitle}
              href={`calendar/${event.slug}`}>
              <div className='flex justify-end'>
                <div className='text-right pb-2'>
                  <DateFrame date={event.date} className='bg-fg text-bg' />
                </div>
              </div>
            </LinkFrame>
          ))}
      </Section>
      {children}
    </>
  )
}
