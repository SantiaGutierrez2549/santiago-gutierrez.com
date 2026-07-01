'use client'

import _ from 'lodash'
import { createNoise3D, createNoise2D } from 'simplex-noise'
import { useEffect, useRef } from 'react'
import type p5 from 'p5'

const noise3D = createNoise3D()
const noise2D = createNoise2D()

export default function Client({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const p5InstanceRef = useRef<p5 | null>(null)

  useEffect(() => {
    const loadP5 = async () => {
      const p5Module = await import('p5')
      const p5 = p5Module.default

      if (!canvasRef.current) return

      const yCount = 10
      const xCount = typeof window !== 'undefined' ? window.innerWidth : 1000
      let startTime = Date.now()

      // Pre-generate random widths
      const generateThickness = (x: number, y: number) => {
        return (noise2D(x / 100, y) / 2 + 0.5) * 0.7 + 0.5
      }

      const randomWidths = _.range(yCount).map(y => {
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

      const containerHeight = canvasRef.current?.clientHeight || 120

      const sketch = (p: p5) => {
        p.setup = () => {
          const width = typeof window !== 'undefined' ? window.innerWidth : 1000
          p.createCanvas(width, containerHeight, p.P2D)
        }

        p.draw = () => {
          const time = (Date.now() - startTime) / 1000

          p.clear()
          p.noFill()
          p.colorMode(p.HSL, 1)

          p.strokeWeight(5)

          const lastCurve = _.range(xCount).map(() => 0)
          const noise = _.range(xCount).map(
            i => noise3D((i / 1000) * 3, 0, time * 0.2) * 30
          )

          for (let y = 0; y < yCount; y++) {
            p.stroke('black')
            const startIndex = Math.floor((((time / 10) * 4) % 1) * xCount)
            const randomWeights = randomWidths[y]
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
        }

        p.windowResized = () => {
          if (typeof window !== 'undefined') {
            p.resizeCanvas(
              window.innerWidth,
              canvasRef.current?.clientHeight || 120
            )
          }
        }
      }

      const instance = new p5(sketch, canvasRef.current)
      p5InstanceRef.current = instance
    }

    loadP5()

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove()
        p5InstanceRef.current = null
      }
    }
  }, [])

  return (
    <div
      ref={canvasRef}
      className='relative w-screen h-[min(75vh,300px)] z-10 flex 
  justify-center items-center [&>canvas]:absolute [&>canvas]:inset-0 p-4'>
      {children}
    </div>
  )
}
