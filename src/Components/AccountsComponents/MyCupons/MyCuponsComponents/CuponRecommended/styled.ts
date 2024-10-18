import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerMain = styled.div`
  display: flex;
`;

export const ContainerCuponMain = styled.div`
  /* width: 300px; */
  display: flex;
  height: 118px;
  border: 1px solid #0000001f;
  border-radius: 2px;
`;

export const ContainerImgCupon = styled.div`
  width: 107px;
  display: flex;
  margin-right: 5px;
  position: relative;

  >img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ContainerInfoCupon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 219px;
  padding: 10px 0px;

  >span {
    font-size: 14px;
    line-height: 1;
    font-weight: 400;
  }

  span:nth-child(2){
    font-size: 16px;
    font-weight: 500;
    color: rgb(238, 77, 45);
  }
`;

export const ContainerOffAndButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 116px;

  >h1 {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 2px;
  }

  >span:nth-child(2){
    font-size: 12px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    text-align: center;
    margin-bottom: 8px;
  }

  >button {
    background-color: rgb(238, 77, 45);
    color: rgb(255, 255, 255);
    border: none;
    width: 55px;
    height: 24px;
    cursor: pointer;

    &:hover {
      background-color: rgb(220 93 67);
      color: rgb(229 229 229);
    }
  }
`;

export const ContainerIndicated = styled.div`
  display: flex;
  position: absolute;
  left: 2px;
  top: 4px;

  background-color: #F44336;
  color: #fff;
  font-size: 10px;
  font-weight: 400;
  padding: 2px 6px;
  border-radius: 2px;
`;