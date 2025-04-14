# Migration Guide for Shared Components

## Upgrade from version 3.0.0 to 4.0.0

### Breaking Changes: MUI v5 -> v7

Starting from version 4.0.0, overriding certain component props may no longer work due to the MUI upgrade.

#### The following Shared components may be affected by the update:

Overriding these shared components directly in the target project may cause issues.  
Please refer to the [MUI upgrade to v6 documentation](https://mui.com/material-ui/migration/upgrade-to-v6) and apply the recommended changes.

- Typography (Uses MUI Typography)

### Breaking Changes: MUI DataGrid v6 -> v7

#### The following Shared components may be affected by the update:

Overriding these shared components directly in the target project may cause issues.  
Please refer to the [MUI migration data-grid v6 documentation](https://mui.com/x/migration/migration-data-grid-v6) and apply the recommended changes.

- PageLoadingTable (Uses MUI DataGrid)
- Table (Uses MUI DataGrid)

### MUI Migration Resources

- MUI: <https://mui.com/material-ui/migration/upgrade-to-v6>
- MUI: <https://mui.com/material-ui/migration/upgrade-to-v7>
- MUI DataGrid: <https://mui.com/x/migration/migration-data-grid-v6>

## NOTICE

This work is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0).

- SPDX-License-Identifier: Apache-2.0
- SPDX-FileCopyrightText: 2025 Contributors
- Source URL: https://github.com/eclipse-tractusx/portal-shared-components
