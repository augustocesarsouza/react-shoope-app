import * as Styled from './styled';

const NoneCopunFound = () => {
  return (
    <Styled.ContainerNoneCopunFound>
      <Styled.ContainerImgCuponNotFound>
        <Styled.Img
          src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729086134/img-shopee/CuponsNoneFound_rmpnwt.png"
          alt="img-cupon-not-found"
        />
      </Styled.ContainerImgCuponNotFound>
      <Styled.H1>Nenhum cupom correspondente</Styled.H1>
      <Styled.Span>Resgate mais cupons e encontre-os aqui!</Styled.Span>
      <Styled.Button>Pegue mais cupons</Styled.Button>
    </Styled.ContainerNoneCopunFound>
  );
};

export default NoneCopunFound;
