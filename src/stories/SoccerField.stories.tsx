import SoccerField from './SoccerField'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const TemplateSoccer: ComponentStory<typeof SoccerField> = (args) => (
  <SoccerField />
)

export const Primary = TemplateSoccer.bind({})

export default {
  title: 'MUI/Soccer',
  component: SoccerField,
} as ComponentMeta<typeof SoccerField>
