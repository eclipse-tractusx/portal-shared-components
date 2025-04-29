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

const childrenItems = [
  { title: 'Sub menu1', href: '/sub-menu-item1' },
  { title: 'Sub menu2', href: '/sub-menu-item2' },
  { title: 'Sub menu3', href: '/sub-menu-item2' },
]

const items = [
  {
    title: 'Navigation Item1',
    children: childrenItems,
  },
  {
    title: 'Navigation Item2',
    children: childrenItems,
  },
  {
    title: 'Navigation Item3',
    children: [
      {
        title: 'Menu-item1',
        children: childrenItems,
      },
      {
        title: 'Menu-item2',
        children: childrenItems,
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
  active: '/sub-menu-item1',
  unstyled: true,
}

export const WithDropdown = Template.bind({})
WithDropdown.args = {
  items,
  activePathname: '/sub-menu-item2',
}
