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

import { Button } from '../Button'
import EastIcon from '@mui/icons-material/East'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Divider } from '@mui/material'
import { useState } from 'react'
import { Typography } from '../Typography'
import './styles.scss'

export interface NavigationItem {
  index: number
  title: string
  navigation: string
}

export interface NavigationButton {
  buttonLabel: string
  onButtonClick: React.MouseEventHandler
}

export const NewSubNavigation = ({
  title = 'Contents',
  navigationArray,
  buttonArray = [],
  onClick,
  updateHeaderTitle = false,
}: {
  title?: string
  navigationArray: NavigationItem[]
  buttonArray?: NavigationButton[]
  onClick: (navigation: string) => void
  updateHeaderTitle?: boolean
}): JSX.Element => {
  const [show, setShow] = useState(false)
  const [header, setHeader] = useState(title)
  const [highLight, setHighlight] = useState('')
  return (
    <Box onMouseOver={() => { setShow(true) }}>
      {navigationArray?.length > 0 && (
        <Box
          className="navigationParentContainer"
          onMouseLeave={() => { setShow(false) }}
        >
          <Box className="navigationContainer">
            <Box className="navigationOverlayContainer">
              <MoreVertIcon />
              <Typography
                variant="h4"
                sx={{
                  marginLeft: '10px',
                  fontSize: '14px',
                  color: '#0f71cb',
                }}
              >
                {header}
              </Typography>
              {show && (
                <Box className="navigationOverlay">
                  {navigationArray?.map((link: NavigationItem) => {
                    return (
                      <Box
                        key={link.index}
                        onClick={() => {
                          onClick(link.navigation)
                          setShow(!show)
                          if (updateHeaderTitle) {
                            setHeader(link.title)
                          }
                        }}
                        className="navigationOverlayItem"
                        onMouseOut={() => { setHighlight(link.title) }}
                        onMouseOver={() => {
                          // do nothing
                        }}
                        sx={{
                          backgroundColor:
                            header === link.title || highLight === link.title
                              ? 'rgba(15, 113, 203, 0.05)'
                              : 'transparent',
                        }}
                      >
                        <EastIcon
                          sx={{
                            marginRight: '16px',
                            fontSize: '18px',
                            color:
                              header === link.title || highLight === link.title
                                ? '#0f71cb'
                                : '#EAF1FE',
                          }}
                        />
                        <Typography
                          variant="h4"
                          sx={{
                            color:
                              header === link.title || highLight === link.title
                                ? '#111111'
                                : '#888888',
                            fontSize: '14px',
                          }}
                        >
                          {link.title}
                        </Typography>
                      </Box>
                    )
                  })}
                  {buttonArray?.length > 1 && (
                    <Divider
                      sx={{
                        margin: '10px 0px',
                        borderWidth: '1px',
                        width: '100%',
                      }}
                    />
                  )}
                  {buttonArray?.length > 1 &&
                    buttonArray?.map((btn: NavigationButton) => {
                      return (
                        <Button
                          key={btn.buttonLabel}
                          onClick={(e) => {
                            btn.onButtonClick(e)
                            setShow(!show)
                          }}
                          color="secondary"
                          variant="outlined"
                          size="small"
                          sx={{
                            marginTop: '10px',
                          }}
                        >
                          {btn.buttonLabel}
                        </Button>
                      )
                    })}
                </Box>
              )}
            </Box>
            {buttonArray?.length === 1 && (
              <Button
                onClick={(e) => {
                  buttonArray[0].onButtonClick(e)
                  setShow(!show)
                }}
                color="secondary"
                variant="outlined"
                size="small"
                sx={{
                  marginTop: '10px',
                }}
              >
                {buttonArray[0].buttonLabel}
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Box>
  )
}
