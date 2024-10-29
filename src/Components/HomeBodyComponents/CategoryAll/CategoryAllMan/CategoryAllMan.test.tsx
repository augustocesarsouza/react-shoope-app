import { act, render, screen } from '@testing-library/react';
import CategoryAllMan from './CategoryAllMan';
import { MemoryRouter } from 'react-router-dom';
import { Url } from '../../../../Utils/Url';

describe('CategoryAllMan', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  test('should render itens of the CategoryAllMan about-shopee', async () => {
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
        id: 'h929a8b1-455a-4g97-aee7-b250ed536042',
        imgCategory:
          'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/rnznrjsikuwt66cbkhva',
        altValue: 'altValue1',
        title: 'title1',
      },

      {
        id: '8bb4faf9-7882-4b33-a4a8-30b3d484c2b0',
        imgCategory:
          'http://res.cloudinary.com/dyqsqg7pk/image/upload/v1/category-all/ucjm2xvsormybem23gkw',
        altValue: 'plus-size-clothing',
        title: 'Roupas Plus Size',
      },
    ];

    jest.spyOn(global, 'fetch').mockImplementationOnce((url, options) => {
      if (url === `${Url}/get-all-categories`) {
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
      const { debug } = render(
        <MemoryRouter>
          <CategoryAllMan userLogged={objUser} />
        </MemoryRouter>
      );

      debug();
    });
    const headerFirst = screen.getByRole('heading', { name: /Categorias/ });
    expect(headerFirst).toBeInTheDocument();

    expect.assertions(1);
  });
});
