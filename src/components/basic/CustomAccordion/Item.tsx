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

import React from 'react'
import Accordion, { type AccordionProps } from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { AccordionActions, Box, Button, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface CustomAccordionProps extends AccordionProps {
  expanded: boolean | undefined
  id: string
  title: string
  children: React.ReactElement
  color?: string
  icon?: React.ReactElement
  buttonText?: string
  titleElement?: React.ReactElement
}

export const CustomAccordionItem = ({
  expanded,
  id,
  title,
  children,
  color,
  icon,
  buttonText,
  titleElement,
  ...props
}: CustomAccordionProps) => {
  const onChange = { ...props }.onChange
  return (
    <Accordion
      className={'cx-accordion'}
      expanded={expanded}
      {...props}
      elevation={0}
      sx={{
        mb: 0,
        '&.MuiAccordion-root': {
          width: '100%',
        },
      }}
    >
      <AccordionSummary
        className={'cx-accordion__summary'}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        expandIcon={<ExpandMoreIcon />}
        sx={{
          bgcolor: color,
          ':hover': {
            bgcolor: color ?? 'background.background12',
          },
          ':focus': {
            boxShadow: 'none !important',
            bgcolor: color ?? 'background.background12',
          },
        }}
      >
        {icon != null && (
          <Box sx={{ marginRight: '10px', color: 'action.active' }}>{icon}</Box>
        )}
        {titleElement}
        <Typography variant="label1" className={'cx-accordion__title'}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        className={'cx-accordion__details'}
        sx={{ mb: '20px', bgcolor: color }}
      >
        {children}
      </AccordionDetails>
      {buttonText && (
        <AccordionActions
          className={'cx-accordion__actions'}
          onClick={(e) => {
            onChange?.(e, false)
          }}
          sx={{ justifyContent: 'center', mb: '20px' }}
        >
          <Button
            variant="contained"
            size="small"
            className={'cx-button cx-accordion__button'}
          >
            {buttonText}
          </Button>
        </AccordionActions>
      )}
    </Accordion>
  )
}
