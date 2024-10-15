import { useRef, useState } from 'react';
import * as Styled from './styled';
import SvgExit from '../../../../Svg/SvgExit/SvgExit';
import SvgExitRed from '../../../../Svg/SvgExitRed/SvgExitRed';

const MyCupons = () => {
  const refButtonRescue = useRef<HTMLButtonElement | null>(null);
  const refInputInsertCode = useRef<HTMLInputElement | null>(null);
  const [isValidClickRescueButton, setIsValidClickRescueButton] = useState(false);
  const [topicClicked, setTopicClicked] = useState(1);

  const onChangeInputInsertCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (refButtonRescue.current === null) return;

    if (e.target.value.length > 0) {
      changeBackgroundAndCursorButtonRescue('#ee4d2d', 'pointer');
      setIsValidClickRescueButton(true);
    } else {
      changeBackgroundAndCursorButtonRescue('rgba(0,0,0,.1)', 'auto');
      setIsValidClickRescueButton(false);
    }
  };

  const onClickRescue = () => {
    if (!isValidClickRescueButton) return;
    console.log('button rescue');
  };

  const onClickContainerSvgExit = () => {
    if (refInputInsertCode.current === null) return;

    let inputInsertCode = refInputInsertCode.current;
    inputInsertCode.value = '';
    setIsValidClickRescueButton(false);
    changeBackgroundAndCursorButtonRescue('rgba(0,0,0,.1)', 'auto');
  };

  const changeBackgroundAndCursorButtonRescue = (backgroundColor: string, cursor: string) => {
    if (refButtonRescue.current === null) return;

    let buttonRescue = refButtonRescue.current;

    buttonRescue.style.backgroundColor = backgroundColor;
    buttonRescue.style.cursor = cursor;
  };

  const onClickShopee = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    topicClicked: number
  ) => {
    const allSpans = document.querySelectorAll(
      '.span-topics-my-cupons'
    ) as NodeListOf<HTMLSpanElement>;

    allSpans.forEach((span: HTMLSpanElement) => {
      span.style.borderBottom = 'none';
      span.style.color = 'rgb(85, 85, 85)';
    });

    let spanShopee = e.target as HTMLSpanElement;
    spanShopee.style.borderBottom = '2px solid rgb(238, 77, 45)';
    spanShopee.style.color = 'rgb(238, 77, 45)';
    setTopicClicked(topicClicked);
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerHeader>
        <Styled.H1>Meus cupons</Styled.H1>

        <Styled.ContainerSecondSpans>
          <Styled.Span>Pegue mais cupons</Styled.Span>
          <Styled.Span>Ver histórico de cupons</Styled.Span>
          <Styled.Span>Veja mais</Styled.Span>
        </Styled.ContainerSecondSpans>
      </Styled.ContainerHeader>

      <Styled.ContainerInputAddCupon>
        <Styled.Span>Adicionar Cupom</Styled.Span>
        <Styled.ContainerInputInsertCodeCupon>
          <Styled.Input
            placeholder="Insira o código do cupom aqui"
            onChange={(e) => onChangeInputInsertCode(e)}
            ref={refInputInsertCode}
          />
          {isValidClickRescueButton && (
            <Styled.ContainerSvgExit onClick={onClickContainerSvgExit}>
              <SvgExit />
            </Styled.ContainerSvgExit>
          )}
        </Styled.ContainerInputInsertCodeCupon>
        <Styled.ContainerButtonRescue>
          <Styled.Button ref={refButtonRescue} onClick={onClickRescue}>
            Resgatar
          </Styled.Button>
        </Styled.ContainerButtonRescue>
      </Styled.ContainerInputAddCupon>

      <Styled.ContainerTopicsMyCupons>
        <Styled.Span onClick={(e) => onClickShopee(e, 1)} className="span-topics-my-cupons">
          Todos (12)
        </Styled.Span>
        <Styled.Span onClick={(e) => onClickShopee(e, 2)} className="span-topics-my-cupons">
          Shopee (12)
        </Styled.Span>
        <Styled.Span onClick={(e) => onClickShopee(e, 3)} className="span-topics-my-cupons">
          Loja (0)
        </Styled.Span>
        <Styled.Span onClick={(e) => onClickShopee(e, 4)} className="span-topics-my-cupons">
          Compra Digital (0)
        </Styled.Span>
        <Styled.Span onClick={(e) => onClickShopee(e, 5)} className="span-topics-my-cupons">
          Parceiro (0)
        </Styled.Span>
        <Styled.Span onClick={(e) => onClickShopee(e, 6)} className="span-topics-my-cupons">
          Produtos financeiros (0)
        </Styled.Span>
      </Styled.ContainerTopicsMyCupons>

      <Styled.ContainerCuponsFooter>
        <Styled.ContainerCuponMain>
          <Styled.ContainerQuantityCupons>
            <Styled.ContainerSvgQuantityX>
              <SvgExitRed fill={'#EE4D2D'} />
              <Styled.Span>1</Styled.Span>
            </Styled.ContainerSvgQuantityX>
          </Styled.ContainerQuantityCupons>
          <Styled.ContainerCuponHeader>
            <Styled.ContainerImgHeader>
              <Styled.Img
                src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728988707/img-shopee/br-11134004-7r98o-lsikizwd3q4ta6_phkhk8.png"
                alt="img-cupon"
              />
              <Styled.ContainerImgExclusive>
                <Styled.Img
                  src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728989982/img-shopee/sg-11134004-23010-lk448laa7gmv1e_v9lfyz.png"
                  alt="img-exclusive"
                />
              </Styled.ContainerImgExclusive>
            </Styled.ContainerImgHeader>
            <Styled.ContainerTitleDescriptionCupon>
              <Styled.Span>Para você</Styled.Span>
              <Styled.H1>Frete Grátis</Styled.H1>
              <Styled.Span>Sem valor mínimo</Styled.Span>
            </Styled.ContainerTitleDescriptionCupon>
          </Styled.ContainerCuponHeader>
          <Styled.ContainerBorder></Styled.ContainerBorder>
          <Styled.ContainerCuponFooter>
            <Styled.ContainerCuponBottomFirst>
              <Styled.Span>Termina em: 1 dia</Styled.Span>
              <Styled.Span>Condições</Styled.Span>
            </Styled.ContainerCuponBottomFirst>

            <Styled.ContainerCuponBottomSecond>
              <Styled.Button>Usar</Styled.Button>
            </Styled.ContainerCuponBottomSecond>
          </Styled.ContainerCuponFooter>
        </Styled.ContainerCuponMain>
      </Styled.ContainerCuponsFooter>
    </Styled.ContainerMain>
  );
};

export default MyCupons;
