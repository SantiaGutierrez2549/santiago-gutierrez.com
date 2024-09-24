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
import DateFrame from '@/components/DateFrame'

export default async function Layout({ children }) {
  const posts = await sanityFetch<PostsQueryResult>({
    query: postsQuery
  })

  const newsBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerNews' }
  })) as any

  return (
    <>
      <div className='w-full flex items-end justify-left -mb-[10vw]'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={newsBanner.value.asset._ref}
          className='w-full'
        />
      </div>
      <Client />

      {
        // making a client-side component for Posts so it can use state to toggle between them
      }
      <Posts posts={posts} />

      {children}
    </>
  )
}
