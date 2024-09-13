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

import { Box, Button } from '@mui/material'
import { type TextFieldProps } from '@mui/material/TextField'
import { type PickersDayProps } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { de } from 'date-fns/locale/de'
import { enUS } from 'date-fns/locale/en-US'
import uniqueId from 'lodash/uniqueId'
import { useEffect, useState } from 'react'

export type DateType = Date | null
export interface DatepickerProps extends Omit<TextFieldProps, 'variant'> {
  label: string
  placeholder: string
  variant?: 'filled'
  locale: 'en' | 'de'
  defaultValue?: DateType
  readOnly: boolean
  daySelectedColor?: string
  todayColor?: string
  inputFormat?: string
  onChangeItem: (items: DateType) => void
}

const localeMap = {
  en: enUS,
  de,
}

export const Datepicker = ({
  label,
  placeholder,
  variant,
  margin,
  helperText,
  error = false,
  disabled,
  locale = 'en',
  defaultValue,
  readOnly,
  daySelectedColor = '#0F71CB',
  todayColor = '#939393',
  inputFormat = 'yyyy-MM-dd',
  onChangeItem,
}: DatepickerProps) => {
  const [value, setValue] = useState<DateType>(null)
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    if (defaultValue != null) {
      setValue(new Date(defaultValue))
    }
  }, [defaultValue])

  const handleChange = (newValue: DateType) => {
    if (newValue != null) {
      setValue(new Date(newValue))
    }
    onChangeItem(newValue)
    handleClose()
  }

  const handleOpen = () => {
    if (!readOnly && !disabled) {
      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const iconColor = open ? daySelectedColor : '#939393'

  const ServerDay = (props: PickersDayProps<Date>) => {
    const { selected, day, today } = props
    const bgColor = today ? todayColor : '#ffffff'
    const bgSelected = selected ? daySelectedColor : bgColor
    const colorSelected = selected ? '#fff' : '#202020'
    const isBold = today ? '500' : '400'

    return (
      <Box
        key={uniqueId('pickers-day')}
        className={'cx-date-picker__picker-day'}
      >
        {day ? (
          <Button
            sx={{
              width: '36px !important',
              minWidth: '36px !important',
              height: '36px !important',
              margin: '0 2px',
              padding: '0',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: bgSelected,
              fontSize: '14px',
              color: colorSelected,
              fontWeight: isBold,
              ':hover': {
                backgroundColor: '#f2f2f2',
              },
            }}
            onClick={() => {
              handleChange(day)
            }}
          >
            {new Date(day).getDate()}
          </Button>
        ) : (
          <div></div>
        )}
      </Box>
    )
  }
  return (
    <Box
      className={'cx-date-picker__wrapper'}
      sx={{
        button: {
          color: iconColor,
        },
        'button:hover': {
          color: daySelectedColor,
        },
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={localeMap[locale]}
      >
        <DatePicker
          className="date-picker cx-date-picker"
          value={value}
          open={open}
          disabled={disabled}
          readOnly={readOnly}
          disableHighlightToday={false}
          views={['year', 'month', 'day']}
          format={inputFormat}
          onChange={(newValue) => {
            handleChange(newValue)
          }}
          onClose={() => {
            handleClose()
          }}
          slots={{
            day: ServerDay,
          }}
          slotProps={{
            textField: {
              variant,
              onClick: handleOpen,
              label,
              helperText,
              error,
              margin,
              disabled,
              focused: open,
              inputProps: { placeholder },
            },
          }}
        />
      </LocalizationProvider>
    </Box>
  )
}
