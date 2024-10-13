import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import WalletNoneUpdateYet from './WalletNoneUpdateYet';

describe('WalletNoneUpdateYet', () => {
  it('should render WalletNoneUpdateYet Component', async () => {
    render(<WalletNoneUpdateYet />);

    const img3 = screen.getByAltText('img-none-update-yet');
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728827788/img-shopee/71532df534188bbb_nru33m.png'
    );

    const heading1 = screen.getByRole('heading', { name: /Nenhuma atualização ainda/ });
    expect(heading1).toBeInTheDocument();

    expect.assertions(3);
  });
});
