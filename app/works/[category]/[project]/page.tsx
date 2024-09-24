import { sanityFetch } from '@/sanity/lib/fetch'
import { PortableText } from '@portabletext/react'
import groq from 'groq'
import invariant from 'tiny-invariant'
import Link from 'next/link'
import { projectQuery } from '@/sanity/queries'
import { ProjectQueryResult } from '@/sanity/sanity-types'
import ContentFrame from '@/components/ContentFrame'
import SanityImageWrapper from '@/components/SanityImageWrapper'

export default async function Works({
  params
}: {
  params: { category: string; project: string }
}) {
  const work = await sanityFetch<ProjectQueryResult>({
    query: projectQuery,
    params: { slug: params.project }
  })
  invariant(work)
  const to = `/works`

  return (
    <div className='fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center p-8 backdrop-blur-sm bg-bgDark/50'>
      <Link
        href={to}
        scroll={false}
        className='absolute left-0 top-0 -z-10 h-full w-full'
      />
      <div className='relative w-full h-fit max-h-full max-w-4xl cursor-default rounded-lg border border-gray-400 bg-bg backdrop-blur-lg overflow-y-auto'>
        <div className='py-6 w-full flex flex-col justify-center items-center space-y-2 heading-strip'>
          <h1 className='text-h1'>{work.title}</h1>
          <div className='text-lg text-center font-heading heading-strip'>
            {work.subtitle}
          </div>
        </div>
        <div>
          <SanityImageWrapper
            id={work.banner?.image?.asset?._ref}
            className='w-full'
          />
        </div>
        <div className='rounded py-1 p-4'>
          {work.content && <ContentFrame content={work.content} />}
        </div>
      </div>
    </div>
  )
}
