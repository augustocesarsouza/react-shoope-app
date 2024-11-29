import { useEffect, useRef, useState } from 'react';
import AddressSvg from '../../../Svg/AddressSvg/AddressSvg';
import ShippingSvg from '../../../Svg/ShippingSvg/ShippingSvg';
import SvgArrowTop from '../../../Svg/SvgArrowTop/SvgArrowTop';
import * as Styled from './styled';

interface FlashSaleShippingProps {}

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

const FlashSaleShipping = ({}: FlashSaleShippingProps) => {
  const spanPriceDiscountShipping = useRef<HTMLSpanElement | null>(null);
  const spanPriceFullShipping = useRef<HTMLSpanElement | null>(null);
  const ButtonConfirmRef = useRef<HTMLButtonElement | null>(null);

  const InputCepRef = useRef<HTMLInputElement | null>(null);

  const [showCepContainer, setShowCepContainer] = useState(false);

  useEffect(() => {
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

  const [errorCep, setErrorCep] = useState(false);
  const [addressUserFound, setAddressUserFound] = useState<AddressUserFoundProps | null>(null);

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
      setErrorCep(false);

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
    setErrorCep(false);

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

  return (
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
  );
};

export default FlashSaleShipping;
