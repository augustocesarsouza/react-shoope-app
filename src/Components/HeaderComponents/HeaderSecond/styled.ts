import styled from 'styled-components';

export const ContainerMainHeaderSecondMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ContainerMainHeaderSecond = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0px 0px;
  /* margin-right: 25px; */
  width: 1180px;
`;

export const ContainerSvgShopee = styled.div`
  display: flex;
  width: 145px;

  > svg {
    fill: #fff;
    width: 100%;
    height: 100%;
  }
`;

export const ContainerInputSearchShopee = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  height: 40px;
  padding: 0px 3px 0px 10px;
  border-radius: 3px;

  > input {
    width: 754px;
    height: 34px;
    resize: none;
    border: none;

    &:focus{
    outline: none;
    }
  }

  > input::placeholder {
    color: gray; /* Altere a cor aqui */
  }

  > button {
    width: 60px;
    height: 85%;
    background: #fb5533;
    border: none;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
      background: #fb6546;
    }
  }
`;

export const Input = styled.input`

`;

export const Button = styled.button`
  
`;

export const ContainerCart = styled.div`
  display: flex;
  width: 26px;
  height: 26px;
  margin-top: 15px;
  margin-left: 20px;

  > svg {
    fill: #fff;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;