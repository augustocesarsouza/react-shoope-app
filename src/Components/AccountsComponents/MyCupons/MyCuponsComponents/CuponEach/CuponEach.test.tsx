import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import CuponEach from './CuponEach';

describe('CuponEach', () => {
  it('should render CuponEach Component', async () => {
    const obj1 = {
      id: 'e3a9bb90-6c7f-4bb5-bfd2-367e62184d7e',
      spanOne: 'Para você',
      headerOne: 'Frete Grátis',
      spanTwo: 'Sem valor mínimo',
      spanThree: 'Termina em: 1 dia',
      quantityCupons: 1,
      whatCuponNumber: 2,
      secondImg:
        'https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728989982/img-shopee/sg-11134004-23010-lk448laa7gmv1e_v9lfyz.png',
      secondImgAlt: 'second-img-1',
    };

    render(<CuponEach objCupons={obj1} />);

    const span1 = screen.getByText(obj1.quantityCupons);
    expect(span1).toBeInTheDocument();

    const img1 = await screen.findByAltText(obj1.secondImgAlt);
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveAttribute('src', obj1.secondImg);

    const span2 = screen.getByText(obj1.spanOne);
    expect(span2).toBeInTheDocument();

    const header1 = screen.getByRole('heading', { name: obj1.headerOne });
    expect(header1).toBeInTheDocument();

    const span3 = screen.getByText(obj1.spanTwo);
    expect(span3).toBeInTheDocument();

    const span4 = screen.getByText(obj1.spanThree);
    expect(span4).toBeInTheDocument();

    const span5 = screen.getByText('Condições');
    expect(span5).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Usar' });
    expect(button).toBeInTheDocument();

    expect.assertions(9);
  });
});
