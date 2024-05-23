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

import { Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

export type CopyFieldType = string | number | boolean

export const CopyField = ({ value }: { value: CopyFieldType }) => {
  const copyValue = () => {
    console.log('copy ', value.toString())
  }

  return (
    <div onClick={() => copyValue}>
      <span
        style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}
      >
        <Typography variant="body1">{value}</Typography>
        <ContentCopyIcon />
      </span>
    </div>
  )
}
