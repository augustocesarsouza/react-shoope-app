import { render, screen } from '@testing-library/react';
import ItensIcon from './ItensIcon';

describe('ItensIcon', () => {
  test('should render itens of the ItensIcon about-shopee', async () => {
    const product = {
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729509252/img-category-itens-bar/br-50009109-dbc842365ecfc06a6cf498e48c648104_xhdpi_w8cxqe.png',
      alt: 'img-coin',
      title: 'Moedas',
    };

    render(<ItensIcon img={product.img} alt={product.alt} title={product.title} />);

    const img1 = screen.getByAltText(product.alt);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', product.img);

    const headerFirst = screen.getByRole('heading', { name: `${product.title}` });
    expect(headerFirst).toBeInTheDocument();

    expect.assertions(3);
  });
});
