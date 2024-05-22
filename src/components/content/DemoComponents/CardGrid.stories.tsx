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

import { CardGrid as Component } from './CardGrid'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Component> = {
  args: {
    baseUrl:
      'https://raw.githubusercontent.com/eclipse-tractusx/portal-assets/main/public/assets/',
    align: 'center',
    provider: {
      detailsWithImageRow1: [
        {
          title: 'Subscription',
          imagePath: '/images/content/teaser.png',
          description: 'This is an example description',
          readMore: '',
          backgroundColor: '#FFFFFF',
          imageShape: 'circle',
          id: '1',
        },
        {
          title: 'Subscription Flow',
          imagePath: '/images/content/teaser.png',
          description: 'This are the details which I will still add',
          readMore: '',
          backgroundColor: '#FFFFFF',
          imageShape: 'circle',
          id: '2',
        },
        {
          title: 'Authority',
          imagePath: '/images/content/teaser.png',
          description: 'Coming soon',
          readMore: '',
          backgroundColor: '#FFFFFF',
          imageShape: 'circle',
          id: '3',
        },
      ],
      detailsWithImageRow2: [
        {
          title: 'Subscription Authority',
          imagePath: '/images/content/teaser.png',
          description: 'Add your own description here',
          readMore: '',
          backgroundColor: '#FFFFFF',
          imageShape: 'circle',
          id: '11',
        },
        {
          title: 'Flow',
          imagePath: '/images/content/teaser.png',
          description: 'This is an example description',
          readMore: '',
          backgroundColor: '#FFFFFF',
          imageShape: 'circle',
          id: '12',
        },
      ],
      detailsWithoutImageRow1: [
        {
          title: 'Who can subscribe?',
          description: 'the details will get added asap',
          readMore: '/help',
          readMoreTitle: 'Details',
          backgroundColor: '#FFFFFF',
          id: '21',
        },
        {
          title: 'What happens after the subscription?',
          description: 'the details will get added asap',
          readMore: '/help',
          readMoreTitle: 'More',
          backgroundColor: '#FFFFFF',
          id: '22',
        },
        {
          title: 'How can I use the service?',
          description: 'This is an example description',
          readMore: '/help',
          readMoreTitle: 'Visit',
          backgroundColor: '#FFFFFF',
          id: '33',
        },
      ],
    },
  },
}
