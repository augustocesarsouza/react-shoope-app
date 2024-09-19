import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import PhoneChange from './PhoneChange';

describe('PhoneChange', () => {
  it('should render PhoneChange Component', () => {
    const { container } = render(
      <MemoryRouter>
        <PhoneChange />
      </MemoryRouter>
    );

    const h1Text = screen.getByRole('heading', { name: /Editar Número de Telefone/ });
    expect(h1Text).toBeInTheDocument();

    const label1 = screen.getByText(/Novo Número de Telefone/);
    expect(label1).toBeInTheDocument();

    const inputPhone = container.querySelector('#input-number-phone');
    expect(inputPhone).toBeInTheDocument();

    const buttonNext = screen.getByRole('button', { name: /Próximo/ });
    expect(buttonNext).toBeInTheDocument();

    expect.assertions(4);
  });
});
