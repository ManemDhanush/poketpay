import { Meta, StoryFn } from '@storybook/react';
import CheckboxAtom, { ICheckboxAtomProps } from '.';

export default {
  title: 'Atoms/CheckboxAtom',
  component: CheckboxAtom,
} as Meta;

const Template: StoryFn<ICheckboxAtomProps> = (args) => <CheckboxAtom {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checkbox',
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Checkbox',
  disabled: true,
};
