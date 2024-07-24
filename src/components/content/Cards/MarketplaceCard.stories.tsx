/********************************************************************************
 * Copyright (c) 2024 BMW Group AG
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

import { type ComponentStory } from '@storybook/react'

import { Cards as Component } from '.'

export default {
  title: 'Cards',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

const items = [
  {
    title: 'Catena-X News',
    subtitle: 'Catena-X',
    subscriptionStatus: 'Pending',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'Lorem Ipsum is simply dummy text of the printing.',
    onButtonClick: () => {
      console.log('Catena-X News')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'release',
    statusText: 'In Release',
  },
  {
    title: 'Samrt MOM',
    subtitle: 'German Edge Cloud GmbH & Co. KG',
    subscriptionStatus: 'Active',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description:
      'Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    onButtonClick: () => {
      console.log('Samrt MOM')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'active',
    statusText: 'Active',
  },
  {
    title: 'Project Implementation: Earth Commerce',
    subtitle: 'Catena-X',
    subscriptionStatus: 'Active',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'sea takimata sanctus est Lorem ipsum dolor sit amet.',
    onButtonClick: () => {
      console.log('Fraud Reporter')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
    status: 'inactive',
    statusText: 'inactive',
  },
  {
    title: 'Fraud Dashboard',
    subtitle: 'Catena-X',
    subscriptionStatus: 'Pending',
    image: {
      src: 'https://images.unsplash.com/photo-1517153295259-74eb0b416cee?auto=format&fit=crop&w=640&q=420',
      alt: 'Catena-X Card',
    },
    description: 'At vero eos et accusam et justo duo dolores et ea rebum.',
    onButtonClick: () => {
      console.log('Fraud Dashboard')
    },
    readMoreText: 'Read more',
    readMoreLink: '#',
  },
]

const activeSubmenuOptions = [
  {
    label: 'Tab 1',
    value: 'tab1',
  },
  {
    label: 'Tab 2',
    value: 'tab2',
  },
]
const inactiveSubmenuOptions = [
  {
    label: 'Tab 1',
    value: 'tab1',
    disabled: true,
  },
  {
    label: 'Tab 2',
    value: 'tab2',
    disabled: true,
  },
]

export const MarketplaceCard = Template.bind({})
MarketplaceCard.args = {
  columns: 6,
  variant: 'compact',
  buttonText: 'Details',
  imageSize: 'medium',
  imageShape: 'round',
  addButtonClicked: false,
  subMenu: true,
  tooltipText: 'Action is pending',
  activeSubmenuOptions,
  inactiveSubmenuOptions,
  items,
}
