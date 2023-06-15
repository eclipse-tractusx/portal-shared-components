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
import { ErrorDescription } from './components/ErrorDescription'
import { ErrorActions } from './components/ErrorActions'
import { ErrorImage } from './components/ErrorImage'

export interface ErrorPageProps {
  hasNavigation?: boolean
  header?: string
  title?: string
  description?: string
  additionalDescription?: string
  reloadButtonTitle?: string
  homeButtonTitle?: string
  onReloadClick?: React.MouseEventHandler
  onHomeClick?: React.MouseEventHandler
  color?: 'color' | 'gray'
}

export const ErrorPage = ({
  hasNavigation,
  header,
  title,
  description,
  additionalDescription,
  reloadButtonTitle,
  homeButtonTitle,
  onReloadClick,
  onHomeClick,
  color = 'gray',
}: ErrorPageProps) => {
  const height = hasNavigation ? 'calc(100vh - 85px)' : '100vh'
  return (
    <Box
      sx={{
        width: '100%',
        height,
        backgroundColor: '#F7F7F7',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          margin: 'auto auto',
        }}
      >
        <Box
          sx={{
            minWidth: '400px',
          }}
        >
          <ErrorImage variant={color} />
        </Box>
        <Box>
          <ErrorDescription
            header={header}
            title={title}
            description={description}
            additionalDescription={additionalDescription}
          />
          <ErrorActions
            reloadButtonTitle={reloadButtonTitle}
            homeButtonTitle={homeButtonTitle}
            onReloadClick={onReloadClick}
            onHomeClick={onHomeClick}
          />
        </Box>
      </Box>
    </Box>
  )
}
