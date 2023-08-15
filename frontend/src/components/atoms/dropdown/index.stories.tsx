import { Dropdown } from '.';
import { Meta, StoryFn }  from '@storybook/react';
import {theme} from '../../../theme/theme';
import { ThemeProvider } from '@emotion/react';
export default {
    title: 'atoms/DropDown',
    component: Dropdown,
} as Meta<typeof Dropdown>

      
const Template :StoryFn<typeof Dropdown> = args => <ThemeProvider theme={theme}><Dropdown {...args}></Dropdown></ThemeProvider>

export const Purpose = Template.bind({})
Purpose.args= {
    menu: ["Business","Personal","rent/utilities"],
   formControlsx:{
    minWidth:516
   },
   labelText:"Purpose"
}

