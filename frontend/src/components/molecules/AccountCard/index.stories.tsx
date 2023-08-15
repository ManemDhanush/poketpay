import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { AccountCard} from '.';
import Send from '../../../../public/assets/images/send.svg'
import Personal from '../../../../public/assets/images/personal.svg'
import { theme } from '../../../theme/theme';
export default {
    title: "molecules/AccountCard",
    component: AccountCard,
    argTypes: {
      text: { control: 'text' },
      textVariant: { control: 'select', options: ['h1', 'body1', 'body2','body3','caption1','lineText'] },
     textColor:{control:'color'},
     subTextColor:{control:'color'},
     iconAlt:{control:'text'},
     subTextVariant:{control:'select',options: ['h1', 'body1', 'body2','body3','caption1','lineText'] }
    },
  } as Meta<typeof AccountCard>;
  const template: StoryFn<typeof AccountCard> = (args) =>  <AccountCard {...args} />;
  export const AccountCard1 = template.bind({});
  export const PersonalAccount=template.bind({});

AccountCard1.args = {
  text: 'Default Text',
  textVariant:'body1',
  iconAlt:'Default alt',
  icon:Send,
  subText:'Default SubText ',
  subTextColor:`${theme.palette.textColor.lowEmphasis}`,
  iconHeight:"24px",
  iconWidth:"24px",
  margintop:"3px"
  };
  PersonalAccount.args = {
    text: 'Personal Account',
    textVariant:'body1',
    iconAlt:'Default alt',
    icon:Personal,
    subText:'Send, spend, and receive around the world for less.',
    subTextColor:`${theme.palette.textColor.lowEmphasis}`,
    iconHeight:"24px",
    iconWidth:"24px",
    margintop:"3px"
    };
  

  