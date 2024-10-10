import { useEffect, useState } from 'react';
import FirstPromotion from '../FirstPromotion/FirstPromotion';
import * as Styled from './styled';
import SecondPromotion from '../SecondPromotion/SecondPromotion';

export interface FirstPromotionProps {
  whatIsThePromotion: number;
  title: string;
  description: string;
  date: string;
  img: string;
}

export interface SecondPromotionProps {
  whatIsThePromotion: number;
  title: string;
  description: string;
  date: string;
  img: string;
  imgInnerFirst: string;
  altImgInnerFirst: string;
  imgInnerSecond: string;
  altImgInnerSecond: string;
  imgInnerThird: string;
  altImgInnerThird: string;
}

const Promotion = () => {
  const [firstPromotion, setFirstPromotion] = useState<FirstPromotionProps | null>(null);
  const [secondPromotion, setSecondPromotion] = useState<SecondPromotionProps | null>(null);
  const [thirdPromotion, setThirdPromotion] = useState<SecondPromotionProps | null>(null);

  useEffect(() => {
    const obj = {
      whatIsThePromotion: 1,
      title: 'Frete Grátis exclusivo para você ���',
      description:
        'Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉',
      date: '09/10/2024 06:15',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728558538/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_mbtsoj.jpg',
    };

    const obj1 = {
      whatIsThePromotion: 2,
      title: 'Descontos acima de 40%',
      description: 'Oi, h1u7o8o4qf! Compre já Escova Secadora Alisad... com desconto!',
      date: '08/10/2024 13:00',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728560170/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_qst4gp.jpg',
      imgInnerFirst:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728560448/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_goi4i1.jpg',
      altImgInnerFirst: 'hairdryer',
      imgInnerSecond:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728560475/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_unvjch.jpg',
      altImgInnerSecond: 'wardrobe',
      imgInnerThird:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728560504/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_eheweq.jpg',
      altImgInnerThird: 'watch',
    };

    const obj2 = {
      whatIsThePromotion: 2,
      title: 'Menos de R$30,00',
      description: 'Oi, h1u7o8o4qf! Compre já Kit 10 prato fundo com... com desconto!',
      date: '07/10/2024 12:02',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728560170/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_qst4gp.jpg',
      imgInnerFirst:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566924/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_ra6shy.jpg',
      altImgInnerFirst: 'plate',
      imgInnerSecond:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566958/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_ah0rg1.jpg',
      altImgInnerSecond: 'Bad',
      imgInnerThird:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566987/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_povprf.jpg',
      altImgInnerThird: 'device-massager-feet',
    };

    setFirstPromotion(obj);
    setSecondPromotion(obj1);
    setThirdPromotion(obj2);
  }, []);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerHeader>
        <Styled.H1>Marcar todas as mensagens como lidas</Styled.H1>
      </Styled.ContainerHeader>

      <Styled.ContainerBody>
        {firstPromotion !== null && firstPromotion.whatIsThePromotion === 1 && (
          <FirstPromotion firstPromotion={firstPromotion} />
        )}

        {secondPromotion !== null && secondPromotion.whatIsThePromotion === 2 && (
          <SecondPromotion secondPromotion={secondPromotion} />
        )}
        {thirdPromotion !== null && thirdPromotion.whatIsThePromotion === 2 && (
          <SecondPromotion secondPromotion={thirdPromotion} />
        )}
      </Styled.ContainerBody>
    </Styled.ContainerMain>
  );
};

export default Promotion;
