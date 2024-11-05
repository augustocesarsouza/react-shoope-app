import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { useLocation, useNavigate } from 'react-router-dom';
import SvgArrowLeft from '../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgEyes from '../Svg/SvgEyes/SvgEyes';
import SvgEyesOpen from '../Svg/SvgEyesOpen/SvgEyesOpen';
import { Url } from '../../../Utils/Url';
import SvgErrorX from '../Svg/SvgErrorX/SvgErrorX';
import HeaderToLoginAndRegisterComponent from '../HeaderToLoginAndRegisterComponent/HeaderToLoginAndRegisterComponent';
import FooterChangePassword from '../FooterChangePassword/FooterChangePassword';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';

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
    const objUser = GetUserFromLocalStorage();

    if (objUser.isNullUserLocalStorage) {
      nav('/login');
      return;
    }

    if (objUser.user === null) {
      localStorage.removeItem('user');

      nav('/login');
      return;
    }

    if (location.state) {
      const objState = location.state;
      setUserObjState(objState.user);
    }

    // let userJson = JSON.parse(userLocalStorage);
    setUserObjState(objUser.user);
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
        `${Url}/user/verify-password/${userObjState.phone}/${valueInputEyes}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${userObjState.token}`,
            uid: userObjState.id,
            'Content-Type': 'application/json',
          },
        }
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

      if (res.status === 403 || res.status === 401) {
        localStorage.removeItem('user');
        nav('/login');
        return;
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
              <Styled.ContainerArrowLeft className="container-arrow-left">
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
                  <Styled.ContainerSvgEyes onClick={onClickEyes} className="container-svg-eyes">
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
