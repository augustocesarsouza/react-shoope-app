import { ObjQuantityCupons } from '../MyCupons/MyCupons';
import * as Styled from './styled';

interface ContainerTopicCuponsProps {
  el: ObjQuantityCupons;
  whatTopicClicked: (numberClicked: number) => void;
}

const ContainerTopicCupons = ({ el, whatTopicClicked }: ContainerTopicCuponsProps) => {
  const onClickShopee = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    topicClicked: number
  ) => {
    const allSpans = document.querySelectorAll(
      '.span-topics-my-cupons'
    ) as NodeListOf<HTMLSpanElement>;

    allSpans.forEach((span: HTMLSpanElement) => {
      span.style.borderBottom = 'none';
      span.style.color = 'rgb(85, 85, 85)';
    });

    let spanShopee = e.target as HTMLSpanElement;
    spanShopee.style.borderBottom = '2px solid rgb(238, 77, 45)';
    spanShopee.style.color = 'rgb(238, 77, 45)';
    whatTopicClicked(topicClicked);
  };

  return (
    <Styled.Span onClick={(e) => onClickShopee(e, el.whichCupon)} className="span-topics-my-cupons">
      {el.nameTopCupon} ({el.quantityCupons})
    </Styled.Span>
  );
};

export default ContainerTopicCupons;
