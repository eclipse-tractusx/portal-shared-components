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

import { useCallback, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  debounce,
  TextField,
  type TextFieldProps,
  useTheme,
} from '@mui/material'

interface SearchProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined'
  endAdornment?: React.ReactNode
  debounceTimeout?: number
  onSearch?: (value: string) => void
}

export const SearchInput = ({
  debounceTimeout = 0,
  onSearch,
  variant,
  endAdornment,
  ...props
}: SearchProps) => {
  const theme = useTheme()
  const { icon01 } = theme.palette.icon
  const { value, onChange } = props

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Memoize the debounced function
  const debouncedSearch = useCallback(
    debounce((query: string) => {
      onSearch?.(query)
    }, debounceTimeout),
    []
  )

  // Handle debounce when input is controlled
  useEffect(() => {
    if (isMounted && value !== undefined) {
      debouncedSearch(value as string)
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    // Handle debounce when input is uncontrolled
    if (value === undefined) {
      debouncedSearch(newValue)
    }
    onChange?.(e)
  }

  return (
    <Box className="cx-search-input">
      <TextField
        className="cx-search-input__text-field"
        sx={{
          borderColor: theme.palette.primary.main,
          width: '100%',
        }}
        variant={variant}
        type={props.type ?? 'search'}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: icon01, marginRight: 2 }} />,
          endAdornment: endAdornment ?? null,
        }}
        {...props}
        onChange={handleChange}
      />
    </Box>
  )
}
