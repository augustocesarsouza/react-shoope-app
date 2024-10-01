import { useEffect, useRef, useState } from 'react';
import HeaderToLoginAndRegisterComponent from '../HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import * as Styled from './styled';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { useLocation, useNavigate } from 'react-router-dom';
import SvgArrowLeft from '../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgEyes from '../Svg/SvgEyes/SvgEyes';
import FooterChangePassword from '../FooterChangePassword/FooterChangePassword';
import SvgEyesOpen from '../Svg/SvgEyesOpen/SvgEyesOpen';
import { Url } from '../../../Utils/Url';
import SvgErrorX from '../Svg/SvgErrorX/SvgErrorX';

const VerifyPasswordStep2 = () => {
  const [userObjState, setUserObjState] = useState<ObjUser>();
  const nav = useNavigate();
  const location = useLocation();
  const [showEyesOpen, setShowEyesOpen] = useState(false);
  const [showErrorPasswordWrong, setShowErrorPasswordWrong] = useState<null | boolean>(false);
  const [showErroSistem, setShowErroSistem] = useState<boolean>(true);

  const RefInputEyes = useRef<HTMLInputElement | null>(null);
  const RefButtonConfirm = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;
      setUserObjState(objState.user);
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObjState(userJson);
  }, []);

  const onClickEyes = () => {
    if (RefInputEyes.current === null) return;

    let inputEyes = RefInputEyes.current;

    if (inputEyes.type === 'password') {
      inputEyes.type = 'text';
      setShowEyesOpen(true);
    } else if (inputEyes.type === 'text') {
      inputEyes.type = 'password';
      setShowEyesOpen(false);
    }
  };

  const onChangeInputEye = () => {
    if (RefInputEyes.current === null || RefButtonConfirm.current === null) return;

    let inputEyes = RefInputEyes.current;
    let button = RefButtonConfirm.current;

    if (inputEyes.value.length > 0) {
      button.style.opacity = '1';
      button.style.cursor = 'pointer';
    } else {
      button.style.opacity = '0.7';
    }
  };

  const onClickConfirm = async () => {
    if (RefInputEyes.current === null || userObjState === undefined || userObjState === null)
      return;
    let inputEyes = RefInputEyes.current;

    if (inputEyes.value.length > 0) {
      let valueInputEyes = inputEyes.value;
      const res = await fetch(
        `${Url}/public/user/verify-password/${userObjState.phone}/${valueInputEyes}`
      );

      if (res.status === 200) {
        const json = await res.json();
        let data = json.data;
        setShowErrorPasswordWrong(data.passwordIsCorrect);
        nav('/user/account/password', { state: { user: userObjState } });
      }

      if (res.status === 400) {
        const json = await res.json();
        let data = json.data;
        setShowErroSistem(data.passwordIsCorrect);
      }
      // verificar se o login foi feito com sucesso
    }
  };

  return (
    <>
      <HeaderToLoginAndRegisterComponent valueToSpan="Senha"></HeaderToLoginAndRegisterComponent>
      <Styled.ContainerInsertPasswordMain>
        <Styled.ContainerInsertPassword $showErrorPasswordWrong={showErrorPasswordWrong}>
          {showErrorPasswordWrong === false && (
            <Styled.ContainerTopInsertPassword>
              <Styled.ContainerArrowLeft>
                <SvgArrowLeft />
              </Styled.ContainerArrowLeft>
              <Styled.H1>Insira Sua Senha da Shopee</Styled.H1>
            </Styled.ContainerTopInsertPassword>
          )}

          {showErrorPasswordWrong === true && (
            <Styled.LdsRing>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Styled.LdsRing>
          )}

          {showErrorPasswordWrong === false && (
            <Styled.ContainerMainInputAndButton>
              {showErroSistem === false && (
                <Styled.ContainerErrorPasswordError>
                  <SvgErrorX />
                  <Styled.Span>Erro no sistema, por favor, tente novamente.</Styled.Span>
                </Styled.ContainerErrorPasswordError>
              )}
              <Styled.ContainerInputPasswordButtonConfirm>
                <Styled.ContainerInputPassword>
                  <Styled.Input
                    placeholder="Insira sua senha atual para verificar"
                    type="password"
                    ref={RefInputEyes}
                    onChange={onChangeInputEye}
                  />
                  <Styled.ContainerSvgEyes onClick={onClickEyes}>
                    {!showEyesOpen && <SvgEyes />}
                    {showEyesOpen && <SvgEyesOpen />}
                  </Styled.ContainerSvgEyes>
                </Styled.ContainerInputPassword>
              </Styled.ContainerInputPasswordButtonConfirm>
              <Styled.ContainerButtonConfirm>
                <Styled.Button ref={RefButtonConfirm} onClick={onClickConfirm}>
                  CONFIRMAR
                </Styled.Button>
              </Styled.ContainerButtonConfirm>
            </Styled.ContainerMainInputAndButton>
          )}
        </Styled.ContainerInsertPassword>
      </Styled.ContainerInsertPasswordMain>
      <FooterChangePassword></FooterChangePassword>
    </>
  );
};

export default VerifyPasswordStep2;
