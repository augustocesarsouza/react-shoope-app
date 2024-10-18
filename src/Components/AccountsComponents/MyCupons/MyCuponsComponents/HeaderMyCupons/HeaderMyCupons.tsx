import * as Styled from './styled';

const HeaderMyCupons = () => {
  return (
    <Styled.ContainerHeader>
      <Styled.H1>Meus cupons</Styled.H1>

      <Styled.ContainerSecondSpans>
        <Styled.Span>Pegue mais cupons</Styled.Span>
        <Styled.Span>Ver histórico de cupons</Styled.Span>
        <Styled.Span>Veja mais</Styled.Span>
      </Styled.ContainerSecondSpans>
    </Styled.ContainerHeader>
  );
};

export default HeaderMyCupons;
