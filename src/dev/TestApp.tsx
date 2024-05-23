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
  CopyField,
  Datepicker,
  EditField,
  Typography,
  VerticalTableNew,
} from '../components'

const links = ['/somepage', 'somelink']

const createLinkList = (links: string[]) => (
  <ul>
    {links.map((link, i) => (
      <li key={i}>
        <Typography>
          <a href={link}>{link}</a>
        </Typography>
      </li>
    ))}
  </ul>
)

const data = {
  head: ['heading 1', 'heading 2'],
  body: [
    ['row1 col1', 'row1 col2'],
    [
      <Datepicker
        key="1"
        label=""
        placeholder=""
        locale="en"
        readOnly={false}
        onChangeItem={(value) => {}}
      />,
      createLinkList(links),
    ],
    ['row3 col1', <EditField key="2" value="row3 col2" onEdit={() => {}} />],
    [<CopyField key="3" value="row4 col2" />, 'row4 col1'],
  ],
}

export default function TestApp() {
  return (
    <main style={{ padding: 80 }}>
      <VerticalTableNew data={data} />
    </main>
  )
}
