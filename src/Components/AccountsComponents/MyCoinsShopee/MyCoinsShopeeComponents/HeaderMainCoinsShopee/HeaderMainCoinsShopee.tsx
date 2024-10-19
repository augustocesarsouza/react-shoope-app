import SvgArrowRight from '../../../../Svg/SvgArrowRight/SvgArrowRight';
import SvgQuestionMark from '../../../../Svg/SvgQuestionMark/SvgQuestionMark';
import * as Styled from './styled';

const HeaderMainCoinsShopee = () => {
  return (
    <Styled.ContainerHeaderMain>
      <Styled.ContainerFirstHeader>
        <Styled.ContainerImgCoins>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729346258/img-shopee-my-coins-shopee/75efaf1b556a8e2fac6a_gbqphv.png"
            alt="img-coins"
          />
        </Styled.ContainerImgCoins>
        <Styled.H1>0</Styled.H1>
        <Styled.ContainerInfoInnerHeader>
          <Styled.ContainerSpanAndSvgQuestionMark className="container-span-and-svg-question-mark">
            <Styled.Span>Moedas disponíveis</Styled.Span>

            <SvgQuestionMark />
          </Styled.ContainerSpanAndSvgQuestionMark>
          <Styled.ContainerSpanAndSvgArrowRight className="container-span-and-svg-arrow-right">
            <Styled.Span>0 moedas que expiram em</Styled.Span>
            <SvgArrowRight />
          </Styled.ContainerSpanAndSvgArrowRight>
        </Styled.ContainerInfoInnerHeader>
      </Styled.ContainerFirstHeader>
      <Styled.ContainerSecondHeader className="container-second-header">
        <Styled.H1>Ganhe mais moedas</Styled.H1>
        <SvgArrowRight />
      </Styled.ContainerSecondHeader>
    </Styled.ContainerHeaderMain>
  );
};

export default HeaderMainCoinsShopee;
