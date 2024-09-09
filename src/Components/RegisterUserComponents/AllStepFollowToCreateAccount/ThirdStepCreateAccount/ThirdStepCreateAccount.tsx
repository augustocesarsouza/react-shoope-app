import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from './styled';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface ThirdStepCreateAccountProps {
  numberToCreateAccount: string;
}

const ThirdStepCreateAccount = ({ numberToCreateAccount }: ThirdStepCreateAccountProps) => {
  return (
    <Styled.ContainerMain>
      <Styled.H1>Cadastrado com sucesso</Styled.H1>
      <Styled.ContainerCheck className="container-svg-check">
        <FontAwesomeIcon icon={faCheck} />
      </Styled.ContainerCheck>
      <Styled.SpanYouCreateAccount>
        Você criou uma conta da Shopee com sucesso com o número{' '}
        <Styled.SpanNumber>{numberToCreateAccount}</Styled.SpanNumber>
      </Styled.SpanYouCreateAccount>
      <Styled.Span>Você será redirecionado para Shopee em 0 segundo.</Styled.Span>
      <Styled.ContainerButtonBackToShopee>
        <Styled.Button>Voltar para a Shopee</Styled.Button>
      </Styled.ContainerButtonBackToShopee>
    </Styled.ContainerMain>
  );
};

export default ThirdStepCreateAccount;
