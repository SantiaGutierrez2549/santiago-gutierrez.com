'use client'

import { BASE_URL_IMAGES } from '@/sanity/env'
import { SanityImage } from 'sanity-image'

export default function SanityImageWrapper(
  props: Parameters<typeof SanityImage>[0]
) {
  return <SanityImage {...props} baseUrl={BASE_URL_IMAGES} />
}
