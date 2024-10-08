export default function Section({
  children,
  title,
  className,
  innerClassName,
  fullWidth = false,
  columns = false,
  style
}: React.PropsWithChildren & {
  title?: string
  className?: string
  innerClassName?: string
  fullWidth?: boolean
  columns?: boolean
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`w-full my-2 flex-none space-y-2 px-8 leading-6 ${
        !fullWidth ? 'mx-auto max-w-4xl' : ''
      } ${className ?? ''}`}
      style={style}>
      <div className={`${innerClassName}`}>{children}</div>
    </div>
  )
}
