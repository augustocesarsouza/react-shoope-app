import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import SvgArrowLeft from '../../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';

const FleshOfferEveryDayAndHours = () => {
  const [numberContainer, setNumberContainer] = useState(1);
  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);

  const onClickContainerEachSchdelu = (numberContainer: number) => {
    setNumberContainer(numberContainer);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scrollElement = document.querySelector('.carousel-custom-flesh-offer-and-hours');
    const containerLeft: HTMLElement | null = document.querySelector(
      '.container-arrow-left-flesh-offer-and-hours'
    );
    const containerRight: HTMLElement | null = document.querySelector(
      '.container-arrow-right-flesh-offer-and-hours'
    );

    const scrollLeft = () => scrollElement?.scrollBy({ left: -600, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 600, behavior: 'smooth' });

    const updateArrowsVisibility = () => {
      if (scrollElement) {
        let maxScrollLeft = scrollElement.scrollWidth - scrollElement.clientWidth;

        if (maxScrollLeft === 0) {
          maxScrollLeft = 10;
        }

        containerLeft!.style.display = scrollElement.scrollLeft > 0 ? 'flex' : 'none';
        containerRight!.style.display = scrollElement.scrollLeft >= maxScrollLeft ? 'none' : 'flex';
      }
    };

    containerLeft?.addEventListener('click', scrollLeft);
    containerRight?.addEventListener('click', scrollRight);
    scrollElement?.addEventListener('scroll', updateArrowsVisibility);
    window.addEventListener('resize', updateArrowsVisibility);

    updateArrowsVisibility();
  }, []);

  return (
    <Styled.ContainerFleshOfferEveryDay>
      <Styled.ContainerFleshOfferImg>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730896707/flash-offer-img/br-11134004-7r98o-m1wyzuu42c4138_vzsoej.png"
          alt="Flesh Offer Everyday"
        />
      </Styled.ContainerFleshOfferImg>
      <Styled.ContainerhoursFleshOfferMain>
        <Styled.ContainerArrowLeft className="container-arrow-left-flesh-offer-and-hours">
          <Styled.Container ref={RefContainerArrowLeft}>
            <SvgArrowLeft />
          </Styled.Container>
        </Styled.ContainerArrowLeft>
        <Styled.ContainerhoursFleshOffer className="carousel-custom-flesh-offer-and-hours">
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 1}
            onClick={() => onClickContainerEachSchdelu(1)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>em andamento</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 2}
            onClick={() => onClickContainerEachSchdelu(2)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 3}
            onClick={() => onClickContainerEachSchdelu(3)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 4}
            onClick={() => onClickContainerEachSchdelu(4)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 5}
            onClick={() => onClickContainerEachSchdelu(5)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 6}
            onClick={() => onClickContainerEachSchdelu(6)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 7}
            onClick={() => onClickContainerEachSchdelu(7)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
          <Styled.ContainerEachSchedule
            $whatWasItClicked={numberContainer === 8}
            onClick={() => onClickContainerEachSchdelu(8)}
          >
            <Styled.H1>05:00</Styled.H1>
            <Styled.Span>Em Breve</Styled.Span>
          </Styled.ContainerEachSchedule>
        </Styled.ContainerhoursFleshOffer>
        <Styled.ContainerArrowRight className="container-arrow-right-flesh-offer-and-hours">
          <Styled.Container ref={RefContainerArrowRight}>
            <SvgArrowRight />
          </Styled.Container>
        </Styled.ContainerArrowRight>
      </Styled.ContainerhoursFleshOfferMain>
    </Styled.ContainerFleshOfferEveryDay>
  );
};

export default FleshOfferEveryDayAndHours;
