import { Chip } from './index';
import { screen ,render, fireEvent} from "@testing-library/react";
import { NAME } from "./../../../constants/index"

describe('CustomChip', () => {
  test('renders with expected label and size', () => {
    const { getByText } = render(<Chip label={NAME} size="medium" />);
    const chipElement = getByText(NAME);
    expect(chipElement).toBeInTheDocument();
  });
  test("onClick renders correctly", () => {
    const onClick = jest.fn();
    render(
      <Chip
        label={NAME}
        size='medium'
        onClick={onClick}
      />
    );
    const chip = screen.getByText(NAME);
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

});
