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

import {
  EditField,
  Typography,
  VerticalTableNew,
  Tooltips
} from '../components'
import { Link } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

const links = ['/somepage', 'somelink']

const createLinkList = (links: string[]) => (
  <>
    {links.map((link) => (
      <Link
        target="_blank"
        href={link}
      >
        <Typography
          variant="body3"
          sx={{
            color: '#0088CC',
            cursor: 'pointer',
          }}
        >
          {link}
        </Typography>
      </Link>
    ))}
  </>
)

const renderTooltipText = (value: string, tooltipText: string) => {
  return (
    <span style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography variant="body3">{value}</Typography>
      <Tooltips
        color="dark"
        tooltipPlacement="bottom-start"
        tooltipText={tooltipText}
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
    </span>
  )
}

const data = {
  head: ['heading 1', 'heading 2'],
  body: [
    ['row1 col1', 'row1 col2'],
    [
      'row1 col1',
      createLinkList(links),
    ],
    [renderTooltipText('row1 col1', 'help tooltiptext'), <EditField key="2" value="row3 col2" isValid={() => { console.log('isvalid') }} handleEdit={() => { console.log('edit fn') }} />],
    ['row4 col2', 'row4 col1'],
  ],
}

export default function TestApp() {
  return (
    <main style={{ padding: 80 }}>
      <VerticalTableNew data={data} />
    </main>
  )
}
