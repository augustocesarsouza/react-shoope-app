import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import HeaderBodyHomeShopee from './HeaderBodyHomeShopee';

describe('HeaderBodyHomeShopee', () => {
  test('should render itens HeaderBodyHomeShopee', async () => {
    const { container } = render(<HeaderBodyHomeShopee />);

    // const allSpan = container.querySelectorAll('span');
    // expect(allSpan.length).toEqual(8);

    const img1 = await screen.findByAltText('img-fashion-week-1');
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435381/img-shopee-body-home/br-11134258-7r98o-m18rnetp75sy9d_xxhdpi_qq5ak8.jpg'
    );

    const img2 = await screen.findByAltText('img-fashion-week-2');
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435368/img-shopee-body-home/br-11134258-7r98o-m1cqymgzfajm6e_xxhdpi_o6tp0q.jpg'
    );

    const img3 = await screen.findByAltText('img-fashion-week-3');
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435376/img-shopee-body-home/br-11134258-7r98o-m1d1kwbempq8be_xxhdpi_rmui7s.jpg'
    );

    const img4 = await screen.findByAltText('img-fashion-week-4');
    expect(img4).toBeInTheDocument();
    expect(img4).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435372/img-shopee-body-home/br-11134258-7r98o-m1cragk1xtq8e8_xxhdpi_lpkzkn.jpg'
    );

    const img5 = await screen.findByAltText('img-come-to-app-1');
    expect(img5).toBeInTheDocument();
    expect(img5).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435385/img-shopee-body-home/br-50009109-f2e0271b220251fbb42ab8d1de067dc1_xhdpi_nyciii.jpg'
    );

    const img6 = await screen.findByAltText('img-come-to-app-2');
    expect(img6).toBeInTheDocument();
    expect(img6).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435388/img-shopee-body-home/br-50009109-ec5cfeb670bba21c665499a2351ac580_xhdpi_pj93g3.jpg'
    );

    expect.assertions(12);
  });
});
