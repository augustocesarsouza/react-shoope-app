import { useNavigate } from 'react-router-dom';
import SvgFlashDeals from '../../Svg/SvgFlashDeals/SvgFlashDeals';
import { GetAllProductHourProps } from '../FlashSale/FlashSale';
import * as Styled from './styled';
import CryptoJS from 'crypto-js';

interface ProductFlashOfferProps {
  getAllProductHourProps: GetAllProductHourProps[];
  timeForCountdown: Date | null;
}

const ProductFlashOffer = ({
  getAllProductHourProps,
  timeForCountdown,
}: ProductFlashOfferProps) => {
  const nav = useNavigate();

  const functionForPriceOriginal = (obj: GetAllProductHourProps): string => {
    const priceOriginal = obj.priceProduct / (1 - obj.discountPercentage / 100);

    return (
      'R$' +
      priceOriginal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  };

  const functionForPriceMainWithDiscount = (priceProduct: number): string => {
    const priceOriginal = priceProduct;

    return priceOriginal.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const functionTitleFormat = (title: string): string => {
    const priceOriginal = title.slice(0, 50) + '...';

    return priceOriginal;
  };

  const onClickContainerProductFlashOffer = (id: string) => {
    const secretKey = import.meta.env.VITE__APP_SECRET_KEY_COUNTDOWN;

    if (secretKey === undefined || timeForCountdown === null) return;

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(timeForCountdown), secretKey).toString();
    localStorage.setItem('countdowntime', encrypted);

    window.open(`/flash_sale_product/${id}`, '_blank');
  };

  return (
    <Styled.ContainerAllProductHourMain>
      {getAllProductHourProps.length > 0 &&
        getAllProductHourProps.map((el, i) => (
          <Styled.ContainerProductFlashOffer
            key={el.id}
            $lastProduct={(i + 1) % 4 === 0}
            onClick={() => onClickContainerProductFlashOffer(el.id)}
          >
            <Styled.ContainerProductHour>
              <Styled.Img src={el.imgProduct} alt={el.altValue} />
              {el.imgPartBottom && (
                <Styled.ImgPartBottom src={el.imgPartBottom} alt="img-part-bottom" />
              )}
            </Styled.ContainerProductHour>
            <Styled.ContainerInfoAboutProductFlashOffer>
              <Styled.H1>{functionTitleFormat(el.title)}</Styled.H1>
              <Styled.ContainerPriceOriginalAndPriceWithDiscountAndButtonBuyNow>
                <Styled.ContainerPriceOriginalAndPriceWithDiscount>
                  <Styled.ContainerDiscountPercentageMain>
                    <Styled.Span>{functionForPriceOriginal(el)}</Styled.Span>
                    <Styled.ContainerDiscountPercentage>
                      <SvgFlashDeals />
                      <Styled.Span>-{el.discountPercentage}%</Styled.Span>
                    </Styled.ContainerDiscountPercentage>
                  </Styled.ContainerDiscountPercentageMain>

                  <Styled.ContainerPriceProductMain>
                    <Styled.Span>R$</Styled.Span>
                    <Styled.Span>{functionForPriceMainWithDiscount(el.priceProduct)}</Styled.Span>
                  </Styled.ContainerPriceProductMain>
                  <Styled.ContainerPopular>
                    <Styled.ContainerBackgroundUp
                      $valuePercentage={el.popularityPercentage}
                    ></Styled.ContainerBackgroundUp>
                    <Styled.Span>POPULAR</Styled.Span>
                    <Styled.ContainerBackgroundFaint></Styled.ContainerBackgroundFaint>
                  </Styled.ContainerPopular>
                </Styled.ContainerPriceOriginalAndPriceWithDiscount>

                <Styled.ContainerButtonBuyNow>
                  <Styled.Span>Compre Agora</Styled.Span>
                </Styled.ContainerButtonBuyNow>
              </Styled.ContainerPriceOriginalAndPriceWithDiscountAndButtonBuyNow>
            </Styled.ContainerInfoAboutProductFlashOffer>
          </Styled.ContainerProductFlashOffer>
        ))}
    </Styled.ContainerAllProductHourMain>
  );
};

export default ProductFlashOffer;
