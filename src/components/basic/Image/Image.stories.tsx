/********************************************************************************
 * Copyright (c) 2021, 2023 BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Image as Component } from '.'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

const style = {
  width: '240px',
  height: '254px',
  borderRadius: '15px',
  boxShadow: '2px 2px 2px 2px #cccccc',
}

const drawing = ((): string => {
  const can = document.createElement('canvas')
  const ctx = can.getContext('2d')
  if (!ctx) {
    return ''
  }
  const w = (can.width = 240)
  const h = (can.height = 240)
  const w2 = w >> 1
  const h2 = h >> 1
  ctx.strokeStyle = 'white'
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, w, h)
  ctx.strokeRect(0, 0, w, h)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = 0.2
  for (let x = 20; x < w2; x += 20) {
    ctx.beginPath()
    ctx.moveTo(w2 - x, 0)
    ctx.lineTo(w2 - x, h)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(w2 + x, 0)
    ctx.lineTo(w2 + x, h)
    ctx.stroke()
  }
  for (let y = 20; y < h2; y += 20) {
    ctx.beginPath()
    ctx.moveTo(0, h2 - y)
    ctx.lineTo(w, h2 - y)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, h2 + y)
    ctx.lineTo(w, h2 + y)
    ctx.stroke()
  }
  ctx.lineWidth = 0.8
  ctx.beginPath()
  ctx.moveTo(w2, 0)
  ctx.lineTo(w2, h)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(0, h2)
  ctx.lineTo(w, h2)
  ctx.stroke()
  ctx.strokeStyle = '#48a'
  ctx.lineWidth = 2
  ctx.beginPath()
  for (let a = 0; a < 360; a++) {
    let p = (Math.PI * a) / 180,
      r = h2 * (0.5 + 0.25 * Math.cos(5 * p)),
      x = r * Math.cos(p),
      y = r * Math.sin(p)
    ctx.lineTo(x + w2, y + h2)
  }
  ctx.stroke()
  ctx.fillStyle = '#048'
  ctx.fill()
  ctx.fillStyle = '#a84'
  ctx.beginPath()
  ctx.arc(w2, h2, 25, 0, 2 * Math.PI)
  ctx.fill()
  return can.toDataURL()
})()

export const FromURL: StoryObj<typeof Component> = {
  args: {
    src: 'https://raw.githubusercontent.com/eclipse-tractusx/portal-assets/main/public/assets/images/logos/cx-short.svg',
    style,
  },
}

export const FromDataURL: StoryObj<typeof Component> = {
  args: {
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0LjQ0NDQ0aW4iIGhlaWdodD0iNC40NDQ0NGluIiB2aWV3Qm94PSIwIDAgMzIwIDMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLDIyMCwyMjApIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmYTYwMDt9LmNscy0ye2ZpbGw6I2IzY2IyZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iOCIgZD0iTSAxMzIsMjEyIEMgMTQ4LDE2OSAxNjcsMTMwIDE5Nyw5NSAyNDcsOTYgMjY2LDExNiAyODMsMTMzIDI1NiwxNjggMjM0LDIxOSAyMTgsMjU1IDE3OSwyMjAgMTY4LDIxMyAxMzEsMjEzIDEwMywxODIgNzgsMTcxIDQ0LDE3NCA2OCwxMzEgODMsMTA5IDExNSw3NSAxNDgsNzEgMTc2LDc0IDE5Niw5NCIgLz48ZyB0cmFuc2Zvcm09InNjYWxlKDAuOCwwLjgpIHRyYW5zbGF0ZSgxNjUgMTAwKSByb3RhdGUoNDApIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MCwyOC42OXYtNmExLDEsMCwwLDAtMS41NS0uODJMMTQuNjksMzguMzFhNC4xMSw0LjExLDAsMCwxLTYuNDUtMy4zOFYyN2E4LjIzLDguMjMsMCwwLDEsMy41NS02Ljc2bDcuMDgtNC44OUE0LjA3LDQuMDcsMCwwLDAsMjAuNjMsMTJWNi4zOGwwLTUuMzlBMSwxLDAsMCwwLDE5LjEuMThsLTUsMy40MkE0LjA4LDQuMDgsMCwwLDAsMTIuMzgsN1Y5Ljg0TDYuMywxNEExNC41NywxNC41NywwLDAsMCwwLDI2djguODlBMTIuMzYsMTIuMzYsMCwwLDAsMTkuMzgsNDUuMDlsMTguOS0xM0E0LjA5LDQuMDksMCwwLDAsNDAsMjguNjlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzMsMTAuNjNsLTE4LjksMTNBNC4wOSw0LjA5LDAsMCwwLDEyLjM1LDI3djZhMSwxLDAsMCwwLDEuNTUuODFMMzcuNzEsMTcuNDFhNC4xMSw0LjExLDAsMCwxLDYuNDQsMy4zOHY3LjlhOC4yNSw4LjI1LDAsMCwxLTMuNTUsNi43N2wtNi4zMyw0LjM2LS43Mi41aDBhNC4wNiw0LjA2LDAsMCwwLTEuNzUsMy4zNFY0NS4ybDAsOS40OGExLDEsMCwwLDAsMS41NS44MWw1LTMuNDNBNC4wNSw0LjA1LDAsMCwwLDQwLDQ4LjcyVjQ1Ljg3bDYuMDYtNC4xOGExNC41OCwxNC41OCwwLDAsMCw2LjI5LTEyVjIwLjhBMTIuMzUsMTIuMzUsMCwwLDAsMzMsMTAuNjNaIi8+PC9nPjwvc3ZnPgo=',
    style,
  },
}

export const Drawing: StoryObj<typeof Component> = {
  args: {
    src: drawing,
    style,
  },
}

export const Default: StoryObj<typeof Component> = {
  args: {
    src: 'is this an image?',
    style,
  },
}
