import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import VerifyPassword from './VerifyPassword';
import { MemoryRouter } from 'react-router-dom';

describe('VerifyPassword', () => {
  test('should render itens VerifyPassword', () => {
    const { container } = render(
      <MemoryRouter>
        <VerifyPassword />
      </MemoryRouter>
    );

    const containerSvgShield = container.querySelector('.container-svg-shield') as HTMLElement;
    let svgShield = containerSvgShield.firstChild as SVGElement;
    expect(svgShield).toBeInTheDocument();

    const h1Header = screen.getByRole('heading', {
      name: 'Para sua segurança, por favor verifique sua identidade com um dos métodos abaixo',
    });
    expect(h1Header).toBeInTheDocument();

    const containerSvgLock = container.querySelector('.container-svg-lock') as HTMLElement;
    let svgLock = containerSvgLock.firstChild as SVGElement;
    expect(svgLock).toBeInTheDocument();

    const span1 = screen.getByText('Verificar com Senha');
    expect(span1).toBeInTheDocument();

    const h1Second = screen.getByRole('heading', {
      name: 'P: Por que devo verificar minha conta?',
    });
    expect(h1Second).toBeInTheDocument();

    const span2 = screen.getByText(
      'R: A segurança da sua conta é importante para nós. O Shopee pede uma verificação adicional para que ninguém além de você entre em sua conta.'
    );
    expect(span2).toBeInTheDocument();

    const h1Third = screen.getByRole('heading', {
      name: 'P: Por que devo verificar minha conta?',
    });
    expect(h1Third).toBeInTheDocument();

    const span3 = screen.getByText(/R: Entre em contato com o/);
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(/Atendimento ao Cliente/);
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText(
      /da Shopee para obter assistência para fazer login em sua conta./
    );
    expect(span5).toBeInTheDocument();

    expect.assertions(10);
  });
});
