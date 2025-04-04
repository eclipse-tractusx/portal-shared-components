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

import { Box, Chip, Popper, type TextFieldProps, useTheme } from '@mui/material'
import Autocomplete, {
  type AutocompleteRenderInputParams,
  createFilterOptions,
} from '@mui/material/Autocomplete'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import uniqueId from 'lodash/uniqueId'
import { useEffect, useState } from 'react'
import { SelectAddMore } from './Components/SelectAddMore'
import { SelectInput } from './Components/SelectInput'
import { SelectOptions } from './Components/SelectOptions'

export type TagSizeType = 'small' | 'medium' | 'large'
export interface PartsType {
  text: string
  highlight: boolean
}
export type IHashMap<T> = Record<string, T>

type Options = Array<IHashMap<string>>

export interface MultiSelectListProps
  extends Omit<TextFieldProps, 'variant' | 'size'> {
  items: []
  label: string
  placeholder: string
  keyTitle: string
  popperHeight?: number
  variant?: 'filled'
  clearText?: string
  noOptionsText?: string
  buttonAddMore: string
  notItemsText: string
  tagSize?: TagSizeType
  filterOptionsArgs?: IHashMap<string>
  defaultValues?: []
  onAddItem: (items: Options) => void
}

export const MultiSelectList = ({
  items,
  label,
  placeholder,
  keyTitle,
  variant,
  margin,
  focused,
  helperText,
  error = false,
  disabled,
  popperHeight = 0,
  clearText = 'Clear',
  noOptionsText = 'No Options',
  buttonAddMore,
  notItemsText,
  tagSize,
  filterOptionsArgs = {},
  defaultValues = [],
  onAddItem,
}: MultiSelectListProps) => {
  const selectHeight = popperHeight ? `${popperHeight}px` : 'auto'
  const theme = useTheme()
  const [selected, setSelected] = useState<Options>([])
  const [showItems, setShowItems] = useState(false)

  const handleChange = (selectedItems: Options) => {
    onAddItem(selectedItems)
    setSelected(selectedItems)
  }
  const handleViewAddMore = () => {
    setShowItems(false)
  }

  const filterOptions = createFilterOptions(
    Object.keys(filterOptionsArgs).length > 0
      ? filterOptionsArgs
      : {
          matchFrom: 'any',
          stringify: (option: Record<string, string>) => option[keyTitle],
        }
  )

  useEffect(() => {
    if (defaultValues.length > 0) {
      setSelected(defaultValues)
      onAddItem(defaultValues)
    }
  }, [defaultValues])

  useEffect(() => {
    if (items.length > 0) {
      if (defaultValues.length > 0) {
        onAddItem(defaultValues)
        setSelected(defaultValues)
      }
    }
  }, [items])

  useEffect(() => {
    if (error) {
      setShowItems(false)
    }
  }, [error])

  return (
    <Box>
      {!showItems ? (
        <Autocomplete
          id="selectList"
          sx={{ width: '100%' }}
          clearText={clearText}
          noOptionsText={noOptionsText}
          multiple
          disabled={disabled}
          options={items.map((item) => item)}
          getOptionLabel={(option) => option[keyTitle]}
          value={selected}
          filterOptions={filterOptions}
          renderTags={(selectedItems, getTagProps) =>
            selectedItems.map((option, index: number) => (
              <Chip
                {...getTagProps({ index })}
                key={option[keyTitle]}
                variant="filled"
                label={option[keyTitle]}
                sx={{
                  borderRadius: '16px',
                  border: `1px solid ${theme.palette.accent.accent03} !important`,
                  backgroundColor: `${theme.palette.accent.accent02}`,
                  color: theme.palette.accent.accent03,
                  fontWeight: 'bold',
                  span: {
                    marginRight: '10px !important',
                    height: '26px !important',
                    paddingTop: '2px',
                    paddingLeft: '0px',
                    order: '2',
                  },
                  '.MuiChip-deleteIcon': {
                    marginLeft: '10px',
                    color: theme.palette.accent.accent03,
                  },
                  '.MuiChip-deleteIcon:hover': {
                    color: theme.palette.accent.accent01,
                  },
                }}
              />
            ))
          }
          renderInput={(param: AutocompleteRenderInputParams) => (
            <SelectInput
              params={param}
              label={label}
              placeholder={placeholder}
              variant={variant}
              margin={margin}
              focused={focused}
              helperText={helperText}
              error={error}
              disabled={disabled}
              autoFocus={!showItems}
              keyTitle={keyTitle}
            />
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option[keyTitle], inputValue)
            const parts: PartsType[] = parse(option[keyTitle], matches)
            return (
              <SelectOptions
                props={props}
                parts={parts}
                key={uniqueId('multi-select-option')}
              />
            )
          }}
          onChange={(_, selectedItems) => {
            handleChange(selectedItems)
          }}
          onBlur={() => {
            error ? setShowItems(false) : setShowItems(true)
          }}
          defaultValue={defaultValues}
          slots={{
            popper: ({ style, ...props }) => (
              <Popper {...props} style={{ ...style, height: 0 }} />
            ),
          }}
          slotProps={{
            listbox: { style: { maxHeight: selectHeight } },
          }}
        />
      ) : (
        <SelectAddMore
          selected={selected}
          notItemsText={notItemsText}
          buttonAddMore={buttonAddMore}
          label={label}
          keyTitle={keyTitle}
          margin={margin}
          tagSize={tagSize}
          handleShowItems={() => {
            handleViewAddMore()
          }}
        />
      )}
    </Box>
  )
}
