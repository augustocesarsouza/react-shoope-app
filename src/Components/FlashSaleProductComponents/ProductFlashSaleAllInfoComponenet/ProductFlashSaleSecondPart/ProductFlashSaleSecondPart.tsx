import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ShippingSvg from '../../../Svg/ShippingSvg/ShippingSvg';
import SvgArrowRight from '../../../Svg/SvgArrowRight/SvgArrowRight';
import SvgArrowTop from '../../../Svg/SvgArrowTop/SvgArrowTop';
import SvgQuestionMark from '../../../Svg/SvgQuestionMark/SvgQuestionMark';
import * as Styled from './styled';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import MinusSignSvg from '../../../Svg/MinusSignSvg/MinusSignSvg';
import SumSignSvg from '../../../Svg/SumSignSvg/SumSignSvg';
import CartBuySvg from '../../../Svg/CartBuySvg/CartBuySvg';
import { useEffect, useRef, useState } from 'react';
import {
  GetFlashSaleProductProps,
  ProductOptionImageProps,
  ProductsOfferFlashDTOProps,
} from '../../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';
import Inputmask from 'inputmask';
import AddressSvg from '../../../Svg/AddressSvg/AddressSvg';
import {
  FlashSaleCountdown,
  FlashSaleCountdownFunc,
} from '../../../FlashSaleFunctions/FlashSaleCountdownFunc';
import { GetCountdonwTimeFromLocalStorage } from '../../../FlashSaleFunctions/GetCountdonwTimeFromLocalStorage';
import FlashSaleCountdownAfterClickedProduct from '../FlashSaleCountdown/FlashSaleCountdown';

interface ProductFlashSaleSecondPartProps {
  productOptionImageColor: ProductOptionImageProps[];
  allTheOptionsThatExists: ProductOptionImageProps[];
  getFlashSaleProduct: GetFlashSaleProductProps;
}

interface AddressUserFoundProps {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  estado: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  regiao: string;
  siafi: string;
  uf: string;
  unidade: string;
}

const ProductFlashSaleSecondPart = ({
  productOptionImageColor,
  allTheOptionsThatExists,
  getFlashSaleProduct,
}: ProductFlashSaleSecondPartProps) => {
  const [whichDivOptionsWasClicked, setWhichDivOptionsWasClicked] = useState(0);
  const [whichDivVoltagensWasClicked, setWhichDivVoltagensWasClicked] = useState(0);

  const [quantityStarRender] = useState([0, 1, 2, 3, 4]);
  const [quantityParts] = useState(120);
  const [allVoltage, setAllVoltage] = useState<string[] | null>(null);

  const onClickOptions = (whichDivVoltagensWasClicked: number, option: ProductOptionImageProps) => {
    setWhichDivOptionsWasClicked((prop) => {
      if (prop === whichDivVoltagensWasClicked) {
        return 0;
      }

      return whichDivVoltagensWasClicked;
    });
  };

  useEffect(() => {
    if (getFlashSaleProduct.voltage) {
      let allVoltageSplit = getFlashSaleProduct.voltage.split(',');

      setAllVoltage(allVoltageSplit);
    }

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

  const ContainerLocationUserRef = useRef<HTMLDivElement | null>(null);
  const InputCepRef = useRef<HTMLInputElement | null>(null);

  const [errorCep, setErrorCep] = useState(false);
  const [addressUserFound, setAddressUserFound] = useState<AddressUserFoundProps | null>(null);
  const ButtonConfirmRef = useRef<HTMLButtonElement | null>(null);

  const onChangeInputCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let cep = e.target.value;

    if (cep === null || cep === undefined) return;

    cep = cep.replace(/\D/g, '');

    if (cep.length < 8) return;

    let validacep = /^[0-9]{8}$/;

    let buttonConfirm = ButtonConfirmRef.current;

    if (buttonConfirm === null) return;

    if (validacep.test(cep)) {
      let res = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      let json: any = await res.json();

      if (Boolean(json.erro)) {
        setErrorCep(true);
        setAddressUserFound(null);
        buttonConfirm.style.backgroundColor = '#f7a696';
      } else {
        setErrorCep(false);
        setAddressUserFound(json);

        buttonConfirm.style.backgroundColor = '#ee4d2d';
      }
    } else {
      console.log('cep invalid');
    }
  };

  const [flashSaleCountdown, setFlashSaleCountdown] = useState<FlashSaleCountdown | null>(null);
  const [showCepContainer, setShowCepContainer] = useState(false);

  useEffect(() => {
    let countdown = GetCountdonwTimeFromLocalStorage();

    let timeForCountdown = countdown.countdowntime;

    if (timeForCountdown === null) return;

    let dateParse = new Date(timeForCountdown);

    let flashSaleCountdown = FlashSaleCountdownFunc(dateParse);
    setFlashSaleCountdown(flashSaleCountdown);

    if (showCepContainer) {
      // let inputCepUser = document.getElementById('input-cep-user');
      let inputCepUser = InputCepRef.current;

      if (inputCepUser) {
        let mask = Inputmask({
          mask: '99999-999',
          placeholder: '_____-___',
          insertMode: true, // Ensure the mask does not insert mode to avoid jumping characters
          showMaskOnHover: true,
          showMaskOnFocus: false,
        });
        mask.mask(inputCepUser);
      }
    }
  }, [showCepContainer]);

  const onClickIdunnoCep = () => {
    window.open(`https://buscacepinter.correios.com.br/app/endereco/index.php`, '_blank');
  };

  const [spanAddress, setSpanAddress] = useState('');

  const onClickInputCep = () => {
    if (addressUserFound) {
      let span = `${addressUserFound.cep}, ${addressUserFound.localidade},${addressUserFound.estado}`;
      setSpanAddress(span);
      setShowCepContainer(false);

      if (ContainerLocationUserRef.current === null) return;

      let svgArrowBottom = ContainerLocationUserRef.current.lastChild as SVGSVGElement;
      svgArrowBottom.style.rotate = svgArrowBottom.style.rotate === '180deg' ? '0deg' : '180deg';
      setAddressUserFound(null);
    }
  };

  const onMouseEnterContainerShippingPrices = () => {};

  const onMouseLeaveContainerShippingPrices = () => {};

  const [showContainerInputCep, setShowContainerInputCep] = useState(false);
  const [notEnterBody, setNotEnterBody] = useState(false);

  const onMouseEnterContainerCepAllInfo = () => {
    setShowContainerInputCep(false);
    setNotEnterBody(true);
  };

  const onMouseLeaveContainerCepAllInfo = () => {
    setShowContainerInputCep(true);
    setNotEnterBody(false);
  };

  const onClickBody = (showContainerInputCepFunc: boolean) => {
    if (showContainerInputCepFunc) {
      setShowContainerInputCep(false);
      setShowCepContainer(false);

      if (ContainerLocationUserRef.current === null) return;

      let svgArrowBottom = ContainerLocationUserRef.current.lastChild as SVGSVGElement;
      svgArrowBottom.style.rotate = svgArrowBottom.style.rotate === '180deg' ? '0deg' : '180deg';
      setAddressUserFound(null);
    }
  };

  const [enterContainerLocationUser, setEnterContainerLocationUser] = useState(false);

  useEffect(() => {
    if (notEnterBody) return;

    const handleBodyClick = () => onClickBody(showContainerInputCep);

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [showContainerInputCep, notEnterBody]);

  const [wasClickContainerLocationUser, setWasClickContainerLocationUser] = useState(false);

  const onClickContainerLocationUser = () => {
    if (ContainerLocationUserRef.current === null) return;
    setWasClickContainerLocationUser(true);

    let svgArrowBottom = ContainerLocationUserRef.current.lastChild as SVGSVGElement;
    svgArrowBottom.style.rotate = svgArrowBottom.style.rotate === '180deg' ? '0deg' : '180deg';

    setShowCepContainer(svgArrowBottom.style.rotate === '180deg');
  };

  const onMouseEnterContainerLocationUser = () => {
    setEnterContainerLocationUser(true);
    setNotEnterBody(true);
  };

  const onMouseLeaveContainerLocationUser = () => {
    if (ContainerLocationUserRef.current === null) return;

    setNotEnterBody(false);

    if (enterContainerLocationUser && wasClickContainerLocationUser) {
      setShowContainerInputCep(false);
      setEnterContainerLocationUser(false);
      setWasClickContainerLocationUser(false);
    }

    let svgArrowBottom = ContainerLocationUserRef.current.lastChild as SVGSVGElement;

    if (wasClickContainerLocationUser && svgArrowBottom.style.rotate === '180deg') {
      setShowContainerInputCep(true);
    }
  };

  // fazer amanha "R$199,58 R$189,58", e separar o "Frete" para outro Component, separado todo esses "onMouseEnter" "onMouseLeave" que está envolvido
  // para colocar cep e tal

  return (
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

      {flashSaleCountdown && (
        <FlashSaleCountdownAfterClickedProduct
          hours={flashSaleCountdown.hours}
          minutes={flashSaleCountdown.minutes}
          seconds={flashSaleCountdown.seconds}
        />
      )}

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
                <Styled.ContainerLocationUser
                  onClick={onClickContainerLocationUser}
                  onMouseEnter={onMouseEnterContainerLocationUser}
                  onMouseLeave={onMouseLeaveContainerLocationUser}
                  ref={ContainerLocationUserRef}
                  $spanAddress={spanAddress}
                >
                  {spanAddress.length <= 0 && <Styled.Span>São Paulo, São Paulo</Styled.Span>}

                  {spanAddress.length > 0 && <Styled.Span>{spanAddress}</Styled.Span>}
                  <SvgArrowTop />
                </Styled.ContainerLocationUser>
              </Styled.ContainerShippingDescriptionInner>
              <Styled.ContainerShippingDescriptionInner $index={2}>
                <Styled.Span>Frete</Styled.Span>
                <Styled.ContainerShippingPrices
                  onMouseEnter={onMouseEnterContainerShippingPrices}
                  onMouseLeave={onMouseLeaveContainerShippingPrices}
                >
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

          {showCepContainer && (
            <Styled.ContainerCepAllInfo
              onMouseEnter={onMouseEnterContainerCepAllInfo}
              onMouseLeave={onMouseLeaveContainerCepAllInfo}
            >
              <Styled.ContainerCepAllInfo2>
                <Styled.Container>
                  <Styled.InputCep
                    placeholder="Digite um CEP"
                    onChange={(e) => onChangeInputCep(e)}
                    ref={InputCepRef}
                  ></Styled.InputCep>
                  <Styled.Button ref={ButtonConfirmRef} onClick={onClickInputCep}>
                    Confirmar
                  </Styled.Button>
                </Styled.Container>
                <Styled.ContainerSpanCepError>
                  {errorCep && <Styled.Span>Nenhum resultado encontrado</Styled.Span>}
                </Styled.ContainerSpanCepError>

                <Styled.ContainerAddressUserMain>
                  {addressUserFound && (
                    <Styled.ContainerAddressUser>
                      <AddressSvg />
                      <Styled.Span>
                        {addressUserFound.estado} - {addressUserFound.localidade}
                      </Styled.Span>
                    </Styled.ContainerAddressUser>
                  )}
                </Styled.ContainerAddressUserMain>
              </Styled.ContainerCepAllInfo2>

              <Styled.Span onClick={onClickIdunnoCep}>Não sei meu CEP</Styled.Span>
            </Styled.ContainerCepAllInfo>
          )}
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

        {allTheOptionsThatExists && allTheOptionsThatExists.length > 0 && (
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
  );
};

export default ProductFlashSaleSecondPart;
