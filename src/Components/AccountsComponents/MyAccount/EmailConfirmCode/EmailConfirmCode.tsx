import { useEffect, useRef, useState } from 'react';
import SvgArrowLeft from '../../../RegisterUserComponents/AllSvgRegisterUser/SvgArrowLeft/SvgArrowLeft';
import * as Styled from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';
import SvgShopee from '../../../HeaderComponents/AllSvgHeader/SvgShopee/SvgShopee';
import FooterLoginAndRegister from '../../../LoginAndRegisterUserComponents/FooterLoginAndRegisterUserComponents/FooterLoginAndRegister/FooterLoginAndRegister';
import { ObjUser } from '../../../../Templates/Home/Home';
import SvgExit from '../../../RegisterUserComponents/AllSvgRegisterUser/SvgExit/SvgExit';

const EmailConfirmCode = () => {
  const [valueInputPhoneOne, setValueInputPhoneOne] = useState('-1');
  const [valueInputPhoneTwo, setValueInputPhoneTwo] = useState('-1');
  const [valueInputPhoneThree, setValueInputPhoneThree] = useState('-1');
  const [valueInputPhoneFour, setValueInputPhoneFour] = useState('-1');
  const [valueInputPhoneFive, setValueInputPhoneFive] = useState('-1');
  const [valueInputPhoneSix, setValueInputPhoneSix] = useState('-1');
  const [allInputs, setAllInputs] = useState<[] | NodeListOf<HTMLInputElement>>([]);

  const [alreadyTypePassword, setAlreadyTypePassword] = useState(false);
  const [codeTypeIsWrong, setCodeTypeIsWrong] = useState(false);
  const [userLogin, setUserLogin] = useState<ObjUser | null>(null);

  const nav = useNavigate();

  const onClickInputCreateAccount = () => {
    for (let i = 0; i < allInputs.length; i++) {
      const input = allInputs[i];

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

  const location = useLocation();
  const [emailThatWasSent, setEmailThatWasSent] = useState('');

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

      setEmailThatWasSent(objState.user.email);
    }

    let userJson = JSON.parse(userLocalStorage);
    // setEmailThatWasSent(userJson);
    setUserLogin(userJson);
  }, []);

  const onChangeInputCreateAccount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (Number.isNaN(Number(e.target.value))) return;

    if (index === 0) setValueInputPhoneOne(String(e.target.value));

    if (index === 1) setValueInputPhoneTwo(String(e.target.value));

    if (index === 2) setValueInputPhoneThree(String(e.target.value));

    if (index === 3) setValueInputPhoneFour(String(e.target.value));

    if (index === 4) setValueInputPhoneFive(String(e.target.value));

    if (index === 5) setValueInputPhoneSix(String(e.target.value));

    const input = e.target as HTMLInputElement;

    if (input.value.length === 1 && index < allInputs.length - 1) {
      allInputs[index + 1].focus();
    }

    setAlreadyTypePassword(true);
  };

  const onKeyDownCreateAccount = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;

    if (e.code === 'Backspace' && index > 0) {
      if (input.value.length === 1) {
        // allInputs[index].value = '';

        if (index === 0) setValueInputPhoneOne('-1');

        if (index === 1) setValueInputPhoneTwo('-1');

        if (index === 2) setValueInputPhoneThree('-1');

        if (index === 3) setValueInputPhoneFour('-1');

        if (index === 4) setValueInputPhoneFive('-1');

        if (index === 5) setValueInputPhoneSix('-1');

        allInputs[index - 1].focus();
      } else {
        allInputs[index - 1].focus();
        allInputs[index - 1].value = '';
      }

      e.preventDefault();
    }
  };

  useEffect(() => {
    setAllInputs(document.querySelectorAll('.input-cel-phone') as NodeListOf<HTMLInputElement>);
  }, []);

  const onClickNextStep = async () => {
    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0
    ) {
      let code = `${valueInputPhoneOne}${valueInputPhoneTwo}${valueInputPhoneThree}${valueInputPhoneFour}${valueInputPhoneFive}${valueInputPhoneSix}`;

      if (userLogin === null || code.length <= 5) return;

      let userId = userLogin.id;

      let bodyUserEmailCode = {
        Code: code,
        UserId: userId,
        Email: emailThatWasSent,
      };

      const resp = await fetch(`${Url}/public/user/verific`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyUserEmailCode),
      });

      if (resp.status === 200) {
        let json = await resp.json();
        // console.log(json);

        nav('/user/account/profile', { state: { user: { email: emailThatWasSent } } });
        // passar o obj aqui para dentro 'nav('/user/account/profile')', para passar para o email do 'profile' e colocar o "LINK" "Troca"
      } else if (resp.status === 400) {
        let json = await resp.json();

        setCodeTypeIsWrong(true);
        // console.log(json);
      }
    }
  };

  const buttonRegisterMouseEnter = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 92, 63)';
  };

  const buttonRegisterMouseLeave = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 77, 45)';
  };

  const refButtonNext = useRef<HTMLButtonElement | null>(null);

  const handleMouseEnter = () => buttonRegisterMouseEnter(refButtonNext.current!);
  const handleMouseLeave = () => buttonRegisterMouseLeave(refButtonNext.current!);

  useEffect(() => {
    let buttonRegister = refButtonNext.current;

    if (buttonRegister === null) return;

    if (
      Number(valueInputPhoneOne) >= 0 &&
      Number(valueInputPhoneTwo) >= 0 &&
      Number(valueInputPhoneThree) >= 0 &&
      Number(valueInputPhoneFour) >= 0 &&
      Number(valueInputPhoneFive) >= 0 &&
      Number(valueInputPhoneSix) >= 0
    ) {
      buttonRegister.style.opacity = '1';
      buttonRegister.style.cursor = 'pointer';

      buttonRegister.addEventListener('mouseenter', handleMouseEnter);
      buttonRegister.addEventListener('mouseleave', handleMouseLeave);
    } else {
      if (alreadyTypePassword) {
        buttonRegister.style.opacity = '.7';
        buttonRegister.style.cursor = 'not-allowed';

        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    }

    return () => {
      if (buttonRegister !== null) {
        buttonRegister.removeEventListener('mouseenter', handleMouseEnter);
        buttonRegister.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [
    valueInputPhoneOne,
    valueInputPhoneTwo,
    valueInputPhoneThree,
    valueInputPhoneFour,
    valueInputPhoneFive,
    valueInputPhoneSix,
    alreadyTypePassword,
  ]);

  const onClickBackStar = () => {
    nav('/user/account/email');
  };

  const onClickResendCode = () => {};

  return (
    <Styled.ContainerTypeCodeVerificationMain>
      <Styled.ContainerVerificationCodeHeaderMain>
        <Styled.ContainerVerificationCodeHeader>
          <Styled.ContainerImgShopeeSpanVerficationCode>
            <Styled.ContainerSVGShopee>
              <SvgShopee></SvgShopee>
              <Styled.Span>Código de Verificação</Styled.Span>
            </Styled.ContainerSVGShopee>
          </Styled.ContainerImgShopeeSpanVerficationCode>
          <Styled.Span>Precisa de ajuda?</Styled.Span>
        </Styled.ContainerVerificationCodeHeader>
      </Styled.ContainerVerificationCodeHeaderMain>
      <Styled.ContainerTypeCodeVerification>
        <Styled.ContainerTypeCode>
          <Styled.ContainerSvgArrow
            onClick={() => onClickBackStar()}
            className="container-svg-arrow"
          >
            <SvgArrowLeft></SvgArrowLeft>
          </Styled.ContainerSvgArrow>
          <Styled.Span>Digite o código de verificação</Styled.Span>
        </Styled.ContainerTypeCode>
        {codeTypeIsWrong && (
          <Styled.ContainerInvalidCode>
            <SvgExit></SvgExit>
            <Styled.Span>Código Inválido.</Styled.Span>
          </Styled.ContainerInvalidCode>
        )}
        <Styled.ContainerYourCodeWasSendSmsMain>
          <Styled.ContainerYourCodeWasSendSms>
            <Styled.Span>Seu código de verificação é enviado por Email para</Styled.Span>
            <Styled.SpanPhone>{emailThatWasSent}</Styled.SpanPhone>
            <Styled.ContainerInputCode>
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneOne) < 0 ? '' : valueInputPhoneOne}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 0)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 0)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneTwo) < 0 ? '' : valueInputPhoneTwo}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 1)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 1)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneThree) < 0 ? '' : valueInputPhoneThree}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 2)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 2)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneFour) < 0 ? '' : valueInputPhoneFour}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 3)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 3)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneFive) < 0 ? '' : valueInputPhoneFive}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 4)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 4)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                value={Number(valueInputPhoneSix) < 0 ? '' : valueInputPhoneSix}
                onClick={() => onClickInputCreateAccount()}
                onChange={(e) => onChangeInputCreateAccount(e, 5)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 5)}
              />
            </Styled.ContainerInputCode>
            <Styled.ContainerSplit></Styled.ContainerSplit>
            <Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
              <Styled.ContainerDidNotReceiveTheCode>
                <Styled.Span>Não recebeu o código?</Styled.Span>
                <Styled.Span>
                  <Styled.Button onClick={() => onClickResendCode()}>Reenviar</Styled.Button>
                </Styled.Span>
              </Styled.ContainerDidNotReceiveTheCode>

              <Styled.ContainerButtonNext>
                <Styled.Button ref={refButtonNext} onClick={() => onClickNextStep()}>
                  PRÓXIMO
                </Styled.Button>
              </Styled.ContainerButtonNext>
            </Styled.ContainerDidNotReceiveTheCodeAndButtonNext>
          </Styled.ContainerYourCodeWasSendSms>
        </Styled.ContainerYourCodeWasSendSmsMain>
      </Styled.ContainerTypeCodeVerification>

      <FooterLoginAndRegister></FooterLoginAndRegister>
    </Styled.ContainerTypeCodeVerificationMain>
  );
};

export default EmailConfirmCode;
