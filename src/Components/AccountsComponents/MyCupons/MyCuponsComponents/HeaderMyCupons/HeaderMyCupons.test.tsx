import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderMyCupons from './HeaderMyCupons';

describe('HeaderMyCupons', () => {
  it('should render HeaderMyCupons Component', async () => {
    render(<HeaderMyCupons />);

    const Header1 = screen.getByRole('heading', { name: 'Meus cupons' });
    expect(Header1).toBeInTheDocument();

    const span1 = screen.getByText('Pegue mais cupons');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Ver histórico de cupons');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Veja mais');
    expect(span3).toBeInTheDocument();

    expect.assertions(4);
  });
});
