import styled from 'styled-components';

export const H1 = styled.h1``;

export const Span = styled.span``;

export const Container = styled.div``;

export const Input = styled.input``;

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 950px;
`;

export const ContainerTopMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1px;
  margin-bottom: 10px;
`;

interface ContainerSpanNameProps {
  $whichWasClickedTopLayer: string;
}

export const ContainerSpanName = styled.div<ContainerSpanNameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #2d2d2d2b;
  width: 100%;
  padding: 16px 0px;
  cursor: pointer;

  border-color: ${props => props.$whichWasClickedTopLayer === '1' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '2' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '3' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '4' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '5' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '6' && "red"};
  border-color: ${props => props.$whichWasClickedTopLayer === '7' && "red"};

  >span {
    font-size: 16px;
    font-weight: 400;
    color: black;
    color: ${props => props.$whichWasClickedTopLayer === '1' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '2' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '3' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '4' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '5' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '6' && "#ee4d2d"};
    color: ${props => props.$whichWasClickedTopLayer === '7' && "#ee4d2d"};
  }
`;

export const ContainerInputSearch = styled.div`
  display: flex;
  background: #00000017;
  padding: 10px 15px;

  >svg {
    color: #2f2f2f5c;
    width: 19px;
    height: 19px;
    padding-right: 14px;
  }

  >input {
    border: none;
    background: #00000000;
    font-size: 14px;
    width: 100%;

    &:focus{
     outline: none; 
    }

    &::placeholder {
      color: #00000050;
    }
  }
  
`;