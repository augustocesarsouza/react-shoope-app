import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';
import { ObjUser } from '../../../../Templates/Home/Home';

interface DataObjConfirmCodeEmail {
  code: string;
  codeSendToEmailSuccessfully: boolean;
}

const InsertEmail = () => {
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
  }, [location]);

  const onClickCheckbox = () => {
    setShowCheckbox((el) => !el);
  };

  const [codeUserCreate, setCodeUserCreate] = useState<{ [key: string]: string }>({});
  const [numberPhone, setNumberPhone] = useState('');
  const RefInputEmail = useRef<HTMLInputElement | null>(null);
  const RefButtonNext = useRef<HTMLButtonElement | null>(null);

  const onClickSendCodeEmail = async () => {
    // Tem que salvar esse codigo, e depois verificar quando ele mandar e comparar pode ser um "chave"e valor, e o valor com codigo e tals
    // Colocar amanha esse 'accountSid' e esse 'authToken' valor "ENV" environment

    if (
      RefInputEmail.current === null ||
      RefInputEmail.current.value.length <= 0 ||
      !RefInputEmail.current.value.includes('@')
    )
      return;

    if (RefButtonNext.current === null) return;

    // let button = RefButtonNext.current;

    let email = RefInputEmail.current.value;

    let objSend = {
      Name: userObj?.name,
      Email: email,
    };

    // const resp = await fetch(`${Url}/public/user/create`

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

      if (data.codeSendToEmailSuccessfully) {
        nav('/confirm-code-email', { state: { user: { email: objSend.Email } } });
      }

      // setShowStepToContinueCreateAccount(true);
    } else if (resp.status === 400) {
      let json = await resp.json();

      // console.log(json);

      // setShowStepToContinueCreateAccount(false);
    }
  };

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
    <Styled.ContainerShowInsertEmailMain>
      <Styled.H1>Adicionar Endereço de E-mail</Styled.H1>
      <Styled.ContainerInsertEmail>
        <Styled.Label>Novo Endereço de E-mail</Styled.Label>
        <Styled.ContainerInputEmailButtonCheckbox>
          <Styled.ContainerInputEmail>
            <Styled.Input
              type="text"
              placeholder="Insira seu Endereço de E-mail"
              ref={RefInputEmail}
              onChange={(e) => onChangeInputInsertEmail(e)}
            />
          </Styled.ContainerInputEmail>
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
      </Styled.ContainerInsertEmail>
    </Styled.ContainerShowInsertEmailMain>
  );
};

export default InsertEmail;