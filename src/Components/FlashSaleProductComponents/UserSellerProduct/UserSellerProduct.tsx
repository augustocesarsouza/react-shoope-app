import * as Styled from './styled';
import { IProductSeller } from '../../InterfaceAll/IProductSeller/IProductSeller';
import MessageSvg from '../../Svg/MessageSvg/MessageSvg';
import PageStoreSvg from '../../Svg/PageStoreSvg/PageStoreSvg';
import { useEffect, useState } from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface UserSellerProductProps {
  userSellerProductDTO: IProductSeller;
}

const UserSellerProduct = ({ userSellerProductDTO }: UserSellerProductProps) => {
  const [lastLoginDate, setLastLoginDate] = useState('');
  const [accountCreationDate, setAccountCreationDate] = useState('');

  useEffect(() => {
    const lastLogin = userSellerProductDTO.userSellerProductDTO.lastLogin;
    const accountCreationDate = userSellerProductDTO.userSellerProductDTO.accountCreationDate;

    if (lastLogin) {
      const lastLoginDate = parseISO(lastLogin);

      let timeDifference = formatDistanceToNow(lastLoginDate, { addSuffix: true, locale: ptBR });
      timeDifference = timeDifference.replace('há cerca de', 'Há ').replace(/\s+/g, ' ').trim();

      setLastLoginDate(timeDifference);
    }

    if (accountCreationDate) {
      // let accountCreationDateNew = '2024-10-02T14:22:08.243937Z';
      const accountCreationDateDate = parseISO(accountCreationDate);

      let timeDifference = formatDistanceToNow(accountCreationDateDate, {
        addSuffix: true,
        locale: ptBR,
      });
      timeDifference = timeDifference.replace('há cerca de', '').replace(/\s+/g, ' ').trim();
      setAccountCreationDate(timeDifference);

      // setLastLoginDate(timeDifference);
    }
  }, [userSellerProductDTO]);

  const formatChatNow = (chatNow: string) => {
    let chatNowFormat = chatNow.slice(0, 12) + '...';

    return chatNowFormat;
  };

  const formatViewPageStore = (string: string) => {
    let stringFormat = string.slice(0, 13) + '...';

    return stringFormat;
  };

  const formatReviews = (reviews: number) => {
    if (reviews > 1000) {
      // Divide por 1000, fixa 1 casa decimal e adiciona 'mil'
      return (reviews / 1000).toFixed(1).replace('.', ',') + 'mil';
    }

    return reviews.toString();
  };

  const formatFollowers = (followers: number) => {
    if (followers >= 1_000_000) {
      const millions = followers / 1_000_000;

      return millions % 1 === 0
        ? `${millions.toFixed(0)}mi`
        : `${millions.toFixed(1).replace('.', ',')}mi`;
    } else if (followers >= 1_000) {
      const thousands = followers / 1_000;
      return thousands % 1 === 0
        ? `${thousands.toFixed(0)}mil`
        : `${thousands.toFixed(1).replace('.', ',')}mil`;
    }

    return followers.toString();
  };

  const formatProducts = (products: number) => {
    if (products >= 1_000_000) {
      const millions = products / 1_000_000;

      return millions % 1 === 0
        ? `${millions.toFixed(0)}mi`
        : `${millions.toFixed(1).replace('.', ',')}mi`;
    } else if (products >= 1_000) {
      const thousands = products / 1_000;
      return thousands % 1 === 0
        ? `${thousands.toFixed(0)}mil`
        : `${thousands.toFixed(1).replace('.', ',')}mil`;
    }

    return products.toString();
  };

  return (
    <Styled.ContainerAllInfoAboutUserWhoCreatedProduct>
      <Styled.ContainerUserCreatedProductInfo>
        <Styled.ContainerUserImg>
          <Styled.Img
            src={userSellerProductDTO.userSellerProductDTO.imgPerfil}
            alt="img-user-created"
          />

          {userSellerProductDTO.userSellerProductDTO.imgFloating && (
            <Styled.Img
              src={userSellerProductDTO.userSellerProductDTO.imgFloating}
              alt="official-floating"
            />
          )}
        </Styled.ContainerUserImg>

        <Styled.ContainerUserNameAndOtherInfos>
          <Styled.H1>{userSellerProductDTO.userSellerProductDTO.name}</Styled.H1>
          <Styled.Span>Último login {lastLoginDate}</Styled.Span>

          <Styled.ContainerChatAndViewStorePage>
            <Styled.Container>
              <MessageSvg />
              <Styled.Span>{formatChatNow('Conversar Agora')}</Styled.Span>
            </Styled.Container>

            <Styled.Container>
              <PageStoreSvg />
              <Styled.Span>{formatViewPageStore('Ver Página Da Loja')}</Styled.Span>
            </Styled.Container>
          </Styled.ContainerChatAndViewStorePage>
        </Styled.ContainerUserNameAndOtherInfos>
      </Styled.ContainerUserCreatedProductInfo>

      <Styled.ContainerOtherInfoAboutAccountCreatedProduct>
        <Styled.ContainerReviewsRateChatResponseStoreDate $whatItIs={1}>
          <Styled.Container>
            <Styled.Span>Avaliações</Styled.Span>
            <Styled.Span>
              {formatReviews(userSellerProductDTO.userSellerProductDTO.reviews)}
            </Styled.Span>
          </Styled.Container>

          <Styled.Container>
            <Styled.SpanChatResponseRate>Taxa de resposta do chat</Styled.SpanChatResponseRate>
            <Styled.Span>{userSellerProductDTO.userSellerProductDTO.chatResponseRate}%</Styled.Span>
          </Styled.Container>

          <Styled.Container>
            <Styled.Span>Loja Shopee desde</Styled.Span>
            <Styled.Span>{accountCreationDate} atrás</Styled.Span>
          </Styled.Container>
        </Styled.ContainerReviewsRateChatResponseStoreDate>
        <Styled.ContainerReviewsRateChatResponseStoreDate $whatItIs={2}>
          <Styled.Container>
            <Styled.Span>Produtos</Styled.Span>
            <Styled.Span>
              {formatProducts(userSellerProductDTO.userSellerProductDTO.quantityOfProductSold)}
            </Styled.Span>
          </Styled.Container>

          <Styled.Container>
            <Styled.SpanRespondsToChat>Geralmente responde o chat em</Styled.SpanRespondsToChat>
            <Styled.Span>
              {userSellerProductDTO.userSellerProductDTO.usuallyRespondsToChatIn}
            </Styled.Span>
          </Styled.Container>

          <Styled.Container>
            <Styled.Span>Seguidores</Styled.Span>
            <Styled.Span>
              {formatFollowers(userSellerProductDTO.userSellerProductDTO.followers)}
            </Styled.Span>
          </Styled.Container>
        </Styled.ContainerReviewsRateChatResponseStoreDate>
      </Styled.ContainerOtherInfoAboutAccountCreatedProduct>
    </Styled.ContainerAllInfoAboutUserWhoCreatedProduct>
  );
};

export default UserSellerProduct;
