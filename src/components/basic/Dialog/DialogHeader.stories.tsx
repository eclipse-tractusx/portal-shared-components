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
import { DialogHeader as Component } from './DialogHeader'

export default {
  title: 'Modal',
  component: Component,
  tags: ['autodocs'],
}

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const DialogHeader = Template.bind({})
DialogHeader.args = {
  title: 'Title',
  intro:
    'Optional intro. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  closeWithIcon: false,
}
