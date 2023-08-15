import { render, fireEvent } from '@testing-library/react';
import { MuiRadio } from '.';

describe('RadioButton', () => {
  test('calls onChange handler when radio button is clicked', () => {
    const onChange = jest.fn();
    const { getByRole } = render(<MuiRadio onChange={onChange} />);
    const radioElement = getByRole('radio');
    fireEvent.click(radioElement);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
