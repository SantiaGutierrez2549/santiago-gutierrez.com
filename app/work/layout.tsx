import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutSelectQuery, projectsQuery } from '@/sanity/queries'
import {
  AboutSelectQueryResult,
  ProjectsQueryResult,
  ServicesQueryResult
} from '@/sanity/sanity-types'
import WorksHeader from './header'
import Client from './client'
import Works from './works'
import SanityImageWrapper from '@/components/SanityImageWrapper'

export default async function Work({ children }) {
  const projects = await sanityFetch<ProjectsQueryResult>({
    query: projectsQuery
  })
  console.log('projects', projects)

  const workBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerWork' }
  })) as any

  return (
    <>
      <div className='w-full'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={workBanner.value.asset._ref}
          className='w-full'
        />
      </div>
      {/*  header for categories */}
      <Client />
      <div className='sm:flex w-full h-[calc(100vh-32px)]'>
        <div className='w-full flex-none h-full overflow-y-auto flex flex-wrap'>
          <Works projects={projects} />
        </div>
      </div>
      {children}
    </>
  )
}
