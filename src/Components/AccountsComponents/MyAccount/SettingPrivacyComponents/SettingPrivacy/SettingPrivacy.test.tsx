import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SettingPrivacy from './SettingPrivacy';

describe('SettingPrivacy', () => {
  it('should render SettingPrivacy Component', async () => {
    render(
      <MemoryRouter>
        <SettingPrivacy />
      </MemoryRouter>
    );

    const header1 = screen.getByRole('heading', { name: 'Configurações de Privacidade' });
    expect(header1).toBeInTheDocument();

    const span1 = screen.getByText('Solicitar Exclusão de Conta');
    expect(span1).toBeInTheDocument();

    const buttonDelete = screen.getByRole('button', { name: /Excluir/ });
    expect(buttonDelete).toBeInTheDocument();

    expect.assertions(3);
  });
});
