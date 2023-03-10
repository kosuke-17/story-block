import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from '@mui/material'

export type ButtonProps = MUIButtonProps & {
  label: string
}

/**
 * Button component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
  return <MUIButton {...props}>{label}</MUIButton>
}
