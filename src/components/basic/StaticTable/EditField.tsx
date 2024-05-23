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
import { useState } from 'react'
import { Input } from '../../../main'
import EditIcon from '@mui/icons-material/Edit'

export type EditFieldType = string | number | boolean

export const EditField = ({
  value,
  onEdit,
}: {
  value: EditFieldType
  onEdit: (value: EditFieldType) => void
}) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editValue, setEditValue] = useState<EditFieldType>('')

  const toggleEdit = () => {
    setEdit(!edit)
  }

  console.log(editValue)

  return (
    <div onClick={toggleEdit}>
      {edit ? (
        <Input
          onKeyUp={(event: React.KeyboardEvent) => {
            setEditValue((event.target as HTMLInputElement).value)
          }}
          value={value}
        />
      ) : (
        <span
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}
        >
          <Typography variant="body1">{value}</Typography>
          <EditIcon />
        </span>
      )}
    </div>
  )
}
