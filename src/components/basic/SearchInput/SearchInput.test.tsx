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

import { useState } from 'react'
import { fireEvent, screen, waitFor } from '@testing-library/react'
import { SearchInput } from '.'
import { render } from '../../../test/testUtils'

jest.useFakeTimers()

describe('SearchInput', () => {
  const debounceTimeout = 300
  const onSearch = jest.fn()
  const onChange = jest.fn()

  const ControlledSearchInput = () => {
    const [value, setValue] = useState('')
    return (
      <SearchInput
        debounceTimeout={debounceTimeout}
        onSearch={onSearch}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    )
  }
  const UncontrolledSearchInput = () => (
    <SearchInput onSearch={onSearch} onChange={onChange} placeholder="Search" />
  )

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders the Search Input component', () => {
    render(<SearchInput />)
  })

  test('should call search function after specified debounce timeout', async () => {
    render(<UncontrolledSearchInput />)
    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'te' } })
    fireEvent.change(input, { target: { value: 'testing...' } })
    expect(onSearch).not.toHaveBeenCalled()
    expect(onChange).toHaveBeenCalledTimes(2)

    jest.advanceTimersByTime(debounceTimeout)
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith('testing...'))
    expect(onSearch).toHaveBeenCalledTimes(1)
  })

  test('should call onChange handler when input value changes', () => {
    render(<UncontrolledSearchInput />)

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 't' } })
    expect(onChange).toHaveBeenCalledTimes(1)
    fireEvent.change(input, { target: { value: 'te' } })
    expect(onChange).toHaveBeenCalledTimes(2)
    fireEvent.change(input, { target: { value: 'test' } })
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  test('should call debounced search function with new value after reset', async () => {
    render(<ControlledSearchInput />)

    const input = screen.getByPlaceholderText('Search')
    fireEvent.change(input, { target: { value: 'test' } })

    jest.advanceTimersByTime(debounceTimeout)
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith('test'))

    fireEvent.change(input, { target: { value: '' } })

    jest.advanceTimersByTime(debounceTimeout)
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith(''))
  })

  test('should not call search function on initial render when value is provided', () => {
    render(<ControlledSearchInput />)

    jest.advanceTimersByTime(debounceTimeout)
    expect(onChange).not.toHaveBeenCalled()
  })

  test('should call search function when controlled value changes', async () => {
    const { rerender } = render(
      <SearchInput
        debounceTimeout={debounceTimeout}
        onSearch={onSearch}
        value="initial"
        onChange={onChange}
      />
    )

    rerender(
      <SearchInput
        debounceTimeout={debounceTimeout}
        onSearch={onSearch}
        value="updated"
        onChange={onChange}
      />
    )

    jest.advanceTimersByTime(debounceTimeout)
    await waitFor(() => expect(onSearch).toHaveBeenCalledWith('updated'))
  })
})
