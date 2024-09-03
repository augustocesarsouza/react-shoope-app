import SvgArrowLeft from '../../AllSvgRegisterUser/SvgArrowLeft/SvgArrowLeft';
import * as Styled from './styled';
import SvgCheck from '../../AllSvgRegisterUser/SvgCheck/SvgCheck';
import { useEffect, useRef, useState } from 'react';
import SvgExit from '../../AllSvgRegisterUser/SvgExit/SvgExit';
import SvgEye from '../../AllSvgRegisterUser/SvgEye/SvgEye';

const SecondStepCreateAccount = () => {
  const [alreadyTypePassword, setAlreadyTypePassword] = useState(false);

  const [onlyLettersCommon, setOnlyLettersCommon] = useState(true);
  const [haveEightSixteenCharacters, setHaveEightSixteenCharacters] = useState(false);
  const [atLestOneUppercaseCharacter, setAtLestOneUppercaseCharacter] = useState(false);
  const [atLestOneLowercaseCharacter, setAtLestOneLowercaseCharacter] = useState(false);

  const refInputPassword = useRef<HTMLInputElement | null>(null);
  const refButtonRegister = useRef<HTMLButtonElement | null>(null);

  const onChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target;
    setAlreadyTypePassword(true);

    if (input.value.includes('¨')) {
      setOnlyLettersCommon(false);
    } else {
      setOnlyLettersCommon(true);
    }

    if (input.value.length >= 8) {
      setHaveEightSixteenCharacters(true);
    } else {
      setHaveEightSixteenCharacters(false);
    }

    let oneLetterUpperCase = new RegExp(/[A-Z]/);
    let oneLetterLowerCase = new RegExp(/[a-z]/);

    if (oneLetterUpperCase.test(input.value)) {
      setAtLestOneUppercaseCharacter(true);
    } else {
      setAtLestOneUppercaseCharacter(false);
    }

    if (oneLetterLowerCase.test(input.value)) {
      setAtLestOneLowercaseCharacter(true);
    } else {
      setAtLestOneLowercaseCharacter(false);
    }
  };

  const onCLickEye = () => {
    if (refInputPassword.current === null || refInputPassword.current === undefined) return;

    let inputPassword = refInputPassword.current;

    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  };

  const buttonRegisterMouseEnter = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 92, 63)';
  };

  const buttonRegisterMouseLeave = (buttonRegister: HTMLButtonElement) => {
    buttonRegister.style.backgroundColor = 'rgb(238, 77, 45)';
  };

  const handleMouseEnter = () => buttonRegisterMouseEnter(refButtonRegister.current!);
  const handleMouseLeave = () => buttonRegisterMouseLeave(refButtonRegister.current!);

  useEffect(() => {
    let buttonRegister = refButtonRegister.current;

    if (buttonRegister === null) return;

    if (
      onlyLettersCommon &&
      haveEightSixteenCharacters &&
      atLestOneUppercaseCharacter &&
      atLestOneLowercaseCharacter
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
    onlyLettersCommon,
    haveEightSixteenCharacters,
    atLestOneUppercaseCharacter,
    atLestOneLowercaseCharacter,
  ]);

  return (
    <Styled.ContainerTypeCodeVerification>
      <Styled.ContainerTypeCode>
        <Styled.ContainerSvgArrow className="container-svg-arrow">
          <SvgArrowLeft></SvgArrowLeft>
        </Styled.ContainerSvgArrow>
        <Styled.Span>Defina sua senha</Styled.Span>
      </Styled.ContainerTypeCode>
      <Styled.ContainerYourCodeWasSendSmsMain>
        <Styled.ContainerYourCodeWasSendSms>
          <Styled.Span>Último passo! Defina sua senha para concluir a inscrição.</Styled.Span>
          <Styled.ContainerInputPasswordAndValidations>
            <Styled.ContainerInputPassword>
              <Styled.Input
                type="password"
                placeholder="Senha"
                className="input-password"
                ref={refInputPassword}
                onChange={(e) => onChangeInputPassword(e)}
              />
              <Styled.Container className="container-svg-eye" onClick={() => onCLickEye()}>
                <SvgEye></SvgEye>
              </Styled.Container>
            </Styled.ContainerInputPassword>
            <Styled.ContainerSpanAndSvg
              $changecolorspanandsvg={atLestOneLowercaseCharacter}
              $alreadytypepassword={alreadyTypePassword}
            >
              <span>Pelo menos um caracter minúsculo</span>
              {atLestOneLowercaseCharacter && alreadyTypePassword && <SvgCheck></SvgCheck>}
              {!atLestOneLowercaseCharacter && alreadyTypePassword && <SvgExit></SvgExit>}
            </Styled.ContainerSpanAndSvg>
            <Styled.ContainerSpanAndSvg
              $changecolorspanandsvg={atLestOneUppercaseCharacter}
              $alreadytypepassword={alreadyTypePassword}
            >
              <span>Pelo menos um caracter maiúsculo</span>
              {atLestOneUppercaseCharacter && alreadyTypePassword && <SvgCheck></SvgCheck>}
              {!atLestOneUppercaseCharacter && alreadyTypePassword && <SvgExit></SvgExit>}
            </Styled.ContainerSpanAndSvg>
            <Styled.ContainerSpanAndSvg
              $changecolorspanandsvg={haveEightSixteenCharacters}
              $alreadytypepassword={alreadyTypePassword}
            >
              <span>8-16 caracteres</span>
              {haveEightSixteenCharacters && alreadyTypePassword && <SvgCheck></SvgCheck>}
              {!haveEightSixteenCharacters && alreadyTypePassword && <SvgExit></SvgExit>}
            </Styled.ContainerSpanAndSvg>
            <Styled.ContainerSpanAndSvg
              $changecolorspanandsvg={onlyLettersCommon}
              $alreadytypepassword={alreadyTypePassword}
            >
              <span>Apenas letras números e pontuação comum podem ser utilizados</span>
              {onlyLettersCommon && alreadyTypePassword && <SvgCheck></SvgCheck>}
              {!onlyLettersCommon && alreadyTypePassword && <SvgExit></SvgExit>}
            </Styled.ContainerSpanAndSvg>
          </Styled.ContainerInputPasswordAndValidations>
          <Styled.ContainerButtonNext>
            <Styled.Button ref={refButtonRegister}>CADASTRAR</Styled.Button>
          </Styled.ContainerButtonNext>
        </Styled.ContainerYourCodeWasSendSms>
      </Styled.ContainerYourCodeWasSendSmsMain>
    </Styled.ContainerTypeCodeVerification>
  );
};

export default SecondStepCreateAccount;
