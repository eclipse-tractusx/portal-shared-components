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

import { type Palette, useTheme } from '@mui/material'
import MuiChip from '@mui/material/Chip'

export enum StatusVariants {
  release = 'release',
  active = 'active',
  inactive = 'inactive',
  created = 'created',
  inReview = 'in_review',
  enabled = 'enabled',
}
export interface CardChipProps {
  status?: StatusVariants
  statusText?: string
}

interface ChipStyle {
  color: keyof Palette['chip']
  backgroundColor: keyof Palette['chip']
}

const statusStyles: Record<StatusVariants | 'default', ChipStyle> = {
  [StatusVariants.release]: {
    color: 'release',
    backgroundColor: 'bgRelease',
  },
  [StatusVariants.active]: {
    color: 'active',
    backgroundColor: 'bgActive',
  },
  [StatusVariants.inactive]: {
    color: 'inactive',
    backgroundColor: 'bgInactive',
  },
  [StatusVariants.created]: {
    color: 'created',
    backgroundColor: 'bgCreated',
  },
  [StatusVariants.inReview]: {
    color: 'inReview',
    backgroundColor: 'bgInReview',
  },
  [StatusVariants.enabled]: {
    color: 'enabled',
    backgroundColor: 'bgEnabled',
  },
  default: {
    color: 'default',
    backgroundColor: 'bgDefault',
  },
}

export const CardChip = ({ status, statusText }: CardChipProps) => {
  const theme = useTheme()
  const { color, backgroundColor }: ChipStyle =
    statusStyles[status ?? 'default'] || statusStyles.default

  return (
    <MuiChip
      className="cx-card__chip"
      label={statusText}
      variant="outlined"
      sx={{
        color: theme.palette.chip[color],
        backgroundColor: theme.palette.chip[backgroundColor],
        borderRadius: '200px',
        border: 'none',
        height: '28px',
      }}
    />
  )
}
