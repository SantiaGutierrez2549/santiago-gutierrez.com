'use client'

import BannerFrame from '@/components/BannerFrame'
import ContentFrame from '@/components/ContentFrame'
import DateFrame from '@/components/DateFrame'
import LinkFrame from '@/components/LinkFrame'
import { PostsQueryResult } from '@/sanity/sanity-types'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { sortBy } from 'lodash'

export default function Posts({ posts }: { posts: PostsQueryResult }) {
  const [start, setStart] = useState(0)

  return (
    <>
      <h2 className='heading-strip'>News</h2>
      {
        // Toggle between posts, so older ones can be loaded
      }
      <div className='flex flex-wrap *:m-2 justify-center'>
        {sortBy(posts, post => post.date)
          .reverse()
          .slice(start, start + 10)
          .map((post, i) => (
            <div
              key={post._id}
              className={`w-[300px] max-w-full bg-bgDark/50 backdrop-blur rounded-lg p-4 relative`}>
              <div className='text-right pb-2'>
                <DateFrame date={post.date} />
              </div>

              <h2 className='text-2xl font-bold'>{post.title}</h2>
              <h3 className='text-base'>{post.subtitle!}</h3>
              {post.banner && (
                <BannerFrame noHeight banner={post.banner} className='mb-3' />
              )}
              <ContentFrame content={post.content} />
            </div>
          ))}
      </div>
      <div className='w-full flex justify-between'>
        {start > 0 && (
          <button
            className='accent-button'
            onClick={() => setStart(Math.max(0, start - 10))}>
            <ArrowLeft />
          </button>
        )}
        {posts.length >= 10 && (
          <button
            className='accent-button'
            onClick={() => setStart(start + 10)}>
            <ArrowRight />
          </button>
        )}
      </div>
    </>
  )
}
