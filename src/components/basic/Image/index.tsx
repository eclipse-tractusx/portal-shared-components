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

import { useEffect, useState, useCallback } from 'react'

export const LogoGrayData =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii04IC04IDY4LjUgNzEuNiI+PHBhdGggZD0iTTQwIDI4LjY5di02YTEgMSAwIDAwLTEuNTUtLjgyTDE0LjY5IDM4LjMxYTQuMTEgNC4xMSAwIDAxLTYuNDUtMy4zOFYyN2E4LjIzIDguMjMgMCAwMTMuNTUtNi43Nmw3LjA4LTQuODlBNC4wNyA0LjA3IDAgMDAyMC42MyAxMlYuOTlBMSAxIDAgMDAxOS4xLjE4bC01IDMuNDJBNC4wOCA0LjA4IDAgMDAxMi4zOCA3djIuODRMNi4zIDE0QTE0LjU3IDE0LjU3IDAgMDAwIDI2djguODlhMTIuMzYgMTIuMzYgMCAwMDE5LjM4IDEwLjJsMTguOS0xM2E0LjA5IDQuMDkgMCAwMDEuNzItMy40eiIgZmlsbD0iI2I0YjRiNCIvPjxwYXRoIGQ9Ik0zMyAxMC42M2wtMTguOSAxM0E0LjA5IDQuMDkgMCAwMDEyLjM1IDI3djZhMSAxIDAgMDAxLjU1LjgxbDIzLjgxLTE2LjRhNC4xMSA0LjExIDAgMDE2LjQ0IDMuMzh2Ny45YTguMjUgOC4yNSAwIDAxLTMuNTUgNi43N2wtNi4zMyA0LjM2LS43Mi41YTQuMDYgNC4wNiAwIDAwLTEuNzUgMy4zNHYxMS4wMmExIDEgMCAwMDEuNTUuODFsNS0zLjQzQTQuMDUgNC4wNSAwIDAwNDAgNDguNzJ2LTIuODVsNi4wNi00LjE4YTE0LjU4IDE0LjU4IDAgMDA2LjI5LTEyVjIwLjhBMTIuMzUgMTIuMzUgMCAwMDMzIDEwLjYzeiIgZmlsbD0iI2ExYTFhMSIvPjwvc3ZnPg=='

export const TransparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

const IMAGE_TYPES: any = {
  '3c': 'image/svg+xml',
  ffd8ff: 'image/jpeg',
  '89504e': 'image/png',
  474946: 'image/gif',
}

const buf2hex = (buffer: ArrayBuffer) =>
  [...new Uint8Array(buffer)]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('')

const defaultFetchImage = async (url: string): Promise<ArrayBuffer> => {
  const response = await fetch(url)
  return await response.arrayBuffer()
}

interface ImageProps {
  src: string
  alt?: string
  style?: any
  loader?: (src: string) => Promise<ArrayBuffer>
}

export const Image = ({ src, alt, style, loader }: ImageProps) => {
  const [data, setData] = useState(src)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)

  const getData = useCallback(async () => {
    try {
      const buffer =
        loader != null ? await loader(src) : await defaultFetchImage(src)
      const firstByte = buf2hex(buffer.slice(0, 1))
      const first3Bytes = buf2hex(buffer.slice(0, 3))
      const imageType =
        IMAGE_TYPES[firstByte] || IMAGE_TYPES[first3Bytes] || 'image/*'
      setData(URL.createObjectURL(new Blob([buffer], { type: imageType })))
    } catch (e) {
      setError(true)
    }
  }, [src, loader])

  useEffect(() => {
    setError(false)
    setLoad(false)
    setData(src)
  }, [src])

  return (
    <img
      src={!load && !error && src.startsWith('blob:') ? src : data}
      alt={alt || 'Catena-X'}
      onError={() => {
        setData(LogoGrayData)
        if (load) {
          setError(true)
        } else {
          setLoad(true)
          getData()
        }
      }}
      style={{
        objectFit: 'cover',
        ...style,
      }}
    />
  )
}
