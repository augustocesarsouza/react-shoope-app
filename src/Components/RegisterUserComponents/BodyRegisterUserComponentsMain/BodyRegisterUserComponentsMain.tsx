import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const BodyRegisterUserComponentsMain = () => {
  const nav = useNavigate();

  const onClickLoggin = () => {
    nav('/login');
  };

  return (
    <Styled.ContainerBodyMain>
      <Styled.ContainerMiddleBody>
        <Styled.ContainerLoginRegisterMain>
          <Styled.ContainerLoginRegister>
            <h1>Cadastrar</h1>
            <Styled.ContainerInput>
              <input type="text" placeholder="Número de telefone" />
            </Styled.ContainerInput>
            <Styled.ContainerButtonSpansOrWhiteLine>
              <Styled.Button>PRÓXIMO</Styled.Button>
            </Styled.ContainerButtonSpansOrWhiteLine>
            <Styled.ContainerLinesAndSpanOr>
              <Styled.SpanLineWhite></Styled.SpanLineWhite>
              <Styled.SpanOr>OU</Styled.SpanOr>
              <Styled.SpanLineWhite></Styled.SpanLineWhite>
            </Styled.ContainerLinesAndSpanOr>
            <Styled.ContainerFacebookGoogleApple>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="facebook"></Styled.ContainerImgSocialMedia>
                <span>Facebook</span>
              </Styled.ContainerSocialMedia>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="google"></Styled.ContainerImgSocialMedia>
                <span>Google</span>
              </Styled.ContainerSocialMedia>
            </Styled.ContainerFacebookGoogleApple>
            <Styled.ContainerSpanWarning>
              <Styled.SpanWarning>
                Ao se inscrever, você concorda com as políticas da Shopee{' '}
                <Styled.SpanHighlighted>Termos de serviço</Styled.SpanHighlighted> &{' '}
                <Styled.SpanHighlighted>Política de privacidade</Styled.SpanHighlighted>
              </Styled.SpanWarning>
            </Styled.ContainerSpanWarning>
            <Styled.ContainerNewInTheShopee>
              <Styled.Span>Tem uma Conta?</Styled.Span>
              <a onClick={() => onClickLoggin()}>Entre</a>
            </Styled.ContainerNewInTheShopee>
          </Styled.ContainerLoginRegister>
        </Styled.ContainerLoginRegisterMain>
      </Styled.ContainerMiddleBody>
    </Styled.ContainerBodyMain>
  );
};

export default BodyRegisterUserComponentsMain;
