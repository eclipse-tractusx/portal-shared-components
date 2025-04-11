# Migration guide of shared components version 4.0.0

## Breaking changes of upgrade MUI v5 -> v7

    When consuming the Shared components from release version 4.0.0, overriding some component props will no longer work as a result of the MUI upgrade.

### The following Shared components may be affected by the update:

Overriding this shared component directly in the target project may cause issues.
Please refer to the [MUI upgrade to v6 documentation](https://mui.com/material-ui/migration/upgrade-to-v6) and make the recommended changes.

  - Typography (Uses MUI Typography)

## Breaking changes MUI DataGrid v6 -> v7

### The following Shared components may be affected by the update:

    Overriding these shared component directly in the target project may cause issues.
    Please referer to the MUI documentaiton: https://mui.com/x/migration/migration-data-grid-v6/ and make the recommended changes.

    - PageLoadingTable (Uses MUI DataGrid)
    - Table (Uses MUI DataGrid)

### MUI migration documention:

    - MUI: https://mui.com/material-ui/migration/upgrade-to-v6
    - MUI: https://mui.com/material-ui/migration/upgrade-to-v7
    - MUI DataGrid: https://mui.com/x/migration/migration-data-grid-v6/

## NOTICE

This work is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).

- SPDX-License-Identifier: Apache-2.0
- SPDX-FileCopyrightText: 2025 Contributors
- Source URL: https://github.com/eclipse-tractusx/portal-shared-components
