import { useEffect, useRef, useState } from 'react';
import SvgArrowLeft from '../../AllSvgRegisterUser/SvgArrowLeft/SvgArrowLeft';
import * as Styled from './styled';

interface FirstStepCreateAccountProps {
  setWhichStepIsNow: React.Dispatch<React.SetStateAction<number>>;
  changeValueShowStepToContinueCreateAccount: (value: boolean) => void;
}

const FirstStepCreateAccount = ({
  setWhichStepIsNow,
  changeValueShowStepToContinueCreateAccount,
}: FirstStepCreateAccountProps) => {
  const [valueInputPhoneOne, setValueInputPhoneOne] = useState('');
  const [valueInputPhoneTwo, setValueInputPhoneTwo] = useState('');
  const [valueInputPhoneThree, setValueInputPhoneThree] = useState('');
  const [valueInputPhoneFour, setValueInputPhoneFour] = useState('');
  const [valueInputPhoneFive, setValueInputPhoneFive] = useState('');
  const [valueInputPhoneSix, setValueInputPhoneSix] = useState('');
  const [allInputs, setAllInputs] = useState<[] | NodeListOf<HTMLInputElement>>([]);

  const [alreadyTypePassword, setAlreadyTypePassword] = useState(false);

  const onClickInputCreateAccount = () => {
    for (let i = 0; i < allInputs.length; i++) {
      const input = allInputs[i];

      if (Number(input.value) === 0) {
        input.focus();
        break;
      }
    }
  };

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

        if (index === 0) setValueInputPhoneOne('');

        if (index === 1) setValueInputPhoneTwo('');

        if (index === 2) setValueInputPhoneThree('');

        if (index === 3) setValueInputPhoneFour('');

        if (index === 4) setValueInputPhoneFive('');

        if (index === 5) setValueInputPhoneSix('');

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

  const onClickNextStep = () => {
    if (
      Number(valueInputPhoneOne) > 0 &&
      Number(valueInputPhoneTwo) > 0 &&
      Number(valueInputPhoneThree) > 0 &&
      Number(valueInputPhoneFour) > 0 &&
      Number(valueInputPhoneFive) > 0 &&
      Number(valueInputPhoneSix) > 0
    ) {
      setWhichStepIsNow(2);
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
      Number(valueInputPhoneOne) > 0 &&
      Number(valueInputPhoneTwo) > 0 &&
      Number(valueInputPhoneThree) > 0 &&
      Number(valueInputPhoneFour) > 0 &&
      Number(valueInputPhoneFive) > 0 &&
      Number(valueInputPhoneSix) > 0
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
    changeValueShowStepToContinueCreateAccount(false);
  };

  return (
    <Styled.ContainerTypeCodeVerification>
      <Styled.ContainerTypeCode>
        <Styled.ContainerSvgArrow onClick={() => onClickBackStar()} className="container-svg-arrow">
          <SvgArrowLeft></SvgArrowLeft>
        </Styled.ContainerSvgArrow>
        <Styled.Span>Digite o código de verificação</Styled.Span>
      </Styled.ContainerTypeCode>
      <Styled.ContainerYourCodeWasSendSmsMain>
        <Styled.ContainerYourCodeWasSendSms>
          <Styled.Span>Seu código de verificação foi enviado por mensagem SMS para</Styled.Span>
          <Styled.SpanPhone>(+55) 67 98213 3193</Styled.SpanPhone>
          <Styled.ContainerInputCode>
            <Styled.InputCelphone
              className="input-cel-phone"
              type="text"
              maxLength={1}
              placeholder="·"
              autoComplete="off"
              value={valueInputPhoneOne}
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
              value={valueInputPhoneTwo}
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
              value={valueInputPhoneThree}
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
              value={valueInputPhoneFour}
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
              value={valueInputPhoneFive}
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
              value={valueInputPhoneSix}
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
                <Styled.Button>Reenviar</Styled.Button> ou tente{' '}
                <Styled.Button>Outros métodos</Styled.Button>
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
  );
};

export default FirstStepCreateAccount;