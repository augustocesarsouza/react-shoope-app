import { useEffect, useRef, useState } from 'react';
import * as Styled from './styled';

interface FooterForFlashOfferProps {
  functionGetMoreProductPaginate: (value: boolean) => void;
}

const FooterForFlashOffer = ({ functionGetMoreProductPaginate }: FooterForFlashOfferProps) => {
  const containerMainRef = useRef<HTMLDivElement | null>(null);
  const [isBelowViewport, setIsBelowViewport] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const handleScroll = () => {
      if (containerMainRef.current) {
        const rect = containerMainRef.current.getBoundingClientRect();
        const isBelow = rect.bottom <= window.innerHeight;

        setIsBelowViewport(isBelow);
      }
    };

    setTimeout(() => {
      // Adiciona o evento de scroll
      window.addEventListener('scroll', handleScroll);

      // Checa inicialmente
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    functionGetMoreProductPaginate(isBelowViewport);
  }, [isBelowViewport]);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerFirstPart ref={containerMainRef}>
        <Styled.Span>Página inicial</Styled.Span>
        <Styled.Span>{'>'}</Styled.Span>
        <Styled.Span>Ofertas Relâmpago</Styled.Span>
      </Styled.ContainerFirstPart>

      <Styled.ContainerSecondPart>
        <Styled.H1>Encontre as melhores ofertas relâmpago Shopee</Styled.H1>
        <Styled.Span>
          Aproveite para comprar nas ofertas relâmpago Shopee e encontre seleções de produtos
          especiais a cada 2 horas! Além de economizar em diversas categorias como celulares e
          acessórios, casa e decoração, limpeza e mercado e muitas outras, você recebe seus produtos
          com frete grátis. Baixe agora mesmo o aplicativo da Shopee e economize em produtos de
          qualidade.
        </Styled.Span>
        <Styled.Span>
          Todo os dias, você encontra novas seleções de produtos que duram por tempo limitado. Então
          não perca tempo e compre tudo do seu carrinho com preços realmente baixos.
        </Styled.Span>
      </Styled.ContainerSecondPart>
      <Styled.ContainerSecondPart>
        <Styled.H1>Divirta-se explorando as ofertas</Styled.H1>
        <Styled.Span>
          As Ofertas Relâmpago da Shopee Brasil abrangem uma grande variedade de produtos de todas
          as categorias da nossa plataforma, ou seja, sempre temos alguma coisa para você! Dê uma
          olhada em algumas coisas que temos por aqui: Para quem gosta de tecnologia, veja nossos
          dispositivos eletrônicos como celulares e acessórios, acessórios para veículos e vídeo
          games.
        </Styled.Span>
        <Styled.Span>
          Para uma casa mais linda e organizada, confira nossos itens de decoração, cozinha, caixas
          organizadoras, equipamentos de limpeza e muito mais! Navegue por todo app ou site e
          descubra mais categorias e suas respectivas promoções!
        </Styled.Span>
      </Styled.ContainerSecondPart>
      <Styled.ContainerSecondPart>
        <Styled.H1>Compre com frete grátis na Shopee Brasil!</Styled.H1>
        <Styled.Span>
          Com nossas promoções e descontos diários, você pode levar tudo o que deseja sem precisar
          gastar muito. Mas além disso, é muito bom fazer compras online pelo app da Shopee porque a
          experiência é incrível. Você faz suas compras em poucos segundos de maneira rápida e
          simples. Basta alguns toques no celular para você escolher seus produtos e fazer
          pagamentos, até quando estiver fora de casa! Ainda tem mais: nós sempre te mandamos cupons
          por notificação. Fique ligado e aproveite descontos que chegarão exclusivamente para você.
        </Styled.Span>
        <Styled.Span>
          Confira nosso site diariamente para aproveitar as melhores oportunidades, aproveite os
          preços baixos e ganhe frete grátis. Confira as condições para receber o frete gratuito.
        </Styled.Span>
      </Styled.ContainerSecondPart>

      <Styled.ContainerThirdPart>
        <Styled.H1>Segurança e praticidade em suas compras</Styled.H1>
        <Styled.Span>Faça suas compras online de forma tranquila e segura.</Styled.Span>

        <Styled.ContainerUl>
          <Styled.Span>Confira alguns links que podem ser úteis nas suas compras:</Styled.Span>

          <Styled.Ul>
            <Styled.Li>Baixar o aplicativo da Shopee Brasil</Styled.Li>
            <Styled.Li>Garantia Shopee</Styled.Li>
            <Styled.Li>Cupons Diários</Styled.Li>
            <Styled.Li>Frete Grátis</Styled.Li>
            <Styled.Li>Vendedores Locais</Styled.Li>
            <Styled.Li>Blog da Shopee Brasil</Styled.Li>
          </Styled.Ul>
        </Styled.ContainerUl>

        <Styled.Span>
          Na Shopee Brasil você tem acesso aos melhores preços com recomendações exclusivas.
        </Styled.Span>
      </Styled.ContainerThirdPart>
    </Styled.ContainerMain>
  );
};

export default FooterForFlashOffer;
