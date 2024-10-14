import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { FormatDataPromotion } from './FormatDataPromotion';
import FirstAttShopee from './FirstAttShopee';
import { FirstAttShopeeProps } from '../UpdateShopee/UpdateShopee';

describe('FirstAttShopee', () => {
  it('should render FirstAttShopee Component', async () => {
    const obj: FirstAttShopeeProps = {
      id: '3dd2af06-a54e-413d-a652-ad78a26a4ab7',
      title: 'First Title',
      description: 'First Description',
      date: '2024-10-09T06:15:00Z',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728902181/img-shopee/0654edf568f0a0638391ae23bcd6a1a7_tn_ua8ytj.png',
    };

    render(<FirstAttShopee firstAttShopee={obj} firstAttShopeeNumber={0} />);

    let stringDateAndHour = FormatDataPromotion(obj.date);

    const img3 = screen.getByAltText(obj.title);
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute('src', obj.img);

    const heading1 = screen.getByRole('heading', { name: obj.title });
    expect(heading1).toBeInTheDocument();

    const span1 = screen.getByText(obj.description);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(stringDateAndHour);
    expect(span2).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Ver Detalhes/ });
    expect(button).toBeInTheDocument();

    expect.assertions(6);
  });
});
