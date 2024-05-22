/********************************************************************************
 * Copyright (c) 2023 BMW Group AG
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

export enum UploadStatus {
  NEW = 'new',
  UPLOADING = 'uploading',
  UPLOAD_SUCCESS = 'upload_success',
  UPLOAD_ERROR = 'upload_error',
}

export type UploadFileStatus =
  | UploadStatus.NEW
  | UploadStatus.UPLOADING
  | UploadStatus.UPLOAD_SUCCESS
  | UploadStatus.UPLOAD_ERROR

export interface UploadFile {
  id?: string
  name: string
  size?: number
  status: UploadFileStatus
  progressPercent?: number
}

export interface DropZoneDropAreaTranslations {
  title: string | JSX.Element
  subTitle: string | JSX.Element
  errorTitle: string | JSX.Element
}

export interface DropZonePreviewTranslations {
  placeholder: string | JSX.Element
  uploadProgress: string
  uploadSuccess: string | JSX.Element
  uploadError: string | JSX.Element
}

export interface DeleteConfirmOverlayTranslation {
  title: string
  content: string
  action_no: string
  action_yes: string
}
