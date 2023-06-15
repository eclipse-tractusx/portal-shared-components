/********************************************************************************
 * Copyright (c) 2021, 2023 BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
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

import { Box, useTheme } from '@mui/material'
import MuiDialogActions, {
  type DialogActionsProps as MuiDialogActionsProps,
} from '@mui/material/DialogActions'
import { CONTENT_SPACING_RIGHT_LEFT } from './index'

export interface DialogActionProps extends MuiDialogActionsProps {
  helperText?: string
}

export const DialogActions = ({
  children,
  helperText,
  ...props
}: DialogActionProps) => {
  const { spacing } = useTheme()

  return (
    <Box
      sx={{
        padding: spacing(4, CONTENT_SPACING_RIGHT_LEFT),
        backgroundColor: 'background.background09',
      }}
    >
      {helperText && (
        <Box
          sx={{ paddingBottom: 4, typography: 'body3', textAlign: 'center' }}
        >
          {helperText}
        </Box>
      )}
      <MuiDialogActions {...props}>{children}</MuiDialogActions>
    </Box>
  )
}
