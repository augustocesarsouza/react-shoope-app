import { useEffect, useRef, useState } from 'react';
import SvgArrowLeft from '../../Svg/SvgArrowLeft/SvgArrowLeft';
import * as Styled from './styled';
import SvgArrowRightHome from '../../Svg/SvgArrowRightHome/SvgArrowRightHome';

const HeaderBodyHomeShopee = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const [whichImageIs, setWhichImageIs] = useState(0);

  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -800, behavior: 'smooth' });
    }

    setWhichImageIs((prev) => {
      let newPrev = prev - 1;

      if (newPrev === -1) {
        if (imageContainerRef.current) {
          imageContainerRef.current.scrollBy({ left: 2400, behavior: 'smooth' });
        }

        return 3;
      }

      return newPrev;
    });
  };

  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 800, behavior: 'smooth' });
    }

    setWhichImageIs((prev) => {
      let newPrev = prev + 1;

      if (newPrev === 4) {
        if (imageContainerRef.current) {
          imageContainerRef.current.scrollBy({ left: -2400, behavior: 'smooth' });
        }

        return 0;
      }

      return newPrev;
    });
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      setWhichImageIs((prev) => {
        let newPrev = prev + 1;

        if (newPrev < 4) {
          if (imageContainerRef.current) {
            imageContainerRef.current.scrollBy({ left: 800, behavior: 'smooth' });
          }
        }

        if (newPrev === 4) {
          if (imageContainerRef.current) {
            imageContainerRef.current.scrollBy({ left: -2400, behavior: 'smooth' });
          }

          return 0;
        }

        return newPrev;
      });
    }, 5000);

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [whichImageIs]);

  const [showArrowToPassImage, setShowArrowToPassImage] = useState(false);

  const onMouseEnterContainerImage = () => {
    setShowArrowToPassImage(true);
  };

  const onMouseLeaveContainerImage = () => {
    setShowArrowToPassImage(false);
  };

  return (
    <Styled.ContainerFirst>
      <Styled.ContainerFirstImagesMain>
        {showArrowToPassImage && (
          <Styled.ButtonNavLeft onClick={scrollLeft} onMouseEnter={onMouseEnterContainerImage}>
            <SvgArrowLeft />
          </Styled.ButtonNavLeft>
        )}
        <Styled.ContainerFirstImages
          ref={imageContainerRef}
          onMouseEnter={onMouseEnterContainerImage}
          onMouseLeave={onMouseLeaveContainerImage}
        >
          <Styled.ContainerImgsTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435381/img-shopee-body-home/br-11134258-7r98o-m18rnetp75sy9d_xxhdpi_qq5ak8.jpg"
              alt="img-fashion-week-1"
            ></Styled.Img>
          </Styled.ContainerImgsTop>
          <Styled.ContainerImgsTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435368/img-shopee-body-home/br-11134258-7r98o-m1cqymgzfajm6e_xxhdpi_o6tp0q.jpg"
              alt="img-fashion-week-2"
            ></Styled.Img>
          </Styled.ContainerImgsTop>
          <Styled.ContainerImgsTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435376/img-shopee-body-home/br-11134258-7r98o-m1d1kwbempq8be_xxhdpi_rmui7s.jpg"
              alt="img-fashion-week-3"
            ></Styled.Img>
          </Styled.ContainerImgsTop>
          <Styled.ContainerImgsTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435372/img-shopee-body-home/br-11134258-7r98o-m1cragk1xtq8e8_xxhdpi_lpkzkn.jpg"
              alt="img-fashion-week-4"
            ></Styled.Img>
          </Styled.ContainerImgsTop>
        </Styled.ContainerFirstImages>
        <Styled.ContainerSecondImages>
          <Styled.ContainerSecondImgTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435385/img-shopee-body-home/br-50009109-f2e0271b220251fbb42ab8d1de067dc1_xhdpi_nyciii.jpg"
              alt="img-come-to-app-1"
            ></Styled.Img>
          </Styled.ContainerSecondImgTop>
          <Styled.ContainerSecondImgTop>
            <Styled.Img
              src="https://res.cloudinary.com/dyqsqg7pk/image/upload/v1729435388/img-shopee-body-home/br-50009109-ec5cfeb670bba21c665499a2351ac580_xhdpi_pj93g3.jpg"
              alt="img-come-to-app-2"
            ></Styled.Img>
          </Styled.ContainerSecondImgTop>
        </Styled.ContainerSecondImages>
        <Styled.ContainerQuantityImg>
          <Styled.ContainerBall $whichImageIs={whichImageIs === 0 ? 0 : -1}></Styled.ContainerBall>
          <Styled.ContainerBall $whichImageIs={whichImageIs === 1 ? 1 : -1}></Styled.ContainerBall>
          <Styled.ContainerBall $whichImageIs={whichImageIs === 2 ? 2 : -1}></Styled.ContainerBall>
          <Styled.ContainerBall $whichImageIs={whichImageIs === 3 ? 3 : -1}></Styled.ContainerBall>
        </Styled.ContainerQuantityImg>
        {showArrowToPassImage && (
          <Styled.ButtonNavRight onClick={scrollRight} onMouseEnter={onMouseEnterContainerImage}>
            <SvgArrowRightHome />
          </Styled.ButtonNavRight>
        )}
      </Styled.ContainerFirstImagesMain>
    </Styled.ContainerFirst>
  );
};

export default HeaderBodyHomeShopee;
