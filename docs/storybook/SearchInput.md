### Overview

- The SearchInput component is a versatile input field that supports both controlled and uncontrolled modes with debounce functionality.

### Interaction

- Users can enter search terms into the input field. If the `type` prop is not specified, it defaults to a search field, which browsers style differently to indicate its purpose.
- When the input is having search term, a clear icon appears to help users reset their search.

### Context and Usage

The SearchInput component supports both controlled and uncontrolled modes:
- It provides flexible input functionality with debounce support and can be used in both controlled and uncontrolled modes.
- Use the `onSearch` handler to manage API calls, which will be triggered based on the specified debounce timeout.

#### Common Behavior

- The `onChange` handler triggers on every character change.
- The debounce feature, with a default delay of 0 milliseconds, can be customized using the `debounceTimeout` prop.
- The `onSearch` function is called after the debounce delay, allowing for API calls.

#### Controlled Mode

- Use the `value` prop to control the input.

#### Uncontrolled Mode

- Use the `defaultValue` prop to set the initial input value.

### Guidance

- The `onChange` handler functions the same as in a standard input field.
- All props related to the MUI TextField component are supported.
- New props added for managing the debounce feature: `debounceTimeout` and `onSearch`.

## NOTICE

This work is licensed under the [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

- SPDX-License-Identifier: CC-BY-4.0
- SPDX-FileCopyrightText: Copyright (c) 2024 Contributors to the Eclipse Foundation
- Source URL: https://github.com/eclipse-tractusx/portal-shared-components
