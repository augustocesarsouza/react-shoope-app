import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import CuponRecommended from './CuponRecommended';
import { formatStringDescription, formatStringTitle } from './CuponRecommended_Function';

describe('CuponRecommended', () => {
  it('should render CuponRecommended Component', async () => {
    const obj1 = {
      id: '8041d9db-98ec-41bd-904d-7b7c8edaa2c1',
      titleCupon: 'Fertilizante Big Bud Advanced Nutrients',
      valueCupon: 42.9,
      offPrice: '2% OFF',
      showImgHeighlight: true,
      offDescription: 'Nas compras acima de R$50',
      imgCupon: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx7uns529xa72d',
      imgAltCupon: 'img-big-bud',
    };

    render(<CuponRecommended obj={obj1} />);

    const span1 = screen.getByText('Indicado');
    expect(span1).toBeInTheDocument();

    const span2 = screen.getByText(obj1.titleCupon);
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText(`R$${Number(obj1.valueCupon).toFixed(2).replace('.', ',')}`);
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(obj1.offPrice);
    expect(span4).toBeInTheDocument();

    const stringTitle = formatStringTitle(obj1.titleCupon);
    const span5 = screen.getByText(stringTitle);
    expect(span5).toBeInTheDocument();

    const offDescription = formatStringDescription(obj1.offDescription);
    const span6 = screen.getByText(offDescription);
    expect(span6).toBeInTheDocument();

    const img1 = await screen.findByAltText(obj1.imgAltCupon);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', obj1.imgCupon);

    expect.assertions(8);
  });

  it('should render CuponRecommended Component showImgHeighlight is false', async () => {
    const obj1 = {
      id: '8041d9db-98ec-41bd-904d-7b7c8edaa2c1',
      titleCupon: 'Fertilizante Big Bud Advanced Nutrients',
      valueCupon: 42.9,
      offPrice: '2% OFF',
      showImgHeighlight: false,
      offDescription: 'Nas compras acima de R$50',
      imgCupon: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-lx7uns529xa72d',
      imgAltCupon: 'img-big-bud',
    };

    render(<CuponRecommended obj={obj1} />);

    const span2 = screen.getByText(obj1.titleCupon);
    expect(span2).toBeInTheDocument();

    const span3 = screen.getByText(`R$${Number(obj1.valueCupon).toFixed(2).replace('.', ',')}`);
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(obj1.offPrice);
    expect(span4).toBeInTheDocument();

    const stringTitle = formatStringTitle(obj1.titleCupon);
    const span5 = screen.getByText(stringTitle);
    expect(span5).toBeInTheDocument();

    const offDescription = formatStringDescription(obj1.offDescription);
    const span6 = screen.getByText(offDescription);
    expect(span6).toBeInTheDocument();

    const img1 = await screen.findByAltText(obj1.imgAltCupon);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', obj1.imgCupon);

    expect.assertions(7);
  });
});
