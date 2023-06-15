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

import { useTheme } from '@mui/material'
import MuiDialogContent, {
  type DialogContentProps as MuiDialogContentProps,
} from '@mui/material/DialogContent'
import { CONTENT_SPACING_RIGHT_LEFT } from './index'

export type DialogContentProps = MuiDialogContentProps

export const DialogContent = (props: DialogContentProps) => {
  const { spacing } = useTheme()

  return (
    <MuiDialogContent
      sx={{
        fontFamily: 'fontFamily',
        padding: spacing(0, CONTENT_SPACING_RIGHT_LEFT, 4),
        textAlign: 'center',
        '& > *': {
          textAlign: 'left',
        },
      }}
      {...props}
    >
      {props.children}
    </MuiDialogContent>
  )
}
