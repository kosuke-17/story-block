import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'MUI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <Stack direction='row' spacing={1}>
    <IconButton {...args} />
    <IconButton disabled {...args} />
  </Stack>
)

export const Primary = Template.bind({})
const primaryProps: IconButtonProps = {
  color: 'primary',
  icon: <DeleteIcon />,
}
Primary.args = primaryProps
