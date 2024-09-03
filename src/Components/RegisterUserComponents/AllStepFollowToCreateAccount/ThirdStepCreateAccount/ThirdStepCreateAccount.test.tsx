import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ThirdStepCreateAccount from './ThirdStepCreateAccount';

describe('ThirdStepCreateAccount', () => {
  test('should render itens', () => {
    let numberToCreateAccount = '(+55) 67 98114 5503';

    const { container } = render(
      <ThirdStepCreateAccount numberToCreateAccount={numberToCreateAccount} />
    );

    const containerSvg = container.querySelector('.container-svg-check') as HTMLElement;
    const svgCheck = containerSvg.firstChild;
    expect(svgCheck).toBeInTheDocument();

    let h1 = screen.getByRole('heading', { name: /Cadastrado com sucesso/ });
    expect(h1).toBeInTheDocument();

    const spanFirst = screen.getByText(/Você criou uma conta da Shopee com sucesso com o número/);
    expect(spanFirst).toBeInTheDocument();

    const spanNumber = screen.getByText(`${numberToCreateAccount}`);
    expect(spanNumber).toBeInTheDocument();

    const spanSecond = screen.getByText(/Você será redirecionado para Shopee em 0 segundo./);
    expect(spanSecond).toBeInTheDocument();

    let button = screen.getByRole('button', { name: /Voltar para a Shopee/ });
    expect(button).toBeInTheDocument();

    expect.assertions(6);
  });
});
