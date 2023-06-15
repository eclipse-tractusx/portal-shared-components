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

import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  type IconProps,
  TextField,
  type TextFieldProps,
  useTheme,
} from '@mui/material'

interface SearchProps extends Omit<TextFieldProps, 'variant'> {
  variant?: 'outlined'
  endAdornment?: IconProps
}

export const SearchInput = ({
  variant,
  endAdornment,
  ...props
}: SearchProps) => {
  const theme = useTheme()
  const { icon01 } = theme.palette.icon

  return (
    <Box>
      <TextField
        sx={{
          borderColor: theme.palette.primary.main,
          width: '100%',
        }}
        variant={variant}
        type={props.type || 'search'}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: icon01, marginRight: 2 }} />,
          endAdornment: endAdornment != null || null,
        }}
        {...props}
      />
    </Box>
  )
}
