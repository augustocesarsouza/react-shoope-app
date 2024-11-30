import { useEffect, useRef, useState } from 'react';
import SvgArrowLeft from '../../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';
import FlashDealsAndCountdown from '../FlashDealsAndCountdown/FlashDealsAndCountdown';
import ProductFlashInfo from '../ProductFlashInfo/ProductFlashInfo';
import * as Styled from './styled';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import { IProductFlashDeals } from '../../InterfaceAll/IProduct/IProductFlashDeals/IProductFlashDeals';
import { ObjTime } from '../../FlashSaleComponents/FleshOfferEveryDayAndHours/FleshOfferEveryDayAndHours';
import { FlashSaleCountdownFunc } from '../../FlashSaleFunctions/FlashSaleCountdownFunc';
import CryptoJS from 'crypto-js';

interface ProductFlashDealsProps {
  userLogged: ObjUser;
}

export interface ObjTimeFleshOffer {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface TimeEndPromotionFleshOffer {
  timeEnd: string;
}

const ProductFlashDeals = ({ userLogged }: ProductFlashDealsProps) => {
  const [allProductFlashDeals, setAllProductFlashDeals] = useState<IProductFlashDeals[] | null>(
    null
  );

  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (typeof document === 'undefined') return;

    // const savedCountdown = localStorage.getItem('countdown');
    let savedCountdown = null;

    if (savedCountdown) {
      // aqui acho que tem que validar pegar o countdown e pegar os proximos itens tipo da proximas hora "5horas" "9horas" "11horas"
    } else {
      GetProductOfferFlashTimeend(userLogged);
    }

    getProductOfferFlashAll(userLogged);

    const scrollElement = document.querySelector('.carousel-custom');
    const containerLeft: HTMLElement | null = document.querySelector('.container-arrow-left');
    const containerRight: HTMLElement | null = document.querySelector('.container-arrow-right');

    const scrollLeft = () => scrollElement?.scrollBy({ left: -1000, behavior: 'smooth' });
    const scrollRight = () => scrollElement?.scrollBy({ left: 1000, behavior: 'smooth' });

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
  }, [userLogged]);

  const onMouseEnterContainerAllProductFlashDeals = () => {
    let containerArrowLeft = RefContainerArrowLeft.current as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    containerArrowLeft.style.padding = '15px';
    svgArrowLeft.style.width = '20px';
    svgArrowLeft.style.height = '20px';
    svgArrowLeft.style.fill = '#000000ba';

    let containerArrowRight = RefContainerArrowRight.current as HTMLElement;
    let svgArrowRight = containerArrowRight.firstChild as SVGElement;
    containerArrowRight.style.padding = '15px';
    svgArrowRight.style.width = '20px';
    svgArrowRight.style.height = '20px';
    svgArrowRight.style.fill = '#000000ba';
  };

  const onMouseLeaveContainerAllProductFlashDeals = () => {
    let containerArrowLeft = RefContainerArrowLeft.current as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    containerArrowLeft.style.padding = '10px';
    svgArrowLeft.style.width = '14px';
    svgArrowLeft.style.height = '14px';
    svgArrowLeft.style.fill = '#0000008f';

    let containerArrowRight = RefContainerArrowRight.current as HTMLElement;
    let svgArrowRight = containerArrowRight.firstChild as SVGElement;
    containerArrowRight.style.padding = '10px';
    svgArrowRight.style.width = '14px';
    svgArrowRight.style.height = '14px';
    svgArrowRight.style.fill = '#0000008f';
  };

  const getProductOfferFlashAll = async (user: ObjUser) => {
    const res = await fetch(`${Url}/get-product-offer-flash-all`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        uid: user.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      const data: IProductFlashDeals[] = json.data;

      setAllProductFlashDeals(data);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  const [objTimeFlashDeals, setObjTimeFlashDeals] = useState<ObjTimeFleshOffer | null>(null);

  const GetProductOfferFlashTimeend = async (user: ObjUser) => {
    const res = await fetch(`${Url}/get-product-offer-flash-timeend/${user.id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`,
        uid: user.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();
      let dataTime: TimeEndPromotionFleshOffer = json.data;

      // functionGetTheValueTimeFleshOffer(dataTime.timeEnd, user);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  // const functionGetTheValueTimeFleshOffer = (timeEnd: string, userLogged: ObjUser) => {
  //   const targetDateTime = new Date(timeEnd);
  //   const now = new Date();

  //   const diffInMilliseconds = targetDateTime.getTime() - now.getTime();

  //   const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

  //   // const days = Math.floor(diffInSeconds / (24 * 3600));
  //   const hours = Math.floor((diffInSeconds % (24 * 3600)) / 3600);
  //   const minutes = Math.floor((diffInSeconds % 3600) / 60);
  //   const seconds = diffInSeconds % 60;

  //   if (seconds < 0) {
  //     // AQUI VENCE O "TIMEEND" PROMOTIONFLESHOFFER -Aqui da para pegar novos Product Flesh Offer
  //     GetProductOfferFlashTimeend(userLogged);
  //     return;
  //   }

  //   const obj: ObjTimeFleshOffer = {
  //     hours,
  //     minutes,
  //     seconds,
  //   };

  //   setObjTimeFlashDeals(obj);
  // };

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

    functionGetTheValueTimeFleshOffer(objsHoursFleshOffersFilter[1].time);
  }, []);

  const functionGetTheValueTimeFleshOffer = (time: Date) => {
    const secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;

    if (secretKey === undefined || time === null) return;

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(time), secretKey).toString();
    localStorage.setItem('countdowntime', encrypted);

    let flashSaleCountdown = FlashSaleCountdownFunc(time);

    setObjTimeFlashDeals(flashSaleCountdown);
  };

  return (
    <Styled.ContainerFlashDealsHeaderMain>
      {objTimeFlashDeals && (
        <FlashDealsAndCountdown
          hours={objTimeFlashDeals.hours}
          minutes={objTimeFlashDeals.minutes}
          seconds={objTimeFlashDeals.seconds}
        />
      )}

      <Styled.ContainerAllProductFlashDeals
        onMouseEnter={onMouseEnterContainerAllProductFlashDeals}
        onMouseLeave={onMouseLeaveContainerAllProductFlashDeals}
      >
        <Styled.ContainerArrowLeft className="container-arrow-left">
          <Styled.Container ref={RefContainerArrowLeft}>
            <SvgArrowLeft />
          </Styled.Container>
        </Styled.ContainerArrowLeft>
        <Styled.ContainerProductImgFlashInfo className="carousel-custom">
          {allProductFlashDeals &&
            allProductFlashDeals.map((product) => (
              <ProductFlashInfo key={product.id} product={product} userLogged={userLogged} />
            ))}
        </Styled.ContainerProductImgFlashInfo>
        <Styled.ContainerArrowRight className="container-arrow-right">
          <Styled.Container ref={RefContainerArrowRight}>
            <SvgArrowRight />
          </Styled.Container>
        </Styled.ContainerArrowRight>
      </Styled.ContainerAllProductFlashDeals>
    </Styled.ContainerFlashDealsHeaderMain>
  );
};

export default ProductFlashDeals;
