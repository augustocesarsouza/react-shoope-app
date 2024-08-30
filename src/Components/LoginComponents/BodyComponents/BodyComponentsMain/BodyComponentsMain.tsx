import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';

const BodyComponentsMain = () => {
  const nav = useNavigate();

  const onClickRegister = () => {
    nav('/signup');

    // nav('/', { state: { user: null } });
  };

  return (
    <Styled.ContainerBodyMain>
      <Styled.ContainerMiddleBody>
        <Styled.ContainerLoginRegisterMain>
          <Styled.ContainerLoginRegister>
            <h1>Entre</h1>
            <Styled.ContainerInput>
              <input type="text" placeholder="Número de telefone/Nome do usuário/Email" />
              <input type="text" placeholder="Senha" />
            </Styled.ContainerInput>
            <Styled.ContainerButtonSpansOrWhiteLine>
              <Styled.Button>ENTRE</Styled.Button>
              <Styled.ContainerSpan>
                <Styled.Span>Esqueci minha senha</Styled.Span>
                <Styled.Span>Fazer login com SMS</Styled.Span>
              </Styled.ContainerSpan>
              <Styled.ContainerLinesAndSpanOr>
                <Styled.SpanLineWhite></Styled.SpanLineWhite>
                <Styled.SpanOr>OU</Styled.SpanOr>
                <Styled.SpanLineWhite></Styled.SpanLineWhite>
              </Styled.ContainerLinesAndSpanOr>
            </Styled.ContainerButtonSpansOrWhiteLine>
            <Styled.ContainerFacebookGoogleApple>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="facebook"></Styled.ContainerImgSocialMedia>
                <span>Facebook</span>
              </Styled.ContainerSocialMedia>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="google"></Styled.ContainerImgSocialMedia>
                <span>Google</span>
              </Styled.ContainerSocialMedia>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="apple"></Styled.ContainerImgSocialMedia>
                <span>Apple</span>
              </Styled.ContainerSocialMedia>
            </Styled.ContainerFacebookGoogleApple>
            <Styled.ContainerNewInTheShopee>
              <Styled.Span>Novo na Shopee?</Styled.Span>
              <a onClick={() => onClickRegister()}>Cadastrar</a>
            </Styled.ContainerNewInTheShopee>
          </Styled.ContainerLoginRegister>
        </Styled.ContainerLoginRegisterMain>
      </Styled.ContainerMiddleBody>
    </Styled.ContainerBodyMain>
  );
};

export default BodyComponentsMain;
