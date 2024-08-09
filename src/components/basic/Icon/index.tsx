import React from 'react'
import * as MUIIcons from '@mui/icons-material'
import { type SvgIconProps } from '@mui/material/SvgIcon'

// Extend the Mui SvgIcon size props
declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsSizeOverrides {
    small: false
    medium: false
    large: false
    inherit: false
    '8': true
    '10': true
    '12': true
    '14': true
    '16': true
    '18': true
    '20': true
  }
}
interface CustomIconProps extends SvgIconProps {
  iconName: keyof typeof MUIIcons
}

// Use a switch case for scalable integration of additional icon libraries.
const getIconComponent = (iconName: string) => {
  return MUIIcons[
    iconName as keyof typeof MUIIcons
  ] as React.ComponentType<SvgIconProps>
}

const CustomIcon: React.FC<CustomIconProps> = ({ iconName, ...props }) => {
  const IconComponent = iconName ? getIconComponent(iconName) : null

  if (!IconComponent) {
    console.warn(`Icon ${iconName} does not exist in @mui/icons-material`)
    return null
  }

  return <IconComponent {...props} />
}

export default CustomIcon
