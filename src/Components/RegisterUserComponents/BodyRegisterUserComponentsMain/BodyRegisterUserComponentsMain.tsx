import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import SvgAllRight from '../AllSvgRegisterUser/SvgAllRight/SvgAllRight';
import Inputmask from 'inputmask';

interface BodyRegisterUserComponentsMainProps {
  setValueInputPhone: React.Dispatch<React.SetStateAction<string>>;
}

const BodyRegisterUserComponentsMain = ({
  setValueInputPhone,
}: BodyRegisterUserComponentsMainProps) => {
  const [showSvgOkPhoneRight, setShowSvgOkPhoneRight] = useState(false);
  const nav = useNavigate();

  const onClickLoggin = () => {
    nav('/login');
  };

  const onClickNext = () => {
    let inputNumberPhone = document.getElementById('input-number-phone') as HTMLInputElement;
    let valueInputNumberPhoneClean = inputNumberPhone.value.replace('(', '').replace(')', '');

    if (showSvgOkPhoneRight) {
      setValueInputPhone(valueInputNumberPhoneClean);
    }
  };

  useEffect(() => {
    let inputNumberPhone = document.getElementById('input-number-phone');

    if (inputNumberPhone) {
      let mask = new Inputmask({
        mask: '(99) 999999999',
        placeholder: '(__)_____-____',
        insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
        showMaskOnHover: false,
        showMaskOnFocus: false,
      });
      mask.mask(inputNumberPhone);
    }
  }, []);

  useEffect(() => {
    let buttonNext = document.getElementById('button-next') as HTMLButtonElement;

    if (showSvgOkPhoneRight) {
      buttonNext.style.cursor = 'pointer';
      buttonNext.style.backgroundColor = '#ee4d2d';
    } else {
      buttonNext.style.cursor = 'not-allowed';
      buttonNext.style.backgroundColor = '#f3826c';
    }
  }, [showSvgOkPhoneRight]);

  const onChangeInputNumberPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valueInput = e.target.value
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/_/g, '')
      .replace(/-/g, '');

    // let showSvgOkPhoneRight = valueInput.length >= 12;
    setShowSvgOkPhoneRight(valueInput.length >= 12);
  };

  return (
    <Styled.ContainerBodyMain>
      <Styled.ContainerMiddleBody>
        <Styled.ContainerLoginRegisterMain>
          <Styled.ContainerLoginRegister>
            <h1>Cadastrar</h1>
            <Styled.ContainerInput>
              <input
                type="text"
                id="input-number-phone"
                placeholder="Número de telefone"
                onChange={(e) => onChangeInputNumberPhone(e)}
              />

              {showSvgOkPhoneRight && <SvgAllRight></SvgAllRight>}
            </Styled.ContainerInput>
            <Styled.ContainerButtonSpansOrWhiteLine>
              <Styled.Button id="button-next" onClick={() => onClickNext()}>
                PRÓXIMO
              </Styled.Button>
            </Styled.ContainerButtonSpansOrWhiteLine>
            <Styled.ContainerLinesAndSpanOr>
              <Styled.SpanLineWhite></Styled.SpanLineWhite>
              <Styled.SpanOr>OU</Styled.SpanOr>
              <Styled.SpanLineWhite></Styled.SpanLineWhite>
            </Styled.ContainerLinesAndSpanOr>
            <Styled.ContainerFacebookGoogleApple>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="facebook"></Styled.ContainerImgSocialMedia>
                <span>Facebook</span>
              </Styled.ContainerSocialMedia>
              <Styled.ContainerSocialMedia>
                <Styled.ContainerImgSocialMedia $whichimg="google"></Styled.ContainerImgSocialMedia>
                <span>Google</span>
              </Styled.ContainerSocialMedia>
            </Styled.ContainerFacebookGoogleApple>
            <Styled.ContainerSpanWarning>
              <Styled.SpanWarning>
                Ao se inscrever, você concorda com as políticas da Shopee{' '}
                <Styled.SpanHighlighted>Termos de serviço</Styled.SpanHighlighted> &{' '}
                <Styled.SpanHighlighted>Política de privacidade</Styled.SpanHighlighted>
              </Styled.SpanWarning>
            </Styled.ContainerSpanWarning>
            <Styled.ContainerNewInTheShopee>
              <Styled.Span>Tem uma Conta?</Styled.Span>
              <a onClick={() => onClickLoggin()}>Entre</a>
            </Styled.ContainerNewInTheShopee>
          </Styled.ContainerLoginRegister>
        </Styled.ContainerLoginRegisterMain>
      </Styled.ContainerMiddleBody>
    </Styled.ContainerBodyMain>
  );
};

export default BodyRegisterUserComponentsMain;
