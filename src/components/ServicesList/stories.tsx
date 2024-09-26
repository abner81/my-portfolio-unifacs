import { Story, Meta } from '@storybook/react'
import ServicesList from '.'

export default {
  title: 'ServicesList',
  component: ServicesList
} as Meta

export const Default: Story = () => <ServicesList />
