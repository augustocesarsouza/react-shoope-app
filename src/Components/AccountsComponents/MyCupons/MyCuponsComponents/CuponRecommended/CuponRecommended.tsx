import * as Styled from './styled';
import { CuponRecommendedProps } from '../MyCupons/MyCupons';
import { useEffect, useState } from 'react';
import { formatStringDescription, formatStringTitle } from './CuponRecommended_Function';

interface CuponRecommendedComponentProps {
  obj: CuponRecommendedProps;
}

const CuponRecommended = ({ obj }: CuponRecommendedComponentProps) => {
  const [stringTitle, setStringTitle] = useState('');
  const [offDescription, setOffDescription] = useState('');

  useEffect(() => {
    const stringTitle = formatStringTitle(obj.titleCupon);
    setStringTitle(stringTitle);

    const offDescription = formatStringDescription(obj.offDescription);
    setOffDescription(offDescription);
  }, [obj]);

  return (
    <Styled.ContainerCuponMain>
      <Styled.ContainerImgCupon>
        <Styled.Img src={obj.imgCupon} alt={obj.imgAltCupon} />
        {obj.showImgHeighlight && (
          <Styled.ContainerIndicated>
            <Styled.Span>Indicado</Styled.Span>
          </Styled.ContainerIndicated>
        )}
      </Styled.ContainerImgCupon>
      <Styled.ContainerInfoCupon>
        <Styled.Span>{stringTitle}</Styled.Span>
        <Styled.Span>R${Number(obj.valueCupon).toFixed(2).replace('.', ',')}</Styled.Span>
      </Styled.ContainerInfoCupon>
      <Styled.ContainerOffAndButton>
        <Styled.H1>{obj.offPrice}</Styled.H1>
        <Styled.Span>{offDescription}</Styled.Span>
        <Styled.Button>Ativar</Styled.Button>
      </Styled.ContainerOffAndButton>
    </Styled.ContainerCuponMain>
  );
};

export default CuponRecommended;
