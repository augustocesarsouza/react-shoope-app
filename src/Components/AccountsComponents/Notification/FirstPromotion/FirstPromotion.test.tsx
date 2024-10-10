import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import FirstPromotion from './FirstPromotion';

describe('FirstPromotion', () => {
  it('should render FirstPromotion Component', async () => {
    const obj = {
      whatIsThePromotion: 1,
      title: 'Frete Grátis exclusivo para você ���',
      description:
        'Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉',
      date: '09/10/2024 06:15',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728558538/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_mbtsoj.jpg',
    };

    render(<FirstPromotion firstPromotion={obj} />);

    const img3 = screen.getByAltText(obj.title);
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute('src', obj.img);

    const heading1 = screen.getByRole('heading', { name: obj.title });
    expect(heading1).toBeInTheDocument();

    const span1 = screen.getByText(obj.description);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(obj.date);
    expect(span2).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /Ver Detalhes/ });
    expect(button).toBeInTheDocument();

    expect.assertions(6);
  });
});
