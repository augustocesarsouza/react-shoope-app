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

export const ContainerMain = styled.div`
`;

export const ContainerAllInfoAboutUserWhoCreatedProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerUserCreatedProductInfo = styled.div`
  display: flex;
`;

export const ContainerUserImg = styled.div`
  display: flex;
  position: relative;
  margin-right: 20px;

  >img:nth-of-type(1) {
    width: 78px;
    height: 78px;
    object-fit: cover;
    border-radius: 50%;
  }

  >img:nth-of-type(2) {
    width: 74px;
    object-fit: contain;
    position: absolute;
    bottom: 27px;
    left: 2px;
  }
`;

export const ContainerUserNameAndOtherInfos=  styled.div`
  display: flex;
  flex-direction: column;

  >h1 {
    font-size: 17px;
    font-weight: 500;
    color: rgba(0,0,0,.87);
    margin-bottom: 2px;
  }

  >span:nth-of-type(1) {
    color: rgba(0, 0, 0, .54);
    font-size: 15px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
`;

export const ContainerChatAndViewStorePage = styled.div`
  display: flex;

  >div {
    display: flex;
    align-items: center;
    height: 37px;
    padding: 0px 15px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
  }

  >div:nth-of-type(1){
    color: red;
    background: rgba(208,1,27,.08);
    border: 1px solid red;
    margin-right: 10px;

    &:hover {
      background: rgba(208,1,27,.05);
    }

    >span {
      font-size: 15px;
    }

    >svg {
      margin-right: 10px;
      width: 14px;
      height: auto;
    }
  }

  >div:nth-of-type(2){
    color: rgb(85, 85, 85);
    background: white;
    border: 1px solid rgb(85 85 85 / 22%);

    &:hover {
      background: rgba(208,1,27,.05);
    }

    >span {
      font-size: 15px;
    }

    >svg {
      margin-right: 10px;
      width: 14px;
      height: auto;
    }
  }
`;

export const ContainerOtherInfoAboutAccountCreatedProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

interface ContainerReviewsRateChatResponseStoreDateProps {
  $whatItIs: number;
}

export const ContainerReviewsRateChatResponseStoreDate = styled.div<ContainerReviewsRateChatResponseStoreDateProps>`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${props => props.$whatItIs === 1 && "20px"};

  >div {
    display: flex;
    font-size: 15px;

    >span:nth-of-type(2){
      color: red;
    }
  }
  
  >div:nth-of-type(1){
    width: 133px;
    display: flex;
    justify-content: space-between;

    >span:nth-of-type(1){
      margin-right: 12px;
      color: rgba(0, 0, 0, 0.4);
    }

    >span:nth-of-type(2){
      text-align: right;
      white-space: nowrap;
    }
  }

  >div:nth-of-type(2){
    width: 227px;
    display: flex;
    justify-content: space-between;
    
    /* >span:nth-of-type(1){
      width: 130px;
      color: rgba(0, 0, 0, 0.4);
      margin-right: 12px;
    } */

    >span:nth-of-type(2){
      text-align: right;
      white-space: nowrap;
    }
  }

  >div:nth-of-type(3){
    width: 214px;
    display: flex;
    justify-content: space-between;

    >span:nth-of-type(1){
      margin-right: 12px;
      color: rgba(0, 0, 0, 0.4);
    }

    >span:nth-of-type(2){
      text-align: right;
      white-space: nowrap;
    }
  }
`;

export const SpanChatResponseRate = styled.span`
  width: 175px;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 12px;
`;


export const SpanRespondsToChat = styled.span`
  width: 130px;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 12px;
`;