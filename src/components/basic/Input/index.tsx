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
    <Box>
      <FormControl
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
              <span>
                <HelpOutlineIcon sx={{ color: '#B6B6B6' }} fontSize={'small'} />
              </span>
            </Tooltips>
          )}
        </Box>
        <TextField
          variant={variant}
          placeholder={placeholder}
          error={error}
          type={showToggle && !showPassword ? 'password' : 'text'}
          slotProps={{
            input: {
              endAdornment: showToggle && (
                <InputAdornment position="end">
                  <IconButton onClick={handleToggleVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                  {error && <ErrorOutline color="error" />}
                </InputAdornment>
              ),
            },
          }}
          {...props}
        />
        {error && helperText && (
          <FormHelperText sx={{ marginLeft: 0, marginBottom: '-23px' }}>
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
