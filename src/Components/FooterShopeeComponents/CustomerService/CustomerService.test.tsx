import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import CustomerService from './CustomerService';

describe('CustomerService', () => {
  test('should render itens customer-service', () => {
    const { container } = render(<CustomerService />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    // const img1 = screen.getByAltText('img-card-info');
    // expect(img1).toHaveAttribute(
    //   'src',
    //   'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png'
    // );

    const allSpan = container.querySelectorAll('span');
    expect(allSpan.length).toEqual(8);

    const headingClient = screen.getByRole('heading', { name: 'ATENDIMENTO AO CLIENTE' });
    expect(headingClient).toBeInTheDocument();

    expect.assertions(2);
  });
});
