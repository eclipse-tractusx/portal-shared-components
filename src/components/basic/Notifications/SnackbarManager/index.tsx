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

import { useState, useEffect, useCallback } from 'react'
import { type PageSnackbarProps, PageSnackbar } from '../Snackbar'
import { PageSnackbarStack } from '../Snackbar/PageSnackbarStack'

export interface SnackbarOptions extends Omit<PageSnackbarProps, 'open'> {}

// Singleton pattern for managing the snackbar globally
const SnackbarManager = (() => {
  let showSnackbar: ((options: SnackbarOptions) => void) | null = null

  const registerSnackbar = (callback: (options: SnackbarOptions) => void) => {
    showSnackbar = callback
  }

  const show = (options: SnackbarOptions) => {
    if (showSnackbar) {
      showSnackbar(options)
    }
  }

  return { registerSnackbar, show }
})()

// Hook to expose the showSnackbar method to trigger snackbars
export const useSnackbar = () => {
  const showSnackbar = SnackbarManager.show
  return { showSnackbar }
}

// Global container to render the snackbar component
export const GlobalSnackbarContainer = () => {
  const [snackbar, setSnackbar] = useState<SnackbarOptions | null>(null)

  const openSnackbar = useCallback((options: SnackbarOptions) => {
    setSnackbar(options)
  }, [])

  const handleClose = useCallback(() => {
    setSnackbar(null)
  }, [])

  useEffect(() => {
    SnackbarManager.registerSnackbar(openSnackbar)
  }, [openSnackbar])

  return (
    <PageSnackbarStack>
      {snackbar && (
        <PageSnackbar {...snackbar} onCloseNotification={handleClose} open />
      )}
    </PageSnackbarStack>
  )
}
