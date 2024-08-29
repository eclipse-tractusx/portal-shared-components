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

import React from 'react'
import * as MUIIcons from '@mui/icons-material'
import { type SvgIconProps } from '@mui/material/SvgIcon'

// Extend the Mui SvgIcon size props
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    default: true
  }
  interface SvgIconPropsSizeOverrides {
    '8': true
    '10': true
    '12': true
    '14': true
    '16': true
    '18': true
    '20': true
  }
}
export interface IconProps extends SvgIconProps {
  iconName: keyof typeof MUIIcons
  onError?: () => void
}

// Use a switch case for scalable integration of additional icon libraries.
const getIconComponent = (iconName: string) => {
  return MUIIcons[
    iconName as keyof typeof MUIIcons
  ] as React.ComponentType<SvgIconProps>
}

// defining default error handler
const defaultOnError = (iconName: string) => {
  console.warn(`Icon ${iconName} does not exist in @mui/icons-material`)
}

export const Icon: React.FC<IconProps> = ({
  iconName,
  onError = () => {
    defaultOnError(iconName)
  },
  ...props
}) => {
  const IconComponent = iconName ? getIconComponent(iconName) : null

  if (!IconComponent) {
    onError()
    return null
  }

  return <IconComponent {...props} />
}
