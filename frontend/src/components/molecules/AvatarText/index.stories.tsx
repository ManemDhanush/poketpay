import { StoryFn, Meta } from '@storybook/react';
import { AvatarTypography } from '.';
import SBI from '../../../../public/assets/images/sbi.svg'
import GBP from '../../../../public/assets/images/gbp.svg'
import { theme } from '../../../theme/theme'
export default {
    title: "molecules/AvatarTypography",
    component: AvatarTypography,
    argTypes: {
      text: { control: 'text' },
      textVariant: { control: 'select', options: ['h1', 'body1', 'body2','body3','caption1','lineText'] },
      avatarSize:{control:'text'},
      avatarVariant:{control:'radio',options:['rounded','sqaure','circular',undefined]},
     avatarAndTextGap:{control:'text'},
     textColor:{control:'text'},
     textWeight:{control:'text'},
     avatarAlt:{control:'text'}

    },
  } as Meta<typeof AvatarTypography>;
  const template: StoryFn<typeof AvatarTypography> = (args) =>  <AvatarTypography {...args} />;
  export const AvatarTypography1 = template.bind({});
  export const CountryCode =template.bind({});
AvatarTypography1.args = {
  text: 'Default Avatar with Typography',
  textVariant:'caption1',
  avatarAlt:'Default alt',
  avatarAndTextGap:'10px',
  avatarSize:'28px',
  avatarVariant:'rounded',
  avatar:SBI,
  textColor:`${theme.palette.textColor.highEmphasis}`
  };

  CountryCode.args = {
    text: 'GBP',
    textVariant:'body1',
    avatarAlt:'Default alt',
    avatarAndTextGap:'16px',
    avatarSize:'28px',
    avatarVariant:'rounded',
    avatar:GBP,
    textColor:`${theme.palette.textColor.highEmphasis}`
    };
  
  