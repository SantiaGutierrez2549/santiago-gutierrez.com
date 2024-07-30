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

export default async function About() {
  const about = await sanityFetch<AboutQueryResult>({ query: aboutQuery })
  invariant(about)

  const aboutBanner = (await sanityFetch<AboutSelectQueryResult>({
    query: aboutSelectQuery,
    params: { key: 'bannerAbout' }
  })) as any

  console.log(aboutBanner)

  return (
    <>
      <Client />
      <div className='w-full h-[400px] absolute top-0 left-0 -z-10 flex items-end justify-left'>
        <SanityImageWrapper
          // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
          id={aboutBanner.value.asset._ref}
          className='w-[60vw]'
        />
      </div>
      <Section className='pt-[100px]'>
        <div className='w-full px-2 flex flex-col items-end'>
          <SanityImageWrapper
            // Pass the Sanity Image ID (`_id`) (e.g., `image-abcde12345-1200x800-jpg`)
            id={about.headshot!.asset!._ref}
            className='w-full rounded-lg max-w-[300px]'
          />
        </div>
        <div className='py-4'>
          <PortableText value={about.bio!} />
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
