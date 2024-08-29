import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BodyRegisterUserComponentsMain from './BodyRegisterUserComponentsMain';

describe('BodyRegisterUserComponentsMain', () => {
  test('should render itens', () => {
    const { container } = render(
      <MemoryRouter>
        <BodyRegisterUserComponentsMain />
      </MemoryRouter>
    );

    const header1 = screen.getByRole('heading', { name: 'Cadastrar' });
    expect(header1).toBeInTheDocument();

    const inputFirst = screen.getByPlaceholderText('Número de telefone');
    expect(inputFirst).toBeInTheDocument();

    const buttonNext = screen.getByRole('button', { name: 'PRÓXIMO' });
    expect(buttonNext).toBeInTheDocument();

    const span1 = screen.getByText('OU');
    expect(span1).toBeInTheDocument();

    const spanSocialMediaFacebook = screen.getByText('Facebook');
    expect(spanSocialMediaFacebook).toBeInTheDocument();

    const spanSocialMediaGoogle = screen.getByText('Google');
    expect(spanSocialMediaGoogle).toBeInTheDocument();

    const span2 = screen.getByText('Tem uma Conta?');
    expect(span2).toBeInTheDocument();

    const linkLogin = screen.getByText('Entre');
    expect(linkLogin).toBeInTheDocument();

    const spanWarning = screen.getByText(
      /Ao se inscrever, você concorda com as políticas da Shopee/i
    );
    expect(spanWarning).toBeInTheDocument();

    const spanHighlighted = screen.getByText(/Termos de serviço/i);
    expect(spanHighlighted).toBeInTheDocument();

    const spanHighlighted2 = screen.getByText(/Política de privacidade/i);
    expect(spanHighlighted2).toBeInTheDocument();

    // debug();
    expect.assertions(11);
  });
});
