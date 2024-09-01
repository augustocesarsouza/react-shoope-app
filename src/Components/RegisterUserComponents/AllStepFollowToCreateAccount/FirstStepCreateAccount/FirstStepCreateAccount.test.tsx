import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FirstStepCreateAccount from './FirstStepCreateAccount';

describe('FirstStepCreateAccount', () => {
  test('should render itens', () => {
    const fn = jest.fn();

    const { container } = render(<FirstStepCreateAccount setWhichStepIsNow={fn} />);

    const containerSvg = container.querySelector('.container-svg-arrow') as HTMLElement;
    const svgArrow = containerSvg.firstChild;
    expect(svgArrow).toBeInTheDocument();

    const spanFirst = screen.getByText('Digite o código de verificação');
    expect(spanFirst).toBeInTheDocument();

    const span2 = screen.getByText('Seu código de verificação foi enviado por mensagem SMS para');
    expect(span2).toBeInTheDocument();

    const allInput = container.querySelectorAll('.input-cel-phone');
    expect(allInput.length).toBe(6);

    const spanYouReceived = screen.getByText(/Não recebeu o código?/i);
    expect(spanYouReceived).toBeInTheDocument();

    const spanResend = screen.getByText(/Reenviar/i);
    expect(spanResend).toBeInTheDocument();

    const spanTry = screen.getByText(/ou tente/i);
    expect(spanTry).toBeInTheDocument();

    const spanOtherMethod = screen.getByText(/Outros métodos/i);
    expect(spanOtherMethod).toBeInTheDocument();

    expect.assertions(8);
  });
});
