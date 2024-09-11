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

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { Box, Divider, Typography } from '@mui/material'
import { type ComponentStory } from '@storybook/react'
import { Table } from '../StaticTable/StaticTable.stories'
import { type CustomAccordionProps } from './Item'
import { CustomAccordion as Component } from '.'

export default {
  title: 'CustomAccordion',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    children: {},
  },
}

const Template: ComponentStory<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

const item1Open: CustomAccordionProps = {
  expanded: true,
  id: 'panel-1',
  title: 'First Item',
  icon: <HomeOutlinedIcon />,
  buttonText: 'Close',
  children: <Typography>Content of the first item</Typography>,
}

const item1OpenColored: CustomAccordionProps = {
  expanded: false,
  id: 'panel-1',
  title: 'First Item',
  icon: <HomeOutlinedIcon />,
  color: 'background.background09',
  children: (
    <Box>
      <Typography variant="h4">Content of the first item</Typography>
      <Divider sx={{ m: 2 }} />
      <Typography mb={2}>
        You can add any complex content into the accordion item. For example a
        table:
      </Typography>
      <Table
        data={{
          head: ['Header 1', 'Header 2', 'Header 3'],
          body: [
            ['data 1', 'data 2', 'data 3'],
            ['data 1', 'data 2', 'data 3'],
            ['data 1', 'data 2', 'data 3'],
          ],
        }}
      />
    </Box>
  ),
}
const item2Closed: CustomAccordionProps = {
  expanded: false,
  id: 'panel-2',
  icon: <SettingsOutlinedIcon />,
  title: 'Second Item',
  children: <Typography>Content of the second item</Typography>,
}
const item3Closed: CustomAccordionProps = {
  expanded: false,
  id: 'panel-3',
  title: 'Third Item',
  children: <Typography>Content of the third item</Typography>,
}

export const BasicAccordion = Template.bind({})
BasicAccordion.args = {
  items: [item1Open, item2Closed, item3Closed],
}

export const ColoredAccordion = Template.bind({})
ColoredAccordion.args = {
  items: [item1OpenColored, item2Closed, item3Closed],
}
