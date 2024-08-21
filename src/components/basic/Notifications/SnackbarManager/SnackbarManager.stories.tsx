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

import { type StoryFn } from '@storybook/react'

import { GlobalSnackbarContainer, type SnackbarOptions, useSnackbar } from '.'
import { Button } from '../../Button'

const Template: StoryFn<SnackbarOptions> = (args) => {
  const { showSnackbar } = useSnackbar()
  const handleAction = () => {
    showSnackbar(args)
  }
  return (
    <>
      <div>
        <Button
          size="small"
          onClick={() => {
            handleAction()
          }}
        >
          Render snackbar
        </Button>
      </div>

      <GlobalSnackbarContainer />
    </>
  )
}

export default {
  title: 'Notifications',
  component: Template,
  tags: ['autodocs'],
  argTypes: {},
}
export const SnackbarHookDemo = Template.bind({})
SnackbarHookDemo.args = {
  severity: 'error',
  autoClose: false,
  title: 'Lorem Ipsum',
  description: 'Notification sentence comes here',
  showIcon: true,
}

export const SnackbarExample = () => {
  // Retrieve the showSnackbar function from the custom hook
  const { showSnackbar } = useSnackbar()

  // Call the function to render the Snackbar with custom properties
  const handleError = () => {
    showSnackbar({
      severity: 'error',
      autoClose: true,
      title: 'Error message title',
      showIcon: true,
    })
  }

  const handleSuccess = () => {
    showSnackbar({
      severity: 'success',
      autoClose: true,
      title: 'Success message title',
      showIcon: true,
    })
  }
  return (
    <>
      <div
        id="root-element"
        style={{
          height: '30vh',
          width: '50vw',
        }}
      >
        <Button
          size="small"
          onClick={() => {
            handleError()
          }}
        >
          Notify error
        </Button>
        <br />
        <br />
        <Button
          size="small"
          onClick={() => {
            handleSuccess()
          }}
        >
          Notify success
        </Button>
      </div>

      {/* Ensure Snackbar renders globally by adding GlobalSnackbarContainer in root */}
      <GlobalSnackbarContainer />
    </>
  )
}
