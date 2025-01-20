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

import { Box, Divider } from '@mui/material'
import { Button } from '../Button'
import { Typography } from '../Typography'

interface CategoryDividerProps {
  buttonText: string
  categoryItemsLength: number
  categoryName: string
  disabled: boolean
  onButtonClick: React.MouseEventHandler
}

export const CategoryDivider = ({
  buttonText,
  categoryItemsLength,
  categoryName,
  disabled = false,
  onButtonClick = () => {
    // do nothing
  },
}: CategoryDividerProps) => {
  return (
    <Box
      className={'cx-category-divider'}
      sx={{
        alignItems: 'center',
        display: 'flex',
        marginBottom: '52px',
        marginTop: '52px',
        '&:first-of-type': {
          marginTop: '0',
        },
      }}
    >
      <Box
        className={'cx-category-divider__content'}
        sx={{
          paddingRight: '15px',
          whiteSpace: 'nowrap',
        }}
      >
        <Typography
          className={'cx-category-divider__text'}
          sx={{ color: 'text.tertiary' }}
          variant="body2"
        >
          {categoryName}{' '}
          <span className={'cx-category-divider__count'}>
            ({categoryItemsLength})
          </span>
        </Typography>
      </Box>
      <Divider
        className={'cx-category-divider__border'}
        sx={{
          borderColor: 'border.border01',
          flexShrink: 'unset',
          width: '100%',
        }}
      />
      <Box sx={{ paddingLeft: '15px' }}>
        <Button
          className={'cx-button cx-category-divider__button'}
          color="secondary"
          disabled={disabled}
          variant="contained"
          size="small"
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}
