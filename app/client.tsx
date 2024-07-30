'use client'

import _ from 'lodash'
import type { Image } from 'p5'
import { Processing, Reactive } from 'reactive-frames'
import { ReactiveContext } from 'reactive-frames/dist/types'
import invariant from 'tiny-invariant'

export default function Client() {
  type Context = ReactiveContext<{}, {}>
  return (
    <Reactive className='fixed top-0 left-0 h-screen w-screen -z-10'>
      <Processing
        name='p'
        type='p2d'
        className='!h-full !w-full absolute top-0 left-0'
        setup={p => {
          // 12-15 lines that are making a waveish thing slowly
        }}
        draw={(p, { time }) => {
          console.log(p.width, p.height)

          const count = 10
          const yCount = p.height / 20
          const step = p.width / count

          p.clear()
          p.noFill()
          p.colorMode(p.HSL, 1)

          p.strokeWeight(2)
          // add some stuff to the curves
          const lastCurve = _.range(count).map(() => 0)
          // make some noise with one line

          const multiplier = lastCurve.map(
            (_val, i) => 1 - p.noise(i, time * 0.4) * 0.25
          )
          for (let y = 0; y < yCount; y++) {
            p.stroke(p.color(0, p.noise(time, y)))
            p.beginShape()
            for (let x = 0; x <= count + 20; x++) {
              const thisNoise =
                p.noise(x * 2, y, time * 0.25 + y * 0.2) * multiplier[x]
              const nextNoise = lastCurve[x] + thisNoise
              p.curveVertex(
                ((p.width / count) * x - step) * 2,
                ((nextNoise * p.height) / yCount) * 2
              )
              lastCurve[x] = nextNoise
            }
            p.endShape()
          }
        }}
      />
    </Reactive>
  )
}
