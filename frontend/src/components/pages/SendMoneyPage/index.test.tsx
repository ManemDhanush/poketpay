import { fireEvent, render,screen} from '@testing-library/react';
import SendMoneyPage from '.';
import { MemoryRouter } from 'react-router-dom';

describe('SendMoneyPage', () => {

  it('renders without crashing', () => {
    render(<MemoryRouter><SendMoneyPage /></MemoryRouter>);
  });
  test("renders without errors", () => {
    const { getByText } = render(<MemoryRouter><SendMoneyPage /></MemoryRouter>);
    const textElement = getByText("What would you like to do today?");
    expect(textElement).toBeInTheDocument();

  });
  it('checks for the routing back functionality ', () => {
    render(<MemoryRouter><SendMoneyPage /></MemoryRouter>);
    fireEvent.click(screen.getByTestId("back"))
  });
});
