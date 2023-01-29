import DeleteIcon from '@mui/icons-material/Delete'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'MUI/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Primary = Template.bind({})
const primaryProps: IconButtonProps = {
  color: 'primary',
  icon: <DeleteIcon />,
}
Primary.args = primaryProps
