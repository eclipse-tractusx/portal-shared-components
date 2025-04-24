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

import { Box, Link, useTheme } from '@mui/material'
import { Typography } from '../Typography'
import { iconSize, variantMapping } from './Hyperlink.constant'

type Icon = React.ReactElement | string // Can be either an SVG component or an image URL

interface HyperlinkProps {
  text: string
  href: string
  leadingIcon?: Icon
  trailingIcon?: Icon
  underline?: boolean
  isHeading?: boolean
  size?: 'normal' | 'small'
  ariaLabel?: string
}

const IconVisual = (icon: Icon, textVariant: string, testId: string) => {
  return (
    <Box
      component="span"
      data-testid={testId}
      sx={{
        display: 'flex',
        alignItems: 'center',
        '> svg': {
          height: iconSize[textVariant].height,
          width: iconSize[textVariant].width,
        },

        ' > img': {
          objectFit: 'contain',
          borderRadius: '50%',
        },
      }}
    >
      {typeof icon === 'string' ? (
        <img
          src={icon}
          alt=""
          height={iconSize[textVariant].height}
          width={iconSize[textVariant].width}
        />
      ) : (
        icon
      )}
    </Box>
  )
}

export const Hyperlink = ({
  href,
  text,
  leadingIcon,
  trailingIcon,
  underline = false,
  size = 'normal',
  isHeading = false,
  ariaLabel,
}: HyperlinkProps) => {
  const theme = useTheme()
  const textVariant = `${size}${isHeading ? 'Heading' : ''}`

  return (
    <Link
      href={href}
      role="link"
      aria-label={ariaLabel ?? text}
      sx={{
        width: 'fit-content',
        color: theme.palette.primary.main,
        borderBottom: underline
          ? '1px solid currentColor'
          : '1px solid transparent',
        borderWidth: isHeading ? '2px' : '1px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '0.3rem',

        '&:hover': {
          color: theme.palette.primary.dark,
          borderBottom: isHeading
            ? '2px solid currentColor'
            : '1px solid currentColor',
        },
      }}
      className={`cx-hyperlink cx-hyperlink__${textVariant}`}
    >
      {leadingIcon && IconVisual(leadingIcon, textVariant, 'leading-icon')}
      <Typography
        variant={variantMapping[textVariant]}
        component="span"
        sx={{
          color: theme.palette.primary.main,
          lineHeight: 1,
          '&:hover': {
            color: theme.palette.primary.dark,
          },
        }}
      >
        {text}
      </Typography>
      {trailingIcon && IconVisual(trailingIcon, textVariant, 'trailing-icon')}
    </Link>
  )
}
