import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import InsertEmail from './InsertEmail';

describe('InsertEmail', () => {
  it('should render InsertEmail Component', () => {
    render(
      <MemoryRouter>
        <InsertEmail />
      </MemoryRouter>
    );

    const h1Text = screen.getByRole('heading', { name: /Adicionar Endereço de E-mail/ });
    expect(h1Text).toBeInTheDocument();

    const label1 = screen.getByText(/Novo Endereço de E-mail/);
    expect(label1).toBeInTheDocument();

    const inputEmail = screen.getByPlaceholderText(/Insira seu Endereço de E-mail/);
    expect(inputEmail).toBeInTheDocument();

    const buttonNext = screen.getByRole('button', { name: /Próximo/ });
    expect(buttonNext).toBeInTheDocument();

    const spanCheckbox = screen.getByText(
      /Envie-me notícias sobre as últimas atualizações, em alta e negócios./
    );
    expect(spanCheckbox).toBeInTheDocument();

    expect.assertions(5);
  });
});
