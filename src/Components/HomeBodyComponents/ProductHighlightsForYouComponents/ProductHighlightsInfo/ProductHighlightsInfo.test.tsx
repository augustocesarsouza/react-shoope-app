import { render, screen } from '@testing-library/react';
import ProductHighlightsInfo from './ProductHighlightsInfo';

describe('ProductHighlightsInfo', () => {
  test('should render itens of the ProductHighlightsInfo', async () => {
    const product = {
      id: 'h929a8b1-455a-4g97-aee7-b250ed536042',
      title: 'title1',
      imgProduct:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/product-highlights/iyqbcy0jpjjkjzpzhue4',
      imgTop:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png',
      quantitySold: 81,
    };

    render(<ProductHighlightsInfo product={product} />);

    const img1 = screen.getByAltText('img-top');
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', product.imgTop);

    const img2 = screen.getByAltText(product.title);
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute('src', product.imgProduct);

    const headingFirst = screen.getByRole('heading', {
      name: `Vendas mensais ${product.quantitySold.toFixed(0)}mil+`,
    });
    expect(headingFirst).toBeInTheDocument();

    const headingSecond = screen.getByRole('heading', {
      name: product.title,
    });
    expect(headingSecond).toBeInTheDocument();

    expect.assertions(6);
  });
});
