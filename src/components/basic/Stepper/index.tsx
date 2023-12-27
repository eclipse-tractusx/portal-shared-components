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

import { Box, Link } from '@mui/material'
import uniqueId from 'lodash/uniqueId'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Typography } from '../Typography'
import { StepperItem } from './StepperItem'
import './Stepper.scss'

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
  tooltipText?: string
  tooltipLink?: string
}

export const Stepper = ({ list, showSteps, activeStep, tooltipText, tooltipLink }: StepperProps) => {

  return (
    <Box
      sx={{
        margin: '0px auto',
      }}
    >
      {list &&
        <>
          <Box
            className="stepperMain"
          >
            {
              list
                .filter((item) => item.step <= showSteps && item.step <= list.length)
                .map((item, i) => (
                  <StepperItem
                    key={uniqueId(item.headline)}
                    step={item.step}
                    headline={item.headline}
                    text={item.text ?? ''}
                    color={item.color ?? ''}
                    activeStep={activeStep}
                    index={i + 1}
                    totalSteps={list.length}
                    tooltipText={tooltipText}
                    tooltipLink={tooltipLink}
                  />
                ))
            }
          </Box>
          <Box className="stepperHint">
            {
              tooltipText &&
              list
                .filter((item) => item.step <= showSteps && item.step <= list.length)
                .map((item, i) => (
                  <Box
                    className="hintStep"
                    sx={{
                      marginTop: '25px'
                    }}>
                    {
                      i + 1 === activeStep &&
                      <Box
                        sx={{
                          fontSize: '14px',
                          background: '#eaf1fe',
                          borderRadius: '6px',
                          padding: '6px',
                          boxShadow: '0px 10px 20px rgba(80, 80, 80, 0.3)',
                          cursor: 'pointer'
                        }}
                      >
                        <Link
                          href={tooltipLink}
                          target="_blank"
                          sx={{
                            color: '#111111 !important',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                          }}
                        >
                          <KeyboardArrowUpIcon
                            sx={{

                            }}
                          />
                          <Typography
                            variant="label3"
                            fontSize="12px"
                            sx={{
                              paddingBottom: '5px',
                              textAlign: 'center'
                            }}
                          >
                            {tooltipText}
                          </Typography>
                        </Link>
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
