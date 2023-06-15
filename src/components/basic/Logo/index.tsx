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

import CXLogo from '../../../assets/logo/cx-logo.svg'
import CXLogoShort from '../../../assets/logo/cx-logo-short.svg'
import CXLogoText from '../../../assets/logo/cx-logo-text.svg'
import { Image, LogoGrayData } from '../Image'

interface LogoProps {
  variant?: 'standard' | 'short' | 'text' | 'gray'
  altText?: string
}

export const Logo = ({
  variant = 'standard',
  altText = 'Catena-X',
  ...props
}: LogoProps) => {
  let image

  switch (variant) {
    case 'short':
      image = CXLogoShort
      break
    case 'text':
      image = CXLogoText
      break
    case 'gray':
      image = LogoGrayData
      break
    default:
      image = CXLogo
  }

  return <Image src={image as string} alt={altText} {...props} />
}
