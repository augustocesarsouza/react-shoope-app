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

export const ContainerProductImgAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 10px;
  cursor: pointer;

  >h1 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(85, 85, 85);
    text-align: left;
    margin-bottom: 7px;
  }
`;

export const ContainerProductImg = styled.div`
  display: flex;
  width: 180px;
  position: relative;
  margin-bottom: 15px;

  > img:nth-of-type(1) {
    width: 32px;
    height: auto;
    object-fit: cover;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  > img:nth-of-type(2) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  >h1 {
    font-size: 14px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.26);
    color: #fff;
    position: absolute;
    bottom: 0px;
    width: 100%;
    text-align: center;
    padding: 5px 0px;
  }
`;