import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 580px;
  gap: 15px;

  >h1 {
    font-size: 18px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const ContainerImg = styled.div`
  background-image: url(https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728476422/img-shopee/5fafbb923393b712b964_eeoxc9.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100px;
`;