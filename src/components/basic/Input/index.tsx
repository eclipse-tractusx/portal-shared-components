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

import { Visibility, VisibilityOff } from '@mui/icons-material'
import ErrorOutline from '@mui/icons-material/ErrorOutline'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import {
  TextField,
  type TextFieldProps,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Box,
  FormControl,
  IconButton,
} from '@mui/material'
import { useState } from 'react'
import { Tooltips } from '../ToolTips'

interface InputProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'filled'
  tooltipMessage?: string
  showToggle?: boolean
}

export const Input = ({
  variant = 'filled',
  label,
  placeholder,
  helperText,
  error = false,
  tooltipMessage,
  showToggle = false,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleToggleVisibility = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <Box className="cx-input">
      <FormControl
        className="cx-form-control"
        sx={{
          width: '100%',
        }}
        error={error}
        variant="filled"
      >
        <Box
          sx={{
            display: 'flex',
            marginTop: '25px',
          }}
        >
          <InputLabel
            className="cx-form-control__label"
            sx={{
              marginRight: '10px',
            }}
          >
            {label}
          </InputLabel>
          {tooltipMessage && (
            <Tooltips
              additionalStyles={{
                cursor: 'pointer',
                marginTop: '30px !important',
              }}
              tooltipPlacement="top-start"
              tooltipText={tooltipMessage}
            >
              <span className="cx-form-control__tooltip">
                <HelpOutlineIcon sx={{ color: '#B6B6B6' }} fontSize={'small'} />
              </span>
            </Tooltips>
          )}
        </Box>
        <TextField
          className="cx-form-control__textfield"
          variant={variant}
          placeholder={placeholder}
          error={error}
          type={showToggle ? (!showPassword ? 'password' : 'text') : 'text'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showToggle ? (
                  <IconButton
                    onClick={handleToggleVisibility}
                    edge="end"
                    aria-label="toggle password visibility"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ) : error ? (
                  <ErrorOutline
                    color="error"
                    className="cx-form-control__input-adornment--error"
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
          {...props}
        />
        {error && helperText && (
          <FormHelperText
            sx={{ marginLeft: 0, marginBottom: '-23px' }}
            className="cx-form-control__helper-text"
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
