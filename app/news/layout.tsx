import LinkFrame from '@/components/LinkFrame'
import Section from '@/components/Section'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutSelectQuery, eventsQuery, postsQuery } from '@/sanity/queries'
import {
  AboutSelectQueryResult,
  EventsQueryResult,
  PostsQueryResult
} from '@/sanity/sanity-types'
import { sortBy } from 'lodash'
import Client from './client'
import Posts from './posts-client'
import SanityImageWrapper from '@/components/SanityImageWrapper'

export default async function Layout({ children }) {
  const posts = await sanityFetch<PostsQueryResult>({
    query: postsQuery
  })

  const events = await sanityFetch<EventsQueryResult>({ query: eventsQuery })

  const today = new Date().toISOString().slice(0, 10)

  const newsBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerNews' }
  })) as any

  return (
    <>
      <div className='w-full absolute top-0 left-0 -z-10 flex items-end justify-left'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={newsBanner.value.asset._ref}
          className='w-full'
        />
      </div>
      <Client />

      <Section className='pt-[20vw]'>
        <h1 className='text-h1 text-center heading'>Upcoming Events</h1>
        {sortBy(
          events.filter(event => event.date >= today),
          'date'
        ).map(event => (
          <LinkFrame
            className='textBox'
            key={event._id}
            title={event.title}
            subtitle={event.subtitle}
            href={`news/events/${event.slug}`}></LinkFrame>
        ))}
      </Section>
      <Section>
        {
          // making a client-side component for Posts so it can use state to toggle between them
        }
        <Posts posts={posts} />
      </Section>
      {children}
    </>
  )
}
