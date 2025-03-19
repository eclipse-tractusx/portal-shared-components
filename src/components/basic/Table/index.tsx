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

import { Box, Stack } from '@mui/material'
import {
  DataGrid,
  type GridRowSelectionModel,
  type DataGridProps,
  type GridRowId,
} from '@mui/x-data-grid'
import { useCallback } from 'react'
import { theme } from '../../../theme'
import { LoadMoreButton } from '../Button/LoadMoreButton'
import { type SortOptionsType } from '../SortOption'
import { Typography } from '../Typography'
import type { View } from '../ViewSelector'
import { Error400Overlay } from './components/Error/Error400Overlay'
import { Error500Overlay } from './components/Error/Error500Overlay'
import { StatusTag } from './components/StatusTag'
import {
  type AdditionalButtonsType,
  Toolbar,
  type ToolbarProps,
} from './components/Toolbar'
import { SearchAndFilterButtonToolbar } from './components/Toolbar/SearchAndFilterButtonToolbar'
import { UltimateToolbar } from './components/Toolbar/UltimateToolbar'

export { StatusTag }
export type toolbarType = 'basic' | 'premium' | 'ultimate' | 'searchAndFilter'
export interface SearchInputState {
  open: boolean
  text: string
}

export interface TableProps extends DataGridProps {
  title: string
  rowsCount?: number
  rowsCountMax?: number
  toolbarVariant?: toolbarType
  toolbar?: ToolbarProps
  columnHeadersBackgroundColor?: string
  onSearch?: (value: string) => void
  searchExpr?: string
  searchPlaceholder?: string
  searchDebounce?: number
  searchInputData?: SearchInputState
  noRowsMsg?: string
  hasBorder?: boolean
  buttonLabel?: string
  onButtonClick?: React.MouseEventHandler
  buttonDisabled?: boolean
  buttonTooltip?: string
  secondButtonLabel?: string
  onSecondButtonClick?: React.MouseEventHandler
  onSelection?: (value: GridRowId[]) => void
  descriptionText?: string
  defaultFilter?: string
  filterViews?: View[]
  defaultSortOption?: string
  sortOptions?: SortOptionsType[]
  onSortClick?: (value: string) => void
  alignCell?: string
  fontSizeCell?: string
  error?: {
    status: number
    message?: string
  } | null
  reload?: () => void
  autoFocus?: boolean
  hasMore?: boolean
  loadLabel?: string
  nextPage?: () => void
  buttons?: AdditionalButtonsType[]
  onClearSearch?: () => void
}

export const Table = ({
  columns,
  rows,
  autoHeight = true,
  columnHeaderHeight = 57, // Default header height from base design
  rowHeight = 57, // Default row height from base design
  rowsCount = 0,
  rowsCountMax = 0,
  title,
  toolbarVariant = 'basic',
  toolbar,
  checkboxSelection,
  columnHeadersBackgroundColor = '#E9E9E9',
  onSearch,
  searchExpr,
  searchPlaceholder,
  searchDebounce,
  searchInputData,
  noRowsMsg,
  hasBorder = true,
  buttonLabel,
  onButtonClick,
  buttonDisabled,
  buttonTooltip,
  secondButtonLabel,
  onSecondButtonClick,
  onSelection,
  descriptionText,
  defaultFilter,
  filterViews,
  defaultSortOption,
  sortOptions,
  onSortClick,
  alignCell = 'center',
  fontSizeCell = '14px',
  error,
  reload,
  autoFocus = true,
  hasMore = false,
  loadLabel = 'load more',
  nextPage,
  buttons,
  onClearSearch,
  ...props
}: TableProps) => {
  const toolbarProps = {
    rowsCount,
    rowsCountMax,
    onSearch,
    searchDebounce,
    searchInputData,
    searchPlaceholder,
    noRowsMsg,
    buttonLabel,
    onButtonClick,
    buttonDisabled,
    buttonTooltip,
    secondButtonLabel,
    onSecondButtonClick,
    onSelection,
    searchExpr,
    descriptionText,
    defaultFilter,
    filterViews,
    defaultSortOption,
    sortOptions,
    onSortClick,
    autoFocus,
    buttons,
    onClearSearch,
  }

  // TODO: this method contains application specific row attributes and must therefore
  // move out of the shared components. Pass handler functions like this as props.
  const handleOnCellClick = useCallback(
    (selectedIds: GridRowSelectionModel) => {
      const idsArr: string[] = []
      rows?.map((row) => {
        return selectedIds.map(
          (selectedId: GridRowId) =>
            selectedId.toString().includes(row.companyUserId) &&
            idsArr.push(row.companyUserId)
        )
      })
      onSelection?.(idsArr)
    },
    [rows, onSelection]
  )

  const toolbarView = () => {
    switch (toolbarVariant) {
      case 'basic':
        return <Toolbar title={title} {...toolbarProps} />
      case 'premium':
        return <Toolbar title={title} {...toolbar} {...toolbarProps} />
      case 'ultimate':
        return <UltimateToolbar title={title} {...toolbarProps} {...toolbar} />
      case 'searchAndFilter':
        return <SearchAndFilterButtonToolbar {...toolbarProps} {...toolbar} />
    }
  }

  const renderErrorMessage = () => {
    if (rowsCount === 0 || error == null) {
      if (noRowsMsg && noRowsMsg.includes('\n')) {
        const messageParts = noRowsMsg.split(/[\n|]/)
        return (
          <Stack spacing={1} alignItems="center">
            {messageParts.map((part, index) => (
              <Typography key={index} variant="body2" align="center">
                {part.trim()}
              </Typography>
            ))}
          </Stack>
        )
      }
      return <></>
    }
    if (error.status >= 400 && error.status < 500) {
      return <Error400Overlay errorMessage4xx={error.message} />
    }
    return (
      <Error500Overlay
        reload={() => {
          reload?.()
        }}
        errorMessage5xx={error.message}
      />
    )
  }

  const NoRowsOverlay = () => {
    return (
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: '#fff', pointerEvents: 'auto' }}
      >
        {renderErrorMessage()}
      </Stack>
    )
  }

  return (
    <>
      <Box
        sx={{
          '.MuiDataGrid-columnHeaders': {
            backgroundColor: columnHeadersBackgroundColor,
          },
          '.MuiDataGrid-root': {
            border: hasBorder
              ? `1px solid ${theme.palette.border.border01}`
              : 'none',
          },
        }}
      >
        <DataGrid
          sx={{
            '&.MuiDataGrid-root .MuiDataGrid-cell': {
              display: 'flex',
              alignItems: alignCell,
              fontSize: fontSizeCell,
            },
            '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus-within':
              {
                outline: 'none',
              },
          }}
          getRowId={(row) => row.id as GridRowId}
          slots={{
            toolbar: () => toolbarView(),
            noRowsOverlay: NoRowsOverlay,
          }}
          onRowSelectionModelChange={handleOnCellClick}
          {...{
            rows,
            columns,
            autoHeight,
            columnHeaderHeight,
            rowHeight,
            checkboxSelection,
          }}
          {...props}
        />
      </Box>
      {rows && rows.length > 0 && hasMore ? (
        <Box
          sx={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LoadMoreButton label={loadLabel} onClick={nextPage} />
        </Box>
      ) : (
        <></>
      )}
    </>
  )
}
