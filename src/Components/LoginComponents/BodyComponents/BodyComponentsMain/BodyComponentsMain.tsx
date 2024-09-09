import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { Url } from '../../../../Utils/Url';
import { useRef, useState } from 'react';
import SvgFailAuthentication from '../../AllSvgLogin/SvgFailAuthentication/SvgFailAuthentication';

interface UserLogin {
  passwordIsCorrect: boolean;
  userDTO: UserDTO;
}

interface UserDTO {
  name: string;
  email: string;
}

const BodyComponentsMain = () => {
  const nav = useNavigate();
  const inputLogin = useRef<HTMLInputElement | null>(null);
  const inputLoginPassword = useRef<HTMLInputElement | null>(null);
  const linkEnter = useRef<HTMLButtonElement | null>(null);

  const [valueForInputLogin, setValueForInputLogin] = useState('');
  const [passwordIsCorrect, setpasswordIsCorrect] = useState(true);

  const onClickRegister = () => {
    nav('/signup');

    // nav('/', { state: { user: null } });
  };

  const onClickLogin = async () => {
    if (inputLogin.current === null) return;
    if (inputLoginPassword.current === null) return;

    // let inputLoginValue = inputLogin.current.value;
    let inputLoginPasswordValue = inputLoginPassword.current.value;

    if (valueForInputLogin.length <= 0) return;

    const res = await fetch(
      `${Url}/public/user/login/${valueForInputLogin}/${inputLoginPasswordValue}`
    );

    if (res.status === 200) {
      const json = await res.json();
      const data: UserLogin = json.data;

      if (data.passwordIsCorrect) {
        localStorage.setItem('user', JSON.stringify(data.userDTO));
        setpasswordIsCorrect(true);
        nav('/');
      }
    }

    if (res.status === 400) {
      const json = await res.json();
      const data: UserLogin = json.data;

      setpasswordIsCorrect(data.passwordIsCorrect);
    }
  };

  const changeInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputLogin = e.target.value;
    setValueForInputLogin(inputLogin);

    if (inputLogin.length > 0 && linkEnter.current !== null) {
      linkEnter.current.style.cursor = 'pointer';
      linkEnter.current.style.backgroundColor = '#ee4d2d';
    } else {
      if (linkEnter.current === null) return;

      linkEnter.current.style.cursor = 'auto';
      linkEnter.current.style.backgroundColor = '#f3826c';
    }

    let value = 0;

    for (let i = 0; i < inputLogin.length; i++) {
      const el = inputLogin[i];

      if (!Number.isNaN(Number(el))) {
        value++;
      }
    }

    if (value >= 11 && inputLogin.length <= 11) {
      let newValueLogin = '(+55) ';

      for (let i = 0; i < inputLogin.length; i++) {
        const el = inputLogin[i];

        newValueLogin += el;

        if (i == 1) {
          newValueLogin += ' ';
        }

        if (i == 6) {
          newValueLogin += ' ';
        }
      }

      setValueForInputLogin(newValueLogin);
    }
  };

  return (
    <Styled.ContainerBodyMain>
      <Styled.ContainerMiddleBody>
        <Styled.ContainerLoginRegisterMain>
          <Styled.ContainerLoginRegister>
            <h1>Entre</h1>
            {!passwordIsCorrect && (
              <Styled.ContainerErroLogin>
                <SvgFailAuthentication></SvgFailAuthentication>
                <Styled.H1>
                  Falha de autenticação. Tente novamente mais tarde ou use outro método de
                  autenticação
                </Styled.H1>
              </Styled.ContainerErroLogin>
            )}
            <Styled.ContainerInput>
              <input
                type="text"
                placeholder="Número de telefone/Nome do usuário/Email"
                onChange={(e) => changeInputLogin(e)}
                ref={inputLogin}
                value={valueForInputLogin}
              />
              <input type="password" placeholder="Senha" ref={inputLoginPassword} />
            </Styled.ContainerInput>
            <Styled.ContainerButtonSpansOrWhiteLine>
              <Styled.Button onClick={() => onClickLogin()} ref={linkEnter}>
                ENTRE
              </Styled.Button>
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
