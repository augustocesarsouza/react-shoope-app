import SvgFlashDeals from '../../Svg/SvgFlashDeals/SvgFlashDeals';
import { GetAllProductHourProps } from '../FlashSale/FlashSale';
import * as Styled from './styled';

interface ProductFlashOfferProps {
  getAllProductHourProps: GetAllProductHourProps[];
}

const ProductFlashOffer = ({ getAllProductHourProps }: ProductFlashOfferProps) => {
  const functionForPriceOriginal = (obj: GetAllProductHourProps): string => {
    const priceOriginal = obj.priceProduct / (1 - obj.discountPercentage / 100);
    // console.log(priceOriginal.toFixed(2));

    return 'R$' + priceOriginal.toFixed(2).replace('.', ',');
  };

  const functionForPriceMainWithDiscount = (priceProduct: number): string => {
    const priceOriginal = priceProduct;

    return priceOriginal.toFixed(2).replace('.', ',');
  };

  const functionTitleFormat = (title: string): string => {
    const priceOriginal = title.slice(0, 50) + '...';

    return priceOriginal;
  };

  return (
    <Styled.ContainerAllProductHourMain>
      {getAllProductHourProps.length > 0 &&
        getAllProductHourProps.map((el, i) => (
          <Styled.ContainerProductFlashOffer key={el.id} $lastProduct={(i + 1) % 4 === 0}>
            <Styled.ContainerProductHour>
              <Styled.Img src={el.imgProduct} alt="img-sdlvjk" />
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
