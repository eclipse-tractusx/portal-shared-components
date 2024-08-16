/********************************************************************************
 * Copyright (c) 2024 Contributors to the Eclipse Foundation
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

import { type TypographyOwnProps } from '@mui/material'

export const variantMapping: Record<string, TypographyOwnProps['variant']> = {
  normal: 'body2',
  small: 'body3',
  normalHeading: 'h4',
  smallHeading: 'h5',
}

export const iconSize: Record<string, Record<'height' | 'width', number>> = {
  normal: {
    height: 20,
    width: 20,
  },
  small: {
    height: 18,
    width: 18,
  },
  normalHeading: {
    height: 20,
    width: 20,
  },
  smallHeading: {
    height: 18,
    width: 18,
  },
}
