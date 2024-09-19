import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Container = styled.div``;

export const Label = styled.label``;

export const ContainerShowInsertPhoneMain = styled.div`
  /* width: 750px; */
  width: 100%;

  >h1 {
    color: rgba(0, 0, 0, .87);
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5rem;
    padding-left: 2px;

    border-bottom: 1px solid rgba(0, 0, 0, .09);
    padding-bottom: 20px;
    margin-bottom: 40px;
  }
`;

export const ContainerInsertPhone = styled.div`
  display: flex;

  >label {
    color: rgba(0, 0, 0, .65);
    font-size: 16px;
    min-width: 170px;
    padding: 10px 20px 0 0;
    text-align: left;
  }
`;

export const ContainerInputToPhoneAndErrorIfPhoneAlreadyRegistered = styled.div`
  
  >span {
    font-size: 12px;
    color: rgb(255, 66, 79);
  }
`;

export const ContainerInputPhoneButtonCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 400px;

  >button {
    height: 40px;
    width: 121px;

    /* background: #ee4d2d; */
    /* cursor: pointer; */
    color: #fff;
    /* outline: 0; */
    /* overflow: visible; */
    position: relative;
    border: none;
    border-radius: 3px;
    font-size: 16px;

    background: #facac0;
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const ContainerInputPhone = styled.div`
  /* display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, .14);
  background: #fff6f7;

  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, .02);
  box-sizing: border-box;
  height: 38px;
  overflow: hidden;
  width: 100%; */

  border: 1px solid rgba(0, 0, 0, .14);
  border-radius: 2px;
  box-shadow: inset 0 2px 0 rgba(0, 0, 0, .02);
  box-sizing: border-box;
  height: 38px;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;

  >input {
    border: 0;
    filter: none;
    flex: 1;
    flex-shrink: 0;
    height: 16px;
    outline: none;
    padding: 12px;
    width: 100%;

    &::placeholder {
      color: #888; /* Escolha a cor que deseja para o placeholder */
      opacity: 1;  /* Controla a opacidade do placeholder, por padrão pode ser menor */
    }
  }
`;

export const ContainerCheckboxToPhoneMain = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);

  >span {
    cursor: default;
  }
`;


export const ContainerLinkInsert = styled.div`
  display: flex;

  >a {
    border-bottom: 1px solid rgb(0, 85, 170);
    cursor: pointer;
  }
`;