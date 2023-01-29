import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material'

export type ButtonProps = MUIButtonProps & { label: string }

/**
 * Button component for user interaction
 */
export const Button = ({ label, sx, ...props }: ButtonProps) => {
  return (
    <MUIButton sx={{ color: 'common.white', ...sx }} type='button' {...props}>
      {label}
    </MUIButton>
  )
}
