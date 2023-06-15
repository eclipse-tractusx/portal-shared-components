/********************************************************************************
 * Copyright (c) 2021, 2023 BMW Group AG
 * Copyright (c) 2021, 2023 Contributors to the Eclipse Foundation
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
import { Typography } from '../../basic/Typography'
import { CardRating, type CardRatingProps } from './CardRating'

export interface CardContentProps extends Partial<CardRatingProps> {
  id?: string
  title: string
  subtitle?: string
  subscriptionStatus?: string
  price?: string
  description?: string
}

export const CardContent = ({
  title,
  subtitle,
  rating,
  price,
  description,
}: CardContentProps) => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Box sx={{ height: '50px' }}>
        {subtitle && (
          <Typography variant="label3" sx={{ color: 'text.tertiary' }}>
            {subtitle}
          </Typography>
        )}
      </Box>
      <Box sx={{ height: '50px' }}>
        <Typography
          variant="h5"
          sx={{
            marginTop: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            display: 'box',
            lineClamp: '2',
            boxOrient: 'vertical',
          }}
        >
          {title}
        </Typography>
      </Box>
      {rating && price && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 1,
          }}
        >
          <CardRating rating={rating} />
          <Typography variant="caption3">{price}</Typography>
        </Box>
      )}
      {description && (
        <Typography variant="body3" sx={{ marginTop: 1.5 }}>
          {description}
        </Typography>
      )}
    </Box>
  )
}
