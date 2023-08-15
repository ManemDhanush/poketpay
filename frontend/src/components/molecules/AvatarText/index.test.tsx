import { render, screen } from '@testing-library/react';
import { AvatarTypography } from '.';
import SBI from '../public/assets/images/sbi.svg';

describe(' Avatar with typography component',() =>{
    test('should renders avatar With Typography having text and avatar',  () => {
    render(
      <AvatarTypography
      avatar={SBI} 
      avatarSize={"28px"} 
      avatarVariant={"rounded"} 
      text={"albino"} 
      textVariant={"rounded"} 
      avatarAndTextGap="15px"
      />
    )
    const avatarTypoElement=screen.getByTestId('avatarTypography');
    expect(avatarTypoElement).toBeInTheDocument();
    expect(avatarTypoElement).toHaveStyle('gap:15px');
  })
  test('tests for the gap between the avatar and typography',()=>{
    render(<AvatarTypography
      avatar={SBI} 
      avatarSize={"28px"} 
      avatarVariant={"rounded"} 
      text={"albino"} 
      textVariant={"rounded"}
      />)
      const avatarTypoElement=screen.getByTestId('avatarTypography');
      expect(avatarTypoElement).toHaveStyle('gap:10px')

  })
});