import { useEffect, useState } from 'react';
import { GetFlashSaleProductProps } from '../ProductFlashSaleAllInfo/ProductFlashSaleAllInfo';
import * as Styled from './styled';
import { ObjUser } from '../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../Utils/Url';
import { useNavigate, useParams } from 'react-router-dom';
import { GetUserFromLocalStorage } from '../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import EachReviewsInner from '../ProductFlashSaleAllInfoComponenet/EachReviewsInner/EachReviewsInner';

interface ProductReviewsProps {
  getFlashSaleProduct: GetFlashSaleProductProps;
}

export interface ProductFlashSaleReviewsProps {
  costBenefit: string;
  creationDate: string;
  id: string;
  imgAndVideoReviewsProduct: string[];
  message: string;
  similarToAd: string;
  starQuantity: number;
  userDTO: ObjUser;
  variation: string;
}

const ProductReviews = ({ getFlashSaleProduct }: ProductReviewsProps) => {
  const [quantityStarRender] = useState([0, 1, 2, 3, 4]);
  const [whichStarWasClicked, setWhichStarWasClicked] = useState(0);
  const [productFlashSaleReviews, setProductFlashSaleReviews] = useState<
    ProductFlashSaleReviewsProps[] | null
  >(null);

  const obj = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getFlashSaleProductByProductFlashSaleId(getFlashSaleProduct);

    const { id } = obj;

    const objUser = GetUserFromLocalStorage();

    if (id && objUser.user) {
      getAllProductFlashSaleReviewsByProductFlashSaleId(id, objUser.user);
    }
  }, [getFlashSaleProduct, obj]);

  const [fifthHalfStar, setFifthHalfStar] = useState(false);
  const [fourthHalfStar, setFourthHalfStar] = useState(false);
  const [thirdHalfStar, setThirdHalfStar] = useState(false);
  const [secondHalfStar, setSecondHalfStar] = useState(false);
  const [firstHalfStar, setFirstHalfStar] = useState(false);
  const [allStarWithoutFill, setAllStarWithoutFill] = useState(false);

  const getFlashSaleProductByProductFlashSaleId = async (
    getFlashSaleProduct: GetFlashSaleProductProps
  ) => {
    let fifthHalfStar = false;
    let fourthHalfStar = false;
    let thirdHalfStar = false;
    let secondHalfStar = false;
    let firstHalfStar = false;
    let allStarWithoutFill = false;

    // let productReviewsRate = 3.7;
    // setProductReviewsRate(productReviewsRate);

    if (
      getFlashSaleProduct.productReviewsRate >= 4.1 &&
      getFlashSaleProduct.productReviewsRate <= 4.5
    ) {
      fifthHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 3.6 &&
      getFlashSaleProduct.productReviewsRate <= 4.0
    ) {
      fourthHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 3.1 &&
      getFlashSaleProduct.productReviewsRate <= 3.5
    ) {
      thirdHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 2.6 &&
      getFlashSaleProduct.productReviewsRate <= 3.0
    ) {
      secondHalfStar = true;
    }

    if (
      getFlashSaleProduct.productReviewsRate >= 2.1 &&
      getFlashSaleProduct.productReviewsRate <= 2.5
    ) {
      firstHalfStar = true;
    }

    if (getFlashSaleProduct.productReviewsRate <= 2.0) {
      allStarWithoutFill = true;
    }

    setFifthHalfStar(fifthHalfStar);
    setFourthHalfStar(fourthHalfStar);
    setThirdHalfStar(thirdHalfStar);
    setSecondHalfStar(secondHalfStar);
    setFirstHalfStar(firstHalfStar);
    setAllStarWithoutFill(allStarWithoutFill);
  };

  const onClickContainerStarEach = (whickContainerNumber: number) => {
    setWhichStarWasClicked(whickContainerNumber);
  };

  const getAllProductFlashSaleReviewsByProductFlashSaleId = async (
    productFlashSaleId: string,
    user: ObjUser
  ) => {
    const res = await fetch(
      `${Url}/product-flash-sale-reviews/get-all-product-flash-sale-reviews-by-product-flash-sale-id/${productFlashSaleId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${user.token}`,
          uid: user.id,
          'Content-Type': 'application/json',
        },
      }
    );

    if (res.status === 200) {
      const json = await res.json();
      let productFlashSaleReviews: ProductFlashSaleReviewsProps[] = json.data;

      setProductFlashSaleReviews(productFlashSaleReviews);
    }

    if (res.status === 400) {
      //ERROR
    }

    if (res.status === 403 || res.status === 401) {
      localStorage.removeItem('user');
      nav('/login');
      return;
    }
  };

  //https://localhost:7289/v1/product-flash-sale-reviews/get-all-product-flash-sale-reviews-by-product-flash-sale-id/c5468f70-2261-4157-b0c4-58621b122252
  //Fazer GET DOS COMENTARIO se não tiver imagem do usiario coloca a imagem sem imagem defaul se tiver colocar do usuario

  return (
    <Styled.ContainerMain>
      <Styled.H1>Avaliações do Produto</Styled.H1>

      <Styled.ContainerRateAvaliationAndStarsAndSelectWhichStar>
        <Styled.ContainerRateAvaliationAndStarsMain>
          <Styled.ContainerRateAvaliationAndStars>
            <Styled.Span>
              {getFlashSaleProduct.productReviewsRate} <Styled.Span>de 5</Styled.Span>
            </Styled.Span>

            <Styled.ContainerStarQuantity>
              {quantityStarRender.map((el) => (
                <Styled.ContainerStarMain key={el}>
                  <Styled.ContainerStar
                    $fifthHalfStar={fifthHalfStar}
                    $fourthHalfStar={fourthHalfStar}
                    $thirdHalfStar={thirdHalfStar}
                    $secondHalfStar={secondHalfStar}
                    $firstHalfStar={firstHalfStar}
                    $allStarWithoutFill={allStarWithoutFill}
                    $starIndex={el}
                  >
                    <Styled.ContainerStarImgFull></Styled.ContainerStarImgFull>
                  </Styled.ContainerStar>
                  <Styled.ContainerStarImg></Styled.ContainerStarImg>
                </Styled.ContainerStarMain>
              ))}
            </Styled.ContainerStarQuantity>
          </Styled.ContainerRateAvaliationAndStars>

          <Styled.ContainerSelectWhichStar>
            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={0}
              onClick={() => onClickContainerStarEach(0)}
            >
              <Styled.Span>Tudo</Styled.Span>
            </Styled.ContainerStarEach>
            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={1}
              onClick={() => onClickContainerStarEach(1)}
            >
              <Styled.Span>5 Estrela (0)</Styled.Span>
            </Styled.ContainerStarEach>
            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={2}
              onClick={() => onClickContainerStarEach(2)}
            >
              <Styled.Span>4 Estrela (0)</Styled.Span>
            </Styled.ContainerStarEach>
            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={3}
              onClick={() => onClickContainerStarEach(3)}
            >
              <Styled.Span>3 Estrela (0)</Styled.Span>
            </Styled.ContainerStarEach>
            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={4}
              onClick={() => onClickContainerStarEach(4)}
            >
              <Styled.Span>2 Estrela (0)</Styled.Span>
            </Styled.ContainerStarEach>

            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={5}
              onClick={() => onClickContainerStarEach(5)}
            >
              <Styled.Span>1 Estrela (0)</Styled.Span>
            </Styled.ContainerStarEach>

            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={6}
              onClick={() => onClickContainerStarEach(6)}
            >
              <Styled.Span>Com Comentários (0)</Styled.Span>
            </Styled.ContainerStarEach>

            <Styled.ContainerStarEach
              $whichStarWasClicked={whichStarWasClicked}
              $whichContainerStarItIs={7}
              onClick={() => onClickContainerStarEach(7)}
            >
              <Styled.Span>Com Mídia (0)</Styled.Span>
            </Styled.ContainerStarEach>
          </Styled.ContainerSelectWhichStar>
        </Styled.ContainerRateAvaliationAndStarsMain>

        <Styled.ContainerReviews>
          {productFlashSaleReviews &&
            productFlashSaleReviews.map((product) => (
              <EachReviewsInner key={product.id} product={product} />
            ))}
        </Styled.ContainerReviews>
      </Styled.ContainerRateAvaliationAndStarsAndSelectWhichStar>
    </Styled.ContainerMain>
  );
};

export default ProductReviews;
