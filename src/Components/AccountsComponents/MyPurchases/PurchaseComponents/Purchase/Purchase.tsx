import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import NoRequestsYet from '../NoRequestsYet/NoRequestsYet';

const Purchase = () => {
  const [whichWasClickedTopLayer, setwhichWasClickedTopLayer] = useState('1');

  const refInputLoupe = useRef<SVGSVGElement | null>(null);

  const onClickChangeWhichWasClicked = (click: string) => {
    setwhichWasClickedTopLayer(click);
  };

  const onFocusInputSearch = () => {
    if (refInputLoupe.current === null) return;

    let svgLoupe = refInputLoupe.current;
    svgLoupe.style.color = 'rgb(47 47 47 / 58%)';
  };

  const onBlurInputSearch = () => {
    if (refInputLoupe.current === null) return;

    let svgLoupe = refInputLoupe.current;
    svgLoupe.style.color = '#2f2f2f5c';
  };

  useEffect(() => {
    document.body.style.overflowY = 'scroll';
  }, []);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerTopMain>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('1')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '1' ? '1' : ''}
        >
          <Styled.Span>Tudo</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('2')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '2' ? '2' : ''}
        >
          <Styled.Span>A Pagar</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('3')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '3' ? '3' : ''}
        >
          <Styled.Span>Preparando</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('4')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '4' ? '4' : ''}
        >
          <Styled.Span>A caminho</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('5')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '5' ? '5' : ''}
        >
          <Styled.Span>Finalizado</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('6')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '6' ? '6' : ''}
        >
          <Styled.Span>Cancelado</Styled.Span>
        </Styled.ContainerSpanName>
        <Styled.ContainerSpanName
          onClick={() => onClickChangeWhichWasClicked('7')}
          $whichWasClickedTopLayer={whichWasClickedTopLayer === '7' ? '7' : ''}
        >
          <Styled.Span>Devolução/Reembolso</Styled.Span>
        </Styled.ContainerSpanName>
      </Styled.ContainerTopMain>
      {whichWasClickedTopLayer === '1' && (
        <Styled.ContainerInputSearch>
          <FontAwesomeIcon icon={faMagnifyingGlass} ref={refInputLoupe} />
          <Styled.Input
            type="text"
            placeholder="Você pode buscar por Nome de Vendedor"
            onFocus={onFocusInputSearch}
            onBlur={onBlurInputSearch}
          />
        </Styled.ContainerInputSearch>
      )}
      <NoRequestsYet />
    </Styled.ContainerMain>
  );
};

export default Purchase;
