import { useEffect, useRef, useState } from 'react';
import SvgArrowLeft from '../../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';
import FlashDealsAndCountdown from '../FlashDealsAndCountdown/FlashDealsAndCountdown';
import ProductFlashInfo from '../ProductFlashInfo/ProductFlashInfo';
import * as Styled from './styled';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';

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

interface ProductFlashDealsProps {
  userLogged: ObjUser;
}

const ProductFlashDeals = ({ userLogged }: ProductFlashDealsProps) => {
  const [allProductFlashDeals, setAllProductFlashDeals] = useState<ProductFlashDeals[] | null>(
    null
  );

  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (typeof document === 'undefined') return;

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

  return (
    <Styled.ContainerFlashDealsHeaderMain>
      <FlashDealsAndCountdown hours={0} minutes={10} seconds={0} />
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
              <Styled.Container key={product.id}>
                <ProductFlashInfo product={product} />
              </Styled.Container>
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
