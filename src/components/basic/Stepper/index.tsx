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

import { Box } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { StepperItem } from './StepperItem'

export interface StepList {
  step: number
  headline: string
  description?: string
  text?: string
  color?: string
}

export interface StepperProps {
  list: StepList[]
  showSteps: number
  activeStep: number
  tooltipText: string
}

export const Stepper = ({ list, showSteps, activeStep, tooltipText }: StepperProps) => {
  const width = 100 / list.length

  return (
    <Box
      sx={{
        margin: '0px auto',
      }}
    >
      {list &&
        <>
          <Box
            sx={{
              display: 'flex'
            }}
          >
            {
              list
                .filter((item) => item.step <= showSteps && item.step <= list.length)
                .map((item, i) => (
                  <StepperItem
                    key={i}
                    step={item.step}
                    headline={item.headline}
                    text={item.text ?? ''}
                    color={item.color ?? ''}
                    activeStep={activeStep}
                    index={i + 1}
                    totalSteps={list.length}
                  />
                ))
            }
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginTop: '20px'
            }}
          >
            {
              tooltipText && 
              list
                .map((item, i) => (
                  <Box
                    sx={{
                      width: `${width}%`,
                      margin: '0px',
                      textAlign: 'center'
                    }}
                  >
                    {
                      i+1 === activeStep &&
                      <Box
                        sx={{
                          fontSize: '13px',
                          background: '#eaf1fe',
                          borderRadius: '6px',
                          padding: '6px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          boxShadow: '0px 10px 20px rgba(80, 80, 80, 0.3)'
                        }}
                      >
                        <KeyboardArrowUpIcon 
                          sx={{
                            
                          }}
                        />
                        { tooltipText }
                      </Box>
                    }
                  </Box>
                ))
            }
          </Box>
        </>
      }

    </Box>
  )
}
