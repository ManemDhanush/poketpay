import { StoryFn, Meta } from '@storybook/react';
import SignUp from '.';

export default {
  title: 'Organisms/SignUp',
  component: SignUp,
} as Meta;

const Template: StoryFn = (args) => <SignUp {...args} />;

export const Default = Template.bind({});
Default.args = {};
