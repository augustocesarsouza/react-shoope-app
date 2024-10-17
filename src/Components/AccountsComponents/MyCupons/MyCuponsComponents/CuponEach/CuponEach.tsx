import SvgExitRed from '../../../../Svg/SvgExitRed/SvgExitRed';
import { DataCuposProps } from '../MyCupons/MyCupons';
import * as Styled from './styled';

export interface CuponEachProps {
  objCupons: DataCuposProps;
}

const CuponEach = ({ objCupons }: CuponEachProps) => {
  const formatDateString = () => {
    let date = objCupons.cuponDTO.dateValidateCupon.split('T');
    let firstPartDate = date[0];

    let secondPartDate = firstPartDate.split('-');
    let stringFullDate = `Válido até: ${secondPartDate[2]}/${secondPartDate[1]}/${secondPartDate[0]}`;

    return stringFullDate;
  };

  return (
    <Styled.ContainerCuponMain>
      <Styled.ContainerQuantityCupons>
        <Styled.ContainerSvgQuantityX>
          <SvgExitRed fill={'#EE4D2D'} />
          <Styled.Span>{objCupons.cuponDTO.quantityCupons}</Styled.Span>
        </Styled.ContainerSvgQuantityX>
      </Styled.ContainerQuantityCupons>
      <Styled.ContainerCuponHeader>
        <Styled.ContainerImgHeader>
          <Styled.Img
            src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728988707/img-shopee/br-11134004-7r98o-lsikizwd3q4ta6_phkhk8.png"
            alt="img-cupon"
          />
          {objCupons.cuponDTO.secondImg && objCupons.cuponDTO.secondImgAlt && (
            <Styled.ContainerImgExclusive>
              <Styled.Img
                src={objCupons.cuponDTO.secondImg}
                alt={objCupons.cuponDTO.secondImgAlt}
              />
            </Styled.ContainerImgExclusive>
          )}
        </Styled.ContainerImgHeader>
        <Styled.ContainerTitleDescriptionCupon>
          <Styled.Span>{objCupons.cuponDTO.firstText}</Styled.Span>
          <Styled.H1>{objCupons.cuponDTO.secondText}</Styled.H1>
          <Styled.Span>{objCupons.cuponDTO.thirdText}</Styled.Span>
        </Styled.ContainerTitleDescriptionCupon>
      </Styled.ContainerCuponHeader>
      <Styled.ContainerBorder></Styled.ContainerBorder>
      <Styled.ContainerCuponFooter>
        <Styled.ContainerCuponBottomFirst>
          <Styled.Span>{formatDateString()}</Styled.Span>
          <Styled.Span>Condições</Styled.Span>
        </Styled.ContainerCuponBottomFirst>

        <Styled.ContainerCuponBottomSecond>
          <Styled.Button>Usar</Styled.Button>
        </Styled.ContainerCuponBottomSecond>
      </Styled.ContainerCuponFooter>
    </Styled.ContainerCuponMain>
  );
};

export default CuponEach;
