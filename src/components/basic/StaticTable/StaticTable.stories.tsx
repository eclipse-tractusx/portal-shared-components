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
import { StaticTable as Component } from '.'

export default {
  title: 'StaticTable',
  component: Component,
  tags: ['autodocs'],
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const Table = Template.bind({})
Table.args = {
  horizontal: false,
  data: {
    head: ['heading 1', 'heading 2'],
    body: [
      ['row1 col1', 'row1 col2'],
      ['row2 col1', 'row2 col2'],
      ['row3 col1', 'row3 col2'],
      ['row4 col1', 'row4 col2'],
    ],
    edit: [
      [
        {
          icon: true,
          inputValue:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
        },
        {
          icon: true,
          copyValue: 'test',
          inputValue: 'row1 col2',
          isValid: (value) => {
            console.log('Checking Validation', value)
          },
          errorMessage: 'Please enter valid value.',
        },
      ],
      [
        {
          icon: false,
        },
        {
          icon: false,
          clickableLink: 'https://google.com',
        },
      ],
    ],
  },
  handleEdit: () => {
    console.log('CLICKED')
  },
}
