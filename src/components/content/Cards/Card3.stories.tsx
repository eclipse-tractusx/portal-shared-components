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

import { ComponentStory } from '@storybook/react'
import { StatusVariants } from './CardChip'

import { Card3 as Component } from './Card3'

export default {
  title: 'Cards',
  component: Component,
  argTypes: {},
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

const items = [
  {
    credentialType: "DISMANTLER_CERTIFICATE",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ssiDetailData: [
      {
        credentialId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        participationStatus: StatusVariants.pending,
        expiryDate: "2023-07-04T13:42:32.645Z",
        document: {
          documentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          documentName: "string"
        }
      }
    ]
  },
  {
    credentialType: "CATENA_X",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ssiDetailData: [
      {
        credentialId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        participationStatus: StatusVariants.active,
        expiryDate: "2023-07-04T13:42:32.645Z",
        document: {
          documentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          documentName: "string"
        }
      }
    ]
  },
  {
    credentialType: "DISMANTLER_CERTIFICATE",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ssiDetailData: [
      {
        credentialId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        participationStatus: StatusVariants.inactive,
        expiryDate: "2023-07-04T13:42:32.645Z",
        document: {
          documentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          documentName: "string"
        }
      }
    ]
  }
]   

export const Card3 = Template.bind({})
Card3.args = {
  items: items,
}
