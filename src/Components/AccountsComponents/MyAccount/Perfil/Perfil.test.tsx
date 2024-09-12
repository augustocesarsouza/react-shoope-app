import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Perfil from './Perfil';
import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/dom';

describe('Perfil', () => {
  it('should render Perfil Component', () => {
    const { container } = render(
      <MemoryRouter>
        <Perfil />
      </MemoryRouter>
    );

    const allLink = container.querySelectorAll('a');
    expect(allLink.length).toBe(3);

    const h1Text = screen.getByRole('heading', { name: /Meu perfil/ });
    expect(h1Text).toBeInTheDocument();

    const span1 = screen.getByText('Gerenciar e proteger sua conta');
    expect(span1).toBeInTheDocument();

    const labelsAll = container.querySelectorAll('label');
    expect(labelsAll.length).toBe(6);

    const span2 = screen.getByText('masculino');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('feminino');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('Outros');
    expect(span4).toBeInTheDocument();

    const buttonRecord = screen.getByRole('button', { name: /Gravar/ });
    expect(buttonRecord).toBeInTheDocument();

    expect.assertions(8);
  });
});
