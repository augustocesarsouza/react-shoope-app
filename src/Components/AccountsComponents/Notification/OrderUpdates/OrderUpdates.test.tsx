import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import OrderUpdates from './OrderUpdates';

describe('OrderUpdates', () => {
  it('should render OrderUpdates Component', async () => {
    render(<OrderUpdates />);

    const heading1 = screen.getByRole('heading', { name: /Nenhuma atualização de pedido ainda/ });
    expect(heading1).toBeInTheDocument();

    const img3 = screen.getByAltText('no-order-update');
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728557470/img-shopee/4e653cf704e352fd_tgtols.png'
    );

    expect.assertions(3);
  });
});
