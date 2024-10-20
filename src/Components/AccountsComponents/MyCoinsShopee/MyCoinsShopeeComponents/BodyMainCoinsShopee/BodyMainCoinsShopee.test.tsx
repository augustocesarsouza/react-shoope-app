import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import BodyMainCoinsShopee from './BodyMainCoinsShopee';

describe('BodyMainCoinsShopee', () => {
  it('should render BodyMainCoinsShopee Component', async () => {
    render(<BodyMainCoinsShopee />);

    const span1 = screen.getByText('Você ainda não tem moedas.');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByRole('button', { name: /Como ganhar moedas?/ });
    expect(span2).toBeInTheDocument();

    expect.assertions(2);
  });
});
