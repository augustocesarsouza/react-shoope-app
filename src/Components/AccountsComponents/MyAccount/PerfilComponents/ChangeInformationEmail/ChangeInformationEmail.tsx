import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from '../../../../../Utils/Url';
import { ObjUser } from '../../../../InterfaceAll/IObjUser/IObjUser';

interface DataObjConfirmCodeEmail {
  code: string;
  codeSendToEmailSuccessfully: boolean;
  userAlreadyExist: boolean;
}

const ChangeInformationEmail = () => {
  const [showCheckbox, setShowCheckbox] = useState(false);
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

  const onClickCheckbox = () => {
    setShowCheckbox((el) => !el);
  };

  const RefInputEmail = useRef<HTMLInputElement | null>(null);
  const RefButtonNext = useRef<HTMLButtonElement | null>(null);
  const refContainerInputEmail = useRef<HTMLDivElement | null>(null);
  const [emailAlreadyExist, setEmailAlreadyExist] = useState(false);

  const onClickSendCodeEmail = async () => {
    if (
      RefInputEmail.current === null ||
      RefInputEmail.current.value.length <= 0 ||
      !RefInputEmail.current.value.includes('@')
    )
      return;

    if (RefButtonNext.current === null) return;

    let email = RefInputEmail.current.value;

    let objSend = {
      Name: userObj?.name,
      Email: email,
    };

    const resp = await fetch(`${Url}/public/user/confirm-email-send-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objSend),
    });

    if (resp.status === 200) {
      let json = await resp.json();
      let data: DataObjConfirmCodeEmail = json.data;
      console.log(data);

      if (data.userAlreadyExist) {
        setEmailAlreadyExist(data.userAlreadyExist);
      }

      if (data.codeSendToEmailSuccessfully) {
        nav('/confirm-code-email', { state: { user: { email: objSend.Email } } });
      }

      // setShowStepToContinueCreateAccount(true);
    } else if (resp.status === 400) {
      let json = await resp.json();
    }
  };

  const onChangeInputInsertEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let button = RefButtonNext.current;

    if (button === null || RefButtonNext.current === null) return;

    if (emailAlreadyExist) {
      setEmailAlreadyExist(false);
    }

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

  useEffect(() => {
    if (refContainerInputEmail.current === null) return;

    if (emailAlreadyExist) {
      refContainerInputEmail.current.style.border = '1px solid rgb(255, 66, 79)';
    } else {
      refContainerInputEmail.current.style.border = '1px solid rgba(0, 0, 0, .14)';
    }
  }, [emailAlreadyExist]);

  return (
    <Styled.ContainerShowChangeEmailMain>
      <Styled.H1>Mudar endereço de E-mail</Styled.H1>
      <Styled.ContainerChangeEmail>
        <Styled.Label>Novo Endereço de E-mail</Styled.Label>
        <Styled.ContainerInputEmailButtonCheckbox>
          <Styled.ContainerInputToEmailAndErrorIfEmailAlreadyRegistered>
            <Styled.ContainerInputEmail ref={refContainerInputEmail}>
              <Styled.Input
                type="text"
                placeholder="Insira seu Endereço de E-mail"
                ref={RefInputEmail}
                id="input-insert-your-email"
                onChange={(e) => onChangeInputInsertEmail(e)}
              />
            </Styled.ContainerInputEmail>
            {emailAlreadyExist && <Styled.Span>O e-mail foi registrado</Styled.Span>}
          </Styled.ContainerInputToEmailAndErrorIfEmailAlreadyRegistered>
          <Styled.Button
            onClick={() => onClickSendCodeEmail()}
            ref={RefButtonNext}
            onMouseEnter={() => onMouseEnterButtonNext()}
            onMouseLeave={() => onMouseLeaveButtonNext()}
          >
            Próximo
          </Styled.Button>
          <Styled.ContainerCheckboxToEmailMain>
            <Styled.ContainerCheckboxToEmail
              onClick={() => onClickCheckbox()}
              $showCheckbox={showCheckbox}
            ></Styled.ContainerCheckboxToEmail>
            <Styled.Span onClick={() => onClickCheckbox()}>
              Envie-me notícias sobre as últimas atualizações, em alta e negócios.
            </Styled.Span>
          </Styled.ContainerCheckboxToEmailMain>
        </Styled.ContainerInputEmailButtonCheckbox>
      </Styled.ContainerChangeEmail>
    </Styled.ContainerShowChangeEmailMain>
  );
};

export default ChangeInformationEmail;
