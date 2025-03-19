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
import { Box, CircularProgress } from '@mui/material'
import { useState, useEffect, useCallback } from 'react'
import { Typography } from '../Typography'
import { hasMorePages, getMaxRows } from './components/Helper/helper'
import { Table, type TableProps } from '.'

export interface PaginFetchArgs {
  page: number
  // Add an ESLint exception until there is a solution
  // eslint-disable-next-line
  args?: any
}

export interface PaginMeta {
  totalElements: number
  totalPages: number
  page: number
  contentSize: number
}

export interface PaginResult<Row> {
  meta: PaginMeta
  content: Row[]
}

export interface PageLoadingTableProps<Row, Args>
  extends Omit<TableProps, 'rows'> {
  loadLabel: string
  // Add an ESLint exception until there is a solution
  // eslint-disable-next-line
  fetchHook: (paginArgs: PaginFetchArgs) => any
  fetchHookArgs?: Args
  fetchHookRefresh?: number
  allItems?: Row[]
  callbackToPage?: (data: PaginResult<Row>) => void
  allItemsLoadedHint?: string
  emptyDataMsg?: string
  noSearchResultsMsg?: string
}

const scrollOffset = 350 // Adjust this value for earlier load

export const PageLoadingTable = function <Row, Args>({
  loadLabel,
  fetchHook,
  fetchHookArgs,
  fetchHookRefresh = 0,
  allItems,
  callbackToPage,
  allItemsLoadedHint = 'All items have been loaded.',
  emptyDataMsg = 'No data found',
  noSearchResultsMsg = 'No search results found',
  ...props
}: PageLoadingTableProps<Row, Args>) {
  const [page, setPage] = useState(0)
  const [clear, setClear] = useState(true)
  const [loaded, setLoaded] = useState(0)
  const [items, setItems] = useState<Row[]>([])
  const { data, isFetching, isSuccess, error, refetch } = fetchHook({
    page,
    args: {
      ...fetchHookArgs,
      v: loaded,
    },
  })
  const [loading, setLoading] = useState(true)
  const [noRowsMsg, setNoRowsMsg] = useState('')

  function nextPage() {
    setPage(page + 1)
  }
  const hasMore = data ? hasMorePages(data) : false
  const maxRows = data ? getMaxRows(data) : 0
  const { searchExpr } = props

  useEffect(() => {
    if (!allItems) {
      return
    }
    if (allItems?.length > 0) {
      setLoading(false)
      setItems((i) => i.concat(allItems))
    } else if (allItems?.length === 0) {
      setLoading(false)
      setItems([])
    }
  }, [allItems])

  useEffect(() => {
    if (loaded !== fetchHookRefresh) {
      setLoaded(fetchHookRefresh)
      setPage(0)
      setClear(true)
    }
  }, [fetchHookRefresh, loaded])

  useEffect(() => {
    // reset loading
    if (isFetching && !loading) {
      setLoading(true)
    }
    if (isSuccess && !isFetching && data?.content) {
      if (clear) {
        setItems([])
        setClear(false)
      } else if (callbackToPage) {
        callbackToPage(data)
      } else {
        setLoading(false)
        data.content
          ? setItems((i) => i.concat(data.content))
          : setItems([data]) // Search for legal entity based on BPN responses with an object. No content or meta properties available
      }
    }
    if (error) {
      setLoading(false)
    }
  }, [isSuccess, isFetching, data, clear, loaded])

  useEffect(() => {
    if (data) {
      if (!searchExpr && data.content.length === 0) {
        setNoRowsMsg(emptyDataMsg)
      } else if (searchExpr && data.content.length === 0) {
        setNoRowsMsg(noSearchResultsMsg)
      }
    }
  }, [data, searchExpr])

  const handleScroll = useCallback(() => {
    const scrollableElement = document.documentElement
    if (
      scrollableElement.scrollHeight - scrollableElement.scrollTop <=
      scrollableElement.clientHeight + scrollOffset
    ) {
      if (hasMore && !isFetching) {
        nextPage()
      }
    }
  }, [hasMore, isFetching])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      <Table
        rowsCount={items.length}
        rowsCountMax={maxRows}
        hideFooter={items.length < (props.rowCount ?? 100)}
        loading={loading && !items.length}
        error={error}
        rows={items}
        reload={refetch}
        noRowsMsg={noRowsMsg}
        {...props}
      />
      {/* Display loading spinner while fetching data */}
      {items.length > 0 && loading && (
        <Box
          sx={{
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {/* Display message when all items have been loaded */}
      {!hasMore && !loading && items.length > 0 && (
        <Typography
          variant="caption3"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {allItemsLoadedHint}
        </Typography>
      )}
    </>
  )
}
