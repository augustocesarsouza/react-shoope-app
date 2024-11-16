import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';
import { useNavigate } from 'react-router-dom';

interface FleshOfferEveryDayAndHoursProps {
  // functionGetTheValueTimeFleshOffer: (timeEnd: string, userLogged: ObjUser) => void;
  functionGetTheValueTimeFleshOffer: (hours: number, minutes: number, seconds: number) => void;
  getAllHoursFleshOffers: (allHoursFleshOffers: ObjTime) => void;
  getPassedContainerLightningOffer: (value: boolean) => void;
}

export interface ObjTime {
  time: Date;
  inProgress: boolean;
}

export interface TimeLeftProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const FleshOfferEveryDayAndHours = ({
  functionGetTheValueTimeFleshOffer,
  getAllHoursFleshOffers,
  getPassedContainerLightningOffer,
}: FleshOfferEveryDayAndHoursProps) => {
  const [numberContainer, setNumberContainer] = useState(0);
  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);
  const [allHoursFleshOffers, setAllHoursFleshOffers] = useState<ObjTime[]>([]);
  const nav = useNavigate();
  // const [hourPresent, setHourPresent] = useState('');

  // const [timeLeft, setTimeLeft] = useState<TimeLeftProps>();

  const onClickContainerEachSchdelu = (numberContainer: number, obj: ObjTime) => {
    setNumberContainer(numberContainer);
    getAllHoursFleshOffers(obj);
  };

  useEffect(() => {
    if (typeof document === 'undefined') return;

    let dateNow = new Date();

    const newDate1 = new Date();
    newDate1.setHours(5, 0, 0, 0);

    const newDate2 = new Date();
    newDate2.setHours(9, 0, 0, 0);

    const newDate3 = new Date();
    newDate3.setHours(11, 0, 0, 0);

    const newDate4 = new Date();
    newDate4.setHours(13, 0, 0, 0);

    const newDate5 = new Date();
    newDate5.setHours(15, 0, 0, 0);

    const newDate6 = new Date();
    newDate6.setHours(17, 0, 0, 0);

    const newDate7 = new Date();
    newDate7.setHours(19, 0, 0, 0);

    const newDate8 = new Date();
    newDate8.setHours(21, 0, 0, 0);

    const newDate9 = new Date();
    newDate9.setHours(23, 0, 0, 0);

    // const newDate10 = new Date();
    // newDate10.setDate(dayToday + 1);
    // newDate10.setHours(1, 0, 0, 0);

    // const newDate11 = new Date();
    // newDate11.setDate(dayToday + 1);
    // newDate11.setHours(3, 0, 0, 0);

    const objHours1 = {
      time: newDate1,
      inProgress: false,
    };

    const objHours2 = {
      time: newDate2,
      inProgress: false,
    };

    const objHours3 = {
      time: newDate3,
      inProgress: false,
    };

    const objHours4 = {
      time: newDate4,
      inProgress: false,
    };

    const objHours5 = {
      time: newDate5,
      inProgress: false,
    };

    const objHours6 = {
      time: newDate6,
      inProgress: false,
    };

    const objHours7 = {
      time: newDate7,
      inProgress: false,
    };

    const objHours8 = {
      time: newDate8,
      inProgress: false,
    };

    const objHours9 = {
      time: newDate9,
      inProgress: false,
    };

    // const objHours10 = {
    //   time: newDate10,
    //   inProgress: false,
    // };

    // const objHours11 = {
    //   time: newDate11,
    //   inProgress: false,
    // };

    //05:00 / 09:00 / 10:59, 11:00 12:59, 13:00  14:59, 15:00 16:59, 17:00 18:59, 19:00 20:59, 21:00, 23:00

    const objsHoursFleshOffers = [
      objHours1,
      objHours2,
      objHours3,
      objHours4,
      objHours5,
      objHours6,
      objHours7,
      objHours8,
      objHours9,
      // objHours10,
      // objHours11,
    ];

    // dateNow.setHours(dateNow.getHours() + 8);
    // dateNow = new Date('Fri Nov 08 2024 08:59:55 GMT-0400 (Horário Padrão do Amazonas)');
    // console.log(dateNow);

    // OQUE FALTA É APENAS ATUALIZAR AS DATAS QUE FICAR VENCIDADES NÃO CONSEGUI FAZER

    // Encontra o índice do primeiro horário após o horário atual
    let startIndex = objsHoursFleshOffers.findIndex(
      (obj) => obj.time.getTime() >= dateNow.getTime()
    );

    // Se o horário atual não tiver horário futuro correspondente, comece do primeiro horário
    if (startIndex === -1) {
      startIndex = 0;
    }

    // Ajusta para incluir o horário anterior ao índice encontrado
    startIndex = (startIndex - 1 + objsHoursFleshOffers.length) % objsHoursFleshOffers.length;

    let objsHoursFleshOffersFilter: ObjTime[] = [];

    // Adiciona 8 horários sequenciais, começando do anterior ao horário mais próximo ao atual
    for (let i = 0; i < 8; i++) {
      const index = (startIndex + i) % objsHoursFleshOffers.length;
      objsHoursFleshOffersFilter.push(objsHoursFleshOffers[index]);
    }

    objsHoursFleshOffersFilter[0].inProgress = true;

    const diffInMilliseconds = objsHoursFleshOffersFilter[1].time.getTime() - dateNow.getTime(); // diferença em milissegundos
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60)); // converter para minutos
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;
    const seconds = diffInSeconds % 60;

    functionGetTheValueTimeFleshOffer(hours, minutes, seconds);

    // console.log(objsHoursFleshOffersFilter);
    setAllHoursFleshOffers(objsHoursFleshOffersFilter);

    let elementInProgress: ObjTime | null = null;

    objsHoursFleshOffersFilter.forEach((el) => {
      if (el.inProgress) {
        elementInProgress = el;
      }
    });

    if (elementInProgress) {
      getAllHoursFleshOffers(elementInProgress);
    }

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

  const containerFleshOfferRef = useRef<HTMLDivElement | null>(null);
  const containerFleshOfferRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      timer = setTimeout(() => {
        const containerDiscoveriesOfTheDayFalse = document.querySelector(
          '.container-discoveries-of-the-day-false'
        ) as HTMLDivElement;
        const containerFlashDealsAboutPosition = document.querySelector(
          '.container-flash-deals-about-position'
        ) as HTMLDivElement;

        if (!containerFleshOfferRef.current) return;

        const rect = containerFleshOfferRef.current.getBoundingClientRect();

        const isAboveViewport = rect.top < 0;

        if (isAboveViewport) {
          // Estado verdadeiro: fixa o elemento e ajusta os estilos
          containerDiscoveriesOfTheDayFalse.style.display = 'flex';
          containerFlashDealsAboutPosition.style.position = 'fixed';
          containerFlashDealsAboutPosition.style.width = '1200px';
          containerFlashDealsAboutPosition.style.opacity = '0.9';
        } else {
          // Estado falso: volta ao estilo original
          containerFlashDealsAboutPosition.style.position = 'relative';
          containerDiscoveriesOfTheDayFalse.style.display = 'none';
          containerFlashDealsAboutPosition.style.width = '100%';
          containerFlashDealsAboutPosition.style.opacity = '1';
        }
      }, 10);
    };
    // Adiciona o evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Checa inicialmente
    handleScroll();

    return () => {
      // Remove o evento de scroll
      window.removeEventListener('scroll', handleScroll);

      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, []);

  return (
    <Styled.ContainerFleshOfferEveryDay ref={containerFleshOfferRef}>
      <Styled.ContainerFleshOfferImg ref={containerFleshOfferRef2}>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730896707/flash-offer-img/br-11134004-7r98o-m1wyzuu42c4138_vzsoej.png"
          alt="Flesh Offer Everyday"
        />
      </Styled.ContainerFleshOfferImg>
      <Styled.ContainerhoursFleshOfferMain>
        <Styled.ContainerArrowLeft className="container-arrow-left-flesh-offer-and-hours">
          <Styled.Container ref={RefContainerArrowLeft}>
            <SvgArrowRight />
          </Styled.Container>
        </Styled.ContainerArrowLeft>
        <Styled.ContainerhoursFleshOffer className="carousel-custom-flesh-offer-and-hours">
          {allHoursFleshOffers.map((obj, i) => (
            <Styled.ContainerEachSchedule
              key={i}
              $whatWasItClicked={numberContainer === i}
              onClick={() => onClickContainerEachSchdelu(i, obj)}
            >
              <Styled.H1>
                {obj.time.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </Styled.H1>
              {obj.inProgress ? (
                <Styled.Span>em andamento</Styled.Span>
              ) : (
                <Styled.Span>Em Breve</Styled.Span>
              )}
            </Styled.ContainerEachSchedule>
          ))}
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
