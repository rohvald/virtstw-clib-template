import { Meta, StoryFn, StoryObj } from '@storybook/react'
// import { BlueSquare, Props } from './BlueSquare'
import { BlueSquare } from './BlueSquare'

const meta: Meta<typeof BlueSquare> = {
  title: 'Components/BlueSquare',
  component: BlueSquare,
}

export default meta

// const Template: StoryFn<Props> = (args) => <BlueSquare {...args} />
const Template: StoryFn = (args) => <BlueSquare {...args} />

type Story = StoryObj<typeof BlueSquare>

export const Default: Story = Template.bind({})

Default.args = {
  className: undefined
}