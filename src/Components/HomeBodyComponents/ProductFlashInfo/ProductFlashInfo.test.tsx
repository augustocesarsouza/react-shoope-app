import { render, screen } from '@testing-library/react';
import ProductFlashInfo from './ProductFlashInfo';

describe('ProductFlashInfo', () => {
  test('should render itens of the ProductFlashInfo about-shopee', async () => {
    const product = {
      id: 'a56ba473-996b-4d01-8406-8b78001dd7ba',
      imgProduct:
        'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/img-flash-deals/z9kzxntk7wapdgmzrfmo',
      altValue: 'alt-img-camisa',
      imgPartBottom:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png',
      priceProduct: 5,
      popularityPercentage: 29.6,
      discountPercentage: 50,
    };

    render(<ProductFlashInfo product={product} />);

    const spanDiscountPercentage = screen.getByText(`-${product.discountPercentage}%`);
    expect(spanDiscountPercentage).toBeInTheDocument();

    const img1 = screen.getByAltText(product.altValue);
    expect(img1).toHaveAttribute('src', product.imgProduct);

    const img2 = screen.getByAltText('img-free-shipping');
    expect(img2).toHaveAttribute('src', product.imgPartBottom);

    let priceFixed = product.priceProduct.toFixed(2).replace('.', ',');

    const spanpriceFixed = screen.getByText(`R$ ${priceFixed}`);
    expect(spanpriceFixed).toBeInTheDocument();

    const spanPopular = screen.getByText(`POPULAR`);
    expect(spanPopular).toBeInTheDocument();

    expect.assertions(5);
  });
});
