/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
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

import { Switch, Tooltip } from '@mui/material'
import React from 'react'
import './ToggleSwitch.scss'

export interface ToggleSwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  hoverEnabled?: boolean
  tooltipText?: string
}

export const ToggleSwitch = ({
  checked,
  onChange,
  disabled = false,
  hoverEnabled = false,
  tooltipText = '',
}: ToggleSwitchProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onChange(!checked)
    }
  }

  const handleChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newChecked: boolean
  ) => {
    onChange(newChecked)
  }

  return (
    <Tooltip
      title={hoverEnabled ? tooltipText : ''}
      disableHoverListener={!hoverEnabled}
      enterDelay={300}
      leaveDelay={500}
    >
      <Switch
        checked={checked}
        onChange={handleChange}
        className={`toggle-switch ${checked ? 'active' : 'inactive'}`}
        inputProps={{ 'aria-label': 'controlled' }}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        sx={{
          width: '60px',
          height: '30px',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          '& .MuiSwitch-switchBase': {
            top: '6px',
            left: '7px',
            color: '#fff',
          },
          '& .MuiSwitch-thumb': {
            width: '26px',
            height: '26px',
            backgroundColor: '#fff',
            position: 'absolute',
          },
          '& .MuiSwitch-track': {
            borderRadius: '15px',
            backgroundColor: checked ? '#5bb52e' : '#ff0000',
            height: '30px',
            opacity: 1,
            '&::before': {
              position: 'absolute',
              left: '5px',
              top: '6px',
              fontSize: '12px',
              color: '#000',
            },
            '&::after': {
              position: 'absolute',
              right: '5px',
              top: '6px',
              fontSize: '12px',
              color: '#000',
            },
          },
        }}
      />
    </Tooltip>
  )
}
