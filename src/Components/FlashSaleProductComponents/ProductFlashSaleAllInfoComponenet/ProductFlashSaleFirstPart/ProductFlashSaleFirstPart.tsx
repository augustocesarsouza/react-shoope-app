import { useEffect, useRef, useState } from 'react';
import SvgArrowRight from '../../../Svg/SvgArrowRight/SvgArrowRight';
import * as Styled from './styled';
import HeartRed from '../../../Svg/HeartRed/HeartRed';
import {
  GetFlashSaleProductProps,
  ProductOptionImageProps,
} from '../../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';

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

  const [indexImg, setIndexImg] = useState(0);
  const [productImgMain, setProductImgMain] = useState<ProductOptionImageProps | null>(null);

  const onClickImgsProductPartBottom = () => {};

  const onMouseEnterImgProductBottom = (i: number, productImg: ProductOptionImageProps) => {
    setIndexImg(i);
    setProductImgMain(productImg);
  };

  const onMouseLeaveImgProductBottom = () => {};

  const [clickImgProduct, setClickImgProduct] = useState<ProductOptionImageProps | null>(null);

  const onClickClickImgProduct = (productImgMain: ProductOptionImageProps) => {
    setClickImgProduct(productImgMain);
  };

  useEffect(() => {
    const obj1ProductMain = {
      id: getFlashSaleProduct.productsOfferFlashDTO.id,
      imageUrl: getFlashSaleProduct.productsOfferFlashDTO.imgProduct,
      imgAlt: getFlashSaleProduct.productsOfferFlashDTO.altValue,
      optionType: '',
      titleOptionType: '',
    };

    setProductImgMain(obj1ProductMain);
  }, [getFlashSaleProduct]);

  // CONTINUAR FAZER DEPOIS DE CLICAR COLOCARR TODOS AS IMAGEN E A IMAGEM QUE FOI CLIADO
  return (
    <Styled.ContainerImageProductAndAllImagePartBottom>
      <Styled.ContainerImageProduct>
        {productImgMain && (
          <Styled.Img
            src={productImgMain.imageUrl}
            alt={productImgMain.imgAlt}
            onClick={() => onClickClickImgProduct(productImgMain)}
          />
        )}

        {getFlashSaleProduct.productsOfferFlashDTO.imgPartBottom && (
          <Styled.Img
            src={getFlashSaleProduct.productsOfferFlashDTO.imgPartBottom}
            alt="img-part-bottom-floating"
          />
        )}
      </Styled.ContainerImageProduct>

      {clickImgProduct && (
        <Styled.ContainerModalAfterClicked>
          <Styled.Container>
            <Styled.H1>Flutando</Styled.H1>
          </Styled.Container>
        </Styled.ContainerModalAfterClicked>
      )}

      {productOptionImageAll && (
        <Styled.ContainerCaroselProductFlashSaleAllInfo>
          <Styled.ContainerArrowLeft className="container-arrow-left-container-all-image-part-bottom">
            <Styled.Container ref={RefContainerArrowLeft}>
              <SvgArrowRight />
            </Styled.Container>
          </Styled.ContainerArrowLeft>
          <Styled.ContainerAllImagePartBottom className="carousel-custom-container-all-image-part-bottom">
            {productOptionImageAll.map((productImg, i) => (
              <Styled.Container key={productImg.id}>
                {productImg.optionType.length <= 0 && (
                  <Styled.ImgProductBottom
                    src={productImg.imageUrl}
                    alt={productImg.imgAlt}
                    $indexImg={indexImg}
                    $index={i}
                    onClick={() => onClickImgsProductPartBottom()}
                    onMouseEnter={() => onMouseEnterImgProductBottom(i, productImg)}
                    onMouseLeave={() => onMouseLeaveImgProductBottom()}
                  />
                )}
              </Styled.Container>
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
