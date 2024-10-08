import { BannerInfo } from '@/sanity/sanity-types'
import Link from 'next/link'
import BannerFrame from './BannerFrame'

export default function LinkFrame({
  className,
  innerClassName,
  title,
  subtitle,
  banner,
  href,
  children,
  style
}: {
  className?: string
  innerClassName?: string
  href?: string
  title?: string
  subtitle?: string | null
  banner?: BannerInfo | null
  style?: React.CSSProperties
} & React.PropsWithChildren) {
  return (
    <div className={`${className}`} style={style}>
      <div className={`relative ${innerClassName}`}>
        {href && (
          <Link className='absolute top-0 left-0 h-full w-full' href={href} />
        )}
        {title && <h2 className='text-h3'>{title}</h2>}
        {subtitle && <div className='text-base'>{subtitle}</div>}
        {banner && <BannerFrame banner={banner} />}
        {children}
      </div>
    </div>
  )
}
