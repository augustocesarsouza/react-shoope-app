import { useEffect, useState } from 'react';
import FirstPromotion from '../FirstPromotion/FirstPromotion';
import * as Styled from './styled';
import SecondPromotion from '../SecondPromotion/SecondPromotion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';

export interface PromotionProps {
  id: string;
  promotionDTO: PromotionDTO;
}

export interface PromotionDTO {
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
  const [allPromotionDTO, setAllPromotionDTO] = useState<PromotionProps[] | null>(null);

  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (location.state) {
      const objState = location.state;
      let userLocalStorage = localStorage.getItem('user');

      if (userLocalStorage === null) {
        nav('/login');

        return;
      }

      if (objState.user === null || objState.user === undefined) {
        localStorage.removeItem('user');

        nav('/login');
        return;
      }

      getPromotionUser(objState.user.id);
    }
  }, []);

  const getPromotionUser = async (userId: string) => {
    const res = await fetch(`${Url}/promotion-user/get-by-user-id-all/${userId}`);

    if (res.status === 200) {
      const json = await res.json();
      setAllPromotionDTO(json.data);
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerHeader>
        <Styled.H1>Marcar todas as mensagens como lidas</Styled.H1>
      </Styled.ContainerHeader>

      <Styled.ContainerBody>
        {allPromotionDTO &&
          allPromotionDTO.map((el: PromotionProps) => (
            <div key={el.id}>
              {el.promotionDTO.whatIsThePromotion === 1 && <FirstPromotion firstPromotion={el} />}

              {el.promotionDTO.whatIsThePromotion === 2 && <SecondPromotion secondPromotion={el} />}
            </div>
          ))}
      </Styled.ContainerBody>
    </Styled.ContainerMain>
  );
};

export default Promotion;
