import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Purchase from './Purchase';

describe('Purchase', () => {
  it('should render Purchase Component', async () => {
    render(<Purchase />);

    const span1 = screen.getByText('Tudo');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('A Pagar');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Preparando');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('A caminho');
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText('Finalizado');
    expect(span5).toBeInTheDocument();

    const span6 = screen.getByText('Cancelado');
    expect(span6).toBeInTheDocument();

    const span7 = screen.getByText('Devolução/Reembolso');
    expect(span7).toBeInTheDocument();

    const inputSearch = screen.getByPlaceholderText('Você pode buscar por Nome de Vendedor');
    expect(inputSearch).toBeInTheDocument();

    expect.assertions(8);
  });
});
