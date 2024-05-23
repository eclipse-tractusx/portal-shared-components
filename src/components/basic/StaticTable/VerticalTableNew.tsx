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
import type { TableType } from './types'

export const VerticalTableNew = ({ data }: { data: TableType }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
            {row.map((col, c) => (
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
                {typeof col === 'string' ? (
                  <Typography variant="body1">{col}</Typography>
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
