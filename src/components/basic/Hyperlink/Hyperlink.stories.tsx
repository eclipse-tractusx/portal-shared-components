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

import { Info } from '@mui/icons-material'
import type { Meta, StoryObj } from '@storybook/react'
import { Hyperlink } from '.'

const meta: Meta<typeof Hyperlink> = {
  title: 'Hyperlink',
  component: Hyperlink,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Hyperlink>

export const Default: Story = {
  args: {
    text: 'Home',
    href: '/?path=/docs/hyperlink--docs',
  },
}

export const Underline: Story = {
  args: {
    text: 'Home',
    underline: true,
    href: '/?path=/docs/hyperlink--docs',
  },
}

export const TrailingVisual: Story = {
  args: {
    text: 'Home',
    trailingIcon: <Info />,
    href: '/?path=/docs/hyperlink--docs',
  },
}

export const LeadingVisual: Story = {
  args: {
    text: 'Home',
    leadingIcon: <Info />,
    href: '/?path=/docs/hyperlink--docs',
  },
}

export const SmallSizeVariant: Story = {
  args: {
    text: 'Home',
    size: 'small',
    href: '/?path=/docs/hyperlink--docs',
    leadingIcon: <Info />,
  },
}

export const HeadingText: Story = {
  args: {
    text: 'Home',
    size: 'small',
    isHeading: true,
    href: '/?path=/docs/hyperlink--docs',
  },
}
