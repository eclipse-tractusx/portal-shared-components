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

import type { Meta, StoryObj } from '@storybook/react'
import { TextImageSideBySideWithSections as Component } from './TextImageSideBySideWithSections'

const meta: Meta<typeof Component> = {
  component: Component,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof Component> = {
  args: {
    provider: {
      title: 'Example title',
      description: 'Example description for the component',
      imagePath: '/images/content/teaser.png',
      subsections: [
        {
          title: 'User Management',
          description:
            'To add further members of your company as users to the portal, please proceed by reviewing the <strong>Role Descriptions</strong> and adding the desired colleagues via the <strong>User Management</strong><1></1><1></1>',
          id: 'user-id',
          sectionLink: {
            data: [
              {
                title: '>> Role Descriptions',
                id: '/',
                internal: false,
              },
              {
                title: '>> User Management',
                id: '/',
                internal: false,
              },
            ],
          },
        },
        {
          title: 'Configure Company IdP (optional)',
          description:
            'If your company would like to use their own company authentication to have the comfort of federated user login and user credentials not shared with an operator, you can connect your company IdP with the Catena-X shared IdP. Please refer to the following documentation to show you the necessary steps to configure your <strong>Company IdP</strong>.<1></1><1></1>',
          id: 'idp-id',
          sectionLink: {
            data: [
              {
                title: '>> Configure your IdP',
                id: '/',
                internal: false,
              },
            ],
          },
        },
        {
          title: 'Company Certificates',
          description: '',
          id: 'company-id',
          sectionLink: {
            data: [
              {
                title: '>> Setup your company certificates',
                id: '/',
                internal: false,
              },
            ],
          },
        },
        {
          title: 'Use Case Frameworks',
          description: '',
          id: 'usecase-id',
          sectionLink: {
            data: [
              {
                title: '>> Sign the relevant use case frameworks.',
                id: '/',
                internal: false,
              },
            ],
          },
        },
      ],
      sectionLink: {
        data: [
          {
            title: '>> IdP Config',
            id: 'idp-id',
            internal: true,
          },
          {
            title: '>> User Management',
            id: 'user-id',
            internal: true,
          },
          {
            title: '>> Company Certificates',
            id: 'company-id',
            internal: true,
          },
          {
            title: '>> Use Case Frameworks',
            id: 'usecase-id',
            internal: true,
          },
        ],
      },
    },
    scrollTop: () => {},
    showScroll: true,
  },
}
