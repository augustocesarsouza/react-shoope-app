import * as Styled from './styled';

const ProductDiscoveriesOfTheDay = () => {
  const spanTitle = (string: string) => {
    const stringChange = string.slice(0, 45) + '...';

    return stringChange;
  };

  return (
    <Styled.ContainerProductDiscoveriesOfTheDay>
      <Styled.ContainerImgs>
        <Styled.Img
          src="https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1j5s0qesvew35_tn.webp"
          alt="img"
        />
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729681997/img-flash-deals/br-11134258-7r98o-lzp49gh02mud40_tn_vqc0lf.png"
          alt="img-part-bottom"
        />
        <Styled.ContainerDiscountProduct>
          <Styled.Span>-67%</Styled.Span>
        </Styled.ContainerDiscountProduct>
      </Styled.ContainerImgs>

      <Styled.ContainerTitleAndPriceSalesProduct>
        <Styled.ContainerProductDiscoveriesDescribe>
          <Styled.Span>
            {spanTitle('Camiseta Premium 100% Algodão unissex Saudação Ogum OgunhÊ')}
          </Styled.Span>
        </Styled.ContainerProductDiscoveriesDescribe>
        <Styled.ContainerPriceProductAndSales>
          <Styled.ContainerPriceProduct>
            <Styled.Span>R$</Styled.Span>
            <Styled.H1>83,00</Styled.H1>
          </Styled.ContainerPriceProduct>
          <Styled.ContainerSalesProduct>
            <Styled.Span>80 vendidos</Styled.Span>
          </Styled.ContainerSalesProduct>
        </Styled.ContainerPriceProductAndSales>
      </Styled.ContainerTitleAndPriceSalesProduct>
    </Styled.ContainerProductDiscoveriesOfTheDay>
  );
};

export default ProductDiscoveriesOfTheDay;
