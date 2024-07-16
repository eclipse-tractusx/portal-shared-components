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

export type TableCellType = string | number | boolean | JSX.Element
export interface VerticalTableType {
  head: TableCellType[]
  body: TableCellType[][]
  edit?: Array<
    Array<{
      icon: boolean
      copyValue?: string
      inputValue?: string
      clickableLink?: string
      isValid?: (value: string) => unknown
      errorMessage?: string
    }>
  >
  copy?: Array<
    Array<{
      icon: boolean
      copyValue?: string
    }>
  >
}

export const VerticalTableNew = ({ data }: { data: VerticalTableType }) => {
  return (
    <table
      style={{ borderCollapse: 'collapse', width: '100%' }}
      className="cx-static-table__vertical-new"
    >
      <thead className="cx-static-table__vertical-new--thead">
        <tr className="cx-static-table__vertical-new--tr">
          {data.head.map((col, c) => (
            <th
              className="cx-static-table__vertical-new--th"
              style={{
                backgroundColor: '#ecf0f4',
                padding: '10px 15px',
                textAlign: 'left',
              }}
              key={JSON.stringify(c)}
            >
              <Typography
                variant="label3"
                className="cx-static-table__vertical-new--col"
              >
                {col}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="cx-static-table__vertical-new--tbody">
        {data.body.map((row, rIndex) => (
          <tr
            key={JSON.stringify(rIndex)}
            className="cx-static-table__vertical-new--tr"
          >
            {row.map((col, cindex) => (
              <td
                className="cx-static-table__vertical-new--td"
                key={JSON.stringify(cindex)}
                style={{
                  width: '50%',
                  padding: '10px 15px',
                  borderBottom: '1px solid #f1f1f1',
                  whiteSpace: 'normal',
                  wordBreak: 'break-all',
                }}
              >
                {typeof col === 'string' ? (
                  <Typography variant="body3">{col}</Typography>
                ) : (
                  col
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
