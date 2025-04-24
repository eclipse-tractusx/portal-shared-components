/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
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

import { type StoryFn } from '@storybook/react'
import { Navigation as Component } from '.'

export default {
  title: 'Navigation',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

const items = [
  {
    title: 'Dataspace Participate',
    children: [
      { title: 'Partner Network', href: '/partner-network' },
      { title: 'Use Case Participation', href: '/use-case-participation' },
    ],
  },
  {
    title: 'Marketplace',
    children: [
      { title: 'App Marketplace', href: '/app-marketplace' },
      { title: 'Service Marketplace', href: '/service-marketplace' },
      { title: 'App & Service Subscription', href: '/company-subscription' },
    ],
  },
  {
    title: 'Marketplace Management',
    children: [
      {
        title: 'App Management',
        children: [
          { title: 'App Overview', href: '/app-overview' },
          { title: 'App Release Process', href: '/app-release-process' },
          { title: 'App Subscription', href: '/app-subscription' },
        ],
      },
      {
        title: 'Service Management',
        children: [
          { title: 'Service Overview', href: '/service-overview' },
          {
            title: 'Service Release Process',
            href: '/service-release-process',
          },
          { title: 'Service Subscription', href: '/service-subscription' },
        ],
      },
    ],
  },
  {
    title: 'CX-Operator',
  },
]

export const Unstyled = Template.bind({})
Unstyled.args = {
  items,
  active: '/use-case-participation',
  unstyled: true,
}

export const WithDropdown = Template.bind({})
WithDropdown.args = {
  items,
  activePathname: '/use-case-participation',
}
