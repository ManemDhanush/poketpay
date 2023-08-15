import ButtonComponent from '.';
import { render, screen } from '@testing-library/react';


describe('Button Component', () => {
  test('render button Component', () => {
    render(<ButtonComponent children={'button'} />);
    const btn = screen.getByText('button');
    expect(btn).toBeTruthy();
  });
});