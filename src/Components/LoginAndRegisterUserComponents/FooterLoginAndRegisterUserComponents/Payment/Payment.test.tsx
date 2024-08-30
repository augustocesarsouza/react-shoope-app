import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Payment from './Payment';

describe('Payment', () => {
  test('should render itens payment', () => {
    render(<Payment />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const headingPayment = screen.getByRole('heading', { name: 'PAGAMENTO' });
    expect(headingPayment).toBeInTheDocument();

    const img1 = screen.getByAltText('visa');
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942719/Payment-Shopee/Visa_dof3zu.png'
    );

    const img2 = screen.getByAltText('pix');
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942713/Payment-Shopee/Pix_txx66w.png'
    );

    const img3 = screen.getByAltText('mastercard');
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942689/Payment-Shopee/MasterCard_vzo0gv.png'
    );

    const img4 = screen.getByAltText('hipercard');
    expect(img4).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942682/Payment-Shopee/Hipercard_fom6py.png'
    );

    const img5 = screen.getByAltText('elo');
    expect(img5).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942675/Payment-Shopee/Elo_ptbvrm.png'
    );

    const img6 = screen.getByAltText('boleto');
    expect(img6).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942667/Payment-Shopee/Boleto_sm7nnr.png'
    );

    const img7 = screen.getByAltText('AmericanExpress');
    expect(img7).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724942659/Payment-Shopee/AmericanExpress_km1tkn.png'
    );

    expect.assertions(8);
  });
});
