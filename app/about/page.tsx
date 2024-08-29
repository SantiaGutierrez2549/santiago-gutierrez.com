import SanityImageWrapper from '@/components/SanityImageWrapper'
import Section from '@/components/Section'
import ViewButton from '@/components/ViewButton'
import { sanityFetch } from '@/sanity/lib/fetch'
import { aboutQuery, aboutSelectQuery } from '@/sanity/queries'
import { sanityFileInfo } from '@/sanity/queries/utilities'
import { AboutQueryResult, AboutSelectQueryResult } from '@/sanity/sanity-types'
import { PortableText } from '@portabletext/react'
import invariant from 'tiny-invariant'
import Client from './client'
import BannerFrame from '@/components/BannerFrame'
import { BASE_URL_IMAGES } from '@/sanity/env'

export default async function About() {
  const about = await sanityFetch<AboutQueryResult>({ query: aboutQuery })
  invariant(about)

  const aboutBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerAbout' }
  })) as any

  return (
    <>
      <div className='w-full -z-10 flex items-end justify-left relative -mt-[30%]'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={aboutBanner.value.asset._ref}
          className='w-full sm:w-[60vw]'
        />
      </div>
      <h1 className='text-h1 text-center'>About</h1>
      <Section className='pt-[100px]'>
        <div className='w-full px-2 flex flex-col items-end'></div>
        <div className='py-4 relative'>
          <div className='float-right min-w-[min(200px,100vw)] w-full sm:w-1/2 relative p-4'>
            <SanityImageWrapper
              className='rounded-lg'
              // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
              id={about.headshot!.asset!._ref}
              height={800}
              width={800}
            />
            <p className='text-sm text-right'>
              <a
                className='underline'
                href={`${BASE_URL_IMAGES}${about.headshot.asset?._ref.replace('-png', '.png').replace('image-', '')}`}
                download={'Santiago-Gutierrez.png'}
                target='_blank'>
                download
              </a>{' '}
              Photo credit: Marvin Fuchs / HfMDK Frankfurt
            </p>
          </div>

          <Client
            short={about.bioShort}
            medium={about.bioMedium}
            long={about.bioLong}
          />
        </div>
        {// map the array of work experiences to div elements to display them
        about.work?.map(project => (
          <div key={project._key} className=''>
            <h2 className='text-h3'>{project.name}</h2>
            {project.description && (
              <PortableText value={project.description} />
            )}
          </div>
        ))}
        {about.cv && (
          <ViewButton href={sanityFileInfo(about.cv!.asset!._ref!).url}>
            CV
          </ViewButton>
        )}
      </Section>
    </>
  )
}
