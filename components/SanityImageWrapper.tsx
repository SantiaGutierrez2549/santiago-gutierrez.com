'use client'

import { BASE_URL_IMAGES } from '@/sanity/env'
import { SanityImage } from 'sanity-image'

export default function SanityImageWrapper(
  props: Omit<Parameters<typeof SanityImage>[0], 'id'> & { id?: string }
) {
  return props.id && <SanityImage {...props} baseUrl={BASE_URL_IMAGES} />
}
