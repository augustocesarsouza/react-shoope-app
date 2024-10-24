import { useEffect, useRef, useState } from 'react';
import CategoryItensBar from '../CategoryItensBar/CategoryItensBar';
import HeaderBodyHomeShopee from '../HeaderBodyHomeShopee/HeaderBodyHomeShopee';
import * as Styled from './styled';
import ProductFlashInfo from '../ProductFlashInfo/ProductFlashInfo';
import FlashDealsAndCountdown from '../FlashDealsAndCountdown/FlashDealsAndCountdown';
import { Url } from '../../../Utils/Url';
import { useLocation, useNavigate } from 'react-router-dom';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import SvgArrowLeft from '../../Svg/SvgArrowLeft/SvgArrowLeft';

export interface ProductFlashDeals {
  id: string;
  imgProduct: string;
  imgProductPublicId: string;
  altValue: string;
  imgPartBottom: string;
  priceProduct: number;
  popularityPercentage: number;
  discountPercentage: number;
}

const HomeBodyMain = () => {
  const [allProductFlashDeals, setAllProductFlashDeals] = useState<ProductFlashDeals[] | null>(
    null
  );

  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    const objState = location.state;
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    const userLogged = JSON.parse(userLocalStorage);

    getProductOfferFlashAll(userLogged);
  }, []);

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
      const data: ProductFlashDeals[] = json.data;

      setAllProductFlashDeals(data);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
    }
  };

  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

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
  }, []);

  const onMouseEnterContainerAllProductFlashDeals = () => {
    let containerArrowLeft = RefContainerArrowLeft.current as HTMLElement;
    let svgArrowLeft = containerArrowLeft.firstChild as SVGElement;
    containerArrowLeft.style.padding = '15px';
    svgArrowLeft.style.width = '20px';
    svgArrowLeft.style.height = '20px';
    svgArrowLeft.style.fill = '#000000ba';

    let containerArrowRight = RefContainerArrowRight.current as HTMLElement;
    // containerArrowRight.style.boxShadow = '0px 0px 9px 13px black';
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
    // containerArrowRight.style.boxShadow = '0px 0px 9px black';
    let svgArrowRight = containerArrowRight.firstChild as SVGElement;
    containerArrowRight.style.padding = '10px';
    svgArrowRight.style.width = '14px';
    svgArrowRight.style.height = '14px';
    svgArrowRight.style.fill = '#0000008f';
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerWithForAll>
        <HeaderBodyHomeShopee />

        <CategoryItensBar />

        <Styled.ContainerFlashDealsHeaderMain>
          <FlashDealsAndCountdown hours={0} minutes={10} seconds={0} />
          <Styled.ContainerAllProductFlashDeals
            onMouseEnter={onMouseEnterContainerAllProductFlashDeals}
            onMouseLeave={onMouseLeaveContainerAllProductFlashDeals}
          >
            <Styled.ContainerArrowLeft className="container-arrow-left">
              <Styled.Container ref={RefContainerArrowLeft}>
                {/* <svg
                  className="i-arrow-custom-left"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg> */}
                <SvgArrowLeft />
              </Styled.Container>
            </Styled.ContainerArrowLeft>
            <Styled.ContainerProductImgFlashInfo className="carousel-custom">
              {allProductFlashDeals &&
                allProductFlashDeals.map((product) => (
                  <Styled.Container key={product.id}>
                    <ProductFlashInfo product={product} />
                  </Styled.Container>
                ))}
            </Styled.ContainerProductImgFlashInfo>
            <Styled.ContainerArrowRight className="container-arrow-right">
              <Styled.Container ref={RefContainerArrowRight}>
                <svg
                  className="i-arrow-custom-right"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Styled.Container>
            </Styled.ContainerArrowRight>
          </Styled.ContainerAllProductFlashDeals>
        </Styled.ContainerFlashDealsHeaderMain>
      </Styled.ContainerWithForAll>
    </Styled.ContainerMain>
  );
};

export default HomeBodyMain;
