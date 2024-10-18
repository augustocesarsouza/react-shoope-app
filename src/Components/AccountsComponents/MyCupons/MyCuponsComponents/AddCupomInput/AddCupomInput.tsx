import { useRef, useState } from 'react';
import SvgExit from '../../../../Svg/SvgExit/SvgExit';
import * as Styled from './styled';

const AddCupomInput = () => {
  const refButtonRescue = useRef<HTMLButtonElement | null>(null);
  const refInputInsertCode = useRef<HTMLInputElement | null>(null);
  const [isValidClickRescueButton, setIsValidClickRescueButton] = useState(false);

  const onChangeInputInsertCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (refButtonRescue.current === null) return;

    if (e.target.value.length > 0) {
      changeBackgroundAndCursorButtonRescue('#ee4d2d', 'pointer');
      setIsValidClickRescueButton(true);
    } else {
      changeBackgroundAndCursorButtonRescue('rgba(0,0,0,.1)', 'auto');
      setIsValidClickRescueButton(false);
    }
  };

  const onClickRescue = () => {
    if (!isValidClickRescueButton) return;
    console.log('button rescue');
  };

  const onClickContainerSvgExit = () => {
    if (refInputInsertCode.current === null) return;

    let inputInsertCode = refInputInsertCode.current;
    inputInsertCode.value = '';
    setIsValidClickRescueButton(false);
    changeBackgroundAndCursorButtonRescue('rgba(0,0,0,.1)', 'auto');
  };

  const changeBackgroundAndCursorButtonRescue = (backgroundColor: string, cursor: string) => {
    if (refButtonRescue.current === null) return;

    let buttonRescue = refButtonRescue.current;

    buttonRescue.style.backgroundColor = backgroundColor;
    buttonRescue.style.cursor = cursor;
  };

  return (
    <Styled.ContainerInputAddCupon>
      <Styled.Span>Adicionar Cupom</Styled.Span>
      <Styled.ContainerInputInsertCodeCupon>
        <Styled.Input
          placeholder="Insira o código do cupom aqui"
          onChange={(e) => onChangeInputInsertCode(e)}
          ref={refInputInsertCode}
        />
        {isValidClickRescueButton && (
          <Styled.ContainerSvgExit onClick={onClickContainerSvgExit}>
            <SvgExit />
          </Styled.ContainerSvgExit>
        )}
      </Styled.ContainerInputInsertCodeCupon>
      <Styled.ContainerButtonRescue>
        <Styled.Button ref={refButtonRescue} onClick={onClickRescue}>
          Resgatar
        </Styled.Button>
      </Styled.ContainerButtonRescue>
    </Styled.ContainerInputAddCupon>
  );
};

export default AddCupomInput;
