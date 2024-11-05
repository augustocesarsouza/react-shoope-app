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
import CryptoJS from 'crypto-js';

interface ProductFlashDealsProps {
  userLogged: ObjUser;
}

interface ObjTimeFleshOffer {
  hours: number;
  minutes: number;
  seconds: number;
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

    const savedCountdown = localStorage.getItem('countdown');

    if (savedCountdown) {
      let secretKey = import.meta.env.VITE__APP_SECRET_KEY;

      if (secretKey === undefined) {
        return;
      }

      try {
        const bytes = CryptoJS.AES.decrypt(savedCountdown, secretKey);
        const decryptedString = bytes.toString(CryptoJS.enc.Utf8);

        const decryptedData = JSON.parse(decryptedString);
        const remainingTime = decryptedData.endTime - Date.now();

        if (remainingTime < 0) {
          saveCountdownState();
          return;
        }

        convertMilliseconds(remainingTime);
      } catch (error) {
        console.error('Erro ao converter os dados descriptografados:', error);
      }
    } else {
      saveCountdownState();
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

  const saveCountdownState = () =>
    // h: number, m: number, s: number
    {
      const secretKey = import.meta.env.VITE__APP_SECRET_KEY;

      if (secretKey === undefined) return;
      const countdownDuration = 60 * 60 * 1000;

      const data = { endTime: Date.now() + countdownDuration };
      const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();

      localStorage.setItem('countdown', encrypted);
    };

  const [objTimeFlashDeals, setObjTimeFlashDeals] = useState<ObjTimeFleshOffer | null>(null);

  const convertMilliseconds = (ms: number) => {
    let hours = Math.floor(ms / 3600000); // 1 hora = 3600000 ms
    let minutes = Math.floor((ms % 3600000) / 60000); // 1 minuto = 60000 ms
    let seconds = Math.floor((ms % 60000) / 1000); // 1 segundo = 1000 ms

    const obj: ObjTimeFleshOffer = {
      hours,
      minutes,
      seconds,
    };

    setObjTimeFlashDeals(obj);
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
