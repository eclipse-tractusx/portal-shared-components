/********************************************************************************
 * Copyright (c) 2024  Contributors to the Eclipse Foundation
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

import React from 'react'
import { type StoryFn } from '@storybook/react'
import { QuickLinks as Component } from './index'

export default {
  title: 'QuickLinks',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const QuickLinks = Template.bind({})
QuickLinks.args = {
  headerTitle: 'Quick Links',
  alignButtons: 'left',
  items: [
    {
      background: '#e2e2e4',
      title: 'Order Status',
      navigate: '/',
    },
    {
      background: '#e2e2e4',
      title: 'shopping-help',
      navigate: '/',
    },
    {
      background: '#e2e2e4',
      title: 'Returns',
      navigate: '/',
    },
    {
      background: '#e2e2e4',
      title: 'Your Saves',
      navigate: '/',
    },
  ],
}
