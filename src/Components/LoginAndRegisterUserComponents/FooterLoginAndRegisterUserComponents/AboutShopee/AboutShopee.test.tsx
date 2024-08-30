import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import AboutShopee from './AboutShopee';

describe('AboutShopee.test', () => {
  test('should render itens about-shopee', () => {
    const { container } = render(<AboutShopee />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    // const img1 = screen.getByAltText('img-card-info');
    // expect(img1).toHaveAttribute(
    //   'src',
    //   'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png'
    // );

    const headingShopee = screen.getByRole('heading', { name: 'SOBRE A SHOPEE' });
    expect(headingShopee).toBeInTheDocument();

    const allSpan = container.querySelectorAll('span');
    expect(allSpan.length).toEqual(8);

    expect.assertions(2);
  });
});
