import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderFlashSaleMain from '../HeaderFlashSaleComponents/HeaderFlashSaleMain/HeaderFlashSaleMain';
import { Url } from '../../../Utils/Url';
import * as Styled from './styled';
import SvgArrowBottom from '../../Svg/SvgArrowBottom/SvgArrowBottom';
import HeartRed from '../../Svg/HeartRed/HeartRed';
import SvgQuestionMark from '../../Svg/SvgQuestionMark/SvgQuestionMark';
import ShippingSvg from '../../Svg/ShippingSvg/ShippingSvg';
import SvgArrowTop from '../../Svg/SvgArrowTop/SvgArrowTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface GetFlashSaleProductProps {
  id: string;
  productReviewsRate: number;
  productsOfferFlashDTO: ProductsOfferFlashDTOProps;
  quantitySold: number;
  favoriteQuantity: number;
  quantityAvaliation: number;
}

interface ProductsOfferFlashDTOProps {
  altValue: string;
  discountPercentage: number;
  imgPartBottom: string;
  imgProduct: string;
  priceProduct: number;
  title: string;
}

const FlashSaleProduct = () => {
  const obj = useParams();
  const nav = useNavigate();
  const [getFlashSaleProduct, setGetFlashSaleProduct] = useState<GetFlashSaleProductProps | null>(
    null
  );
  const [quantityStarRender, setQuantityStarRender] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const { id } = obj;

    if (id) {
      getFlashSaleProductByProductFlashSaleId(id);
    }
  }, []);

  const [fifthHalfStar, setFifthHalfStar] = useState(false);
  const [fourthHalfStar, setFourthHalfStar] = useState(false);
  const [thirdHalfStar, setThirdHalfStar] = useState(false);
  const [secondHalfStar, setSecondHalfStar] = useState(false);
  const [firstHalfStar, setFirstHalfStar] = useState(false);
  const [allStarWithoutFill, setAllStarWithoutFill] = useState(false);

  const getFlashSaleProductByProductFlashSaleId = async (productFlashSaleId: string) => {
    const res = await fetch(
      `${Url}/get-flash-sale-product-by-product-flash-sale-id/${productFlashSaleId}`
    );

    if (res.status === 200) {
      const json = await res.json();
      let getFlashSaleProduct: GetFlashSaleProductProps = json.data;

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

      setGetFlashSaleProduct(getFlashSaleProduct);
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

  const [whichDivVoltagensWasClicked, setWhichDivVoltagensWasClicked] = useState(0);

  const onClickVoltagens = (whichDivVoltagensWasClicked: number) => {
    setWhichDivVoltagensWasClicked((prop) => {
      if (prop === whichDivVoltagensWasClicked) {
        return 0;
      }

      return whichDivVoltagensWasClicked;
    });
  };

  return (
    <Styled.ContainerMain>
      <HeaderFlashSaleMain></HeaderFlashSaleMain>
      <Styled.ContainerProductWasClickedMain>
        {getFlashSaleProduct && (
          <Styled.ContainerProductWasClicked>
            <Styled.ContainerProductLayers>
              <Styled.Span>Shopee</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Saúde</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Pessoais</Styled.Span>
              <SvgArrowBottom />
              <Styled.Span>Cuidados Bucais</Styled.Span>
              <SvgArrowBottom />
              <Styled.H1>
                {getFlashSaleProduct.productsOfferFlashDTO.title.substring(0, 50)}
              </Styled.H1>
            </Styled.ContainerProductLayers>

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

                <Styled.ContainerAllImagePartBottom>
                  {/* criar uma tabela para colocar as imagens de baixo! - que pega o id do "product" e nessa tabela
                      vai ter o id ai eu pucho todas as "imagens" dessa tabela com a imagens */}
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                  <Styled.Img
                    src={getFlashSaleProduct.productsOfferFlashDTO.imgProduct}
                    alt={getFlashSaleProduct.productsOfferFlashDTO.altValue}
                  />
                </Styled.ContainerAllImagePartBottom>

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
                        Compre e ganhe <Styled.SpanQuantityCoins>500</Styled.SpanQuantityCoins>{' '}
                        Moeda(s) Shopee
                      </Styled.Span>
                      <SvgQuestionMark />
                    </Styled.ContainerCoinsDescription>
                  </Styled.ContainerCoinsInsuranceColorMain>
                  <Styled.ContainerCoinsInsuranceColorMain $index={2}>
                    <Styled.H1>Seguros</Styled.H1>
                    <Styled.ContainerInsuranceDescription>
                      <Styled.Span>Seguros disponíveis</Styled.Span>
                      <Styled.Span>Saber Mais</Styled.Span>
                    </Styled.ContainerInsuranceDescription>
                  </Styled.ContainerCoinsInsuranceColorMain>
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
                            <Styled.Span>R$199,58</Styled.Span>
                            <Styled.Span>R$189,58</Styled.Span>
                            <SvgArrowTop />
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
                  <Styled.ContainerCoinsInsuranceColorMain $index={4}>
                    <Styled.H1>Cor</Styled.H1>
                    <Styled.ContainerColorsProductDescription>
                      <Styled.Img
                        src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1732279346/img-product-colors/img-fridge/sg-11134201-7rcbt-ltf71dl7xufk75_resize_w24_nl_dvn88o.webp"
                        alt="img-color-fridge"
                      />
                      <Styled.Span>BRANCO</Styled.Span>
                    </Styled.ContainerColorsProductDescription>
                  </Styled.ContainerCoinsInsuranceColorMain>
                  <Styled.ContainerCoinsInsuranceColorMain $index={5}>
                    <Styled.H1>Voltagem</Styled.H1>
                    <Styled.ContainerVoltagesDescription>
                      <Styled.ContainerVoltages
                        $whichDivVoltagensWasClicked={whichDivVoltagensWasClicked}
                        $divVoltagens={1}
                        onClick={() => onClickVoltagens(1)}
                      >
                        110v
                        {whichDivVoltagensWasClicked === 1 && (
                          <Styled.Container>
                            <FontAwesomeIcon icon={faCheck} />
                          </Styled.Container>
                        )}
                      </Styled.ContainerVoltages>
                      <Styled.ContainerVoltages
                        $whichDivVoltagensWasClicked={whichDivVoltagensWasClicked}
                        $divVoltagens={2}
                        onClick={() => onClickVoltagens(2)}
                      >
                        220v
                        {whichDivVoltagensWasClicked === 2 && (
                          <Styled.Container>
                            <FontAwesomeIcon icon={faCheck} />
                          </Styled.Container>
                        )}
                      </Styled.ContainerVoltages>
                    </Styled.ContainerVoltagesDescription>
                  </Styled.ContainerCoinsInsuranceColorMain>
                  <Styled.ContainerCoinsInsuranceColorMain $index={6}>
                    <Styled.H1>Quantidade</Styled.H1>
                    <Styled.ContainerQuantityProductDescription>
                      <Styled.Container>
                        <svg
                          enableBackground="new 0 0 10 10"
                          viewBox="0 0 10 10"
                          x="0"
                          y="0"
                          className="shopee-svg-icon"
                        >
                          <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                        </svg>
                      </Styled.Container>
                      <Styled.Span>1</Styled.Span>
                      <Styled.Container>
                        <svg
                          enableBackground="new 0 0 10 10"
                          viewBox="0 0 10 10"
                          x="0"
                          y="0"
                          className="shopee-svg-icon icon-plus-sign"
                        >
                          <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                        </svg>
                      </Styled.Container>
                    </Styled.ContainerQuantityProductDescription>
                  </Styled.ContainerCoinsInsuranceColorMain>
                </Styled.ContainerPrinceProductAndMoreInfo>
              </Styled.ContainerProductFlashSaleDescription>
            </Styled.ContainerImageProductAndDescription>
          </Styled.ContainerProductWasClicked>
        )}
      </Styled.ContainerProductWasClickedMain>
    </Styled.ContainerMain>
  );
};

export default FlashSaleProduct;
