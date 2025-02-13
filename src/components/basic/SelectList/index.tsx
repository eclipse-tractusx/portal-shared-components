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

import { type TextFieldProps } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import isEqual from 'lodash/isEqual'
import uniqueId from 'lodash/uniqueId'
import { useEffect, useState } from 'react'
import { SelectInput } from '../MultiSelectList/Components/SelectInput'
import { SelectOptions } from '../MultiSelectList/Components/SelectOptions'

type Option = Record<string, string | number | null>
interface SelectListProps extends Omit<TextFieldProps, 'variant'> {
  items: Option[]
  label: string
  placeholder: string
  keyTitle: string
  popperHeight?: number
  variant?: 'filled'
  clearText?: string
  noOptionsText?: string
  defaultValue?: Option
  disableClearable?: boolean
  onChangeItem: (items: Option) => void
}

export const SelectList = ({
  items,
  label,
  placeholder,
  defaultValue = {},
  disableClearable = false,
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
  onChangeItem,
}: SelectListProps) => {
  const selectHeight = popperHeight ? `${popperHeight}px` : 'auto'
  const [selected, setSelected] = useState<Option>(defaultValue ?? {})

  useEffect(() => {
    setSelected(defaultValue ?? {})
  }, [JSON.stringify(defaultValue)])

  const handleChange = (newValue: Option) => {
    if (newValue) {
      setSelected(newValue)
      onChangeItem(newValue)
    }
  }

  return (
    <Autocomplete
      id="singleSelectList"
      sx={{ width: '100%' }}
      clearText={clearText}
      defaultValue={defaultValue}
      disableClearable={disableClearable}
      noOptionsText={noOptionsText}
      ListboxProps={{ style: { maxHeight: selectHeight } }}
      disabled={disabled}
      options={items.map((item) => item)}
      getOptionLabel={(option: Option) => (option[keyTitle] as string) || ''}
      onChange={(_event, nextValue) => {
        handleChange(nextValue ?? {})
      }}
      isOptionEqualToValue={(option, value) => isEqual(option, value)}
      renderOption={(props, option, { inputValue }) => (
        <SelectOptions
          props={props}
          parts={parse(
            option[keyTitle] as string,
            match(option[keyTitle] as string, inputValue)
          )}
          key={uniqueId('select-list-option')}
        />
      )}
      value={selected}
      renderInput={(params) => {
        return (
          <SelectInput
            params={params}
            label={label}
            placeholder={placeholder}
            variant={variant}
            margin={margin}
            focused={focused}
            helperText={helperText}
            error={error}
            disabled={disabled}
            keyTitle={keyTitle}
          />
        )
      }}
    />
  )
}
