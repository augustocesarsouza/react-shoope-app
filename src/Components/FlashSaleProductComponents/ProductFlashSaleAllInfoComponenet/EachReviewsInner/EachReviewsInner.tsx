import { useEffect, useRef, useState } from 'react';
import SvgUserBody from '../../../HeaderComponents/AllSvgHeader/SvgUserBody/SvgUserBody';
import { ProductFlashSaleReviewsProps } from '../../ProductReviews/ProductReviews';
import * as Styled from './styled';
import SvgStar from '../../../Svg/SvgStar/SvgStar';
import SvgVideMedia from '../../../Svg/SvgVideMedia/SvgVideMedia';
import SvgPlayVideo from '../../../Svg/SvgPlayVideo/SvgPlayVideo';
import SvgLike from '../../../Svg/SvgLike/SvgLike';
import { GetUserFromLocalStorage } from '../../../LoginComponents/GetUserFromLocalStorage/GetUserFromLocalStorage';
import { ObjUser } from '../../../InterfaceAll/IObjUser/IObjUser';
import { Url } from '../../../../Utils/Url';
import { useNavigate } from 'react-router-dom';

interface EachReviewsInnerProps {
  product: ProductFlashSaleReviewsProps;
}

interface allLikesReviewsProps {
  id: string;
  productFlashSaleReviewsId: string;
  userId: string;
  alreadyExistLikeReview: boolean;
}

const EachReviewsInner = ({ product }: EachReviewsInnerProps) => {
  const [countStarArray, setCountStarArray] = useState<number[] | null>(null);
  const [dateCreationString, setDateCreationString] = useState<string | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    // getFlashSaleProductByProductFlashSaleId(getFlashSaleProduct);
    // console.log(product);

    let dateCreation = new Date(product.creationDate);

    let fullYear = dateCreation.getFullYear();

    let month = dateCreation.getMonth();
    let monthString = ``;

    let day = dateCreation.getDate();
    let dayString = ``;

    let hours = dateCreation.getHours();
    let hoursString = ``;
    let minutes = dateCreation.getMinutes();
    let minutesString = ``;

    if (month < 10) {
      monthString = `0${month}`;
    }

    if (day < 10) {
      dayString = `0${day}`;
    }

    if (hours < 10) {
      hoursString = `0${hours}`;
    } else {
      hoursString = `${hours}`;
    }

    if (minutes < 10) {
      minutesString = `0${minutes}`;
    } else {
      minutesString = `${minutes}`;
    }

    let dateCreationString = `${fullYear}-${month}-${dayString} ${hours}:${minutesString}`;
    setDateCreationString(dateCreationString);

    let countStarArray = [];

    for (let i = 1; i <= product.starQuantity; i++) {
      countStarArray.push(i);
    }

    setCountStarArray(countStarArray);
  }, [product]);

  const [imgDataUrlString, setImgDataUrlString] = useState('');
  const [durationFormatted, setDurationFormatted] = useState('');

  const functionImg = async (product: string): Promise<string> => {
    // Cria elementos <video> e <canvas> dinamicamente

    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    return new Promise((resolve, reject) => {
      video.src = product;
      video.crossOrigin = 'anonymous'; // Permite acesso a vídeos externos
      video.currentTime = 2; // Define o tempo do frame desejado (1 segundo)

      video.addEventListener('loadeddata', () => {
        video.pause();

        const durationFormatted = formatTime(video.duration);
        setDurationFormatted(durationFormatted);

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Desenha o frame no canvas
        if (context) {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
        }

        // Converte o frame para uma URL de imagem em base64
        const imgDataUrl = canvas.toDataURL('image/png');
        resolve(imgDataUrl); // Retorna a string base64
      });

      video.addEventListener('error', (e) => reject(e));
    });
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    // return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    //   .toString()
    //   .padStart(2, '0')}`;
    return `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  (async () => {
    for (let i = 0; i < product.imgAndVideoReviewsProduct.length; i++) {
      const element = product.imgAndVideoReviewsProduct[i];

      if (element.includes('/video/')) {
        const imgDataUrlString = await functionImg(element);
        setImgDataUrlString(imgDataUrlString);
      }
    }
  })();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [productVideUrl, setProductVideUrl] = useState<string | null>(null);
  const [alreadyClickedVideo, setAlreadyClickedVideo] = useState(false);
  const [showSvgPlay, setShowSvgPlay] = useState(true);
  const [mouseEnterSvgPlayVideo, setMouseEnterSvgPlayVideo] = useState(true);
  const [productImageUrl, setProductImageUrl] = useState<string | null>(null);
  const [alreadyClickedImage, setAlreadyClickedImage] = useState(false);
  const [indexImg, setIndexImg] = useState<number | null>(null);

  const onClickImageReviews = (productImageUrl: string, indexImg: number) => {
    setAlreadyClickedVideo(false);
    setAlreadyClickedImage(true);

    setProductImageUrl((prev) => {
      if (prev === productImageUrl) {
        setIndexImg(null);
        return null;
      }

      setIndexImg(indexImg);
      return productImageUrl;
    });
  };

  const onClickVideoReviews = (productVideUrl: string, indexVideo: number) => {
    setAlreadyClickedVideo((prev) => !prev);
    setAlreadyClickedImage(false);

    setProductVideUrl((prev) => {
      if (prev === productVideUrl) {
        setIndexImg(null);
        return null;
      }

      setIndexImg(indexVideo);
      return productVideUrl;
    });
  };

  const onClickContainerVideoReviews = () => {
    if (videoRef.current === null) return;

    let video = videoRef.current;
    if (mouseEnterSvgPlayVideo) return;

    if (video) {
      if (video.paused) {
        video.play();

        setShowSvgPlay(false);
      } else {
        video.pause();
        // setShowSvgPlay(true);
        setShowSvgPlay(true);
        setMouseEnterSvgPlayVideo(true);
      }
    }
  };

  const onClickContainerSvgPlayVideo = () => {
    if (videoRef.current === null) return;

    let video = videoRef.current;
    setMouseEnterSvgPlayVideo(false);

    if (video) {
      if (video.paused) {
        video.play();
        setShowSvgPlay(false);
      } else {
        video.pause();
        setShowSvgPlay(true);
      }
    }
  };

  const onMouseEnterSvgPlayVideo = () => {
    // setMouseEnterSvgPlayVideo(true);
  };

  const onMouseLeaveSvgPlayVideo = () => {
    setMouseEnterSvgPlayVideo(false);
  };

  const [userObj, setUserObj] = useState<ObjUser | null>(null);

  useEffect(() => {
    const objUser = GetUserFromLocalStorage();

    if (objUser.user) {
      setUserObj(objUser.user);
      getAllLikesReviews(product.id, objUser.user);
    }
  }, [product]);

  const [allLikesReviews, setAllLikesReviews] = useState<allLikesReviewsProps[]>([]);
  const [createLike, setCreateLike] = useState<boolean | null>(null);

  const getAllLikesReviews = async (productFlashSaleId: string, user: ObjUser) => {
    const res = await fetch(
      `${Url}/like-review/get-by-product-flash-sale-reviews-id/${productFlashSaleId}`,
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
      let data: allLikesReviewsProps[] = json.data;

      setAllLikesReviews(data);

      let idUser = user.id;

      if (data.find((a) => a.userId === idUser) !== undefined) {
        setCreateLike(false);
      } else {
        setCreateLike(true);
      }
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

  const onClickContainerImageReviews = () => {};

  const [isProcessing, setIsProcessing] = useState(false);

  const onClickContainerLike = async () => {
    if (userObj === null || isProcessing) return;

    setIsProcessing(true); // Bloqueia novas ações enquanto processa

    if (createLike) {
      await createLikeReview(userObj.id, product.id);
    } else {
      const value = await deleteLikeReview(userObj, product.id);
      if (value) {
        console.log(value);
        if (!value.alreadyExistLikeReview) {
          setCreateLike(true);
          setAllLikesReviews((prev) => prev.filter((el) => el.userId !== value.userId));
        }
      } else {
        console.log('Nenhum dado encontrado ou houve um erro.');
      }
    }

    setIsProcessing(false); // Libera para novas ações
  };

  const createLikeReview = async (idUser: string, productFlashSaleReviewsId: string) => {
    const obj = {
      ProductFlashSaleReviewsId: productFlashSaleReviewsId,
      UserId: idUser,
    };

    const res = await fetch(`${Url}/like-review/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (res.status === 200) {
      const json = await res.json();
      let data: allLikesReviewsProps = json.data;

      if (!data.alreadyExistLikeReview) {
        setCreateLike(false);
        setAllLikesReviews((prev) => [...prev, data]);
      }
    }
  };

  const deleteLikeReview = async (
    userObj: ObjUser,
    productFlashSaleReviewsId: string
  ): Promise<allLikesReviewsProps | null | void> => {
    const obj = {
      ProductFlashSaleReviewsId: productFlashSaleReviewsId,
      UserId: userObj.id,
    };

    const res = await fetch(`${Url}/like-review/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (res.status === 200) {
      const json = await res.json();
      return json.data;
    }

    return null;
  };

  return (
    <Styled.ContainerImgAndSvg>
      <Styled.Container>
        {product.userDTO.userImage && (
          <Styled.ContainerImgUser>
            <Styled.Img src={product.userDTO.userImage} alt="img-user" />
          </Styled.ContainerImgUser>
        )}

        {!product.userDTO.userImage && (
          <Styled.ContanerSvgWithoutImage>
            <SvgUserBody />
          </Styled.ContanerSvgWithoutImage>
        )}
      </Styled.Container>
      <Styled.ContainerUserInfo>
        <Styled.Span>{product.userDTO.name}</Styled.Span>

        <Styled.ContainerQuantityStar>
          <Styled.ContainerStarRedSvg>
            {countStarArray && countStarArray.map((el) => <SvgStar key={el} />)}
          </Styled.ContainerStarRedSvg>
          <Styled.ContainerStarBlackSvg>
            {countStarArray &&
              Array.from({ length: 5 - countStarArray.length }).map((_, index) => (
                <SvgStar key={index} />
              ))}
          </Styled.ContainerStarBlackSvg>
        </Styled.ContainerQuantityStar>
        <Styled.ContainerSpanDataCration>
          {dateCreationString && <Styled.Span>{dateCreationString}</Styled.Span>}|
          {product && <Styled.Span>{product.variation}</Styled.Span>}
        </Styled.ContainerSpanDataCration>

        <Styled.ContainerCostBenefitSimilarToAdMain>
          <Styled.ContainerCostBenefitSimilarToAd>
            <Styled.Span>
              Custo-benefício:
              <Styled.Span>{product.costBenefit}</Styled.Span>
            </Styled.Span>
          </Styled.ContainerCostBenefitSimilarToAd>
          <Styled.ContainerCostBenefitSimilarToAd>
            <Styled.Span>
              Parecido com anúncio:
              <Styled.Span>{product.similarToAd}</Styled.Span>
            </Styled.Span>
          </Styled.ContainerCostBenefitSimilarToAd>
        </Styled.ContainerCostBenefitSimilarToAdMain>

        <Styled.ContainerComments>
          <Styled.Span>{product.message}</Styled.Span>
        </Styled.ContainerComments>

        <Styled.ContainerImgAndVideoReviews>
          {product.imgAndVideoReviewsProduct &&
            product.imgAndVideoReviewsProduct.map((product: string, i) => {
              if (product.includes('/video/')) {
                return (
                  <Styled.ContainerImgVideoReviewsMain
                    key={i}
                    onClick={() => onClickVideoReviews(product, i)}
                    $index={i}
                    $indexImg={indexImg}
                  >
                    <Styled.ContainerImgVideoReviews $imgUrl={imgDataUrlString}>
                      <Styled.Container></Styled.Container>
                    </Styled.ContainerImgVideoReviews>

                    <Styled.ContainerVideMediaAndMinutes>
                      <SvgVideMedia />
                      <Styled.Span>{durationFormatted}</Styled.Span>
                    </Styled.ContainerVideMediaAndMinutes>
                  </Styled.ContainerImgVideoReviewsMain>
                );
              } else if (product.includes('/image/')) {
                return (
                  <Styled.ContainerImgReviews
                    key={i}
                    onClick={() => onClickImageReviews(product, i)}
                    $index={i}
                    $indexImg={indexImg}
                  >
                    <Styled.Img src={product} alt="img-reviews" />
                  </Styled.ContainerImgReviews>
                );
              }
            })}
        </Styled.ContainerImgAndVideoReviews>

        {productVideUrl && alreadyClickedVideo && (
          <Styled.ContainerVideoReviews>
            <Styled.Video
              src={productVideUrl}
              ref={videoRef}
              onClick={onClickContainerVideoReviews}
            />

            {showSvgPlay && (
              <Styled.ContainerSvgPlayVideo
                onClick={onClickContainerSvgPlayVideo}
                onMouseEnter={onMouseEnterSvgPlayVideo}
                onMouseLeave={onMouseLeaveSvgPlayVideo}
              >
                <SvgPlayVideo />
              </Styled.ContainerSvgPlayVideo>
            )}
          </Styled.ContainerVideoReviews>
        )}

        {productImageUrl && alreadyClickedImage && (
          <Styled.ContainerImageReviews>
            <Styled.Container>
              <Styled.Img
                src={productImageUrl}
                alt="img-cliked-product"
                onClick={onClickContainerImageReviews}
              />
            </Styled.Container>
          </Styled.ContainerImageReviews>
        )}

        <Styled.ContainerLike>
          <Styled.Container onClick={onClickContainerLike}>
            <SvgLike />
            {/* <Styled.Span>{product.likes}</Styled.Span> */}
            <Styled.Span>{allLikesReviews.length}</Styled.Span>
          </Styled.Container>
        </Styled.ContainerLike>
      </Styled.ContainerUserInfo>
    </Styled.ContainerImgAndSvg>
  );
};

export default EachReviewsInner;
