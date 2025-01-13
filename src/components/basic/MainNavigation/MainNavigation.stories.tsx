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

import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Box } from '@mui/material'
import { type StoryFn } from '@storybook/react'
import CXLogoText from '../../../assets/logo/cx-logo-text.svg'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { MainNavigation as Component } from '.'

export default {
  title: 'Navigation',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const items = [
  {
    title: 'Dataspace Participate',
    children: [
      { title: 'Partner Network', href: '/partner-network' },
      { title: 'Use Case Participation', href: '/use-case-participation' },
    ],
  },
  {
    title: 'Marketplace',
    children: [
      { title: 'App Marketplace', href: '/app-marketplace' },
      { title: 'Service Marketplace', href: '/service-marketplace' },
      { title: 'App & Service Subscription', href: '/company-subscription' },
    ],
  },
  {
    title: 'Marketplace Management',
    children: [
      {
        title: 'App Management',
        children: [
          { title: 'App Overview', href: '/app-overview' },
          { title: 'App Release Process', href: '/app-release-process' },
          { title: 'App Subscription', href: '/app-subscription' },
        ],
      },
      {
        title: 'Service Management',
        children: [
          { title: 'Service Overview', href: '/service-overview' },
          {
            title: 'Service Release Process',
            href: '/service-release-process',
          },
          { title: 'Service Subscription', href: '/service-subscription' },
        ],
      },
    ],
  },
  {
    title: 'CX-Operator',
  },
]

const Template: StoryFn<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => (
  <Component {...args}>
    <Box
      component="img"
      sx={{
        display: 'inline-block',
        width: '170px',
        height: '40px',
      }}
      src={CXLogoText}
    />
    <Box>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        sx={{ backgroundColor: 'white', marginRight: '16px' }}
      >
        Help
      </Button>
      <IconButton size="medium" color="primary">
        <PersonOutlineIcon />
      </IconButton>
    </Box>
  </Component>
)

export const MainNavigation = Template.bind({})
MainNavigation.args = {
  items,
}
