import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Container = styled.div``;

export const ContainerPerfilMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerOnlyPerfil = styled.div`
  margin-bottom: 30px;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(51, 51, 51);
  }

  >span {
    font-size: 14px;
  }
`;

export const ContainerMyPerfilInfo = styled.div``;

export const Form = styled.form``;

export const Table = styled.table``;

export const Label = styled.label``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Td = styled.td`
  color: rgba(85, 85, 85, .8);
  min-width: 20%;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: right;
  white-space: nowrap;
  padding-bottom: 54px;
  font-size: 14px;
`;

export const TdSecond = styled.td`
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-left: 20px;
`;

export const TdNome = styled.td`
  color: rgba(85, 85, 85, .8);
  min-width: 20%;
  overflow: hidden;
  padding-bottom: 30px;
  text-align: right;
  white-space: nowrap;
  font-size: 14px;
`;

export const ContainerOnlyInputNameUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  >input {
    padding: 12px;
    outline: none;
    border: 1px solid #00000026;
    margin-bottom: 7px;
    width: 100%;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const ContainerOnlyInputName = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  >input {
    padding: 12px;
    outline: none;
    border: 1px solid #00000026;
    width: 100%;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.4);
  }
`;

export const Link = styled.a`
  font-size: 13px;
  color: rgb(0, 85, 170);
`;

export const ContainerCelPhone = styled.div`
  display: flex;
  gap: 5px;
  align-items: flex-end;

  color: #333;
  font-size: 14px;
`

export const ContainerMainInputs = styled.div`
  display: flex;
  gap: 5px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
`;

interface InputCheckboxProps {
  $showCheckbox: boolean;
}

export const InputCheckbox = styled.div<InputCheckboxProps>`
  align-items: center;
  /* border: 2px solid rgba(0, 0, 0, .26); */
  /* border: 2px solid #ee4d2d; */
  border: 2px solid ${props => props.$showCheckbox ? "#ee4d2d" : "rgba(0, 0, 0, .26)"};
  border-radius: 100%;
  box-sizing: border-box;
  display: flex;
  height: 18px;
  justify-content: center;
  width: 18px;
`;

interface CheckBoxProps {
  $showCheckbox: boolean;
}

export const CheckBox = styled.div<CheckBoxProps>`
  /* background: #ee4d2d; */
  background: ${props => props.$showCheckbox ? "#ee4d2d" : "none"};
  border-radius: 100%;
  height: 6px;
  opacity: 1;
  width: 6px;
`;

export const ContainerButtonSave = styled.div`
  display: flex;

  >button {
    background: #ee4d2d;
    color: #fff;
    outline: 0;
    overflow: visible;
    position: relative;

    height: 40px;
    max-width: 220px;
    min-width: 70px;
    padding: 0 20px;

    border: none;
    cursor: pointer;

    &:hover {
      background-color: #ee4d2ded;
    }
  }
`;