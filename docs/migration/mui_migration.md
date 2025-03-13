**Cosumption guide of shared components**

# Upgrade to MUI v6

## The following packages were updated in the process:

    - @mui/material: ^5.13.2 -> ^6.4.7
    - @mui/system: ^5.15.14 -> ^6.4.7
    - @mui/icons-material: ^5.11.16 -> ^6.4.7
    - @emotion/react: ^11.11.4 -> ^11.14.0
    - @emotion/styled: ^11.11.0 -> ^11.14.0

### Breaking changes

    Typograpghy:
        -color="#0000"
        +sx={{color:'#0000'}}

# Upgrade to DataGrid v7

## The following packages were updated in the process:

    - @mui/x-data-grid: ^6.19.8 -> ^7.27.2

### Breaking changes

    The signature of GridColDef[] has changed in v7:

    GridColDef['valueGetter']:
        -valueGetter: ({ value, row }) => value,
        +valueGetter: (value, row, column, apiRef) => value

    GridColDef['valueFormatter']
        -valueFormatter: ({ value }) => value,
        +valueFormatter: (value, row, column, apiRef) => value

    GridColDef['valueSetter']
        -valueSetter: (params) => {
        -  const [firstName, lastName] = params.value!.toString().split(' ');
        -  return { ...params.row, firstName, lastName };
        -}
        +valueSetter: (value, row) => {
        +  const [firstName, lastName] = value!.toString().split(' ');
        +  return { ...row, firstName, lastName };
        +}

    GridColDef['valueParser']
        -valueParser: (value, params: GridCellParams) => value.toLowerCase()
        +valueParser: (value, row, column, apiRef) => value.toLowerCase()

    GridColDef['colSpan']
        -colSpan: ({ row, field, value }: GridCellParams) => (row.id === 'total' ? 2 : 1)
        +colSpan: (value, row, column, apiRef) => (row.id === 'total' ? 2 : 1)

    GridColDef['pastedValueParser']
        -pastedValueParser: (value, params) => new Date(value),
        +pastedValueParser: (value, row, column, apiRef) => new Date(value)

    GridColDef['groupingValueGetter']
        -groupingValueGetter: (params) => params.value.name,
        +groupingValueGetter: (value: { name: string }, row, column, apiRef) => value.name

# Upgrade to Date Pickers v7\*\*

## The following packages were updated in the process:

    - @mui/x-date-pickers: ^6.19.8 -> ^7.27.1
