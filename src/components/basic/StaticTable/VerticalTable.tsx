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
import { Typography, Link, Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CloseIcon from '@mui/icons-material/Close'
import type { TableType } from './types'
import { Input } from '../Input'
import { Tooltips } from '../ToolTips'

export const VerticalTable = ({
  data,
  handleEdit,
}: {
  data: TableType
  handleEdit?: (inputValue: string) => void
}) => {
  const [copied, setCopied] = useState<string>('')
  const [inputField, setInputField] = useState<{
    row: unknown
    column: unknown
  } | null>()
  const [inputValue, setInputValue] = useState('')
  const [inputErrorMessage, setInputErrorMessage] = useState('')

  const handleEditFn = (
    e: React.SyntheticEvent,
    row: number,
    column: number
  ) => {
    e.stopPropagation()
    setInputErrorMessage('')
    setInputValue(data?.edit?.[row][column].inputValue ?? '')
    setInputField({ row, column })
  }

  const addInputValue = (value: string, row: number, column: number) => {
    setInputValue(value)
    const editField = data?.edit?.[row][column]
    editField?.isValid &&
      setInputErrorMessage(
        !editField?.isValid(value.trim()) ? editField?.errorMessage ?? '' : ''
      )
  }

  const renderInputField = (row: number, column: number) => {
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '100%' }}>
          <Input
            onChange={(e) => {
              addInputValue(e.target.value, row, column)
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter' && !inputErrorMessage) {
                setInputField(null)
                if (handleEdit) handleEdit(inputValue)
              }
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
            <span>
              <ErrorOutlineIcon sx={{ marginTop: '35px' }} color="error" />
            </span>
          </Tooltips>
        )}
        <CloseIcon
          onClick={() => {
            setInputField(null)
          }}
          sx={{ marginTop: '25px' }}
        />
      </div>
    )
  }

  const renderTextvalue = (text: string | undefined) => text ?? ''

  return (
    <table
      style={{ width: '100%', borderCollapse: 'collapse' }}
      onClick={() => {
        setInputField(null)
      }}
      onKeyDown={() => {
        // do nothing
      }}
    >
      <thead>
        <tr>
          {data.head.map((col, c) => (
            <th
              key={JSON.stringify(c)}
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
          <tr key={JSON.stringify(r)}>
            {row.map((CustomComp, c) => {
              const isStringTypeProp = typeof CustomComp === 'string'
              return (
                <td
                  key={JSON.stringify(c)}
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
                      renderInputField(r, c)
                    ) : (
                      <Link
                        target="_blank"
                        href={data?.edit?.[r]?.[c]?.clickableLink}
                        sx={{
                          color: '#111111 !important',
                        }}
                      >
                        <Typography
                          variant="body3"
                          sx={{
                            color:
                              data?.edit?.[r]?.[c]?.clickableLink && '#0088CC',
                            cursor:
                              data?.edit?.[r]?.[c]?.clickableLink && 'pointer',
                          }}
                        >
                          {isStringTypeProp ? CustomComp : <CustomComp />}
                        </Typography>
                      </Link>
                    )}
                    {data?.edit?.[r]?.[c].copyValue && c !== 0 && (
                      <Box
                        sx={{
                          cursor: 'pointer',
                          display: 'flex',
                          color:
                            copied === data?.edit?.[r]?.[c].copyValue
                              ? '#00cc00'
                              : '#888888',
                          ':hover': {
                            color:
                              copied === data?.edit?.[r]?.[c].copyValue
                                ? '#00cc00'
                                : '#0088CC',
                          },
                        }}
                        onClick={() => {
                          void (async () => {
                            const value = renderTextvalue(
                              data?.edit?.[r]?.[c].copyValue?.toString()
                            )
                            await navigator.clipboard.writeText(value)
                            setCopied(value)
                            setTimeout(() => {
                              setCopied('')
                            }, 1000)
                          })()
                        }}
                      >
                        <ContentCopyIcon
                          sx={{
                            fontSize: '18px',
                            marginLeft: '10px',
                          }}
                        />
                      </Box>
                    )}
                    {data?.edit?.[r]?.[c].icon &&
                      !inputField &&
                      (c === 0 ? (
                        <Tooltips
                          color="dark"
                          tooltipPlacement="bottom-start"
                          tooltipText={renderTextvalue(
                            data?.edit?.[r][c].inputValue
                          )}
                        >
                          <HelpOutlineIcon
                            sx={{
                              width: '2em',
                              fontSize: '19px',
                              color: '#888888',
                              cursor: 'pointer',
                              paddingTop: '2px',
                              '&:hover': {
                                color: '#0088CC',
                              },
                            }}
                          />
                        </Tooltips>
                      ) : (
                        <span style={{ marginLeft: 'auto' }}>
                          <EditIcon
                            onClick={(e) => {
                              handleEditFn(e, r, c)
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
                      ))}
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
