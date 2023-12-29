import { Meta, StoryFn, StoryObj } from '@storybook/react'
// import { GlowSquare, Props } from './GlowSquare'
import { GlowSquare } from './GlowSquare'

const meta: Meta<typeof GlowSquare> = {
  title: 'Components/GlowSquare',
  component: GlowSquare,
}

export default meta

// const Template: StoryFn<Props> = (args) => <GlowSquare {...args} />
const Template: StoryFn = (args) => <GlowSquare {...args} />

type Story = StoryObj<typeof GlowSquare>

export const Default: Story = Template.bind({})

Default.args = {
  className: undefined
}