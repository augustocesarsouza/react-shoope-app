import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import HeaderAddress from './HeaderAddress';

describe('HeaderAddress', () => {
  it('should render HeaderAddress Component', async () => {
    const fn = jest.fn();
    const { container } = render(<HeaderAddress onClickInsertNewAddress={fn} />);

    const header = screen.getByRole('heading', { name: /Meus endereços/ });
    expect(header).toBeInTheDocument();

    const span1 = screen.getByText('Inserir novo endereço');
    expect(span1).toBeInTheDocument();

    const containerSvgPlus = container.querySelector('.container-svg-plus') as HTMLElement;
    const svgPlus = containerSvgPlus.firstChild;
    expect(svgPlus).toBeInTheDocument();

    expect.assertions(3);
  });
});
