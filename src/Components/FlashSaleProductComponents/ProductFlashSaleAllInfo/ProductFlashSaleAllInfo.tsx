import { useRef, useState, useEffect } from 'react';
import * as Styled from './styled';
import SvgQuestionMark from '../../Svg/SvgQuestionMark/SvgQuestionMark';
import ShippingSvg from '../../Svg/ShippingSvg/ShippingSvg';
import SvgArrowTop from '../../Svg/SvgArrowTop/SvgArrowTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MinusSignSvg from '../../Svg/MinusSignSvg/MinusSignSvg';
import SumSignSvg from '../../Svg/SumSignSvg/SumSignSvg';
import CartBuySvg from '../../Svg/CartBuySvg/CartBuySvg';
import HeartRed from '../../Svg/HeartRed/HeartRed';
import { Url } from '../../../Utils/Url';
import { useNavigate } from 'react-router-dom';
import SvgArrowRight from '../../Svg/SvgArrowRight/SvgArrowRight';

export interface GetFlashSaleProductProps {
  id: string;
  productsOfferFlashDTO: ProductsOfferFlashDTOProps;
  productReviewsRate: number;
  quantitySold: number;
  favoriteQuantity: number;
  quantityAvaliation: number;
  coins: number;
  creditCard: string;
  voltage: string;
  quantityPiece: number;
  productHaveInsurance: boolean;
}

interface ProductsOfferFlashDTOProps {
  altValue: string;
  discountPercentage: number;
  imgPartBottom: string;
  imgProduct: string;
  priceProduct: number;
  title: string;
}

interface ProductFlashSaleAllInfoProps {
  getFlashSaleProduct: GetFlashSaleProductProps;
  idProductClicked: string;
}

export interface ProductOptionImageProps {
  id: string;
  imageUrl: string;
  imgAlt: string;
  optionType: string;
  titleOptionType: string;
}

const ProductFlashSaleAllInfo = ({
  getFlashSaleProduct,
  idProductClicked,
}: ProductFlashSaleAllInfoProps) => {
  const [whichDivVoltagensWasClicked, setWhichDivVoltagensWasClicked] = useState(0);
  const nav = useNavigate();

  const [quantityStarRender] = useState([0, 1, 2, 3, 4]);
  const [quantityParts] = useState(120);
  const [allVoltage, setAllVoltage] = useState<string[] | null>(null);

  useEffect(() => {
    if (getFlashSaleProduct.voltage) {
      let allVoltageSplit = getFlashSaleProduct.voltage.split(',');

      setAllVoltage(allVoltageSplit);
    }
    // FALTA MAIS ALGUMAS IMAGENS DO MINECRAFT

    getFlashSaleProductByProductFlashSaleId(getFlashSaleProduct);
  }, [getFlashSaleProduct]);

  const [fifthHalfStar, setFifthHalfStar] = useState(false);
  const [fourthHalfStar, setFourthHalfStar] = useState(false);
  const [thirdHalfStar, setThirdHalfStar] = useState(false);
  const [secondHalfStar, setSecondHalfStar] = useState(false);
  const [firstHalfStar, setFirstHalfStar] = useState(false);
  const [allStarWithoutFill, setAllStarWithoutFill] = useState(false);

  const getFlashSaleProductByProductFlashSaleId = async (
    getFlashSaleProduct: GetFlashSaleProductProps
  ) => {
    let fifthHalfStar = false;
    let fourthHalfStar = false;
    let thirdHalfStar = false;
    let secondHalfStar = false;
    let firstHalfStar = false;
    let allStarWithoutFill = false;

    // let productReviewsRate = 3.7;
    // setProductReviewsRate(productReviewsRate);

    if (
      getFlashSaleProduct.productReviewsRate >= 4.1 &&
      getFlashSaleProduct.productReviewsRate <= 4.5
    ) {
      fifthHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 3.6 &&
      getFlashSaleProduct.productReviewsRate <= 4.0
    ) {
      fourthHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 3.1 &&
      getFlashSaleProduct.productReviewsRate <= 3.5
    ) {
      thirdHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 2.6 &&
      getFlashSaleProduct.productReviewsRate <= 3.0
    ) {
      secondHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 2.1 &&
      getFlashSaleProduct.productReviewsRate <= 2.5
    ) {
      firstHalfStar = true;
    }

    if (getFlashSaleProduct.productReviewsRate <= 2.0) {
      allStarWithoutFill = true;
    }

    setFifthHalfStar(fifthHalfStar);
    setFourthHalfStar(fourthHalfStar);
    setThirdHalfStar(thirdHalfStar);
    setSecondHalfStar(secondHalfStar);
    setFirstHalfStar(firstHalfStar);
    setAllStarWithoutFill(allStarWithoutFill);
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

  const funcFormatTitleProduct = (productsOfferFlashTitle: string) => {
    let stringTitle = '';

    if (productsOfferFlashTitle.length < 120) {
      stringTitle = productsOfferFlashTitle;
    } else {
      stringTitle = productsOfferFlashTitle.slice(0, 120) + '...';
    }

    return stringTitle;
  };

  const funcFormatAvaliationQuantity = (avaliationQuantity: number) => {
    avaliationQuantity = 1000;
    if (avaliationQuantity >= 1000) {
      // Divide por 1000 e formata com uma casa decimal

      const formattedQuantity = (avaliationQuantity / 1000).toFixed(1).replace('.', ',');
      return `${formattedQuantity}mil`;
    } else {
      // Retorna o número sem formatação especial
      return `${avaliationQuantity}`;
    }
  };

  const functionForPriceOriginal = (productsOfferFlashDTO: ProductsOfferFlashDTOProps): string => {
    const priceOriginal =
      productsOfferFlashDTO.priceProduct / (1 - productsOfferFlashDTO.discountPercentage / 100);

    const priceOrigianl =
      'R$' +
      priceOriginal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return priceOrigianl;
  };

  const functionForPriceWithDiscount = (
    productsOfferFlashDTO: ProductsOfferFlashDTOProps
  ): string => {
    const priceOrigianl =
      'R$' +
      productsOfferFlashDTO.priceProduct.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    return priceOrigianl;
  };

  const onClickVoltagens = (whichDivVoltagensWasClicked: number) => {
    setWhichDivVoltagensWasClicked((prop) => {
      if (prop === whichDivVoltagensWasClicked) {
        return 0;
      }

      return whichDivVoltagensWasClicked;
    });
  };

  const spanPriceDiscountShipping = useRef<HTMLSpanElement | null>(null);
  const spanPriceFullShipping = useRef<HTMLSpanElement | null>(null);

  const onMouseEnterSpanFullPrice = () => {
    let spanPriceFull = spanPriceFullShipping.current;

    if (spanPriceFull === null) return;

    spanPriceFull.style.color = 'red';
  };

  const onMouseLeaveSpanFullPrice = () => {
    let spanPriceFull = spanPriceFullShipping.current;

    if (spanPriceFull === null) return;
    spanPriceFull.style.color = 'black';
  };

  const onMouseEnterSpanPriceDiscount = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let spanPriceDiscount = e.target as HTMLSpanElement;
    spanPriceDiscount.style.color = 'red';
  };

  const onMouseLeaveSpanSpanPriceDiscount = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    let spanPriceDiscount = e.target as HTMLSpanElement;
    spanPriceDiscount.style.color = 'black';
  };

  const onMouseEnterSvgArrowTop = () => {
    let spanPriceDiscount = spanPriceDiscountShipping.current;
    let spanPriceFull = spanPriceFullShipping.current;

    if (spanPriceDiscount === null || spanPriceFull === null) return;

    spanPriceDiscount.style.color = 'red';
    spanPriceFull.style.color = 'red';
  };

  const onMouseLeaveSvgArrowTop = () => {
    let spanPriceDiscount = spanPriceDiscountShipping.current;
    let spanPriceFull = spanPriceFullShipping.current;

    if (spanPriceDiscount === null || spanPriceFull === null) return;

    spanPriceDiscount.style.color = 'black';
    spanPriceFull.style.color = 'black';
  };

  useEffect(() => {
    GetByListFlashSaleProductImageAllId(idProductClicked);
  }, [idProductClicked]);

  const [productOptionImageAll, setProductOptionImageAll] = useState<
    ProductOptionImageProps[] | null
  >(null);

  const [productOptionImageColor, setProductOptionImageColor] = useState<
    ProductOptionImageProps[] | null
  >(null);

  const [allTheOptionsThatExists, setAllTheOptionsThatExists] = useState<
    ProductOptionImageProps[] | null
  >(null);

  const GetByListFlashSaleProductImageAllId = async (idProductClicked: string) => {
    const res = await fetch(
      `${Url}/product-option-image/get-by-list-flash-sale-product-image-all-id/${idProductClicked}`
    );

    // Colocar as imagens, do "MINECRAFT"

    if (res.status === 200) {
      const json = await res.json();
      let getDate: ProductOptionImageProps[] = json.data;

      let allTheColorsThatExists = getDate.filter((el) => el.optionType === 'Color');

      if (allTheColorsThatExists) {
        setProductOptionImageColor(allTheColorsThatExists);
      }

      let allTheOptionsThatExists = getDate.filter((el) => el.optionType === 'Option');

      if (allTheOptionsThatExists) {
        setAllTheOptionsThatExists(allTheOptionsThatExists);
      }

      setProductOptionImageAll(getDate);
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

  const [whichDivOptionsWasClicked, setWhichDivOptionsWasClicked] = useState(0);

  const onClickOptions = (whichDivVoltagensWasClicked: number, option: ProductOptionImageProps) => {
    setWhichDivOptionsWasClicked((prop) => {
      if (prop === whichDivVoltagensWasClicked) {
        return 0;
      }

      return whichDivVoltagensWasClicked;
    });
  };

  return (
    <Styled.ContainerImageProductAndDescription>
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
          <Styled.ContainerAllImagePartBottom>
            {productOptionImageAll.map((productImg) => (
              <Styled.Img key={productImg.id} src={productImg.imageUrl} alt={productImg.imgAlt} />
            ))}
          </Styled.ContainerAllImagePartBottom>
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

      <Styled.ContainerProductFlashSaleDescription>
        <Styled.H1>
          {funcFormatTitleProduct(getFlashSaleProduct.productsOfferFlashDTO.title)}
        </Styled.H1>

        <Styled.ContainerRateAvaliation>
          <Styled.ContainerFirstRateAvaliation>
            <Styled.ContainerRateAvaliationAndStars>
              <Styled.Span>{getFlashSaleProduct.productReviewsRate}</Styled.Span>

              <Styled.ContainerStarQuantity>
                {quantityStarRender.map((el) => (
                  <Styled.ContainerStarMain key={el}>
                    <Styled.ContainerStar
                      $fifthHalfStar={fifthHalfStar}
                      $fourthHalfStar={fourthHalfStar}
                      $thirdHalfStar={thirdHalfStar}
                      $secondHalfStar={secondHalfStar}
                      $firstHalfStar={firstHalfStar}
                      $allStarWithoutFill={allStarWithoutFill}
                      $starIndex={el}
                    >
                      <Styled.ContainerStarImgFull></Styled.ContainerStarImgFull>
                    </Styled.ContainerStar>
                    <Styled.ContainerStarImg></Styled.ContainerStarImg>
                  </Styled.ContainerStarMain>
                ))}
              </Styled.ContainerStarQuantity>
            </Styled.ContainerRateAvaliationAndStars>
            <Styled.SpanWhiteStripe>|</Styled.SpanWhiteStripe>
            <Styled.ContainerAvaliation>
              <Styled.Span>
                {funcFormatAvaliationQuantity(getFlashSaleProduct.quantityAvaliation)}
              </Styled.Span>
              <Styled.Span>{'Avaliações'}</Styled.Span>
            </Styled.ContainerAvaliation>
          </Styled.ContainerFirstRateAvaliation>
          <Styled.ContainerReport>
            <Styled.Span>Denunciar</Styled.Span>
          </Styled.ContainerReport>
        </Styled.ContainerRateAvaliation>

        <Styled.ContainerPrinceProductAndMoreInfo>
          <Styled.ContainerPriceProduct>
            <Styled.Span>
              {functionForPriceWithDiscount(getFlashSaleProduct.productsOfferFlashDTO)}
            </Styled.Span>
            <Styled.Span>
              {functionForPriceOriginal(getFlashSaleProduct.productsOfferFlashDTO)}
            </Styled.Span>
            <Styled.ContainerDiscountProduct>
              <Styled.Span>
                {getFlashSaleProduct.productsOfferFlashDTO.discountPercentage}% OFF
              </Styled.Span>
            </Styled.ContainerDiscountProduct>
          </Styled.ContainerPriceProduct>

          <Styled.ContainerCoinsInsuranceColorMain $index={1}>
            <Styled.H1>Moedas</Styled.H1>
            <Styled.ContainerCoinsDescription>
              <Styled.Img
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732273028/flash-offer-img/0b428b80edef1fabfd3f_thdxlz.png"
                alt="img-coins"
              />
              <Styled.Span>
                Compre e ganhe{' '}
                <Styled.SpanQuantityCoins>{getFlashSaleProduct.coins}</Styled.SpanQuantityCoins>{' '}
                Moeda(s) Shopee
              </Styled.Span>
              <SvgQuestionMark />
            </Styled.ContainerCoinsDescription>
          </Styled.ContainerCoinsInsuranceColorMain>
          <Styled.ContainerCreditCard $index={2}>
            <Styled.H1>Cartão de Crédito</Styled.H1>
            <Styled.ContainerCreditCardDescription>
              <Styled.Span>{getFlashSaleProduct.creditCard}</Styled.Span>
              <Styled.Container>
                <Styled.Span>Opções de parcelamento</Styled.Span>
                <SvgArrowRight />
              </Styled.Container>
            </Styled.ContainerCreditCardDescription>
          </Styled.ContainerCreditCard>
          {getFlashSaleProduct.productHaveInsurance && (
            <Styled.ContainerCoinsInsuranceColorMain $index={3}>
              <Styled.H1>Seguros</Styled.H1>
              <Styled.ContainerInsuranceDescription>
                <Styled.Span>Seguros disponíveis</Styled.Span>
                <Styled.Span>Saber Mais</Styled.Span>
              </Styled.ContainerInsuranceDescription>
            </Styled.ContainerCoinsInsuranceColorMain>
          )}
          <Styled.ContainerShippingMain>
            <Styled.H1>Frete</Styled.H1>
            <Styled.ContainerShippingDescriptionMain>
              <ShippingSvg />
              <Styled.ContainerShippingDescription>
                <Styled.ContainerShippingDescriptionInner $index={1}>
                  <Styled.Span>Frete para</Styled.Span>
                  <Styled.ContainerLocationUser>
                    <Styled.Span>São Paulo, São Paulo</Styled.Span>
                    <SvgArrowTop />
                  </Styled.ContainerLocationUser>
                </Styled.ContainerShippingDescriptionInner>
                <Styled.ContainerShippingDescriptionInner $index={2}>
                  <Styled.Span>Frete</Styled.Span>
                  <Styled.ContainerShippingPrices>
                    <Styled.Span
                      ref={spanPriceFullShipping}
                      onMouseEnter={onMouseEnterSpanFullPrice}
                      onMouseLeave={onMouseLeaveSpanFullPrice}
                    >
                      R$199,58
                    </Styled.Span>
                    <Styled.Span
                      ref={spanPriceDiscountShipping}
                      onMouseEnter={(e) => onMouseEnterSpanPriceDiscount(e)}
                      onMouseLeave={(e) => onMouseLeaveSpanSpanPriceDiscount(e)}
                    >
                      R$189,58
                    </Styled.Span>
                    <Styled.ContainerSvgArrowTop
                      onMouseEnter={onMouseEnterSvgArrowTop}
                      onMouseLeave={onMouseLeaveSvgArrowTop}
                    >
                      <SvgArrowTop />
                    </Styled.ContainerSvgArrowTop>
                  </Styled.ContainerShippingPrices>
                </Styled.ContainerShippingDescriptionInner>
                <Styled.ContainerDiscoutQuantity>
                  <Styled.Span>
                    Até <Styled.Span>R$10,00 de desconto</Styled.Span> no frete com cupom
                  </Styled.Span>
                </Styled.ContainerDiscoutQuantity>
              </Styled.ContainerShippingDescription>
            </Styled.ContainerShippingDescriptionMain>
          </Styled.ContainerShippingMain>
          {productOptionImageColor &&
            productOptionImageColor.map((el) => (
              <Styled.ContainerCoinsInsuranceColorMain $index={5} key={el.id}>
                {el.optionType === 'Color' && (
                  <>
                    <Styled.H1>Cor</Styled.H1>
                    <Styled.ContainerColorsProductDescription>
                      <Styled.Img src={el.imageUrl} alt={el.imgAlt} />
                      <Styled.Span>{el.titleOptionType}</Styled.Span>
                    </Styled.ContainerColorsProductDescription>
                  </>
                )}
              </Styled.ContainerCoinsInsuranceColorMain>
            ))}

          {allTheOptionsThatExists && (
            <Styled.ContainerOptionsMain>
              <Styled.H1>Opção</Styled.H1>

              <Styled.ContainerOptionsMainDescription>
                {allTheOptionsThatExists.map((option, index) => (
                  <Styled.ContainerOptions
                    $whichDivOptionsWasClicked={whichDivOptionsWasClicked}
                    $divOptions={index + 1}
                    onClick={() => onClickOptions(index + 1, option)}
                    key={index}
                  >
                    <Styled.Img src={option.imageUrl} />
                    <Styled.Span>{option.titleOptionType}</Styled.Span>
                    {whichDivOptionsWasClicked === index + 1 && (
                      <Styled.Container>
                        <FontAwesomeIcon icon={faCheck} />
                      </Styled.Container>
                    )}
                  </Styled.ContainerOptions>
                ))}
              </Styled.ContainerOptionsMainDescription>
            </Styled.ContainerOptionsMain>
          )}

          {allVoltage && (
            <Styled.ContainerCoinsInsuranceColorMain $index={6}>
              <Styled.H1>Voltagem</Styled.H1>

              <Styled.ContainerVoltagesDescription>
                {allVoltage.map((v, index) => (
                  <Styled.ContainerVoltages
                    $whichDivVoltagensWasClicked={whichDivVoltagensWasClicked}
                    $divVoltagens={index + 1}
                    onClick={() => onClickVoltagens(index + 1)}
                    key={index}
                  >
                    {v}
                    {whichDivVoltagensWasClicked === index + 1 && (
                      <Styled.Container>
                        <FontAwesomeIcon icon={faCheck} />
                      </Styled.Container>
                    )}
                  </Styled.ContainerVoltages>
                ))}
              </Styled.ContainerVoltagesDescription>
            </Styled.ContainerCoinsInsuranceColorMain>
          )}
          <Styled.ContainerCoinsInsuranceColorMain $index={7}>
            <Styled.H1>Quantidade</Styled.H1>
            <Styled.ContainerQuantityProductDescription>
              <Styled.Container>
                <MinusSignSvg />
              </Styled.Container>
              <Styled.Container>
                <Styled.Span>1</Styled.Span>
              </Styled.Container>
              <Styled.Container>
                <SumSignSvg />
              </Styled.Container>
            </Styled.ContainerQuantityProductDescription>

            <Styled.ContainerQuantityParts>
              <Styled.Span>{quantityParts} peças disponíveis</Styled.Span>
            </Styled.ContainerQuantityParts>
          </Styled.ContainerCoinsInsuranceColorMain>

          <Styled.ContainerAllButton>
            <Styled.Button>
              <CartBuySvg />
              <Styled.Span>Adicionar ao carrinho</Styled.Span>
            </Styled.Button>
            <Styled.Button>
              <Styled.Span>Comprar Agora</Styled.Span>
            </Styled.Button>
          </Styled.ContainerAllButton>
        </Styled.ContainerPrinceProductAndMoreInfo>
      </Styled.ContainerProductFlashSaleDescription>
    </Styled.ContainerImageProductAndDescription>
  );
};

export default ProductFlashSaleAllInfo;
