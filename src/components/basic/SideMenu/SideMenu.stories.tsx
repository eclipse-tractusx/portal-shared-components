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

import { Box } from '@mui/material'
import { type ComponentStory } from '@storybook/react'

import { SideMenu as Component } from '.'
import { DraggableChip } from '../Chip/DraggableChip'

export default {
  title: 'Menus',
  component: Component,
  tags: ['autodocs'],
  args: {
    header: 'Filter Semantic Models by assigned Use Cases',
    subHeader: 'Assign a Use Case by dragging it to a Semantic Model',
    buttonTextCollapsed: 'Show Filter',
    buttonTextExpanded: 'Close Filter',
    isExpanded: false,
  },
}

const Template: ComponentStory<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const SideMenu = Template.bind({})
SideMenu.args = {
  children: (
    <Box sx={{ '& > * + *': { marginTop: 2 } }}>
      <DraggableChip>name_use_case_4</DraggableChip>
      <DraggableChip>name_use_case_4</DraggableChip>
      <DraggableChip>name_use_case_4</DraggableChip>
      <DraggableChip isSelected>name_use_case_7</DraggableChip>
      <DraggableChip>name_use_case_7</DraggableChip>
      <DraggableChip>name_use_case_7</DraggableChip>
      <DraggableChip>name_use_case_8</DraggableChip>
      <DraggableChip>name_use_case_8</DraggableChip>
    </Box>
  ),
}
