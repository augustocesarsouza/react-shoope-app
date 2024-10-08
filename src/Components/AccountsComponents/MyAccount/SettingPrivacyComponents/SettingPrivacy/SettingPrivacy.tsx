import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const SettingPrivacy = () => {
  const nav = useNavigate();

  const onClickDeleteButton = () => {
    nav('/user/account/delete');

    const containerItensMyAccount = document.querySelector(
      '#container-itens-my-account'
    ) as HTMLElement;
    containerItensMyAccount.style.display = 'none';
  };

  return (
    <Styled.ContainerMain>
      <Styled.H1>Configurações de Privacidade</Styled.H1>
      <Styled.ContainerRequestDeleteAccount>
        <Styled.Span>Solicitar Exclusão de Conta</Styled.Span>

        <Styled.ContainerButtonDelete>
          <Styled.Button onClick={onClickDeleteButton}>Excluir</Styled.Button>
        </Styled.ContainerButtonDelete>
      </Styled.ContainerRequestDeleteAccount>
    </Styled.ContainerMain>
  );
};

export default SettingPrivacy;
