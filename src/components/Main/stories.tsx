import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Home: Story = (args) => <Main {...args} />
// Home.args = {
//   title: 'Sobrescrevendo o valor do title',
//   description: 'Sobrescrevendo o description'
// }
