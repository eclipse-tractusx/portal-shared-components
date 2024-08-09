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

import { StoryFn } from '@storybook/react'

import Component from '.'
import { Box } from '@mui/material'

export default {
  title: 'Icon',
  component: Component,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
    },
  },
}

const Template: StoryFn<typeof Component> = (args: any) => (
  <Component {...args} />
)
export const IconPreview = Template.bind({})
IconPreview.args = {
  iconName: 'Mood',
  fontSize: '16',
  onClick: () => console.log('icon clicked'),
}

export const IconSizeVariation = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'1.6rem'} width={200}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>8px</div>
        <Component iconName="Mood" fontSize={'8'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>10px</div>
        <Component iconName="Mood" fontSize={'10'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>12px</div>
        <Component iconName="Mood" fontSize={'12'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>14px</div>
        <Component iconName="Mood" fontSize={'14'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>16px</div>
        <Component iconName="Mood" fontSize={'16'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>18px</div>
        <Component iconName="Mood" fontSize={'18'} />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>20px</div>
        <Component iconName="Mood" fontSize={'20'} />
      </Box>
    </Box>
  )
}
export const IconStateVariation = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'1.6rem'} width={200}>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>default</div>
        <Component iconName="Menu" />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>primary</div>
        <Component iconName="SentimentNeutral" color="primary" />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>success</div>
        <Component iconName="Mood" color="success" />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>warning</div>
        <Component iconName="Warning" color="warning" />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <div>error</div>
        <Component iconName="Error" color="error" />
      </Box>
    </Box>
  )
}
