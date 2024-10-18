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

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Box, useTheme } from '@mui/material'
import { useRef, type CSSProperties } from 'react'
import { Image, LogoGrayData } from '../../basic/Image'
import { Typography } from '../../basic/Typography'
import { type CardChipProps } from './CardChip'

interface ICardImage {
  src: string
  alt?: string
  style?: CSSProperties
}

interface CardHorizontalProps extends CardChipProps {
  label: string
  title: string
  subTitle?: string
  borderRadius: number
  description?: string
  backgroundColor?: string
  buttonText?: string
  onBtnClick?: React.MouseEventHandler
  expandOnHover?: boolean
  image: ICardImage
  imageLoader?: (src: string) => Promise<ArrayBuffer>
}

export const CardHorizontal = ({
  label,
  title,
  subTitle,
  borderRadius = 0,
  description,
  // @ts-expect-error keep for backward compatibility
  status,
  // @ts-expect-error keep for backward compatibility
  statusText,
  buttonText,
  onBtnClick,
  backgroundColor,
  image,
  imageLoader,
  // @ts-expect-error keep for backward compatibility
  expandOnHover = false,
}: CardHorizontalProps) => {
  const theme = useTheme()
  const boxRef = useRef<HTMLDivElement>(null)

  return (
    <Box
      className="cx-card__horizontal"
      ref={boxRef}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: backgroundColor ?? 'common.white',
        borderRadius: `${borderRadius}px`,
        overflow: 'hidden',
        ':hover': {
          boxShadow: theme.shadows['20'],
        },
      }}
    >
      {image && (
        <Image
          src={image?.src ?? LogoGrayData}
          alt={image?.alt}
          loader={imageLoader}
          style={{ ...image?.style }}
        />
      )}
      <Box
        className="cx-card__horizontal--right"
        sx={{
          flex: 1,
          padding: '25px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          className="cx-card__horizontal--label"
          variant="caption3"
          sx={{
            fontWeight: '600',
            lineHeight: '20px',
            height: '18px',
            color: theme.palette.text.tertiary,
          }}
        >
          {label}
        </Typography>

        <Typography
          className="cx-card__horizontal--heading"
          variant="h4"
          sx={{
            margin: '5px 0 0 0',
            fontWeight: 600,
            lineHeight: '23px',
            color: '#111111',
            height: '46px',
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
        <Typography
          className="cx-card__horizontal--subheading"
          variant="caption3"
          sx={{
            fontWeight: '600',
            lineHeight: '20px',
            height: '18px',
            color: theme.palette.text.tertiary,
          }}
        >
          {subTitle}
        </Typography>
        {description && (
          <Typography
            className="cx-card__horizontal--description"
            variant="label4"
            sx={{
              color: '#888888',
              fontSize: '12px',
              display: '-webkit-box',
              '-webkit-line-clamp': '3',
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden',
              margin: '5px 0 0 0',
              height: '45px',
            }}
          >
            {description}
          </Typography>
        )}

        {buttonText && (
          <div
            className="cx-card__horizontal--button"
            style={{
              marginTop: 'auto',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Typography
              className="cx-card__horizontal--button--text"
              variant="label4"
              onClick={onBtnClick}
              sx={{
                color: '#0F71CB',
                fontSize: '14px',
                textAlign: 'right',
                paddingTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                cursor: 'pointer',
                width: 'auto',
                padding: '5px',
                marginTop: '20px',
                '&:hover': {
                  backgroundColor: 'rgb(176 206 235 / 40%)',
                  borderRadius: '20px',
                },
              }}
            >
              <KeyboardArrowDownIcon
                className="cx-card__horizontal--button--icon"
                sx={{ marginRight: '5px' }}
              />
              {buttonText}
            </Typography>
          </div>
        )}
      </Box>
    </Box>
  )
}
