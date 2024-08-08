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

import { type ComponentStory } from '@storybook/react'

import { Stepper as Component } from '.'

export default {
  title: 'Steppers',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
}

const stepperElements = [
  {
    step: 1,
    headline: 'App Market Card',
    text: 'Created',
    color: '#B3CB2D',
  },
  {
    step: 2,
    headline: 'Contract & Consent',
    color: '#0F71CB',
  },
  {
    step: 3,
    headline: 'Responsibilities & admin account',
  },
  {
    step: 4,
    headline: 'Beta Test',
  },
  {
    step: 5,
    headline: 'Validate & Publish',
  },
  {
    step: 6,
    headline: 'Verify your company data',
  },
]

const Template: ComponentStory<typeof Component> = (
  args: React.ComponentProps<typeof Component>
) => <Component {...args} />

export const Stepper = Template.bind({})
Stepper.args = {
  list: stepperElements,
  showSteps: 6,
  activeStep: 3,
  tooltipText: 'Continue where you left',
  tooltipLink: '/registration/form',
}
