import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import NoneCopunFound from './NoneCopunFound';

describe('NoneCopunFound', () => {
  it('should render NoneCopunFound Component', async () => {
    render(<NoneCopunFound />);

    const img1 = await screen.findByAltText('img-cupon-not-found');
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729086134/img-shopee/CuponsNoneFound_rmpnwt.png'
    );

    const header1 = screen.getByRole('heading', { name: 'Nenhum cupom correspondente' });
    expect(header1).toBeInTheDocument();

    const span1 = screen.getByText('Resgate mais cupons e encontre-os aqui!');
    expect(span1).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Pegue mais cupons' });
    expect(button).toBeInTheDocument();
  });
});
