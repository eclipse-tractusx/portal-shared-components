/********************************************************************************
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

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '../Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import './ErrorBar.scss'

export const ErrorBar = ({
  errorText = '',
  handleButton,
  showButton,
  buttonText
}: {
  errorText?: string
  handleButton?: () => void
  showButton?: boolean
  buttonText?: string
}) => {

  return (
    <Box className="errorBar">
      <Box className="iconWithText">
        <ReportProblemIcon className='errorIcon' />
        <Typography variant="body2" color="#D91E18">
          {errorText}
        </Typography>
      </Box>
      {showButton && (
        <Box>
          <Button endIcon={<ArrowForwardIcon />} variant='contained' color='primary'
          onClick={handleButton} className='triggerButton'>
            {buttonText}
          </Button>
        </Box>
      )}
    </Box>
  )
}
