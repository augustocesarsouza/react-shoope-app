import styled from 'styled-components';

export const H1 = styled.h1`
`;

export const Img = styled.img`
`;

export const Span = styled.span`
`;

export const Input = styled.input`
`;

export const Button = styled.button`
`;

export const Container = styled.div`
`;

export const ContainerEachCategoryMain = styled.div`
  position: relative;
`;

export const ButtonNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #00000040;
  border: none;
  cursor: pointer;
  padding: 15px 10px;
  font-size: 20px;
  z-index: 1;
  display: flex;

  >svg {
    width: 10px;
    fill: #fff;
  }
`;

export const ButtonNavLeft = styled(ButtonNav)`
  left: 10px;
`;

export const ButtonNavRight = styled(ButtonNav)`
  right: 0px;
`;

export const ContainerAllCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 325px;
  overflow-x: hidden;
  flex-direction: column;
  align-content: flex-start;
`;

export const ContainerArrowLeft = styled.div`
  position: absolute;
  left: 0px;
  top: 120px;
  width: 80px;
  /* height: 100%; */
  /* display: flex; */
  display: none;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
 

  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;

export const ContainerArrowRight = styled.div`
  position: absolute;
  right: 0px;
  top: 120px;
  z-index: 1;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000061;
  border-radius: 50%;
  
  >div {
    background-color:  #fff;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0px 0px 4px 0px black;
  }

  >div>svg {
    fill: #0000008f;
    width: 14px;
    height: 14px;
  }
`;