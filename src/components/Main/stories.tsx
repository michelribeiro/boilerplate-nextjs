import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'Typescript, ReactJs, NextJs, e StyledComponent and more...'
  }
} as Meta

export const Home: Story = (args) => <Main {...args} />
