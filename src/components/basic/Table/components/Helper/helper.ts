/********************************************************************************
 * Copyright (c) 2021, 2023 Mercedes-Benz Group AG and BMW Group AG
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

export interface PageDataProps {
  page?: number
  totalPages?: number
  meta?: {
    page: number
    totalPages: number
  }
}

export interface PageDataRows {
  totalElements?: number
  meta?: {
    totalElements: number
  }
}

export const hasMorePages = (data: PageDataProps) => {
  return (
    data?.meta && data.meta.page < data.meta.totalPages - 1
  )
}

export const getMaxRows = (data: PageDataRows) => {
  return data?.meta?.totalElements ?? 0
}
