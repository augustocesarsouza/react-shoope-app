import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import RightsShopee from './RightsShopee';

describe('RightsShopee', () => {
  test('should render itens rights-shopee', () => {
    const { container } = render(<RightsShopee />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    // const img1 = screen.getByAltText('img-card-info');
    // expect(img1).toHaveAttribute(
    //   'src',
    //   'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png'
    // );

    const spanShopee = screen.getByText('© 2024 Shopee. Todos os direitos reservados');
    expect(spanShopee).toBeInTheDocument();

    const allSpan = container.querySelectorAll('span');
    expect(allSpan.length).toEqual(13);

    expect.assertions(2);
  });
});
