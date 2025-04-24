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

import { Box, Typography, useTheme } from '@mui/material'
import { CardChip, StatusVariants } from './CardChip'

export interface ContentCardProps {
  title: string
  chipText: string
  heading?: string
  detail?: string
}

export const ContentCard = ({
  title,
  chipText,
  heading,
  detail,
}: ContentCardProps) => {
  const theme = useTheme()

  return (
    <Box
      key={title}
      sx={{
        width: '270px',
        minWidth: '270px',
        paddingRight: '10px',
        paddingLeft: '10px',
        marginBottom: '20px',
      }}
    >
      <Box
        sx={{
          height: '200px',
          width: 'auto',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          padding: '16px 28px',
          background: '#FFFFFF',
          border: '1px solid #DCDCDC',
          borderRadius: '20px',
          flex: 'none',
          order: 1,
          alignSelf: 'stretch',
          flexGrow: 0,
          cursor: 'pointer',
          ':hover': {
            boxShadow: theme.shadows['20'],
          },
        }}
      >
        <Box sx={{ marginBottom: '20px' }}>
          <CardChip status={StatusVariants.enabled} statusText={chipText} />
        </Box>
        <Typography
          variant="h4"
          sx={{
            height: '60px',
            '-webkit-line-clamp': '2',
            lineClamp: '2',
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            boxOrient: 'vertical',
            wordBreak: 'break-all',
            overflow: 'hidden',
            marginBottom: '6px',
          }}
        >
          {title}
        </Typography>
        {detail && (
          <Box sx={{ lineHeight: 'normal' }}>
            <Typography
              variant="body3"
              sx={{
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              {heading}
            </Typography>
            <Typography
              variant="body3"
              sx={{
                fontSize: '12px',
              }}
            >
              {detail}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}
