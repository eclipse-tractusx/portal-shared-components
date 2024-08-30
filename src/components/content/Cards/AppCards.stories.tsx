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

import type { Meta, StoryObj } from '@storybook/react'
import { Cards as Component } from '.'

const meta: Meta<typeof Component> = {
  title: 'Cards/App Card',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['minimal', 'expanded', 'compact', 'text-only', 'text-details'],
      control: { type: 'radio' },
    },
  },
}

export default meta

type Story = StoryObj<typeof Component>

const item = {
  title: 'Digital Twin Aspect Debugger',
  subtitle: 'Catena-X',
  image: {
    src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
    alt: 'Catena-X Card',
  },
  rating: 4.5,
  price: 'free to use',
  description: 'Lorem Ipsum is simply dummy text of the printing.',
  onButtonClick: () => {},
  onSecondaryButtonClick: () => {},
}

export const DefaultAppCard: Story = {
  args: {
    items: [item, item],
    variant: 'minimal',
    expandOnHover: false,
    buttonText: 'Details',
    filledBackground: false,
    boxClickable: false,
  },
}

export const MinimalAppCard: Story = {
  args: {
    items: [item, item],
    variant: 'minimal',
    expandOnHover: true,
    buttonText: 'Details',
    filledBackground: false,
    boxClickable: false,
  },
}

export const DetailedAppCard: Story = {
  args: {
    items: [item, item],
    variant: 'expanded',
    expandOnHover: false,
    buttonText: 'Details',
    filledBackground: false,
    boxClickable: false,
  },
}
