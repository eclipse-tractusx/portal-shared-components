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

import { useState } from 'react'
import { Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import CloseIcon from '@mui/icons-material/Close'
import { TableType } from './types'
import { Input } from '../Input'
import { Tooltips } from '../ToolTips'

const DOMAIN =
  /([a-z0-9]|[a-z0-9][a-z0-9-]{0,61}[a-z0-9])(\.([a-z0-9]|[a-z0-9][a-z0-9-]{0,61}[a-z0-9])){1,10}/i
const URLPATH = /(\/[a-z0-9-._~:/?#[\]@!$&'()*+,;=%]{0,500}){0,20}/

const isURL = (expr: string) =>
  new RegExp(
    `^(https)://(${DOMAIN.source})(:\\d{1,5})?(${URLPATH.source})?$`,
    'i'
  ).test(expr)

export const VerticalTable = ({
  data,
  handleEditURL,
}: {
  data: TableType
  handleEditURL?: (inputURL: string) => void
}) => {
  const [inputField, setInputField] = useState<any>(null)
  const [inputURL, setInputURL] = useState('')
  const [URLErrorMsg, setURLErrorMessage] = useState('')

  const handleEditFn = (
    e: React.SyntheticEvent,
    row: number,
    column: number
  ) => {
    e.stopPropagation()
    setURLErrorMessage('')
    setInputURL(data.edit && data.edit[row] ? data.edit[row][column].url : '')
    setInputField({ row: row, column: column })
  }

  const addInputURL = (value: string) => {
    setInputURL(value)
    setURLErrorMessage(!isURL(value.trim()) ? 'Please enter valid URL' : '')
  }

  const renderInputField = () => {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          <Input
            name="tentant_url"
            onChange={(e) => {
              addInputURL(e.target.value)
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter' && !URLErrorMsg) {
                setInputField(null)
                handleEditURL && handleEditURL(inputURL)
              }
            }}
            onClick={(e) => {
              e.stopPropagation()
            }}
            value={inputURL}
          />
        </div>
        {URLErrorMsg && (
          <Tooltips
            color="dark"
            tooltipPlacement="bottom-start"
            tooltipText={URLErrorMsg}
          >
            <span>
              <ErrorOutlineIcon sx={{ marginTop: '35px' }} color="error" />
            </span>
          </Tooltips>
        )}
        <CloseIcon
          onClick={() => setInputField(null)}
          sx={{ marginTop: '25px' }}
        />
      </div>
    )
  }

  return (
    <table
      style={{ width: '100%', borderCollapse: 'collapse' }}
      onClick={() => setInputField(null)}
    >
      <thead>
        <tr>
          {data.head.map((col, c) => (
            <th
              key={c}
              style={{
                backgroundColor: '#ecf0f4',
                textAlign: 'left',
                padding: '10px 15px',
              }}
            >
              <Typography variant="label3">{col}</Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.body.map((row, r) => (
          <tr key={r}>
            {row.map((CustomComp, c) => {
              const isStringTypeProp = typeof CustomComp === 'string'
              return (
                <td
                  key={c}
                  style={{
                    padding: '10px 15px',
                    borderBottom: '1px solid #f1f1f1',
                    whiteSpace: 'normal',
                    wordBreak: 'break-all',
                    width: '50%',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {inputField &&
                    inputField.row === r &&
                    inputField.column === c ? (
                      renderInputField()
                    ) : (
                      <Typography variant="body3">
                        {isStringTypeProp ? CustomComp : <CustomComp />}
                      </Typography>
                    )}
                    {data.edit &&
                      data.edit[r] &&
                      data.edit[r][c].editIcon &&
                      !inputField && (
                        <span style={{ marginLeft: 'auto' }}>
                          <EditIcon
                            onClick={(e) => handleEditFn(e, r, c)}
                            sx={{
                              fontSize: '18px',
                              color: '#888888',
                            }}
                          />
                        </span>
                      )}
                  </div>
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
