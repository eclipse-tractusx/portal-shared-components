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
import EditIcon from '@mui/icons-material/Edit'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CloseIcon from '@mui/icons-material/Close'
import { Input } from '../../../main'
import { Tooltips } from '../ToolTips'

export type EditFieldType = string | number | boolean

export const EditField = ({
  value,
  handleEdit,
  isValid,
  errorMessage,
}: {
  value: EditFieldType
  handleEdit: (value: EditFieldType) => void | Promise<void>
  isValid?: (value: string) => unknown
  errorMessage?: string
}) => {
  const [inputField, setInputField] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputErrorMessage, setInputErrorMessage] = useState('')

  const handleEditFn = (value: string) => {
    setInputErrorMessage('')
    setInputValue(value ?? '')
    setInputField(true)
  }

  const addInputValue = (value: string) => {
    setInputValue(value)
    isValid &&
      setInputErrorMessage(!isValid(value.trim()) ? errorMessage ?? '' : '')
  }

  const renderInputField = () => {
    return (
      <div
        style={{ width: '100%', display: 'flex', alignItems: 'center' }}
        className="cx-static-table__edit-field"
      >
        <div style={{ width: '100%' }}>
          <Input
            className="cx-static-table__edit-field--input"
            onChange={(e) => {
              addInputValue(e.target.value)
            }}
            onKeyPress={(event) => {
              void (async () => {
                if (event.key === 'Enter' && !inputErrorMessage) {
                  setInputField(false)
                  await handleEdit(inputValue)
                }
              })()
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            value={inputValue}
          />
        </div>
        {inputErrorMessage && (
          <Tooltips
            color="dark"
            tooltipPlacement="bottom-start"
            tooltipText={inputErrorMessage}
          >
            <span className="cx-static-table__edit-field--tooltop">
              <ErrorOutlineIcon sx={{ marginTop: '35px' }} color="error" />
            </span>
          </Tooltips>
        )}
        <CloseIcon
          className="cx-static-table__edit-field--icon"
          onClick={() => {
            setInputField(false)
          }}
          sx={{ marginTop: '25px' }}
        />
      </div>
    )
  }

  return (
    <div>
      {inputField ? (
        renderInputField()
      ) : (
        <span
          className="cx-static-table__input-field"
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row' }}
        >
          <Typography
            className="cx-static-table__input-field--text"
            variant="body3"
          >
            {value}
          </Typography>
          <span style={{ marginLeft: 'auto' }}>
            <EditIcon
              className="cx-static-table__input-field--icon"
              onClick={() => {
                handleEditFn(value as string)
              }}
              sx={{
                fontSize: '18px',
                color: '#888888',
                cursor: 'pointer',
                '&:hover': {
                  color: '#0088CC',
                },
              }}
            />
          </span>
        </span>
      )}
    </div>
  )
}
