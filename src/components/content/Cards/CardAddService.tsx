/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
 * Copyright (c) 2023 Contributors to the Eclipse Foundation
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

import { Box, useTheme } from '@mui/material'
import { Typography } from '../../basic/Typography'
import { useState, useEffect, useRef } from 'react'

export interface CardAddServiceProps {
  title?: string
  backgroundColor?: string
  onButtonClick: React.MouseEventHandler
  showCardView?: boolean
}

export const CardAddService = ({
  title,
  backgroundColor,
  showCardView = true,
  onButtonClick,
}: CardAddServiceProps) => {
  const theme = useTheme()
  const { shape, shadows } = theme
  const [boxHeight, setBoxHeight] = useState<number | undefined>()
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setBoxHeight(boxRef.current?.getBoundingClientRect().height)
  }, [])

  return (
    <div
      className="cx-card__instance"
      ref={boxRef}
      style={{
        padding: '0 10px',
        minWidth: '290px',
        width: showCardView ? '290px' : '100%',
      }}
      onClick={onButtonClick}
      onKeyUp={() => {
        // do nothing
      }}
    >
      <Box
        sx={{
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          alignItems: 'center',
          gap: '20px',
          backgroundColor: backgroundColor ?? 'common.white',
          borderRadius: shape.borderRadius,
          border: '2px dashed',
          borderColor: 'border.border01',
          padding: '10px',
          ':hover': {
            boxShadow: shadows['20'],
          },
          minHeight: '200px',
          height: boxHeight ? `${boxHeight - 63}px` : '89%',
        }}
        className="card cx-card__add-service"
      >
        <Box
          className="cx-card__add-service--icon"
          sx={{
            height: '120px',
            width: '120px',
            backgroundColor: theme.palette.accent.accent02,
            borderRadius: '100px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM37.5 27.5H27.5V37.5H22.5V27.5H12.5V22.5H22.5V12.5H27.5V22.5H37.5V27.5Z"
              fill="#0F71CB"
            />
          </svg>
        </Box>
        <Box className="cx-card__add-service--title">
          <Typography
            variant="h5"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
