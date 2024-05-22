/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
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

import { useState } from 'react'
import { Button, Cards, ViewSelector } from '../main'

const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}

enum ViewType {
  ALL = 'ALL',
  ODD = 'ODD',
  EVEN = 'EVEN',
  PRIME = 'PRIME',
}

const viewFilter: Record<ViewType, (n: number) => boolean> = {
  ALL: () => true,
  ODD: (n) => n % 2 === 1,
  EVEN: (n) => n % 2 === 0,
  PRIME: isPrime,
}

const svgtext =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="background-color:green"><style>text{font:28px bold;stroke-linejoin:round;stroke:#ffa600;fill:#b3cb2d;text-anchor:middle;dominant-baseline:middle;stroke-width:4px;paint-order:stroke;}</style><text x="32" y="36">N</text></svg>'

const generateImage = (n: number) =>
  `data:image/svg+xml,${encodeURIComponent(svgtext.replace('N', n.toString()))}`

const generateCard = (n: number) => ({
  title: `Card #${n}`,
  subtitle: `the ${n}th card`,
  subscriptionStatus: isPrime(n) ? 'Prime' : undefined,
  description: 'description of the card',
  image: {
    src: generateImage(n),
  },
})

const cardsArgs = {
  buttonText: 'View',
}

export default function App() {
  const [count, setCount] = useState<number>(1)
  const [view, setView] = useState<ViewType>(ViewType.ALL)

  return (
    <main style={{ padding: 80 }}>
      <Button
        sx={{ marginLeft: 2 }}
        onClick={() => {
          setCount(() => count + 1)
        }}
      >
        count is {count}
      </Button>
      <ViewSelector
        views={Object.keys(ViewType).map((buttonText) => ({
          buttonText,
          buttonValue: buttonText,
          onButtonClick: (e: React.MouseEvent) => {
            const target = e.target as HTMLButtonElement
            setView(target.value as ViewType)
          },
        }))}
        activeView={view}
      />
      <div style={{ height: 16 }} />
      <Cards
        {...cardsArgs}
        items={new Array(count)
          .fill(0)
          .map((_, i) => i)
          .filter(viewFilter[view])
          .map(generateCard)}
      />
    </main>
  )
}
