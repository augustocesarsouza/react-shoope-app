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

export const ContainerCategoryProp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 120px;
  height: 150px;
  gap: 12px;
  cursor: pointer;

  >img {
    width: 83px;
    height: auto;
  }

  >span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    width: 110px;
    text-align: center;
    margin-bottom: 15px;
    line-height: 1.6;
  }

  &:hover {
    border-right: 1px solid #0000002b;
    border-bottom: 1px solid #0000002b;
  }
`;