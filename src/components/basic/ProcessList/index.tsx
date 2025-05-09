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

import { Box } from '@mui/material'
import { type StepList } from '../Stepper'
import { ListItem } from './ListItem'

export interface ProcessListProps {
  list: StepList[]
  stepsColor: string
  stepsFontColor: string
  elementNumbers: number
}

export const ProcessList = ({
  list,
  stepsColor,
  stepsFontColor,
  elementNumbers,
}: ProcessListProps) => {
  return (
    <Box>
      {list
        .filter(
          (item: StepList) =>
            item.step <= elementNumbers && item.step <= list.length
        )
        .map((item: StepList) => (
          <ListItem
            key={item.step}
            step={item.step}
            headline={item.headline}
            description={item.description ?? ''}
            stepsColor={stepsColor}
            stepsFontColor={stepsFontColor}
            lastItem={item.step === elementNumbers}
          />
        ))}
    </Box>
  )
}
