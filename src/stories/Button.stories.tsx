import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'MUI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Stack direction='row' spacing={1}>
    <Button variant='outlined' {...args} />
    <Button variant='outlined' startIcon={<DeleteIcon />} {...args} />
    <Button variant='contained' {...args} />
    <Button variant='contained' disabled {...args} />
    <Button variant='contained' startIcon={<DeleteIcon />} {...args} />
  </Stack>
)

export const PrimarySquare = Template.bind({})
const primarySquareProps: ButtonProps = {
  label: 'ボタン',
}
PrimarySquare.args = primarySquareProps

export const PrimaryAround = Template.bind({})
const primaryAroundProps: ButtonProps = {
  label: 'ボタン',
  sx: { borderRadius: '2em' },
}
PrimaryAround.args = primaryAroundProps

export const Secondary = Template.bind({})
const secondaryProps: ButtonProps = {
  color: 'secondary',
  label: 'ボタン',
}
Secondary.args = secondaryProps
