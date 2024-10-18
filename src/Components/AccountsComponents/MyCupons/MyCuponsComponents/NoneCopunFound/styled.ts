import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const Button = styled.button``;

export const Img = styled.img``;

export const ContainerNoneCopunFound = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: 100%;
  height: 412px;
  padding: 50px 0px;

  >h1 {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 5px;
  }

  >span {
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.54);
    margin-bottom: 20px;
  }

  >button {
    background-color: rgb(238, 77, 45);
    color: #fff;
    border: none;
    padding: 10px 18px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgb(238 92 63);
      color: #e1e1e1;
    }
  }
`;

export const ContainerImgCuponNotFound = styled.div`
  display: flex;
  width: 140px;


  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;