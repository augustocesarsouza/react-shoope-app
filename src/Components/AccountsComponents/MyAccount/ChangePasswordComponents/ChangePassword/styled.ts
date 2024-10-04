import styled from 'styled-components';

export const Container = styled.div``;

export const Span = styled.span``;

export const SpanLinkBlue = styled.span`
  color: #488bf1;
`;

export const SpanError = styled.span`
  color: red;
`;

export const H1 = styled.h1``;

export const Button = styled.button``;

export const Input = styled.input`
`;

export const ContainerMain = styled.div`
  width: 950px;
`;

export const ContainerHeaderChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 50px;

  >h1 {
    font-size: 20px;
    font-weight: 500;
  }

  >span {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
  }
`;

export const Form = styled.form``;

export const Table = styled.table`
  width: 65%;
  user-select: none;
`;

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
  font-weight: 400;
`;

export const TdSecond = styled.td`
  box-sizing: border-box;
  padding-bottom: 30px;
  padding-left: 20px;
  font-weight: 400;
  width: 65%;
`;

export const TdNome = styled.td`
  color: rgba(85, 85, 85, .8);
  /* width: 25%; */
  overflow: hidden;
  text-align: right;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  padding-top: 12px;

  display: flex;
  justify-content: flex-end;
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
  /* flex-direction: column; */
  width: 100%;
  position: relative;

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

export const ContainerSvgEyes = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;

  >svg {
    cursor: pointer;
  }
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  width: 101px;
  height: 40px;

  >button {
    background-color: #ee4d2d;
    opacity: 0.5;
    color: #fff;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 2px;
  }
`;