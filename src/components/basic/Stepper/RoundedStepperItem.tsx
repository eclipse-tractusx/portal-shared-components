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

import { Box } from '@mui/material'
import { Typography } from '../Typography'
import { theme } from '../../../theme'

interface StepperItemProps {
  color: string
  activeStep: number
  index: number
}

export const RoundedStepperItem = ({
  color,
  activeStep,
  index,
}: StepperItemProps) => {
  const getBackgroundColor = () => {
    if (index === activeStep) {
      return color || theme.palette.stepper.stepCurrent
    }
    if (index < activeStep) {
      return color || theme.palette.stepper.stepDone
    }
    return color || theme.palette.stepper.stepUpcoming
  }

  return (
    <Box className="stepperRoundedStep">
      <Box className="stepperRound">
        <Typography
          variant="body1"
          fontSize="14px"
          color="#fff"
          sx={{
            backgroundColor: getBackgroundColor(),
          }}
        ></Typography>
      </Box>
    </Box>
  )
}
