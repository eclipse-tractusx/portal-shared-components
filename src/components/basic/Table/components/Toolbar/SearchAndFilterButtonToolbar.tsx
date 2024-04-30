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
import ClearIcon from '@mui/icons-material/Clear'
import React, { useState, useMemo, useCallback } from 'react'
import { Box, useTheme, debounce } from '@mui/material'
import { SearchInput } from '../../../SearchInput'
import { IconButton } from '../../../IconButton'
import { type ToolbarProps } from '.'
import { ViewSelector } from '../../../ViewSelector'
import type { View } from '../../../ViewSelector'
import { Typography } from '../../../Typography'
import type { SelectedFilter } from './UltimateToolbar'
import { SortOption, type SortOptionsType } from '../../../SortOption'
import SortImage from './SortImage'

export interface SearchAndFilterButtonToolbarProps extends ToolbarProps {
  placeholder?: string
  searchDebounce?: number
  searchExpr?: string
  filterViews?: View[]
  defaultFilter?: string
  onFilter?: (selectedFilter: SelectedFilter) => void
  defaultSortOption?: string
  sortOptions?: SortOptionsType[]
  onSortClick?: (value: string) => void
  descriptionText?: string
  autoFocus?: boolean
}

export const SearchAndFilterButtonToolbar = ({
  onSearch,
  onFilter,
  searchPlaceholder,
  searchExpr,
  searchInputData,
  onClearSearch,
  searchDebounce = 500,
  filterViews,
  defaultFilter = '',
  defaultSortOption,
  sortOptions,
  onSortClick,
  descriptionText,
  autoFocus,
}: SearchAndFilterButtonToolbarProps) => {

  const [searchInputText, setSearchInputText] = useState<string>(
    searchExpr ?? (searchInputData != null ? searchInputData.text : '')
  )
  const [showModal, setShowModal] = useState<boolean>(false)

  const { spacing } = useTheme()

  const searchDeBounced = useMemo(
    () =>
      debounce((expr: string) => {
        onSearch?.(expr)
      }, searchDebounce),
    [onSearch, searchDebounce]
  )

  const onSearchDo = useCallback(
    (expr: string) => {
      searchDeBounced(expr)
    },
    [searchDeBounced]
  )

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputText(e.target.value)
    const inputLen = e.target.value.length
    if (inputLen === 0 || inputLen > 2) {
      onSearch != null && onSearchDo(e.target.value)
    }
  }

  const onSearchInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch != null) {
      onSearch(searchInputText)
    }
  }

  const handleSearchClear = () => {
    onClearSearch?.()
    setSearchInputText('')
  }

  const headerHeight = () => (onSearch != null || onFilter ? 100 : 0)

  const endAdornment =
    onClearSearch != null && searchInputText ? (
      <IconButton onClick={handleSearchClear}>
        <ClearIcon />
      </IconButton>
    ) : (
      <></>
    )

  const styles = {
    minHeight: { headerHeight },
    padding: spacing(2, 0, 6, 0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '40px',
  }

  return (
    <Box sx={styles}>
      <Box sx={{ display: 'flex', alignItems: 'center', height: '50px' }}>
        <SearchInput
          autoFocus={autoFocus}
          endAdornment={endAdornment}
          value={searchInputText}
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
      <Box sx={{
        display: 'flex',
        alignItems: 'center'
      }}>
        {filterViews && (
          <Box
            sx={{
              margin: '30px 0px 30px 0px',
            }}
          >
            <ViewSelector activeView={defaultFilter} views={filterViews} />
          </Box>
        )}
        {
          sortOptions && defaultSortOption &&
          <Box sx={{
            position: 'relative'
          }}>
            <SortImage
              onClick={() => {
                setShowModal(!showModal)
              }}
              selected={showModal}
            />
            <Box sx={{
              position: 'absolute',
              left: '30px',
              top: '40px',
              background: '#f9f9f9',
              boxShadow: '0px 10px 20px rgba(80, 80, 80, 0.3)',
              borderRadius: '16px',
              zIndex: 9,
            }}>
              <SortOption
                show={showModal}
                sortOptions={sortOptions}
                selectedOption={defaultSortOption}
                setSortOption={(value: string) => {
                  onSortClick?.(value)
                  setShowModal(false)
                }}
              />
            </Box>
          </Box>
        }
      </Box>
      {descriptionText && (
        <Box
          sx={{
            marginBottom: '40px',
            padding: '0px 80px',
          }}
        >
          <Typography variant="body2" mt={3} align="center">
            {descriptionText}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
