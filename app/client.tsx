'use client'

import _ from 'lodash'
import type { Image } from 'p5'
import { Processing, Reactive } from 'reactive-frames'
import { ReactiveContext } from 'reactive-frames/dist/types'
import invariant from 'tiny-invariant'
import { createNoise3D, createNoise2D } from 'simplex-noise'

const noise3D = createNoise3D()
const noise2D = createNoise2D()
export default function Client() {
  type Context = ReactiveContext<{}, { randomWidths: number[][] }>
  const yCount = (window.innerHeight * 0.33 * 0.66) / 10
  const xCount = window.innerWidth
  return (
    <Reactive className='h-[calc(50vh-60px)] w-screen z-10 relative'>
      <Processing
        name='p'
        type='p2d'
        className='!h-full !w-full absolute top-0 left-0'
        setup={(p, { props }: Context) => {
          const generateThickness = (x, y) => {
            return (noise2D(x / 100, y) / 2 + 0.5) * 0.7 + 0.5
          }
          // 12-15 lines that are making a waveish thing slowly
          props.randomWidths = _.range(yCount).map(y => {
            let breaks: number[] = []
            let isLine = 0
            let nextBreak = Math.random() * xCount
            for (let i = 0; i < xCount; i++) {
              if (i > nextBreak) {
                isLine = isLine ? 0 : 1
                nextBreak += !isLine
                  ? (Math.random() / 10) * xCount
                  : Math.random() * xCount
              }
              breaks.push(isLine ? generateThickness(i, y) : 0)
            }
            let overlap = 0
            while (overlap < nextBreak - xCount) {
              breaks[overlap] = generateThickness(overlap + xCount, y)
              overlap++
            }
            return breaks
          })
        }}
        draw={(p, { time, props }: Context) => {
          p.clear()
          p.noFill()
          p.colorMode(p.HSL, 1)

          p.strokeWeight(5)
          // add some stuff to the curves.
          // make some noise with one line.

          const lastCurve = _.range(xCount).map(() => 0)
          const noise = _.range(xCount).map(
            i => noise3D((i / 1000) * 3, 0, time * 0.2) * 30
          )

          for (let y = 0; y < yCount; y++) {
            // if (y <= 6) p.stroke('white')
            // else
            p.stroke('black')
            const startIndex = Math.floor((((time / 10) * 4) % 1) * xCount)
            const randomWeights = props.randomWidths[y]
            let x = startIndex
            for (let i = 0; i < xCount; i++) {
              x++
              if (x >= xCount) x = 0
              lastCurve[x] +=
                (noise3D((i / 1000) * 2, y, time * 0.2) / 2 + 0.5) *
                  (p.height / yCount) +
                10
              p.strokeWeight(randomWeights[x] * 5)
              p.point(
                ((p.width + 20) / xCount) * i - 10,
                lastCurve[x] + noise[i]
              )
            }
          }
        }}
      />
    </Reactive>
  )
}
