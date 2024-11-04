import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { useNavigate } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';
import { ObjUser } from '../../../InterfaceAll/IObjUser/IObjUser';
import SvgArrowLeft from '../../../Svg/SvgArrowLeft/SvgArrowLeft';
import SvgArrowRight from '../../../Svg/SvgArrowRight/SvgArrowRight';
import ProductHighlightsInfo from '../ProductHighlightsInfo/ProductHighlightsInfo';

export interface ProductHighlightProps {
  id: string;
  title: string;
  imgProduct: string;
  imgTop: string;
  quantitySold: number;
}

interface ProductHighlightsForYouProps {
  userLogged: ObjUser;
  changeValueIsOutOfView: (value: boolean) => void;
}

const ProductHighlightsForYou = ({
  userLogged,
  changeValueIsOutOfView,
}: ProductHighlightsForYouProps) => {
  const [allProductHighlight, setAllProductHighlight] = useState<ProductHighlightProps[] | null>(
    null
  );

  const nav = useNavigate();

  useEffect(() => {
    getAllCategories(userLogged);
  }, [userLogged]);

  const getAllCategories = async (ObjUser: ObjUser | null) => {
    if (ObjUser === null) return;

    const res = await fetch(`${Url}/get-all-product-highlights`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${ObjUser.token}`,
        uid: ObjUser.id,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 200) {
      const json = await res.json();

      const data: ProductHighlightProps[] = json.data;

      setAllProductHighlight(data);
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

  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const scrollElement = document.querySelector('.carousel-custom-product-highlights');
    const containerLeft: HTMLElement | null = document.querySelector(
      '.container-arrow-left-product-highlights'
    );
    const containerRight: HTMLElement | null = document.querySelector(
      '.container-arrow-right-product-highlights'
    );

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

  // const [isOutOfView, setIsOutOfView] = useState(false);
  const containerDiscoveriesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { boundingClientRect, isIntersecting } = entry;
          const isAboveViewport = boundingClientRect.bottom < 0; // Saiu para cima

          if (isAboveViewport && !isIntersecting) {
            changeValueIsOutOfView(true);
          } else if (isIntersecting) {
            changeValueIsOutOfView(false);
          }
        });
      },
      {
        threshold: 0, // Detecta quando qualquer parte da div entra ou sai da tela
      }
    );

    if (containerDiscoveriesRef.current) {
      observer.observe(containerDiscoveriesRef.current);
    }

    return () => {
      if (containerDiscoveriesRef.current) {
        observer.unobserve(containerDiscoveriesRef.current);
      }
    };
  }, []);

  return (
    <Styled.ContainerHighlightsForYou
      ref={containerDiscoveriesRef}
      onMouseEnter={onMouseEnterContainerAllProductFlashDeals}
      onMouseLeave={onMouseLeaveContainerAllProductFlashDeals}
    >
      <Styled.H1>Destaques para você</Styled.H1>
      <Styled.ContainerArrowLeft className="container-arrow-left-product-highlights">
        <Styled.Container ref={RefContainerArrowLeft}>
          <SvgArrowLeft />
        </Styled.Container>
      </Styled.ContainerArrowLeft>
      <Styled.ContainerProductHighlight
        ref={imageContainerRef}
        className="carousel-custom-product-highlights"
      >
        {allProductHighlight &&
          allProductHighlight.map((product) => (
            <ProductHighlightsInfo key={product.id} product={product} />
          ))}
      </Styled.ContainerProductHighlight>
      <Styled.ContainerArrowRight className="container-arrow-right-product-highlights">
        <Styled.Container ref={RefContainerArrowRight}>
          <SvgArrowRight />
        </Styled.Container>
      </Styled.ContainerArrowRight>
    </Styled.ContainerHighlightsForYou>
  );
};

export default ProductHighlightsForYou;
