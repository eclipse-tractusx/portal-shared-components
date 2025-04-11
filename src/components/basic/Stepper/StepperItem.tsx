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

import { Box, Link } from '@mui/material'
import { useEffect, useState } from 'react'
import { theme } from '../../../theme'
import { Typography } from '../Typography'

interface StepperItemProps {
  step: number
  headline: string
  text: string
  color: string
  activeStep: number
  index: number
  tooltipText?: string
  tooltipLink?: string
}

export const StepperItem = ({
  step,
  headline,
  text,
  color,
  activeStep,
  index,
  tooltipText,
  tooltipLink,
}: StepperItemProps) => {
  const [backgroundColor, setBackgroundColor] = useState(
    color || theme.palette.stepper.stepUpcoming
  )
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index === activeStep) {
      setBackgroundColor(color || theme.palette.stepper.stepCurrent)
      setDone(false)
    } else if (index < activeStep) {
      setBackgroundColor(color || theme.palette.stepper.stepDone)
      setDone(true)
    } else {
      setBackgroundColor(color || theme.palette.stepper.stepUpcoming)
      setDone(false)
    }
  }, [index, activeStep])

  return (
    <Box className="stepperStep cx-stepper__item">
      <Box
        className="stepHead cx-stepper__item--head"
        sx={{
          borderBottom: `2px solid ${backgroundColor}`,
        }}
      >
        <Box className="hintStepMain cx-stepper__item--hint">
          <Box
            className="stepIcon cx-stepper__item--hint-icon"
            sx={{
              margin: '12px 0 16px 0',
            }}
          >
            <Typography
              variant="body1"
              fontSize="14px"
              sx={{
                backgroundColor: `${backgroundColor}`,
                borderRadius: `${text ? '20px' : '50%'}`,
                margin: '0 auto',
                width: `${text ? 'auto' : '28px'}`,
                height: `${text ? 'auto' : '28px'}`,
                color: '#fff',
                display: `${text ? 'inline-block' : 'flex'}`,
                padding: `${text ? '3px 15px' : '0'}`,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {done &&
                (text || (
                  <svg
                    className="stepIcon cx-stepper__item--hint-icon done"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.8078 1.24939L5.09535 12.1399L0.305542 7.15056L1.74832 5.7655L4.95851 9.10944L12.2461 0L13.8078 1.24939Z"
                      fill="white"
                    />
                  </svg>
                ))}
              {!done && step}
            </Typography>
          </Box>
          <Box className="hintStepMobile cx-stepper__item-mobile">
            {index === activeStep && (
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
                <Typography
                  variant="label3"
                  fontSize="12px"
                  sx={{
                    paddingBottom: '5px',
                    textAlign: 'center',
                  }}
                >
                  {tooltipText}
                </Typography>
              </Link>
            )}
          </Box>
        </Box>

        <Box className="stepHeadline cx-stepper__item--headline">
          <Typography
            className="stepHeadline cx-stepper__item--headline--text"
            variant="label3"
            fontSize="14px"
            fontWeight="500"
            sx={{
              margin: 'auto',
              height: 'fit-contetn',
            }}
          >
            {headline}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
