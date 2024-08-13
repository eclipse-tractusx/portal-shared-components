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

import { render } from '../../../test/testUtils'
import { Icon } from '.'
import { IconButton } from '../IconButton'

describe('Icon Component props validation: ', () => {
  const iconName = 'Home'

  it('renders with size - 8px, 10px, 12px, 14px,16px, 18px, 20px', () => {
    const { container } = render(<Icon iconName={iconName} fontSize="8" />)
    const { container: container2 } = render(
      <Icon iconName={iconName} fontSize="10" />
    )

    const { container: container3 } = render(
      <Icon iconName={iconName} fontSize="12" />
    )

    const { container: container4 } = render(
      <Icon iconName={iconName} fontSize="14" />
    )

    const { container: container5 } = render(
      <Icon iconName={iconName} fontSize="16" />
    )

    const { container: container6 } = render(
      <Icon iconName={iconName} fontSize="18" />
    )

    const { container: container7 } = render(
      <Icon iconName={iconName} fontSize="20" />
    )

    expect(container.firstChild).toHaveClass('MuiSvgIcon-fontSize8')
    expect(container2.firstChild).toHaveClass('MuiSvgIcon-fontSize10')
    expect(container3.firstChild).toHaveClass('MuiSvgIcon-fontSize12')
    expect(container4.firstChild).toHaveClass('MuiSvgIcon-fontSize14')
    expect(container5.firstChild).toHaveClass('MuiSvgIcon-fontSize16')
    expect(container6.firstChild).toHaveClass('MuiSvgIcon-fontSize18')
    expect(container7.firstChild).toHaveClass('MuiSvgIcon-fontSize20')
  })

  it('renders with state - default, success, warning, error', () => {
    const { container } = render(<Icon iconName={iconName} color="default" />)
    const { container: container2 } = render(
      <Icon iconName={iconName} color="success" />
    )

    const { container: container3 } = render(
      <Icon iconName={iconName} color="warning" />
    )

    const { container: container4 } = render(
      <Icon iconName={iconName} color="error" />
    )

    expect(container.firstChild).toHaveClass('MuiSvgIcon-colorDefault')
    expect(container2.firstChild).toHaveClass('MuiSvgIcon-colorSuccess')
    expect(container3.firstChild).toHaveClass('MuiSvgIcon-colorWarning')
    expect(container4.firstChild).toHaveClass('MuiSvgIcon-colorError')
  })

  it('warns when an invalid iconName is provided and does not render', () => {
    console.warn = jest.fn()
    //@ts-ignore
    const { container } = render(<Icon iconName="InvalidIconName" />)

    expect(console.warn).toHaveBeenCalledWith(
      'Icon InvalidIconName does not exist in @mui/icons-material'
    )
    expect(container.firstChild).toBeNull()
  })

  it('renders correctly inside a Button component ', () => {
    const { getByTestId } = render(
      <IconButton>
        <Icon iconName={iconName} data-testid="icon" />
      </IconButton>
    )

    const icon = getByTestId('icon')
    expect(icon).toBeInTheDocument()
  })
})
