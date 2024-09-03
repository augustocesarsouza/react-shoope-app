import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SecondStepCreateAccount from './SecondStepCreateAccount';

describe('SecondStepCreateAccount', () => {
  test('should render itens', () => {
    const fn = jest.fn();

    const { container } = render(<SecondStepCreateAccount changeValueWhatStepIsNow={fn} />);

    const containerSvg = container.querySelector('.container-svg-arrow') as HTMLElement;
    const svgArrow = containerSvg.firstChild;
    expect(svgArrow).toBeInTheDocument();

    const spanFirst = screen.getByText('Último passo! Defina sua senha para concluir a inscrição.');
    expect(spanFirst).toBeInTheDocument();

    const inputPassword = container.querySelector('.input-password') as HTMLInputElement;
    expect(inputPassword).toBeInTheDocument();

    const containerSvgEye = container.querySelector('.container-svg-eye') as HTMLElement;
    const svgEye = containerSvgEye.firstChild;
    expect(svgEye).toBeInTheDocument();

    // const allInput = container.querySelectorAll('.input-cel-phone');
    // expect(allInput.length).toBe(6);

    // const spanYouReceived = screen.getByText(/Não recebeu o código?/i);
    // expect(spanYouReceived).toBeInTheDocument();

    expect.assertions(4);
  });
});
