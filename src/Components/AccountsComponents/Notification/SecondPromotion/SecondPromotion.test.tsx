import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import SecondPromotion from './SecondPromotion';

describe('SecondPromotion', () => {
  it('should render SecondPromotion Component', async () => {
    const obj = {
      whatIsThePromotion: 2,
      title: 'Frete Grátis exclusivo para você ���',
      description:
        'Aproveite já seu cupom de FRETE GRÁTIS sem valor mínimo na sua 1ª compra. Confira já! 👉',
      date: '09/10/2024 06:15',
      img: 'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728558538/img-shopee/sg-11134004-7rd5v-lv0kjt4bs1kt71_tn_mbtsoj.jpg',
      imgInnerFirst:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566924/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_ra6shy.jpg',
      altImgInnerFirst: 'plate',
      imgInnerSecond:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566958/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_ah0rg1.jpg',
      altImgInnerSecond: 'Bad',
      imgInnerThird:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728566987/img-shopee/br-11134207-7qukw-lh9n45zmoho5f7_povprf.jpg',
      altImgInnerThird: 'device-massager-feet',
    };

    render(<SecondPromotion secondPromotion={obj} />);

    const img1 = screen.getByAltText(obj.title);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', obj.img);

    const heading1 = screen.getByRole('heading', { name: obj.title });
    expect(heading1).toBeInTheDocument();

    const span1 = screen.getByText(obj.description);
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(obj.date);
    expect(span2).toBeInTheDocument();

    const img2 = screen.getByAltText(obj.altImgInnerFirst);
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveAttribute('src', obj.imgInnerFirst);

    const img3 = screen.getByAltText(obj.altImgInnerSecond);
    expect(img3).toBeInTheDocument();
    expect(img3).toHaveAttribute('src', obj.imgInnerSecond);

    const img4 = screen.getByAltText(obj.altImgInnerThird);
    expect(img4).toBeInTheDocument();
    expect(img4).toHaveAttribute('src', obj.imgInnerThird);

    const button = screen.getByRole('button', { name: /Ver Detalhes/ });
    expect(button).toBeInTheDocument();

    expect.assertions(12);
  });
});
