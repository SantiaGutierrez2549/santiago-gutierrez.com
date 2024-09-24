import { DateTime } from 'luxon'

export default function DateFrame({
  date,
  className
}: {
  date: string
  className?: string
}) {
  const d = DateTime.fromISO(date)
  return (
    <div
      className={`${className} text-xs rounded-lg p-2 w-fit h-fit font-sans whitespace-nowrap text-center bg-fg text-bg`}>
      <p>{d.toFormat('LLL dd')}</p>
      <p>{d.toFormat('yyyy')}</p>
    </div>
  )
}
