/********************************************************************************
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

import { Box } from '@mui/material'
import { type Meta, type StoryFn } from '@storybook/react'
import { type ReactNode } from 'react'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { Typography } from '../Typography'
import { Icon as Component, type IconProps } from '.'
const meta: Meta<typeof Component> = {
  title: 'Icon',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
}
export default meta

const Template: StoryFn<typeof Component> = (args: IconProps) => (
  <Component {...args} />
)
export const IconPreview = Template.bind({})
IconPreview.args = {
  iconName: 'Home',
  fontSize: '16',
  onClick: () => {
    console.log('icon clicked')
  },
}
const IconPreviewBlock = ({
  helperText,
  children,
}: {
  helperText: string
  children: ReactNode
}) => (
  <Box
    display={'flex'}
    alignItems={'center'}
    justifyContent={'flex-start'}
    flex={'0 1 calc(20% - 10px)'}
    gap={'0.5rem'}
  >
    <Box
      padding={0.5}
      height={'40px'}
      width={'40px'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      boxShadow={'rgba(0, 0, 0, 0.10) 0 1px 3px 0'}
    >
      {children}
    </Box>
    <Typography variant="helper">{helperText}</Typography>
  </Box>
)
export const IconSizeVariation = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} gap={'1.6rem'} width={200}>
      <IconPreviewBlock helperText="8px">
        <Component iconName="Home" fontSize={'8'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="10px">
        <Component iconName="Home" fontSize={'10'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="12px">
        <Component iconName="Home" fontSize={'12'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="14px">
        <Component iconName="Home" fontSize={'14'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="16px">
        <Component iconName="Home" fontSize={'16'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="18px">
        <Component iconName="Home" fontSize={'18'} />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="20px">
        <Component iconName="Home" fontSize={'20'} />
      </IconPreviewBlock>
    </Box>
  )
}
export const IconStateVariation = () => {
  return (
    <Box display={'flex'} flexDirection={'row'} gap={'1.6rem'} width={200}>
      <IconPreviewBlock helperText="inherit">
        <IconButton color="primary" size="small">
          <Component iconName="Home" />
        </IconButton>
      </IconPreviewBlock>
      <IconPreviewBlock helperText="default">
        <Component iconName="Home" />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="success">
        <Component iconName="Home" color="success" />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="warning">
        <Component iconName="Home" color="warning" />
      </IconPreviewBlock>
      <IconPreviewBlock helperText="error">
        <Component iconName="Home" color="error" />
      </IconPreviewBlock>
    </Box>
  )
}

export const IconUsageWithinButton = () => {
  return (
    <>
      <IconButton color="secondary" size="medium">
        <Component iconName="Add" fontSize="20" />
      </IconButton>
      <Button
        startIcon={<Component iconName="AddCircleOutline" />}
        size="small"
        sx={{ marginLeft: '0.5rem' }}
      >
        Add New
      </Button>
    </>
  )
}
