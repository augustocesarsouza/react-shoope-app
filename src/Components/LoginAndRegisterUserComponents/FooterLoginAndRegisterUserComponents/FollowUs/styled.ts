import styled from 'styled-components';

export const H1 = styled.h1`

`;

export const Span = styled.span`

`;

export const ContainerFollowUs = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  >h1 {
    font-size: 12px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 15px;

  }

  >span {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ContainerSocialMediaFollowUs = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 8px;

  >span {
    font-size: 12px;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const ContainerImgFollowUs = styled.div`
  width: 16px;

  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;