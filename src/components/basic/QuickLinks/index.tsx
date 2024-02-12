/********************************************************************************
 * Copyright (c) 2021, 2024 Contributors to the Eclipse Foundation
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

import { Box } from '@mui/material'
import MuiButton, {
  type ButtonProps as MuiQuickLinksProps,
} from '@mui/material/Button'
import { Typography } from '../Typography'

export interface QuickLinksProps
  extends Omit<MuiQuickLinksProps, 'color' | 'size'> {
  size: 'medium'
  items: {
    backgroundColor: string
    title: string
    url: string
  }[]
  color?: string
  headerTitle?: string
  alignButtons?: string
  onClick?: React.MouseEventHandler
}

export const QuickLinks = ({
  size = 'medium',
  items = [],
  color = 'black',
  headerTitle,
  alignButtons = 'left',
  onClick,
  ...props
}: QuickLinksProps) => {
  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      {headerTitle && <Typography variant="h4">{headerTitle}</Typography>}
      <Box
        sx={{
          display: 'flex',
          justifyContent: alignButtons,
          padding: '10px',
          margin: '10px',
        }}
      >
        {items?.map((data: any) => {
          return (
            <div key={data.title}>
              <MuiButton
                {...props}
                onClick={() => window.open(data.url, '_blank')}
                sx={{
                  background: data.backgroundColor,
                  padding: '12px 22px',
                  color: color,
                  margin: '0px 12px',
                  whiteSpace: 'nowrap',
                }}
              >
                {data.title}
              </MuiButton>
            </div>
          )
        })}
      </Box>
    </Box>
  )
}

