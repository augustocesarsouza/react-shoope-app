import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import AccountDelete from './AccountDelete';

describe('AccountDelete', () => {
  it('should render AccountDelete Component', async () => {
    render(<AccountDelete />);

    const header1 = screen.getByRole('heading', { name: 'Importante' });
    expect(header1).toBeInTheDocument();

    const header2 = screen.getByRole('heading', {
      name: /Clicando em 'continuar' você concorda com os seguintes termos:/,
    });
    expect(header2).toBeInTheDocument();

    const li1 = screen.getByText(
      'Deletar sua conta é irreversível. Depois de deletada, você não poderá acessar a conta ou o seu histórico.'
    );
    expect(li1).toBeInTheDocument();

    const li2 = screen.getByText('Você abre mão das moedas Shopee restantes na sua conta.');
    expect(li2).toBeInTheDocument();

    const li3 = screen.getByText(
      'Sua conta não pode ser deletada se você tiver compras ou vendas pendentes.'
    );
    expect(li3).toBeInTheDocument();

    const li4 = screen.getByText(
      'Depois da conta deletada, a Shopee pode reter determinados dados de acordo com nossa política de privacidade e as leis aplicáveis.'
    );
    expect(li4).toBeInTheDocument();

    const li5 = screen.getByText(
      'A Shopee se reserva ao direito de rejeitar futuras solicitações de criação de conta feitas por você.'
    );
    expect(li5).toBeInTheDocument();

    const li6 = screen.getByText(
      'Deletar a conta não te livra de possíveis responsabilidades ou obrigações pendentes.'
    );
    expect(li6).toBeInTheDocument();

    const li7 = screen.getByText(
      'Quando você deletar a conta, todas as chaves Pix registradas na sua ShopeePay e carteira do vendedor serão deletadas.'
    );
    expect(li7).toBeInTheDocument();

    const li8 = screen.getByText(
      'Quando você deletar sua conta Shopee, todas as chaves Pix, transações agendadas e autorizações de pagamento no Open Finance serão deletadas em sua carteira ShopeePay e carteira do vendedor.'
    );
    expect(li8).toBeInTheDocument();

    const buttonContinue = screen.getByRole('button', { name: /Continuar/ });
    expect(buttonContinue).toBeInTheDocument();

    expect.assertions(11);
  });
});
