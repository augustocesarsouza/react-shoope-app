import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import DontHaveAnyAddresses from './DontHaveAnyAddresses';

describe('DontHaveAnyAddresses', () => {
  it('should render DontHaveAnyAddresses Component', async () => {
    const { container } = render(<DontHaveAnyAddresses />);

    const containerSvgPlus = container.querySelector('.container-svg-address') as HTMLElement;
    const svgAddresses = containerSvgPlus.firstChild;
    expect(svgAddresses).toBeInTheDocument();

    const span1 = screen.getByText('Você ainda não tem endereços.');
    expect(span1).toBeInTheDocument();

    expect.assertions(2);
  });
});
