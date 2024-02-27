import type { Meta, StoryObj } from '@storybook/react'

import { Input, types } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    type: types.SECONDARY,
    label: 'Secondary Button',
  },
}

export const Tertiary: Story = {
  args: {
    type: types.TERTIARY,
    label: 'Tertiary Button',
  },
}

export const Large: Story = {
  args: {
    large: true,
    label: 'Large Button',
  },
}

export const Disabled: Story = {
  args: {
    type: types.DISABLED,
    label: 'Disabled Button',
  },
}

