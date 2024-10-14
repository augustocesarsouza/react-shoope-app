import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Img = styled.img``;

export const Button = styled.button``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;

  border-bottom: 1px solid #39393952;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  border-bottom: 1px solid #39393952;
  padding: 10px 0px;

  >h1 {
    font-size: 14px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.26);
    cursor: pointer;

    &:hover {
      color: red;
    }
  }
`;

export const ContainerAllUpdateShopee = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;