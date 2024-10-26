import { render } from '@testing-library/react';
import ProductFlashDeals from './ProductFlashDeals';
import { MemoryRouter } from 'react-router-dom';

describe('ProductFlashDeals', () => {
  test('should render itens of the ProductFlashDeals about-shopee', async () => {
    const userObj = {
      id: 'a56ba473-996b-4d01-8406-8b78001dd7ba',
      email: 'seilaseila@gmail.com',
      name: 'Augusto Seila',
      phone: '(+55) 23 32323 3223',
      token:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mjk3NzM1NDksImV4cCI6MTc2MTMwOTU0OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.---kcW6WnXONbBcOQBCxbFQlN4ooY3wKrHJ43ZxYGMs',
      cpf: '',
      birthDate: '',
      gender: '',
    };

    render(
      <MemoryRouter>
        <ProductFlashDeals userLogged={userObj} />
      </MemoryRouter>
    );
  });
});
