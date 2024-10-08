import * as Styled from './styled';

const AccountDelete = () => {
  return (
    <Styled.ContainerMain>
      <Styled.H1>Importante</Styled.H1>
      <Styled.ContainerBodyAccountDelete>
        <Styled.H2>Clicando em 'continuar' você concorda com os seguintes termos:</Styled.H2>

        <Styled.Ul>
          <Styled.Li>
            Deletar sua conta é irreversível. Depois de deletada, você não poderá acessar a conta ou
            o seu histórico.
          </Styled.Li>
          <Styled.Li>Você abre mão das moedas Shopee restantes na sua conta.</Styled.Li>
          <Styled.Li>
            Sua conta não pode ser deletada se você tiver compras ou vendas pendentes.
          </Styled.Li>
          <Styled.Li>
            Depois da conta deletada, a Shopee pode reter determinados dados de acordo com nossa
            política de privacidade e as leis aplicáveis.
          </Styled.Li>
          <Styled.Li>
            A Shopee se reserva ao direito de rejeitar futuras solicitações de criação de conta
            feitas por você.
          </Styled.Li>
          <Styled.Li>
            Deletar a conta não te livra de possíveis responsabilidades ou obrigações pendentes.
          </Styled.Li>
          <Styled.Li>
            Quando você deletar a conta, todas as chaves Pix registradas na sua ShopeePay e carteira
            do vendedor serão deletadas.
          </Styled.Li>
          <Styled.Li>
            Quando você deletar sua conta Shopee, todas as chaves Pix, transações agendadas e
            autorizações de pagamento no Open Finance serão deletadas em sua carteira ShopeePay e
            carteira do vendedor.
          </Styled.Li>
        </Styled.Ul>

        <Styled.ContainerButtonContinue>
          <Styled.Button>Continuar</Styled.Button>
        </Styled.ContainerButtonContinue>
      </Styled.ContainerBodyAccountDelete>
    </Styled.ContainerMain>
  );
};

export default AccountDelete;
