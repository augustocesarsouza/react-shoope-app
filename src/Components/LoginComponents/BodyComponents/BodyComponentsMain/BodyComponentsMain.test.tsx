import { screen } from '@testing-library/dom';
import BodyComponentsMain from './BodyComponentsMain';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('BodyComponentsMain', () => {
  test('should render itens', () => {
    const { container } = render(
      <MemoryRouter>
        <BodyComponentsMain />
      </MemoryRouter>
    );

    // const h1 = screen.getByRole('heading', { name: 'O que é CVV?' });

    // const img1 = screen.getByAltText('img-card-info');
    // expect(img1).toHaveAttribute(
    //   'src',
    //   'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1704723214/Card_axu5px.png'
    // );

    const span1 = screen.getByText('Entre');
    expect(span1).toBeInTheDocument();

    const allInput = container.querySelectorAll('input');
    expect(allInput.length).toEqual(2);

    const inputFirst = screen.getByPlaceholderText('Número de telefone/Nome do usuário/Email');
    expect(inputFirst).toBeInTheDocument();

    const inputSecond = screen.getByPlaceholderText('Senha');
    expect(inputSecond).toBeInTheDocument();

    const buttonLoggin = screen.getByRole('button', { name: 'ENTRE' });
    expect(buttonLoggin).toBeInTheDocument();

    const span2 = screen.getByText('Esqueci minha senha');
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText('Fazer login com SMS');
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText('OU');
    expect(span4).toBeInTheDocument();

    const spanSocialMediaFacebook = screen.getByText('Facebook');
    expect(spanSocialMediaFacebook).toBeInTheDocument();

    const spanSocialMediaGoogle = screen.getByText('Google');
    expect(spanSocialMediaGoogle).toBeInTheDocument();

    const spanSocialMediaApple = screen.getByText('Apple');
    expect(spanSocialMediaApple).toBeInTheDocument();

    const spanNewInTheShopee = screen.getByText('Novo na Shopee?');
    expect(spanNewInTheShopee).toBeInTheDocument();

    const linkRegister = screen.getByText('Cadastrar');
    expect(linkRegister).toBeInTheDocument();

    expect.assertions(13);
  });
});
