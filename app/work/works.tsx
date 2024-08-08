'use client'

import Section from '@/components/Section'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ProjectsQueryResult } from '../../sanity/sanity-types'
import LinkFrame from '@/components/LinkFrame'
import BannerFrame from '@/components/BannerFrame'
import Link from 'next/link'

export default function Works({ projects }: { projects: ProjectsQueryResult }) {
  const service = useSelectedLayoutSegment()

  return (
    <>
      <div className='w-full flex justify-around z-10'>
        {['All', 'Chamber', 'Vocal', 'Orchestra'].map(ensemble => (
          <Link
            key={ensemble}
            href={`/work${ensemble === 'All' ? '' : `/${ensemble}`}`}
            className={`rounded-lg p-2 w-fit font-heading ${service === ensemble || (ensemble === 'All' && !service) ? 'border border-accent font-bold' : ''}`}
            scroll={false}>
            {ensemble}
          </Link>
        ))}
      </div>
      {/* LinkFrame is the container for works, customize the classes to change things */}
      {projects
        .filter(project => !service || project.type === service)
        .map(project => (
          <div className='w-full sm:p-8 p-2' key={project._id}>
            <div className='p-4 w-full h-full relative rounded-lg bg-bg2/50 overflow-hidden'>
              <Link
                scroll={false}
                href={`/work/${project.type}/${project.slug}`}
                title={project.title}
                className='h-full w-full absolute top-0 left-0 z-10'
              />
              <div className='flex'>
                <div className='flex flex-col w-full h-full'>
                  <h2 className='rounded-lg p-1 text-h2 backdrop-blur w-fit'>
                    {project.title}
                  </h2>
                  <p className='rounded-lg p-1 italic backdrop-blur w-fit'>
                    {project.subtitle}
                  </p>
                </div>
                <div className='flex flex-wrap w-1/3 items-center justify-end'>
                  {project.instrumentation?.map(instrument => (
                    <div className='rounded-lg bg-accent/50 h-fit px-2 py-1 mx-1'>
                      {instrument}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}
