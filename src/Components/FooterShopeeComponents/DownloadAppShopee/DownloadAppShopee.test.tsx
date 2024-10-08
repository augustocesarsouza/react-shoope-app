import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import DownloadAppShopee from './DownloadAppShopee';

describe('DownloadAppShopee', () => {
  test('should render itens download-app-shopee', () => {
    render(<DownloadAppShopee />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const headingDownload = screen.getByRole('heading', { name: 'BAIXAR APP SHOPEE' });
    expect(headingDownload).toBeInTheDocument();

    const img1 = screen.getByAltText('qr-code');
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014712/img-shopee/27788e45f5489f39ef1e774e9bbedb6f_uhhvnl.png'
    );

    const img2 = screen.getByAltText('app-store');
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014727/img-shopee/2c0f5bda4ce39caff001e7ccec309bc6_otd1fv.png'
    );

    const img3 = screen.getByAltText('google-play');
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725014743/img-shopee/3b43f8cafbf943868154166639011597_mlucen.png'
    );

    expect.assertions(4);
  });
});
