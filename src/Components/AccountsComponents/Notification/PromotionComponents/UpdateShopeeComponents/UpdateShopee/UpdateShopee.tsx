import { useEffect, useState } from 'react';
import * as Styled from './styled';
import FirstAttShopee from '../FirstAttShopee/FirstAttShopee';

export interface FirstAttShopeeProps {
  id: string;
  title: string;
  description: string;
  date: string;
  img: string;
}

const UpdateShopee = () => {
  const [objAttShopeeAll, setObjAttShopeeAll] = useState<FirstAttShopeeProps[] | null>(null);

  useEffect(() => {
    const obj1: FirstAttShopeeProps = {
      id: '33304ca8-d8a2-4a67-8df2-2b3b597280ed',
      title: 'Alerta de Alteração de Senha',
      description:
        'Sua nova senha foi criada em Campo Grande, BR, pelo dispositivo desktop as 03-10-2024 10:58. Se essa alteração não foi feita por você, entre em contato com o Atendimento ao Cliente imediatamente.',
      date: '2024-10-09T06:15:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728902181/img-shopee/0654edf568f0a0638391ae23bcd6a1a7_tn_ua8ytj.png',
    };

    const obj2: FirstAttShopeeProps = {
      id: 'a0647ffa-1d44-4a67-9708-bf255f01c9cb',
      title: 'Queremos te conhecer melhor!',
      description: 'Complete o seu perfil para melhorarmos a sua experiência na Shopee!',
      date: '2024-10-13T09:03:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728903558/img-shopee/fd09478edbde0ab3e9bc5a0af2294d5a_tn_kkjcb2.jpg',
    };

    const obj3: FirstAttShopeeProps = {
      id: '6c66f770-4d5f-497c-8bff-f5787efedea8',
      title: 'Alerta de Alteração de Senha',
      description:
        'Sua nova senha foi criada em Campo Grande, BR, pelo dispositivo desktop as 03-10-2024 10:55. Se essa alteração não foi feita por você, entre em contato com o Atendimento ao Cliente imediatamente.',
      date: '2024-10-09T06:12:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728902181/img-shopee/0654edf568f0a0638391ae23bcd6a1a7_tn_ua8ytj.png',
    };

    const obj4: FirstAttShopeeProps = {
      id: '3dd2af06-a54e-413d-a652-ad78a26a4ab7',
      title: 'Falha na verificação',
      description: 'Falha na verificação do CPF. Tente novamente mais tarde',
      date: '2024-09-18T06:58:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728904853/img-shopee/sg-11134004-23030-4ua8nwy4tcovc0_tn_1_lyj0wz.jpg',
    };

    const obj5: FirstAttShopeeProps = {
      id: '1843ec51-7cef-4401-9b4b-7c31df490bf3',
      title: 'Alerta de Cadastro de Email',
      description:
        'Sua nova senha foi criada em Campo Grande, BR, pelo dispositivo desktop as 16-09-2024 07:55. Se essa alteração não foi feita por você, entre em contato com o Atendimento ao Cliente imediatamente.',
      date: '2024-09-16T06:45:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728902181/img-shopee/0654edf568f0a0638391ae23bcd6a1a7_tn_ua8ytj.png',
    };

    setObjAttShopeeAll((prev) => {
      if (prev !== null) {
        return [...prev, obj1, obj2, obj3, obj4, obj5];
      }

      return [];
    });
  }, []);

  return (
    <Styled.ContainerMain>
      <Styled.ContainerHeader>
        <Styled.H1>Marcar todas as mensagens como lidas</Styled.H1>
      </Styled.ContainerHeader>
      <Styled.ContainerAllUpdateShopee>
        {objAttShopeeAll !== null &&
          objAttShopeeAll.length > 0 &&
          objAttShopeeAll.map((el, index) => (
            <div key={el.id}>
              <FirstAttShopee firstAttShopee={el} firstAttShopeeNumber={index + 1} />
            </div>
          ))}
      </Styled.ContainerAllUpdateShopee>
    </Styled.ContainerMain>
  );
};

export default UpdateShopee;
