import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import VerifyPasswordStep2 from './VerifyPasswordStep2';

describe('VerifyPasswordStep2', () => {
  test('should render itens VerifyPasswordStep2', () => {
    const { container } = render(
      <MemoryRouter>
        <VerifyPasswordStep2 />
      </MemoryRouter>
    );

    const containerArrowLeft = container.querySelector('.container-arrow-left') as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    expect(svgArrowLeft).toBeInTheDocument();

    const h1First = screen.getByRole('heading', {
      name: 'Insira Sua Senha da Shopee',
    });
    expect(h1First).toBeInTheDocument();

    // Insira sua senha atual para verificar
    const inputInsertPassword = screen.getByPlaceholderText(
      /Insira sua senha atual para verificar/
    );
    expect(inputInsertPassword).toBeInTheDocument();

    const buttonConfirm = screen.getByText(/CONFIRMAR/);
    expect(buttonConfirm).toBeInTheDocument();

    const containerSvgEyes = container.querySelector('.container-svg-eyes') as HTMLElement;
    let svgEyes = containerSvgEyes.firstChild as SVGElement;
    expect(svgEyes).toBeInTheDocument();

    // const containerSvgLock = container.querySelector('.container-svg-lock') as HTMLElement;
    // let svgLock = containerSvgLock.firstChild as SVGElement;
    // expect(svgLock).toBeInTheDocument();

    // const span1 = screen.getByText('Verificar com Senha');
    // expect(span1).toBeInTheDocument();

    // const h1Second = screen.getByRole('heading', {
    //   name: 'P: Por que devo verificar minha conta?',
    // });
    // expect(h1Second).toBeInTheDocument();

    // debug();
    expect.assertions(5);
  });
});
