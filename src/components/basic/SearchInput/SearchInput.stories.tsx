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

import { useState } from 'react'
import { ComponentStory } from '@storybook/react'

import { SearchInput as Component } from '.'
import searchInputDoc from '../../../../docs/storybook/SearchInput.md?raw'

export default {
  title: 'Form/SearchInput',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: { component: searchInputDoc },
    },
  },
}

const Template: ComponentStory<typeof Component> = (args: any) => (
  <Component {...args} />
)

export const SearchInput = Template.bind({})
SearchInput.args = {}

export const SearchInputWithDebounce = () => {
  const [term, setTerm] = useState('')

  return (
    <Component
      debounceTimeout={500}
      value={term}
      onSearch={(v) => console.log('onSearch', v)}
      onChange={(e) => setTerm(e.target.value)}
    />
  )
}
