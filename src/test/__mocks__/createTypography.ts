import { type Palette } from '@mui/material'
import { type TypographyOptions } from '@mui/material/styles/createTypography'

const createTypography: (
  palette: Palette,
  typography: TypographyOptions
) => TypographyOptions = (palette, typography) => ({
  ...palette,
  ...typography,
})
export default createTypography
