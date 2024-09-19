import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';
import EmailConfirmCode from './EmailConfirmCode';

describe('EmailConfirmCode', () => {
  it('should render EmailConfirmCode Component', () => {
    const { container } = render(
      <MemoryRouter>
        <EmailConfirmCode />
      </MemoryRouter>
    );

    const span1 = screen.getByText('Código de Verificação');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Precisa de ajuda?');
    expect(span2).toBeInTheDocument();

    const containerSvgArrow = container.querySelector('.container-svg-arrow') as HTMLElement;
    const svgArrow = containerSvgArrow.firstChild as HTMLElement;
    expect(svgArrow).toBeInTheDocument();

    const span3 = screen.getByText('Digite o código de verificação');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('Seu código de verificação é enviado por Email para');
    expect(span4).toBeInTheDocument();

    const allInputCelPhone = container.querySelectorAll('.input-cel-phone');
    expect(allInputCelPhone.length).toBe(6);

    const span5 = screen.getByText('Não recebeu o código?');
    expect(span5).toBeInTheDocument();

    const buttonResend = screen.getByRole('button', { name: 'Reenviar' });
    expect(buttonResend).toBeInTheDocument();

    expect.assertions(8);
  });
});
