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

import RobotColor from '../../../../assets/errorImage/robot-color.svg'
import RobotGray from '../../../../assets/errorImage/robot-sw.svg'
import { Image } from '../../Image'

interface ErrorImageProps {
  variant?: 'color' | 'gray'
  altText?: string
}

export const ErrorImage = ({
  variant = 'color',
  altText = 'Catena-X Error',
  ...props
}: ErrorImageProps) => (
  <Image
    src={
      (variant === 'color'
        ? (RobotColor as unknown)
        : (RobotGray as unknown)) as string
    }
    alt={altText}
    {...props}
  />
)
