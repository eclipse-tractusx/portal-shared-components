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
import ClearIcon from '@mui/icons-material/Clear'
import React, { useState, useMemo, useCallback } from 'react'
import { Box, useTheme, debounce } from '@mui/material'
import { Button } from '../../../Button'
import { SearchInput } from '../../../SearchInput'
import { IconButton } from '../../../IconButton'
import { type ToolbarProps } from '.'

export type SelectedFilter = Record<string, string[]>
export interface UltimateToolbarProps extends ToolbarProps {
  placeholder?: string
  onFilter?: (selectedFilter: SelectedFilter) => void
  selectedFilter?: SelectedFilter
  searchDebounce?: number
  searchExpr?: string
  autoFocus?: boolean
}

export const UltimateToolbar = ({
  onSearch,
  filter,
  onFilter,
  searchPlaceholder,
  selectedFilter,
  searchExpr,
  searchInputData,
  onClearSearch,
  searchDebounce = 500,
  autoFocus,
}: UltimateToolbarProps) => {
  const { spacing } = useTheme()
  const [searchInput, setSearchInput] = useState<string>(
    searchExpr ?? (searchInputData != null ? searchInputData.text : '')
  )

  const debounceSearch = useMemo(
    () =>
      debounce((expr: string) => {
        onSearch?.(expr)
      }, searchDebounce),
    [onSearch, searchDebounce]
  )

  const doOnSearch = useCallback(
    (expr: string) => {
      debounceSearch(expr)
    },
    [debounceSearch]
  )

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
    const inputLen = e.target.value.length
    if (inputLen === 0 || inputLen > 2) {
      onSearch != null && doOnSearch(e.target.value)
    }
  }

  const onSearchInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch != null) {
      onSearch(searchInput)
    }
  }

  const onFilterChange = (value: string, name: string) => {
    if (onFilter != null) {
      onFilter({ [name]: [value] })
    }
  }

  const handleSearchClear = () => {
    onClearSearch?.()
    setSearchInput('')
  }

  const headerHeight = () => (onSearch != null || onFilter != null ? 100 : 0)

  const endAdornment =
    onClearSearch != null && searchInput ? (
      <IconButton onClick={handleSearchClear}>
        <ClearIcon />
      </IconButton>
    ) : (
      <></>
    )

  return (
    <Box
      sx={{
        minHeight: { headerHeight },
        padding: spacing(2, 0, 6, 0),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {onSearch != null && (
        <Box sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
          <SearchInput
            autoFocus={autoFocus}
            endAdornment={endAdornment}
            value={searchInput}
            onChange={onSearchChange}
            onKeyPress={onSearchInputKeyPress}
            placeholder={searchPlaceholder}
            sx={{
              '.MuiInputBase-input': {
                padding: '4px 10px',
                width: '300px',
              },
            }}
          />
        </Box>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {onFilter != null &&
          filter?.map(({ name, values }) => (
            <Box
              key={name}
              sx={{
                padding: spacing(2, 4),
                textAlign: 'right',
              }}
            >
              {values?.map(({ value, label }) => (
                <Box component="span" sx={{ marginLeft: 3 }} key={value}>
                  <Button
                    id={`${name}${value}`}
                    name={name}
                    onClick={() => {
                      onFilterChange(value, name)
                    }}
                    size="small"
                    color="secondary"
                    variant={
                      selectedFilter?.[name]?.includes(value)
                        ? 'contained'
                        : 'text'
                    }
                  >
                    {label ?? value}
                  </Button>
                </Box>
              ))}
            </Box>
          ))}
      </Box>
    </Box>
  )
}
