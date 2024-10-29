import { act, render, screen } from '@testing-library/react';
import ProductHighlightsForYou from './ProductHighlightsForYou';
import { MemoryRouter } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';

// export interface ProductHighlightProps {
//   id: string;
//   title: string;
//   imgProduct: string;
//   imgTop: string;
//   quantitySold: number;
// }

describe('ProductHighlightsForYou', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });
  test('should render itens of the ProductHighlightsForYou', async () => {
    const objUser = {
      id: 'e929a8b1-455a-4e99-aee7-b260ed536042',
      name: 'Augusto',
      email: 'seilaseila@gmail.com',
      phone: '(+55) 23 32323 3223',
      cpf: '23232322323',
      birthDate: '1990-01-01',
      gender: 'm',
      token: '',
    };

    const mockVessels = [
      {
        id: 'dd5a12b4-f712-4166-995e-9c9c8f0e35ed',
        title: 'Capa Protetora',
        imgProduct:
          'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/product-highlights/sxll7ht5ufe7jptiwvjd',
        imgTop:
          'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png',
        quantitySold: 75,
      },

      {
        id: '742b392b-c71d-43c4-8a94-adecf207cedc',
        title: 'Massageadores',
        imgProduct:
          'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/product-highlights/iyqbcy0jpjjkjzpzhue4',
        imgTop:
          'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1730027355/product-highlights/Top_wicxwi.png',
        quantitySold: 96,
      },
    ];

    jest.spyOn(global, 'fetch').mockImplementationOnce((url, options) => {
      if (url === `${Url}/get-all-product-highlights`) {
        return Promise.resolve({
          ok: true,
          status: 200,
          statusText: 'OK',
          url: '',
          type: 'basic',
          json: () => Promise.resolve({ data: mockVessels }),
        } as Response);
      }

      return Promise.reject(new Error(`Unexpected fetch call to ${url}`));
    });

    await act(async () => {
      render(
        <MemoryRouter>
          <ProductHighlightsForYou userLogged={objUser} />
        </MemoryRouter>
      );
    });

    const heading = screen.getByRole('heading', { name: /Destaques para você/ });
    expect(heading).toBeInTheDocument();

    expect.assertions(1);
  });
});
