import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ChangeInformationEmail from './ChangeInformationEmail';
import { screen } from '@testing-library/dom';

describe('ChangeInformationEmail', () => {
  it('should render ChangeInformationEmail Component', () => {
    const { container } = render(
      <MemoryRouter>
        <ChangeInformationEmail />
      </MemoryRouter>
    );

    const h1Text = screen.getByRole('heading', { name: /Mudar endereço de E-mail/ });
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
