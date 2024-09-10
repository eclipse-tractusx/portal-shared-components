/********************************************************************************
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
import { NewSubNavigation as Component } from '.'

export default {
  title: 'Navigation',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const NewSubNavigation = Template.bind({})
NewSubNavigation.args = {
  title: 'Sub Menu',
  navigationArray: [
    {
      index: 1,
      title: 'Introduction',
      navigation: 'intro-id',
    },
    {
      index: 2,
      title: 'Core Values',
      navigation: 'core-id',
    },
    {
      index: 3,
      title: 'Benefits',
      navigation: 'advantage-id',
    },
    {
      index: 4,
      title: 'Terminology',
      navigation: 'terminology-id',
    },
    {
      index: 5,
      title: 'Data models',
      navigation: 'data-model-id',
    },
    {
      index: 6,
      title: 'Data exchange',
      navigation: 'data-exchange-id',
    },
    {
      index: 7,
      title: 'Connectivity-Portfolio',
      navigation: 'connection-id',
    },
    {
      index: 8,
      title: 'Business Applications',
      navigation: 'application-id',
    },
  ],
  buttonArray: [
    {
      buttonLabel: 'Button1',
      onButtonClick: () => {
        console.log('Button1')
      },
    },
    {
      buttonLabel: 'Button1',
      onButtonClick: () => {
        console.log('Button1')
      },
    },
  ],
  onClick: () => {
    console.log('on navigation link click')
  },
}
