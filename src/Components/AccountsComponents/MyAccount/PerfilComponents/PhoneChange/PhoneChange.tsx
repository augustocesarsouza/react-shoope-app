import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';

const PhoneChange = () => {
  const location = useLocation();

  const nav = useNavigate();
  const [userObj, setUserObj] = useState<ObjUser | null>(null);

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    if (location.state) {
      const objState = location.state;

      if (objState.user === null) {
        nav('/login');

        return;
      }
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObj(userJson);
    // setValueInput(userJson.name);
  }, []);

  const RefInputEmail = useRef<HTMLInputElement | null>(null);
  const RefButtonNext = useRef<HTMLButtonElement | null>(null);
  const refContainerInputEmail = useRef<HTMLDivElement | null>(null);
  const [emailAlreadyExist, setEmailAlreadyExist] = useState(false);

  const onClickSendCodeEmail = async () => {};

  const onChangeInputInsertEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let button = RefButtonNext.current;

    if (button === null || RefButtonNext.current === null) return;

    if (e.target !== null && e.target.value.length > 1 && e.target.value.includes('@')) {
      button.style.backgroundColor = '#ee4d2d';
      button.style.cursor = 'pointer';
    } else {
      button.style.backgroundColor = '#facac0';
      button.style.cursor = 'not-allowed';
    }
  };

  const onMouseEnterButtonNext = () => {
    if (RefInputEmail.current === null) return;

    if (
      RefInputEmail.current !== null &&
      RefInputEmail.current.value.length > 1 &&
      RefInputEmail.current.value.includes('@')
    ) {
      if (RefButtonNext.current) {
        RefButtonNext.current.style.backgroundColor = 'rgb(238 100 73)';
      }
    }
  };

  const onMouseLeaveButtonNext = () => {
    if (RefInputEmail.current === null) return;

    if (
      RefInputEmail.current !== null &&
      RefInputEmail.current.value.length > 1 &&
      RefInputEmail.current.value.includes('@')
    ) {
      if (RefButtonNext.current) {
        RefButtonNext.current.style.backgroundColor = '#ee4d2d';
      }
    }
  };

  return (
    <Styled.ContainerShowInsertPhoneMain>
      <Styled.H1>Editar Número de Telefone</Styled.H1>
      <Styled.ContainerInsertPhone>
        <Styled.Label>Novo Número de Telefone</Styled.Label>
        <Styled.ContainerInputPhoneButtonCheckbox>
          <Styled.ContainerInputToPhoneAndErrorIfPhoneAlreadyRegistered>
            <Styled.ContainerInputPhone ref={refContainerInputEmail}>
              <Styled.Input
                type="text"
                placeholder=""
                id="input-number-phone"
                ref={RefInputEmail}
                onChange={(e) => onChangeInputInsertEmail(e)}
              />
            </Styled.ContainerInputPhone>
            {emailAlreadyExist && <Styled.Span>O e-mail foi registrado</Styled.Span>}
          </Styled.ContainerInputToPhoneAndErrorIfPhoneAlreadyRegistered>
          <Styled.Button
            onClick={() => onClickSendCodeEmail()}
            ref={RefButtonNext}
            onMouseEnter={() => onMouseEnterButtonNext()}
            onMouseLeave={() => onMouseLeaveButtonNext()}
          >
            Próximo
          </Styled.Button>
        </Styled.ContainerInputPhoneButtonCheckbox>
      </Styled.ContainerInsertPhone>
    </Styled.ContainerShowInsertPhoneMain>
  );
};

export default PhoneChange;
