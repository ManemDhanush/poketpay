import ButtonComponent from '.';
import { Meta, StoryFn } from '@storybook/react';
import {theme} from '../../../theme/theme'
import { Typography } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ButtonProps as MuiButtonProps } from '@mui/material';

const meta: Meta = {
  title: 'atoms/Button',
  component: ButtonComponent,
};

export default meta;

const ButtonTemplate: StoryFn<MuiButtonProps> = (args) => (
  <ButtonComponent {...args} />
);

const StyledPrimary={
  backgroundColor: theme.palette.primary.primary500,
}

const StyledSecondary={
  backgroundColor: theme.palette.primary.primary100,
}

const StyledContained = {
  backgroundColor: theme.palette.primary.primary500,
  borderRadius: theme.spacing(3),
  ':hover': {
    backgroundColor: theme.palette.primary.primary500,
  },
};
const StyledOutlined = {
  borderRadius: theme.spacing(3),
  color: theme.palette.primary.primary500,
};
const StyledText = {
  borderRadius: theme.spacing(3),
  color: theme.palette.primary.primary500,
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
    variant: "contained",
    children:<Typography>Continue</Typography>,
    sx:{
      width:"135px",
      height:'56px',
      borderRadius:"56px",
      ...StyledPrimary
    },
    onClick: action('button-click'),
  onMouseOver: action('mouse-over'),
    
  };

  export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
    variant: "contained",
    children:<Typography>Continue</Typography>,
    sx:{
      width:"135px",
      height:'56px',
      borderRadius:"56px",
      ...StyledSecondary
    },
    onClick: action('button-click'),
  onMouseOver: action('mouse-over'),
    
  };

export const Contained = ButtonTemplate.bind({});
Contained.args = {
  children: <Typography> Continue</Typography>,
  disableRipple: true,
  disableElevation: true,
  variant: 'contained',
  color: 'primary',
  sx: { ...StyledContained },
  onClick: action('button-click'),
  onMouseOver: action('mouse-over'),
};

export const Outlined = ButtonTemplate.bind({});
Outlined.args = {
  children: <Typography> Continue</Typography>,
  disableRipple: true,
  disableElevation: true,
  variant: 'outlined',
  color: 'primary',
  sx: { ...StyledOutlined },
  onClick: action('button-click'),
  onMouseOver: action('mouse-over'),
};

export const Text = ButtonTemplate.bind({});
Text.args = {
  children: <Typography>Text button</Typography>,
  disableRipple: true,
  disableElevation: true,
  variant: 'text',
  color: 'primary',
  sx: { ...StyledText },
  onClick: action('button-click'),
  onMouseOver: action('mouse-over'),
};