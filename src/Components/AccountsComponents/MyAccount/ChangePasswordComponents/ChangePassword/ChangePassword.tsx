import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';
import SvgEyes from '../../../../VerifyPasswordComponents/Svg/SvgEyes/SvgEyes';
import SvgEyesOpen from '../../../../VerifyPasswordComponents/Svg/SvgEyesOpen/SvgEyesOpen';

const ChangePassword = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [userObjState, setUserObjState] = useState<ObjUser>();

  const RefInputEyesNewPassword = useRef<HTMLInputElement | null>(null);
  const RefInputEyesConfirmPassword = useRef<HTMLInputElement | null>(null);
  const RefButtonConfirm = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;

      setUserObjState(objState);
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObjState(userJson);
  }, []);

  const [showEyesOpenNewPassword, setShowEyesOpenNewPassword] = useState(false);
  const [showEyesOpenConfirmPassword, setShowEyesOpenConfirmPassword] = useState(false);
  const [showErrorPasswordError, setShowErrorPasswordError] = useState(false);
  const [
    showErrorNewPasswordNotMatchWithConfirmPassword,
    setShowErrorNewPasswordNotMatchWithConfirmPassword,
  ] = useState<boolean | null>(null);

  const onClickEyesNewPassword = () => {
    if (RefInputEyesNewPassword.current === null) return;

    let inputEyes = RefInputEyesNewPassword.current;

    if (inputEyes.type === 'password') {
      inputEyes.type = 'text';
      setShowEyesOpenNewPassword(true);
    } else if (inputEyes.type === 'text') {
      inputEyes.type = 'password';
      setShowEyesOpenNewPassword(false);
    }
  };

  const onClickEyesConfirmPassword = () => {
    if (RefInputEyesConfirmPassword.current === null) return;

    let inputEyes = RefInputEyesConfirmPassword.current;

    if (inputEyes.type === 'password') {
      inputEyes.type = 'text';
      setShowEyesOpenConfirmPassword(true);
    } else if (inputEyes.type === 'text') {
      inputEyes.type = 'password';
      setShowEyesOpenConfirmPassword(false);
    }
  };

  useEffect(() => {
    let inputNewPassword = RefInputEyesNewPassword.current;

    if (inputNewPassword === null) return;

    if (showErrorPasswordError) {
      inputNewPassword.style.borderColor = 'red';
    } else {
      inputNewPassword.style.borderColor = '#00000026';
    }
  }, [showErrorPasswordError]);

  const onChangeNewPasssword = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target === null) return;

    let inputNewPassword = RefInputEyesNewPassword.current;
    if (inputNewPassword === null) return;

    let inputEyes = e.target;

    const regexMenor = /^(?=.*[a-z])/;
    const regexMaior = /^(?=.*[A-Z])/;
    let booleValue = false;

    if (!regexMenor.test(inputEyes.value)) {
      setShowErrorPasswordError(true);
      booleValue = true;
    } else {
      booleValue = false;
    }

    if (!regexMaior.test(inputEyes.value)) {
      setShowErrorPasswordError(true);
      booleValue = true;
    } else {
      booleValue = false;
    }

    if (inputEyes.value.length < 8) {
      setShowErrorPasswordError(true);
    }

    if (inputEyes.value.length > 7 && inputEyes.value.length <= 16 && !booleValue) {
      setShowErrorPasswordError(false);
    }
  };

  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputNewPassword = RefInputEyesNewPassword.current;
    let inputConfirmPassword = RefInputEyesConfirmPassword.current;

    if (e.target === null || inputNewPassword === null || inputConfirmPassword === null) return;

    let inputEyes = e.target;

    if (inputNewPassword.value === inputEyes.value) {
      inputConfirmPassword.style.borderColor = '#00000026';
      setShowErrorNewPasswordNotMatchWithConfirmPassword(false);
    } else {
      inputConfirmPassword.style.borderColor = 'red';
      setShowErrorNewPasswordNotMatchWithConfirmPassword(true);
    }
  };

  useEffect(() => {
    if (
      showErrorNewPasswordNotMatchWithConfirmPassword === null ||
      RefButtonConfirm.current === null
    )
      return;

    let buttonConfirm = RefButtonConfirm.current;

    if (!showErrorNewPasswordNotMatchWithConfirmPassword && !showErrorPasswordError) {
      buttonConfirm.style.opacity = '1';
      buttonConfirm.style.cursor = 'pointer';
    } else {
      buttonConfirm.style.opacity = '0.5';
      buttonConfirm.style.cursor = 'atuo';
    }
  }, [showErrorNewPasswordNotMatchWithConfirmPassword, showErrorPasswordError]);

  const onMouseEnterButton = () => {
    if (
      showErrorNewPasswordNotMatchWithConfirmPassword === null ||
      RefButtonConfirm.current === null
    )
      return;

    let buttonConfirm = RefButtonConfirm.current;

    if (!showErrorNewPasswordNotMatchWithConfirmPassword && !showErrorPasswordError) {
      buttonConfirm.style.background = '#ee6449';
    }
  };

  const onMouseLeaveButton = () => {
    if (
      showErrorNewPasswordNotMatchWithConfirmPassword === null ||
      RefButtonConfirm.current === null
    )
      return;

    let buttonConfirm = RefButtonConfirm.current;

    if (!showErrorNewPasswordNotMatchWithConfirmPassword && !showErrorPasswordError) {
      buttonConfirm.style.background = '#ee4d2d';
    }
  };

  const onClickButtonConfirm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!showErrorNewPasswordNotMatchWithConfirmPassword && !showErrorPasswordError) {
      // Testar amanha mudar password se de com sucesso tem que aparecer algo parao usuario eu já gravei oque a shoppee fez
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerHeaderChangePassword>
        <Styled.H1>Trocar senha</Styled.H1>
        <Styled.Span>
          Para a segurança da sua conta, não compartilhe sua senha com mais ninguém
        </Styled.Span>
      </Styled.ContainerHeaderChangePassword>
      <Styled.Form>
        <Styled.Table>
          <Styled.Tbody>
            <Styled.Tr>
              <Styled.TdNome>
                <Styled.Label className="label">Nova senha</Styled.Label>
              </Styled.TdNome>
              <Styled.TdSecond>
                <Styled.ContainerOnlyInputNameUser>
                  <Styled.ContainerOnlyInputName>
                    <Styled.Input
                      type="password"
                      placeholder=""
                      maxLength={16}
                      ref={RefInputEyesNewPassword}
                      onChange={(e) => onChangeNewPasssword(e)}
                    />
                    <Styled.ContainerSvgEyes onClick={onClickEyesNewPassword}>
                      {!showEyesOpenNewPassword && <SvgEyes />}
                      {showEyesOpenNewPassword && <SvgEyesOpen />}
                    </Styled.ContainerSvgEyes>
                  </Styled.ContainerOnlyInputName>
                </Styled.ContainerOnlyInputNameUser>
                {showErrorPasswordError && (
                  <Styled.SpanError>
                    A senha deve ter de 8 a 16 caracteres, conter pelo menos um caractere maiúsculo
                    e um minúsculo e incluir apenas letras, números ou pontuação comum
                  </Styled.SpanError>
                )}
              </Styled.TdSecond>
            </Styled.Tr>
            <Styled.Tr>
              <Styled.TdNome>
                <Styled.Label className="label">Confirme a senha</Styled.Label>
              </Styled.TdNome>
              <Styled.TdSecond>
                <Styled.ContainerOnlyInputNameUser>
                  <Styled.ContainerOnlyInputName>
                    <Styled.Input
                      type="password"
                      placeholder=""
                      ref={RefInputEyesConfirmPassword}
                      onChange={(e) => onChangeConfirmPassword(e)}
                    />
                    <Styled.ContainerSvgEyes onClick={onClickEyesConfirmPassword}>
                      {!showEyesOpenConfirmPassword && <SvgEyes />}
                      {showEyesOpenConfirmPassword && <SvgEyesOpen />}
                    </Styled.ContainerSvgEyes>
                  </Styled.ContainerOnlyInputName>
                </Styled.ContainerOnlyInputNameUser>
                {showErrorNewPasswordNotMatchWithConfirmPassword && (
                  <Styled.SpanError>A senha digitada é diferente da anterior</Styled.SpanError>
                )}
              </Styled.TdSecond>
            </Styled.Tr>
            <Styled.Tr>
              <Styled.TdNome>
                <Styled.Label className="label"></Styled.Label>
              </Styled.TdNome>
              <Styled.TdSecond>
                <Styled.ContainerButtonConfirm>
                  <Styled.Button
                    ref={RefButtonConfirm}
                    onMouseEnter={onMouseEnterButton}
                    onMouseLeave={onMouseLeaveButton}
                    onClick={(e) => onClickButtonConfirm(e)}
                  >
                    Confirmar
                  </Styled.Button>
                </Styled.ContainerButtonConfirm>
              </Styled.TdSecond>
            </Styled.Tr>
          </Styled.Tbody>
        </Styled.Table>
      </Styled.Form>
    </Styled.ContainerMain>
  );
};

export default ChangePassword;
