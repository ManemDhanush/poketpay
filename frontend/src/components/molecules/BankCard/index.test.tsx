import { render, screen } from '@testing-library/react';
import { BankCard,BankCardProps } from '.';
import card from "../../../../public/assests/images/debitCard.svg";


describe('BankCard component', () => {
  const props: BankCardProps = {
      image: card,
      transferType: 'Transfer Type',
      transferDescription: 'Transfer Description',
      transferArrival: 'Transfer Arrival',
      checked: false
  };

  it('should render the component with the given props', () => {
    render(<BankCard {...props} />);
    const transferType = screen.getByText(props.transferType);
    const transferDescription = screen.getByText(props.transferDescription);
    const transferArrival = screen.getByText(props.transferArrival);
    expect(transferType).toBeInTheDocument();
    expect(transferDescription).toBeInTheDocument();
    expect(transferArrival).toBeInTheDocument();
  });
  it("icon renders correctly", () => {
    render(<BankCard {...props}/>);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });

});