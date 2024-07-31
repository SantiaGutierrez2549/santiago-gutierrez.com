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
  const yCount = (window.innerHeight * 0.33) / 10
  const xCount = window.innerWidth
  return (
    <Reactive className='fixed top-[60px] left-0 h-[calc(70vh-60px)] w-screen -z-10'>
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
          p.stroke('black')
          p.strokeWeight(5)
          // add some stuff to the curves
          // make some noise with one line

          const lastCurve = _.range(xCount).map(() => 0)
          const startIndex = Math.floor(((time / 10) % 1) * xCount)

          for (let y = 0; y < yCount; y++) {
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
              p.point(((p.width + 20) / xCount) * i - 10, lastCurve[x])
            }
          }
          // const ctx: CanvasRenderingContext2D = p.drawingContext
          // for (let y = 0; y < yCount; y++) {
          //   // p.stroke(p.color(0, p.noise(time, y)))
          //   // p.beginShape()
          //   ctx.strokeStyle = 'black'
          //   ctx.beginPath()
          //   let thisBreak = props.randomWidths[y][thisBreakIndex] * count
          //   let justMoved = true
          //   for (let x = 0; x <= count; x++) {
          //     if (y === 0) {
          //       console.log('drawing', x)
          //     }
          //     const thisNoise =
          //       p.noise(x * 2, y, time * 0.25 + y * 0.2) * multiplier[x]
          //     const nextNoise = lastCurve[x] + thisNoise
          //     if (justMoved) {
          //       justMoved = false
          //       ctx.moveTo(
          //         (p.width / count) * x * 2,
          //         ((nextNoise * p.height) / yCount) * 2
          //       )
          //     } else {
          //       ctx.lineTo(
          //         (p.width / count) * x * 2,
          //         ((nextNoise * p.height) / yCount) * 2
          //       )
          //     }

          //     lastCurve[x] = nextNoise
          //     if (x > thisBreak) {
          //       thisBreakIndex++
          //       thisBreak = props.randomWidths[0][thisBreakIndex] * count
          //       ctx.stroke()
          //       justMoved = true
          //       x += 3
          //     }
          //   }
          //   p.endShape()
          // }
        }}
      />
    </Reactive>
  )
}
