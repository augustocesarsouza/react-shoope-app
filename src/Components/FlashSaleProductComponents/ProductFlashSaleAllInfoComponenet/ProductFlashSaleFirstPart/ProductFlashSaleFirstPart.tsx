import { useEffect, useRef, useState } from 'react';
import SvgArrowRight from '../../../Svg/SvgArrowRight/SvgArrowRight';
import * as Styled from './styled';
import HeartRed from '../../../Svg/HeartRed/HeartRed';
import {
  GetFlashSaleProductProps,
  ProductOptionImageProps,
} from '../../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

interface ProductFlashSaleFirstPartProps {
  productOptionImageAll: ProductOptionImageProps[];
  getFlashSaleProduct: GetFlashSaleProductProps;
  whichColorWasClicked: ProductOptionImageProps | null;
  onMouseEnterMouseLeaveColor: ProductOptionImageProps | null;
  backToImageBelowMainImage: boolean;
}

const ProductFlashSaleFirstPart = ({
  productOptionImageAll,
  getFlashSaleProduct,
  whichColorWasClicked,
  onMouseEnterMouseLeaveColor,
  backToImageBelowMainImage,
}: ProductFlashSaleFirstPartProps) => {
  const RefContainerArrowLeft = useRef<HTMLDivElement | null>(null);
  const RefContainerArrowRight = useRef<HTMLDivElement | null>(null);
  const [clickImgProduct, setClickImgProduct] = useState<ProductOptionImageProps | null>(null);
  const [newProductOptionImageAll, setNewProductOptionImageAll] = useState<
    ProductOptionImageProps[] | null
  >(null);

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

  const onClickContainerArrowLeftAfterClicked = () => {
    let whichArrayIsGoingUse = [];

    if (newProductOptionImageAll) {
      whichArrayIsGoingUse = newProductOptionImageAll;
    } else {
      whichArrayIsGoingUse = productOptionImageAll;
    }

    const index = whichArrayIsGoingUse.findIndex((el) => el.id === clickImgProduct?.id);

    // window.open(nextObj?.imageUrl, '_blank');

    if (index === 0) {
      setClickImgProduct(whichArrayIsGoingUse[whichArrayIsGoingUse.length - 1]);
      return;
    }

    for (let i = index; i < whichArrayIsGoingUse.length; i--) {
      const element = whichArrayIsGoingUse[i - 1];

      if (element.optionType.length <= 0) {
        setClickImgProduct(element);
        break;
      }
    }
  };

  const onClickContainerArrowRightAfterClicked = () => {
    let whichArrayIsGoingUse = [];

    if (newProductOptionImageAll) {
      whichArrayIsGoingUse = newProductOptionImageAll;
    } else {
      whichArrayIsGoingUse = productOptionImageAll;
    }

    const index = whichArrayIsGoingUse.findIndex((el) => el.id === clickImgProduct?.id);

    if (index === whichArrayIsGoingUse.length - 1) {
      setClickImgProduct(whichArrayIsGoingUse[0]);
      return;
    }

    for (let i = index; i < whichArrayIsGoingUse.length; i++) {
      const element = whichArrayIsGoingUse[i + 1];

      if (element.optionType.length <= 0) {
        setClickImgProduct(element);
        break;
      }
    }
  };

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

  const onClickImgsProductPartBottom = (productImg: ProductOptionImageProps) => {
    setNewProductOptionImageAll(null);
    setClickImgProduct(productImg);
    document.body.style.overflowY = 'hidden';
  };

  const onMouseEnterImgProductBottom = (i: number, productImg: ProductOptionImageProps) => {
    setIndexImg(i);
    setProductImgMain(productImg);
  };

  const onMouseLeaveImgProductBottom = () => {};

  // window.open(productImgMain.imageUrl, '_blank');
  const onClickClickImgProduct = (productImgMain: ProductOptionImageProps | null) => {
    if (productImgMain === null) return;

    if (productImgMain.optionType.length <= 0) {
      setNewProductOptionImageAll(null);
    }

    if (productImgMain.optionType.length > 0) {
      const uuidProduct = uuidv4();

      let productClicked = {
        id: uuidProduct,
        imageUrl: productImgMain.imageUrl,
        imgAlt: productImgMain.imgAlt,
        optionType: '',
        titleOptionType: productImgMain.titleOptionType,
      };
      productClicked.id = uuidProduct;

      const array = [...productOptionImageAll];
      array.push(productClicked);
      setClickImgProduct(productClicked);
      setNewProductOptionImageAll(array);
      return;
    }

    setClickImgProduct(productImgMain);
    document.body.style.overflowY = 'hidden';
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

  const onClickImgAfterClicked = (el: ProductOptionImageProps) => {
    setClickImgProduct(el);
  };

  const onClickExitContainerModal = () => {
    setClickImgProduct(null);
    document.body.style.overflowY = 'auto';
  };

  useEffect(() => {
    if (backToImageBelowMainImage) {
      setProductImgMain(productOptionImageAll[indexImg]);
    }

    if (whichColorWasClicked === null) return;
    setProductImgMain(whichColorWasClicked);
  }, [whichColorWasClicked, backToImageBelowMainImage]);

  return (
    <Styled.ContainerImageProductAndAllImagePartBottom>
      <Styled.ContainerImageProduct onClick={() => onClickClickImgProduct(productImgMain)}>
        {productImgMain && onMouseEnterMouseLeaveColor === null && (
          <Styled.Img src={productImgMain.imageUrl} alt={productImgMain.imgAlt} />
        )}
        {onMouseEnterMouseLeaveColor && (
          <Styled.Img
            src={onMouseEnterMouseLeaveColor.imageUrl}
            alt={onMouseEnterMouseLeaveColor.imgAlt}
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
          <FontAwesomeIcon icon={faXmark} onClick={onClickExitContainerModal} />
          <Styled.Container>
            <Styled.ContainerFirstImgThatWasClicked>
              <Styled.ContainerArrowLeftAfterClicked
                onClick={onClickContainerArrowLeftAfterClicked}
              >
                <Styled.Container>
                  <SvgArrowRight />
                </Styled.Container>
              </Styled.ContainerArrowLeftAfterClicked>
              <Styled.Container>
                <Styled.Img src={clickImgProduct.imageUrl} alt={clickImgProduct.imgAlt} />
              </Styled.Container>
              <Styled.ContainerArrowRightAfterClicked
                onClick={onClickContainerArrowRightAfterClicked}
              >
                <Styled.Container>
                  <SvgArrowRight />
                </Styled.Container>
              </Styled.ContainerArrowRightAfterClicked>
            </Styled.ContainerFirstImgThatWasClicked>

            <Styled.ContainerSecondPartAllImgs>
              <Styled.H1>
                {getFlashSaleProduct.productsOfferFlashDTO.title.substring(0, 50) + '...'}
              </Styled.H1>

              <Styled.ContainerAllImgAll>
                {newProductOptionImageAll === null &&
                  productOptionImageAll.map((el) => (
                    <Styled.ContainerImgAllInnerModel
                      key={el.id}
                      $istrue={el.optionType.length <= 0}
                      $idImg={el.id}
                      $whichIdWasClciked={clickImgProduct.id}
                    >
                      <Styled.Img
                        src={el.imageUrl}
                        alt={el.imgAlt}
                        onClick={() => onClickImgAfterClicked(el)}
                      />
                    </Styled.ContainerImgAllInnerModel>
                  ))}

                {newProductOptionImageAll &&
                  newProductOptionImageAll.map((el) => (
                    <Styled.ContainerImgAllInnerModel
                      key={el.id}
                      $istrue={el.optionType.length <= 0}
                      $idImg={el.id}
                      $whichIdWasClciked={clickImgProduct.id}
                    >
                      <Styled.Img
                        src={el.imageUrl}
                        alt={el.imgAlt}
                        onClick={() => onClickImgAfterClicked(el)}
                      />
                    </Styled.ContainerImgAllInnerModel>
                  ))}
              </Styled.ContainerAllImgAll>
            </Styled.ContainerSecondPartAllImgs>
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
                    onClick={() => onClickImgsProductPartBottom(productImg)}
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
