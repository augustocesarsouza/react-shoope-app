import { IProductDiscoveriesOfTheDay } from '../../HomeBodyMain/HomeBodyMain';
import * as Styled from './styled';

interface ProductDiscoveriesOfTheDayProps {
  product: IProductDiscoveriesOfTheDay;
}

const ProductDiscoveriesOfTheDay = ({ product }: ProductDiscoveriesOfTheDayProps) => {
  const spanTitle = (string: string) => {
    const stringChange = string.slice(0, 41) + '...';

    return stringChange;
  };

  const spanPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price);

    return formattedPrice;
  };

  const spanQuantitySold = (quantity: number) => {
    if (quantity >= 1000) {
      let formatted = (quantity / 1000).toFixed(quantity % 1000 === 0 ? 0 : 1);
      formatted = formatted.replace('.', ',');
      return `${formatted}mil`;
    }

    return quantity.toString();
  };

  return (
    <Styled.ContainerProductDiscoveriesOfTheDay>
      <Styled.ContainerImgs>
        <Styled.Img src={product.imgProduct} alt={product.title} />
        {product.imgPartBottom && <Styled.Img src={product.imgPartBottom} alt="img-part-bottom" />}
        <Styled.ContainerDiscountProduct>
          {product.discountPercentage > 0 && (
            <Styled.Span>-{product.discountPercentage}%</Styled.Span>
          )}
        </Styled.ContainerDiscountProduct>
        {product.isAd && (
          <Styled.ContainerAdAndSpan>
            <Styled.Span>Anúncio</Styled.Span>
          </Styled.ContainerAdAndSpan>
        )}
      </Styled.ContainerImgs>

      <Styled.ContainerTitleAndPriceSalesProduct>
        <Styled.ContainerProductDiscoveriesDescribe>
          <Styled.Span>{spanTitle(product.title)}</Styled.Span>
        </Styled.ContainerProductDiscoveriesDescribe>
        <Styled.ContainerPriceProductAndSales>
          <Styled.ContainerPriceProduct>
            <Styled.H1>{spanPrice(product.price)}</Styled.H1>
          </Styled.ContainerPriceProduct>
          {product.quantitySold > 0 && (
            <Styled.ContainerSalesProduct>
              <Styled.Span>{spanQuantitySold(product.quantitySold)} vendidos</Styled.Span>
            </Styled.ContainerSalesProduct>
          )}
        </Styled.ContainerPriceProductAndSales>
      </Styled.ContainerTitleAndPriceSalesProduct>
    </Styled.ContainerProductDiscoveriesOfTheDay>
  );
};

export default ProductDiscoveriesOfTheDay;
