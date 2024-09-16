import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import AccountSetting from './AccountSetting';

describe('AccountSetting', () => {
  it('should render AccountSetting Component', async () => {
    const { container } = render(
      <MemoryRouter>
        <AccountSetting />
      </MemoryRouter>
    );

    const span1 = screen.getByText('Editar perfil');
    expect(span1).toBeInTheDocument();

    const img = await screen.findByAltText('img-user');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725970368/img-shopee/ba61750a46794d8847c3f463c5e71cc4_o0oy1n.png'
    );

    const span2 = screen.getByText('Minha Conta');
    expect(span2).toBeInTheDocument();

    const labelsAll = container.querySelectorAll('.span-my-account');
    expect(labelsAll.length).toBe(6);

    const span3 = screen.getByText('Minhas Compras');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('Notificações');
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText('Meus Cupons');
    expect(span5).toBeInTheDocument();

    const span6 = screen.getByText('Minhas moedas Shopee');
    expect(span6).toBeInTheDocument();

    const img2 = await screen.findByAltText('img-my-purchases');
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977015/img-shopee/f0049e9df4e536bc3e7f140d071e9078_cn64xw.png'
    );

    const img3 = await screen.findByAltText('img-notifications');
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977158/img-shopee/e10a43b53ec8605f4829da5618e0717c_q1x07z.png'
    );

    const img4 = await screen.findByAltText('img-my-coupons');
    expect(img4).toBeInTheDocument();
    expect(img4).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977225/img-shopee/84feaa363ce325071c0a66d3c9a88748_zet2uo.png'
    );

    const img5 = await screen.findByAltText('img-my-couns-shopee');
    expect(img5).toBeInTheDocument();
    expect(img5).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1725977292/img-shopee/a0ef4bd8e16e481b4253bd0eb563f784_tbrttv.png'
    );

    expect.assertions(17);
  });
});
