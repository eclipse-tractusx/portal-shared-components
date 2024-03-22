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

import { useState, useEffect } from 'react'
import LinearProgress, {
  type LinearProgressProps,
} from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { CircularProgress } from '@mui/material'

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number; progressText: string }
) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <CircularProgress
        size={50}
        sx={{
          position: 'absolute',
          color: '#ffffff',
          zIndex: '9',
          margin: '5%',
        }}
      />
      <Box
        sx={{ minWidth: 35, position: 'absolute', zIndex: '9', left: '35%' }}
      >
        <Typography variant="body2" color="#ffffff">
          {props.progressText}
        </Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35, position: 'absolute', right: '25%' }}>
        <Typography variant="body2" color="#ffffff">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

export const LinearProgressWithValueLabel = ({
  progressText = '',
  callback,
  isLoading,
  isFetching,
  interval = 100,
}: {
  progressText?: string // display progress text
  callback?: () => void // allow page to render content
  isLoading?: boolean // method from RTK
  isFetching?: boolean // method from RTK
  interval?: number
}) => {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, interval)
    if (progress === 100 && (!isFetching || !isLoading)) {
      setProgress(100)
      clearInterval(timer)
      if (callback) callback()
    }
    return () => {
      clearInterval(timer)
    }
  }, [progress])

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel
        sx={{
          height: '100px',
          borderRadius: '10px',
        }}
        value={progress}
        progressText={progressText}
      />
    </Box>
  )
}
