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
}

export default meta

const style = {
  width: '240px',
  height: '254px',
  borderRadius: '15px',
  boxShadow: '2px 2px 2px 2px #cccccc',
}

export const FromURL: StoryObj<typeof Component> = {
  args: {
    src: 'https://raw.githubusercontent.com/catenax-ng/tx-portal-assets/main/public/assets/images/logos/cx-short.svg',
    style,
  },
}

export const FromDataURL: StoryObj<typeof Component> = {
  args: {
    src: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0LjQ0NDQ0aW4iIGhlaWdodD0iNC40NDQ0NGluIiB2aWV3Qm94PSIwIDAgMzIwIDMyMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLDIyMCwyMjApIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmYTYwMDt9LmNscy0ye2ZpbGw6I2IzY2IyZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iOCIgZD0iTSAxMzIsMjEyIEMgMTQ4LDE2OSAxNjcsMTMwIDE5Nyw5NSAyNDcsOTYgMjY2LDExNiAyODMsMTMzIDI1NiwxNjggMjM0LDIxOSAyMTgsMjU1IDE3OSwyMjAgMTY4LDIxMyAxMzEsMjEzIDEwMywxODIgNzgsMTcxIDQ0LDE3NCA2OCwxMzEgODMsMTA5IDExNSw3NSAxNDgsNzEgMTc2LDc0IDE5Niw5NCIgLz48ZyB0cmFuc2Zvcm09InNjYWxlKDAuOCwwLjgpIHRyYW5zbGF0ZSgxNjUgMTAwKSByb3RhdGUoNDApIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MCwyOC42OXYtNmExLDEsMCwwLDAtMS41NS0uODJMMTQuNjksMzguMzFhNC4xMSw0LjExLDAsMCwxLTYuNDUtMy4zOFYyN2E4LjIzLDguMjMsMCwwLDEsMy41NS02Ljc2bDcuMDgtNC44OUE0LjA3LDQuMDcsMCwwLDAsMjAuNjMsMTJWNi4zOGwwLTUuMzlBMSwxLDAsMCwwLDE5LjEuMThsLTUsMy40MkE0LjA4LDQuMDgsMCwwLDAsMTIuMzgsN1Y5Ljg0TDYuMywxNEExNC41NywxNC41NywwLDAsMCwwLDI2djguODlBMTIuMzYsMTIuMzYsMCwwLDAsMTkuMzgsNDUuMDlsMTguOS0xM0E0LjA5LDQuMDksMCwwLDAsNDAsMjguNjlaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMzMsMTAuNjNsLTE4LjksMTNBNC4wOSw0LjA5LDAsMCwwLDEyLjM1LDI3djZhMSwxLDAsMCwwLDEuNTUuODFMMzcuNzEsMTcuNDFhNC4xMSw0LjExLDAsMCwxLDYuNDQsMy4zOHY3LjlhOC4yNSw4LjI1LDAsMCwxLTMuNTUsNi43N2wtNi4zMyw0LjM2LS43Mi41aDBhNC4wNiw0LjA2LDAsMCwwLTEuNzUsMy4zNFY0NS4ybDAsOS40OGExLDEsMCwwLDAsMS41NS44MWw1LTMuNDNBNC4wNSw0LjA1LDAsMCwwLDQwLDQ4LjcyVjQ1Ljg3bDYuMDYtNC4xOGExNC41OCwxNC41OCwwLDAsMCw2LjI5LTEyVjIwLjhBMTIuMzUsMTIuMzUsMCwwLDAsMzMsMTAuNjNaIi8+PC9nPjwvc3ZnPgo=',
    style,
  },
}

export const Default: StoryObj<typeof Component> = {
  args: {
    src: 'is this an image?',
    style,
  },
}
