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

import {
  TextareaAutosize,
  type TextareaAutosizeProps,
  FormHelperText,
  InputLabel,
  Box,
  FormControl,
} from '@mui/material'

interface TextareaProps extends TextareaAutosizeProps {
  label?: string
  helperText?: string
  error?: boolean
}

export const Textarea = ({
  label,
  placeholder,
  helperText,
  error = false,
  ...props
}: TextareaProps) => {
  return (
    <Box className="cx-textarea">
      <FormControl
        className="cx-form-control"
        sx={{
          width: '100%',
        }}
        error={error}
        variant="filled"
      >
        <InputLabel className="cx-textarea__input">{label}</InputLabel>
        <TextareaAutosize
          className="cx-textarea__autosize"
          placeholder={placeholder}
          {...props}
        />
        {error && helperText && (
          <FormHelperText
            className="cx-textarea__helper-text"
            sx={{ marginLeft: 0, marginBottom: '-23px' }}
          >
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
