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

import { Box, Link, Typography, useTheme } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useEffect, useRef, useState } from 'react'
import { CardButtons, type CardButtonsProps } from './CardButtons'
import { CardChip, type CardChipProps } from './CardChip'
import { CardContent, type CardContentProps } from './CardContent'
import { CardImage, type CardImageProps } from './CardImage'
import { SortOption } from '../../basic/SortOption'
import { type SubItems } from '.'
import { Tooltips } from '../../basic/ToolTips'

type Variants =
  | 'minimal'
  | 'compact'
  | 'expanded'
  | 'preview'
  | 'text-only'
  | 'text-details'

export interface CardProps
  extends CardContentProps,
    CardButtonsProps,
    CardImageProps,
    CardChipProps {
  variant?: Exclude<Variants, 'preview'>
  filledBackground?: boolean
  backgroundColor?: string
  expandOnHover?: boolean
  readMoreText?: string
  readMoreLink?: string
  onClick?: React.MouseEventHandler
  addButtonClicked?: boolean
  positionValue?:
    | 'relative'
    | 'initial'
    | 'inherit'
    | 'unset'
    | 'static'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | undefined
  topValue?: number
  subMenu?: boolean
  submenuOptions?: SubItems[]
  submenuClick?: (sortMenu: string, id: string | undefined) => undefined
  tooltipText?: string
  showStatus?: boolean
  boxClickable?: boolean
}

export const Card = ({
  variant: variantProp = 'minimal',
  expandOnHover = false,
  filledBackground,
  backgroundColor,
  id,
  title,
  subtitle,
  subscriptionStatus,
  rating,
  price,
  description,
  image,
  imageSize,
  imageShape,
  imageLoader,
  buttonText,
  onClick,
  onButtonClick,
  onSecondaryButtonClick,
  readMoreText,
  readMoreLink,
  addButtonClicked,
  status,
  statusText,
  positionValue,
  topValue = 0,
  subMenu,
  submenuOptions,
  submenuClick,
  tooltipText = '',
  showStatus = true,
  boxClickable = false,
}: CardProps): JSX.Element => {
  const { shape, shadows } = useTheme()
  const [variant, setVariant] = useState<Variants>(variantProp)
  const [content, setContent] = useState<CardContentProps>({
    title,
    subtitle,
  })
  const boxRef = useRef<HTMLDivElement>(null)
  const [showButton, setShowButton] = useState(false)
  const [boxHeight, setBoxHeight] = useState<number | undefined>()
  const [sortOption, setSortOption] = useState<string>('')
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    setVariant(variantProp)
  }, [variantProp])

  useEffect(() => {
    sortOption !== '' &&
      submenuClick !== undefined &&
      submenuClick(sortOption, id)
  }, [sortOption, submenuClick, id])

  useEffect(() => {
    switch (variant) {
      case 'compact':
        setContent({ title, subtitle, rating, price })
        break
      case 'text-only':
        setContent({ title, description })
        break
      case 'expanded':
      case 'preview':
        setContent({ title, subtitle, rating, price, description })
        break
      case 'text-details':
        setContent({ title, subtitle, description })
        break
      default:
        setContent({ title, subtitle })
    }
  }, [variant, description, price, rating, subtitle, title])

  useEffect(() => {
    setShowButton(['expanded', 'preview'].includes(variant))
  }, [variant])

  useEffect(() => {
    // Set initial box height to prevent flicker on hover
    // TODO: Had to add 37px in height to fit inner content, investigation required
    setBoxHeight(boxRef.current?.getBoundingClientRect().height)
  }, [])

  const onMouseEnter = (): void => {
    if (expandOnHover) setVariant('preview')
  }
  const onMouseLeave = (): void => {
    setVariant(variantProp)
  }

  const customBackgroundColor = (): string => {
    return backgroundColor ?? 'background.background02'
  }

  const styles: React.CSSProperties = {
    position: positionValue ?? 'relative',
    height: boxHeight ? `${boxHeight + 37}px` : '',
    top: `${topValue}px`,
    left: '0px',
    paddingRight: '10px',
    paddingLeft: '10px',
    width: '290px',
    minWidth: '290px',
    marginBottom: '64px',
  }

  const handleSubmenuFn = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (status?.toLowerCase() === 'active') {
      setShowModal(true)
    }
  }

  return (
    <div
      ref={boxRef}
      style={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={boxClickable ? onButtonClick : onClick}
    >
      <Box
        sx={{
          overflow: showModal ? 'unset' : 'hidden',
          position: 'relative',
          backgroundColor: 'common.white',
          borderRadius: shape.borderRadius,
          border: '1px solid',
          borderColor: 'border.border01',
          ':hover': {
            boxShadow: shadows['20'],
          },
          ...(filledBackground === true && {
            backgroundColor: customBackgroundColor,
            border: 'none',
          }),
          ...(variant === 'preview' && {
            width: '100%',
            zIndex: 100,
          }),
          ...(variant === 'text-only' && {
            border: 'none',
            ':hover': {
              boxShadow: 'none',
            },
          }),
          ...(onClick != null && { cursor: 'pointer' }),
        }}
        className="card"
        onMouseLeave={() => {
          setShowModal(false)
        }}
      >
        <Box>
          {statusText && imageSize !== 'small' && (
            <Box
              sx={{
                position: 'absolute',
                right: '0',
                marginRight: '17px',
                marginTop: '21px',
              }}
            >
              <CardChip status={status} statusText={statusText} />
            </Box>
          )}
          <CardImage
            image={image}
            imageSize={imageSize}
            imageShape={imageShape}
            imageLoader={imageLoader}
            preview={variant === 'preview'}
          />
          {subscriptionStatus && (
            <Typography
              variant="label4"
              sx={{
                top: '-22px',
                right: '-90px',
                color: '#fff',
                display: 'block',
                position: 'absolute',
                textAlign: 'center',
                textDecoration: 'none',
                padding: '50px 90px 20px 90px',
                '-webkit-transform': 'rotate(45deg)',
                zIndex: 10,
                background:
                  subscriptionStatus?.toLowerCase() === 'pending'
                    ? 'linear-gradient(239deg, rgba(255,120,44,1) 0%, rgba(255,179,38,1) 50%)'
                    : '#B3CB2D',
              }}
            >
              {subscriptionStatus}
            </Typography>
          )}
        </Box>
        <Box sx={{ marginBottom: '20px' }}>
          {statusText && imageSize === 'small' && showStatus && (
            <Box
              sx={{
                padding: '15px',
              }}
            >
              <CardChip status={status} statusText={statusText} />
            </Box>
          )}
          <CardContent {...content} />
          {subMenu && (
            <Tooltips
              color="dark"
              tooltipPlacement="bottom-start"
              tooltipText={
                status?.toLowerCase() === 'active' ? '' : tooltipText
              }
              additionalStyles={{ marginLeft: '210px' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '0 10px',
                }}
              >
                <MoreVertIcon
                  sx={{
                    color:
                      status?.toLowerCase() === 'active'
                        ? '#0F71CB'
                        : '#999999',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    ...(status?.toLowerCase() === 'active' && {
                      ':hover': {
                        backgroundColor: 'rgb(176 206 235 / 40%)',
                      },
                    }),
                  }}
                  onClick={(e) => {
                    handleSubmenuFn(e)
                  }}
                />
              </Box>
            </Tooltips>
          )}
          <div
            style={{
              background: '#f9f9f9',
              borderRadius: '16px',
              boxShadow: '0px 10px 20px rgb(80 80 80 / 30%)',
              position: 'absolute',
              zIndex: '9',
              margin: '-10px 80px',
            }}
          >
            <SortOption
              show={showModal}
              selectedOption={sortOption}
              setSortOption={(value: string) => {
                setSortOption(value)
                setShowModal(false)
              }}
              sortOptions={submenuOptions}
              singleMenu={submenuOptions?.length === 1}
            />
          </div>
          {showButton && (
            <CardButtons
              buttonText={buttonText}
              onButtonClick={onButtonClick}
              onSecondaryButtonClick={onSecondaryButtonClick}
              addButtonClicked={addButtonClicked}
            />
          )}
          {variant === 'text-only' && readMoreLink && readMoreText && (
            <Link
              sx={{
                display: 'block',
                marginTop: '10px',
                textDecoration: 'underline',
                fontSize: 'typography.h4.fontSize',
              }}
              href={readMoreLink}
            >
              {readMoreText}
            </Link>
          )}
        </Box>
      </Box>
    </div>
  )
}
