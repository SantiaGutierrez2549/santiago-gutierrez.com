import { BannerInfo, Color } from '@/sanity/sanity-types'
import { SanityImage } from 'sanity-image'
import SanityImageWrapper from './SanityImageWrapper'
import { sanityFileInfo } from '@/sanity/queries/utilities'

const assembleGradient = (gradient: {
  type: 'radial' | 'diagonal' | 'horizontal' | 'vertical'
  color1: Color
  color2: Color
}) => {
  const hexString = `${gradient.color1.hex}, ${gradient.color2.hex}`
  switch (gradient.type) {
    case 'radial':
      return `radial-gradient(${hexString})`
    case 'diagonal':
      return `linear-gradient(to bottom right, ${hexString})`
    case 'horizontal':
      return `linear-gradient(${hexString})`
    case 'vertical':
      return `linear-gradient(to bottom, ${hexString})`
  }
}
export default function BannerFrame({
  banner,
  noHeight,
  className
}: {
  banner: BannerInfo
  noHeight?: boolean
  className?: string
}) {
  const fullHeight = 'absolute top-0 left-0 -z-10 h-full w-full'
  switch (banner.bannerType) {
    case 'none':
      return <div className={`h-full w-full ${fullHeight}`} />
    case 'image':
      return (
        banner.image?.asset && (
          <SanityImageWrapper
            id={banner.image.asset._ref}
            className={`${!noHeight ? fullHeight : ''} ${className ?? ''} object-cover`}
          />
        )
      )
    case 'video':
      return (
        banner.video?.asset && (
          <video
            className={`h-full w-full object-cover ${fullHeight}`}
            muted
            loop
            autoPlay
            src={sanityFileInfo(banner.video.asset._ref).url}></video>
        )
      )
    case 'gradient':
      return (
        banner.gradient && (
          <div
            className={`${fullHeight}`}
            style={{
              background: assembleGradient(banner.gradient)
            }}></div>
        )
      )
    case 'custom':
      return (
        banner.custom && (
          <div
            className={`${fullHeight}`}
            dangerouslySetInnerHTML={{ __html: banner.custom }}></div>
        )
      )
  }
}
