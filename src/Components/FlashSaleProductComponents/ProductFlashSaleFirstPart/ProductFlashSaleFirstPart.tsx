import { useEffect, useRef } from 'react';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';
import * as Styled from './styled';
import HeartRed from '../../Svg/HeartRed/HeartRed';
import {
  GetFlashSaleProductProps,
  ProductOptionImageProps,
} from '../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';

interface ProductFlashSaleFirstPartProps {
  productOptionImageAll: ProductOptionImageProps[];
  getFlashSaleProduct: GetFlashSaleProductProps;
}

const ProductFlashSaleFirstPart = ({
  productOptionImageAll,
  getFlashSaleProduct,
}: ProductFlashSaleFirstPartProps) => {
  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (productOptionImageAll.length <= 0) return;

    const scrollElement = document.querySelector(
      '.carousel-custom-container-all-image-part-bottom'
    );
    const containerLeft: HTMLElement | null = document.querySelector(
      '.container-arrow-left-container-all-image-part-bottom'
    );
    const containerRight: HTMLElement | null = document.querySelector(
      '.container-arrow-right-container-all-image-part-bottom'
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
  }, [productOptionImageAll]);

  const funcFormatFavoriteQuantity = (favoriteQuantity: number) => {
    if (favoriteQuantity >= 1000) {
      // Divide por 1000 e formata com uma casa decimal

      const formattedQuantity = (favoriteQuantity / 1000).toFixed(1).replace('.', ',');
      return `Favoritar (${formattedQuantity}mil)`;
    } else {
      // Retorna o número sem formatação especial
      return `Favoritar (${favoriteQuantity})`;
    }
  };

  return (
    <Styled.ContainerImageProductAndAllImagePartBottom>
      <Styled.ContainerImageProduct>
        <Styled.Img
          src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
          alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
        />

        {getFlashSaleProduct.productsOfferFlashDTO.imgPartBottom && (
          <Styled.Img
            src={getFlashSaleProduct.productsOfferFlashDTO.imgPartBottom}
            alt="img-part-bottom-floating"
          />
        )}
      </Styled.ContainerImageProduct>

      {productOptionImageAll && (
        <Styled.ContainerCaroselProductFlashSaleAllInfo>
          <Styled.ContainerArrowLeft className="container-arrow-left-container-all-image-part-bottom">
            <Styled.Container ref={RefContainerArrowLeft}>
              <SvgArrowRight />
            </Styled.Container>
          </Styled.ContainerArrowLeft>
          <Styled.ContainerAllImagePartBottom className="carousel-custom-container-all-image-part-bottom">
            {productOptionImageAll.map((productImg) => (
              <Styled.Img key={productImg.id} src={productImg.imageUrl} alt={productImg.imgAlt} />
            ))}
          </Styled.ContainerAllImagePartBottom>
          <Styled.ContainerArrowRight className="container-arrow-right-container-all-image-part-bottom">
            <Styled.Container ref={RefContainerArrowRight}>
              <SvgArrowRight />
            </Styled.Container>
          </Styled.ContainerArrowRight>
        </Styled.ContainerCaroselProductFlashSaleAllInfo>
      )}

      <Styled.ContainerToShareMain>
        <Styled.ContainerToShare>
          <Styled.H1>Compartilhar:</Styled.H1>
          <Styled.Button></Styled.Button>
          <Styled.Button></Styled.Button>
          <Styled.Button></Styled.Button>
          <Styled.Button></Styled.Button>
        </Styled.ContainerToShare>

        <Styled.ContainerFavoriteQuantity>
          <HeartRed />

          <Styled.Span>
            {funcFormatFavoriteQuantity(getFlashSaleProduct.favoriteQuantity)}
          </Styled.Span>
        </Styled.ContainerFavoriteQuantity>
      </Styled.ContainerToShareMain>
    </Styled.ContainerImageProductAndAllImagePartBottom>
  );
};

export default ProductFlashSaleFirstPart;
