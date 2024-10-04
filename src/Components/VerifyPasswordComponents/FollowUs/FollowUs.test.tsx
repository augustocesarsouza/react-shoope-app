import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FollowUs from './FollowUs';

describe('FollowUs', () => {
  test('should render itens follow-us', () => {
    render(<FollowUs />);

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    const headingFollowUs = screen.getByRole('heading', { name: 'SIGA-NOS' });
    expect(headingFollowUs).toBeInTheDocument();

    const img1 = screen.getByAltText('instagram');
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724944375/follow-us-shopee/aed1aaab6a81b4347b440d981f0cf76f_c5hnsq.png'
    );

    const img2 = screen.getByAltText('tik-tok');
    expect(img2).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724944384/follow-us-shopee/531a1a0e62d0f9875a56390970e5a845_sicp5d.png'
    );

    const img3 = screen.getByAltText('x-twitter');
    expect(img3).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724944388/follow-us-shopee/br-50009109-0c618bb99f36ac8568f496fba43c623c_ciuv3c.png'
    );

    const img4 = screen.getByAltText('facebook');
    expect(img4).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724944392/follow-us-shopee/33b3213444ab1fa40c1eb7abf8b91b11_jfncza.png'
    );

    const img5 = screen.getByAltText('linkedin');
    expect(img5).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1724944396/follow-us-shopee/ddf4fb18c6fa5e2d73459a7a7ea0953b_atp33v.png'
    );

    expect.assertions(6);
  });
});
