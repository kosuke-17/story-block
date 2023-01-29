import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'MUI/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const PrimarySquare = Template.bind({})
const primarySquareProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
  label: 'ボタン',
}
PrimarySquare.args = primarySquareProps

export const PrimaryAround = Template.bind({})
const primaryAroundProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
  label: 'ボタン',
  sx: { borderRadius: '2em' },
}
PrimaryAround.args = primaryAroundProps

export const Secondary = Template.bind({})
const secondaryProps: ButtonProps = {
  color: 'secondary',
  variant: 'contained',
  label: 'ボタン',
}
Secondary.args = secondaryProps
