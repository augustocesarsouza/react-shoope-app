import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import ChangePassword from './ChangePassword';

describe('ChangePassword', () => {
  test('should render itens ChangePassword', () => {
    const { container } = render(
      <MemoryRouter>
        <ChangePassword />
      </MemoryRouter>
    );

    // const containerArrowLeft = container.querySelector('.container-arrow-left') as HTMLElement;
    // let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    // expect(svgArrowLeft).toBeInTheDocument();

    const h1First = screen.getByRole('heading', {
      name: 'Trocar senha',
    });
    expect(h1First).toBeInTheDocument();

    const span2 = screen.getByText(
      'Para a segurança da sua conta, não compartilhe sua senha com mais ninguém'
    );
    expect(span2).toBeInTheDocument();

    const label1 = screen.getByText('Nova senha');
    expect(label1).toBeInTheDocument();

    const inputNewPassword = container.querySelector('#input-new-password');
    expect(inputNewPassword).toBeInTheDocument();

    const containerSvgEyes1 = container.querySelector('.container-svg-eyes-1') as HTMLElement;
    let svgEyes1 = containerSvgEyes1.firstChild as SVGElement;
    expect(svgEyes1).toBeInTheDocument();

    const label2 = screen.getByText('Confirme a senha');
    expect(label2).toBeInTheDocument();

    const inputConfirmPassword = container.querySelector('#input-confirm-password');
    expect(inputConfirmPassword).toBeInTheDocument();

    const containerSvgEyes2 = container.querySelector('.container-svg-eyes-2') as HTMLElement;
    let svgEyes2 = containerSvgEyes2.firstChild as SVGElement;
    expect(svgEyes2).toBeInTheDocument();

    const buttonConfirm = screen.getByText('Confirmar');
    expect(buttonConfirm).toBeInTheDocument();

    expect.assertions(9);
  });
});
