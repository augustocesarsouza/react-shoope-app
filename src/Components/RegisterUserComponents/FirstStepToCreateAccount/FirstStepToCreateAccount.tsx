import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import SvgArrowLeft from '../AllSvgRegisterUser/SvgArrowLeft/SvgArrowLeft';

const FirstStepToCreateAccount = () => {
  const [colorGreen, setColorGreen] = useState(false);
  const [allInputs, setAllInputs] = useState<[] | NodeListOf<HTMLInputElement>>([]);
  // @ViewChildren('inputCreate0, inputCreate1, inputCreate2, inputCreate3, inputCreate4, inputCreate5') inputsCreateAccount!: QueryList<ElementRef>;

  const onInputCreateAccount = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;
    if (input.value.length === 1 && index < allInputs.length - 1) {
      allInputs[index + 1].focus();
    }
  };

  const onKeyDownCreateAccount = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const input = e.target as HTMLInputElement;
    console.log(index);

    if (e.code === 'Backspace' && index > 0) {
      allInputs[index].value = '';
      e.preventDefault();
      allInputs[index - 1].focus();
    }
  };

  useEffect(() => {
    setAllInputs(document.querySelectorAll('.input-cel-phone') as NodeListOf<HTMLInputElement>);
  }, []);

  return (
    <Styled.ContainerStepOneMain>
      <Styled.ContainerHeaderCreateAccount>
        <Styled.ContainerFirstBall $colorgreen={true}>
          <Styled.Container>
            <Styled.Span>1</Styled.Span>
          </Styled.Container>
          <Styled.Span>Verifique número de telefone</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={false}>
          <Styled.Container>
            <Styled.Span>2</Styled.Span>
          </Styled.Container>
          <Styled.Span>Criar senha</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={false}>
          <Styled.Container>
            <FontAwesomeIcon icon={faCheck} />
          </Styled.Container>
          <Styled.Span>Concluído</Styled.Span>
        </Styled.ContainerFirstBall>
      </Styled.ContainerHeaderCreateAccount>
      <Styled.ContainerTypeCodeVerification>
        <Styled.ContainerTypeCode>
          <Styled.ContainerSvgArrow>
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
                onChange={(e) => onInputCreateAccount(e, 0)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 0)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                onChange={(e) => onInputCreateAccount(e, 1)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 1)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                onChange={(e) => onInputCreateAccount(e, 2)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 2)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                onChange={(e) => onInputCreateAccount(e, 3)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 3)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                onChange={(e) => onInputCreateAccount(e, 4)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 4)}
              />
              <Styled.InputCelphone
                className="input-cel-phone"
                type="text"
                maxLength={1}
                placeholder="·"
                autoComplete="off"
                onChange={(e) => onInputCreateAccount(e, 5)}
                onKeyDown={(e) => onKeyDownCreateAccount(e, 5)}
              />
            </Styled.ContainerInputCode>
          </Styled.ContainerYourCodeWasSendSms>
        </Styled.ContainerYourCodeWasSendSmsMain>
      </Styled.ContainerTypeCodeVerification>
    </Styled.ContainerStepOneMain>
  );
};

export default FirstStepToCreateAccount;
