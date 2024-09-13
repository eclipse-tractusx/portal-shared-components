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

import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Link, Typography, useTheme } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Chip } from '../../basic/Chip'
import { SortOption } from '../../basic/SortOption'
import { Tooltips } from '../../basic/ToolTips'
import { CardButtons, type CardButtonsProps } from './CardButtons'
import { CardChip, type CardChipProps } from './CardChip'
import { CardContent, type CardContentProps } from './CardContent'
import { CardImage, type CardImageProps } from './CardImage'
import { type SubItems } from '.'

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
  topValue?: number
  subMenu?: boolean
  activeSubmenuOptions?: SubItems[]
  inactiveSubmenuOptions?: SubItems[]
  submenuClick?: (sortMenu: string, id: string | undefined) => undefined
  tooltipText?: string
  showStatus?: boolean
  boxClickable?: boolean
  showFavIcon?: boolean
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
  imageElement,
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
  activeSubmenuOptions,
  inactiveSubmenuOptions,
  submenuClick,
  tooltipText = '',
  showStatus = true,
  boxClickable = false,
  showFavIcon = false,
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
    sortOption !== '' && submenuClick?.(sortOption, id)
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
    if (
      status?.toLowerCase() === 'active' ||
      status?.toLowerCase() === 'inactive'
    ) {
      setShowModal(true)
    }
  }

  const renderTooltipText = () => {
    if (
      status?.toLowerCase() === 'active' ||
      status?.toLowerCase() === 'inactive'
    ) {
      return ''
    } else {
      return tooltipText
    }
  }
  return (
    <div
      className="cx-card__instance"
      ref={boxRef}
      style={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={boxClickable ? onButtonClick : onClick}
      onKeyDown={() => {
        // do nothing
      }}
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
        className="card cx-card"
        onMouseLeave={() => {
          setShowModal(false)
        }}
      >
        {showFavIcon && (
          <Box
            className="cx-card__icon"
            sx={{
              padding: '10px',
            }}
            onClick={onSecondaryButtonClick}
          >
            <FavoriteIcon
              sx={{
                color: addButtonClicked ? '#0f71cb' : '#e3e3e3',
              }}
            />
          </Box>
        )}
        <Box className="cx-card__top">
          {statusText && imageSize !== 'small' && (
            <Box
              className="cx-card__top--chip"
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
            imageElement={imageElement}
            preview={variant === 'preview'}
          />
          {subscriptionStatus && (
            <Typography
              className="cx-card__top--status"
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
                transform: 'rotate(45deg)',
                zIndex: 10,
                background:
                  subscriptionStatus?.toLowerCase() === 'pending'
                    ? 'linear-gradient(239deg, rgba(255,120,44,1) 0%, rgba(255,179,38,1) 50%)'
                    : '#B3CB2D',
                textTransform: 'lowercase',
              }}
            >
              {subscriptionStatus}
            </Typography>
          )}
        </Box>
        <Box
          sx={{ marginBottom: '20px' }}
          className="cx-card__content--wrapper"
        >
          {statusText && imageSize === 'small' && showStatus && (
            <Box
              className="cx-card__content--chip"
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
              tooltipText={renderTooltipText()}
              additionalStyles={{ marginLeft: '210px' }}
            >
              <Box
                className="cx-card__content-icon"
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
                      status?.toLowerCase() === 'active' ||
                      status?.toLowerCase() === 'inactive'
                        ? '#0F71CB'
                        : '#999999',
                    borderRadius: '15px',
                    cursor: 'pointer',
                    ...((status?.toLowerCase() === 'active' ||
                      status?.toLowerCase() === 'inactive') && {
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
            className="cx-card__content--sort-option"
            style={{
              background: '#f9f9f9',
              borderRadius: '16px',
              boxShadow: '0px 10px 20px rgb(80 80 80 / 30%)',
              position: 'absolute',
              zIndex: '9',
              margin: '-10px 80px',
            }}
          >
            {activeSubmenuOptions && status?.toLowerCase() === 'active' && (
              <SortOption
                show={showModal}
                selectedOption={sortOption}
                setSortOption={(value: string) => {
                  setSortOption(value)
                  setShowModal(false)
                }}
                sortOptions={activeSubmenuOptions}
                singleMenu={activeSubmenuOptions?.length === 1}
              />
            )}
            {inactiveSubmenuOptions && status?.toLowerCase() === 'inactive' && (
              <SortOption
                show={showModal}
                selectedOption={sortOption}
                setSortOption={(value: string) => {
                  setSortOption(value)
                  setShowModal(false)
                }}
                sortOptions={inactiveSubmenuOptions}
                singleMenu={inactiveSubmenuOptions?.length === 1}
              />
            )}
          </div>
          {showButton && !showFavIcon && (
            <CardButtons
              buttonText={buttonText}
              onButtonClick={onButtonClick}
              onSecondaryButtonClick={onSecondaryButtonClick}
              addButtonClicked={addButtonClicked}
            />
          )}
          {showButton && showFavIcon && (
            <Box
              className="cx-card__content--buttons"
              sx={{
                width: '100%',
                paddingLeft: '20px',
                paddingRight: '20px',
              }}
            >
              <Chip
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                }}
                color={'secondary'}
                label={buttonText}
                type={'plain'}
                variant={'filled'}
                withIcon={false}
                onClick={onButtonClick}
              />
            </Box>
          )}
          {variant === 'text-only' && readMoreLink && readMoreText && (
            <Link
              className="cx-card__content-icon"
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
