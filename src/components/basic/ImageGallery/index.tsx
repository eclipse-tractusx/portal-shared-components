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

import { useState } from 'react'
import { Carousel } from '../Carousel'
import { type ImageType } from './types'
import ImageItemOverlay from './ImageItemOverlay'
import { Image } from '../Image'
import { useMediaQuery } from '@mui/material'

export const ImageGallery = ({
  gallery,
  modalWidth,
  maxWidth,
  maxHeight,
}: {
  gallery: ImageType[]
  modalWidth?: string
  maxWidth?: number
  maxHeight?: number
}) => {
  const [hovered, setHovered] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<ImageType>()
  const mobile = useMediaQuery('(max-width:480px)')
  const tab = useMediaQuery('(max-width:1023px)')

  const hoverImageFn = (image: ImageType) => {
    setHovered(true)
    setHoveredImage(image)
  }

  const getSlidesToShow = () => {
    if (mobile) return 1
    else if (tab) return 2
    else return 3
  }

  return (
    <div className="cx-image-gallery">
      {hovered && hoveredImage?.url && (
        <ImageItemOverlay
          onClose={() => {
            setHovered(false)
          }}
          url={hoveredImage.url}
          text={hoveredImage.text}
          loader={hoveredImage.loader}
          modalWidth={modalWidth}
        />
      )}
      <Carousel
        gapBetweenSlides={32}
        gapCarouselTop={0}
        dots={false}
        infinite
        itemHeight={maxHeight ?? 0}
        itemWidth={maxWidth ?? 266}
        slidesToShow={getSlidesToShow()}
      >
        {gallery.map((image) => (
          <div
            className="cx-image-gallery__btn"
            key={image.url}
            onClick={() => {
              hoverImageFn(image)
            }}
            onKeyDown={() => {
              hoverImageFn(image)
            }}
          >
            <Image
              src={image.url}
              alt={image.text}
              loader={image.loader}
              style={{
                height: '60%',
                width: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}
