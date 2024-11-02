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

  return (
    <Styled.ContainerProductDiscoveriesOfTheDay>
      <Styled.ContainerImgs>
        <Styled.Img src={product.imgProduct} alt={product.title} />
        {product.imgPartBottom !== null && (
          <Styled.Img src={product.imgPartBottom} alt="img-part-bottom" />
        )}
        <Styled.ContainerDiscountProduct>
          {product.discountPercentage > 0 && (
            <Styled.Span>-{product.discountPercentage}%</Styled.Span>
          )}
        </Styled.ContainerDiscountProduct>
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
              <Styled.Span>{product.quantitySold} vendidos</Styled.Span>
            </Styled.ContainerSalesProduct>
          )}
        </Styled.ContainerPriceProductAndSales>
      </Styled.ContainerTitleAndPriceSalesProduct>
    </Styled.ContainerProductDiscoveriesOfTheDay>
  );
};

export default ProductDiscoveriesOfTheDay;
