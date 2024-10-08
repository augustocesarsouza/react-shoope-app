import * as Styled from './styled';

const SettingPrivacy = () => {
  return (
    <Styled.ContainerMain>
      <Styled.H1>Configurações de Privacidade</Styled.H1>
      <Styled.ContainerRequestDeleteAccount>
        <Styled.Span>Solicitar Exclusão de Conta</Styled.Span>

        <Styled.ContainerButtonDelete>
          <Styled.Button>Excluir</Styled.Button>
        </Styled.ContainerButtonDelete>
      </Styled.ContainerRequestDeleteAccount>
    </Styled.ContainerMain>
  );
};

export default SettingPrivacy;
