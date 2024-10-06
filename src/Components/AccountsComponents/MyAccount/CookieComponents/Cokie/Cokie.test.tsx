import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Cokie from './Cokie';

describe('Cokie', () => {
  it('should render Cokie Component', async () => {
    const { container } = render(
      <MemoryRouter>
        <Cokie />
      </MemoryRouter>
    );

    const header1 = screen.getByRole('heading', { name: 'Preferências de cookies' });
    expect(header1).toBeInTheDocument();

    const span1 = screen.getByText(
      'Usamos cookies e ferramentas semelhantes (coletivamente referidos como "cookies") para os fins descritos abaixo. Para cada uma das finalidades a seguir, você pode optar por ativar os cookies selecionando a respectiva chave. Observe que, a menos que você esteja conectado, suas escolhas só serão efetivas no navegador da web e no dispositivo que você está usando no momento.'
    );
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText('Aceitar todos os cookies');
    expect(span2).toBeInTheDocument();

    const header2 = screen.getByRole('heading', { name: 'Cookies essenciais' });
    expect(header2).toBeInTheDocument();

    const span3 = screen.getByText(
      'Essencial para tornar a plataforma utilizável, permitindo funções básicas, como navegação na página e acesso a áreas seguras da plataforma. A utilização destes cookies não requer o seu consentimento.'
    );
    expect(span3).toBeInTheDocument();

    const header3 = screen.getByRole('heading', { name: 'Cookies analíticos' });
    expect(header3).toBeInTheDocument();

    const span4 = screen.getByText(
      'Coleta informações técnicas sobre sua visita e interações com a plataforma para entender seu uso dos serviços e melhorar sua experiência de usuário.'
    );
    expect(span4).toBeInTheDocument();

    const spanAcceptAll = container.querySelectorAll('.span-accept-cookie');
    expect(spanAcceptAll.length).toBe(4);

    const header4 = screen.getByRole('heading', { name: 'Cookies funcionais' });
    expect(header4).toBeInTheDocument();

    const span5 = screen.getByText(
      'Habilita determinadas funções da plataforma, coleta informações sobre suas atividades e lembra de certas preferências e configurações que você especifica na plataforma.'
    );
    expect(span5).toBeInTheDocument();

    const header5 = screen.getByRole('heading', { name: 'Cookies de publicidade personalizada' });
    expect(header5).toBeInTheDocument();

    const span6 = screen.getByText(
      /Recolhe informações sobre a sua atividade no site ou atividade de navegação para apresentar conteúdos mais relevantes para você e para os seus interesses./
    );
    expect(span6).toBeInTheDocument();

    const header6 = screen.getByRole('heading', { name: 'Cookies terceirizados' });
    expect(header6).toBeInTheDocument();

    const span7 = screen.getByText(
      /Esses cookies podem ser fornecidos por provedores de análise de terceiros ou para fins de publicidade, mas são usados apenas para fins relacionados aos nossos serviços./
    );
    expect(span7).toBeInTheDocument();

    const span8 = screen.getByText(/Ver mais/);
    expect(span8).toBeInTheDocument();

    expect.assertions(15);
  });
});
