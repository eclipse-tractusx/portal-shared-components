/********************************************************************************
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

import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Box } from '@mui/material'
import { Typography } from '../../basic/Typography'

function LinkText(props: Readonly<LinkType>) {
  return (
    <Box
      className="cx-card__about--heading"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '20px 20px',
        cursor: 'pointer',
        placeItems: 'center',
      }}
      onClick={() => window.open(props.url, '_blank')}
    >
      <Typography className="cx-card__about--heading-text">
        {props.text}
      </Typography>
      <OpenInNewIcon />
    </Box>
  )
}

function TitleText(props: Readonly<LinkType>) {
  return (
    <Box
      className="cx-card__about--title"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        padding: '20px 20px',
        cursor: 'pointer',
        placeItems: 'center',
      }}
      onClick={() => window.open(props.url, '_blank')}
    >
      <Typography
        className="cx-card__about--title-text"
        variant="h3"
        sx={{ paddingRight: '10px', textTransform: 'uppercase' }}
      >
        {props.text}
      </Typography>
      <OpenInNewIcon className="cx-card__about--title-icon" />
    </Box>
  )
}

interface LinkType {
  text: string
  url: string
}

export const AboutCard = (props: {
  name: string
  repositoryPath: string
  license: string
  licensePath: string
  noticePath: string
  sourcePath: string
  commitId: string
}) => {
  return (
    <Box
      className="cx-card__about--item"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '800px',
        alignItems: 'center',
      }}
    >
      <Box
        className="cx-card__about--item-wrap"
        sx={{
          background: '#FFFFFF',
          boxShadow: '0px 5px 10px rgba(80, 80, 80, 0.3)',
          borderRadius: '8px',
          width: '100%',
        }}
      >
        <Box className="cx-card__about--item-title">
          <TitleText text={props.name} url={props.repositoryPath} />
          {props.license && props.licensePath && (
            <LinkText
              text={`License ${props.license}`}
              url={props.licensePath}
            />
          )}
          {props.noticePath && (
            <LinkText text="Notice" url={props.noticePath} />
          )}
          {props.sourcePath && (
            <LinkText text="Source" url={props.sourcePath} />
          )}
          {props.commitId && (
            <Box className="cx-card__about--item-commit">
              <Typography
                sx={{
                  padding: '20px 20px',
                }}
              >
                Commit ID: {props.commitId}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
