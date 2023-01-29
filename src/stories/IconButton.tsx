import {
  IconButton as MUIIconButton,
  IconButtonProps as MUIIconButtonProps,
} from '@mui/material'

export type IconButtonProps = MUIIconButtonProps & { icon: React.ReactNode }

/**
 * Icon Button component for user interaction
 */
export const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <MUIIconButton sx={{ color: 'common.white' }} type='button' {...props}>
      {icon}
    </MUIIconButton>
  )
}
