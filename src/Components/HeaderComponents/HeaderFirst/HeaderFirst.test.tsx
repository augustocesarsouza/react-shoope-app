import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import HeaderFirst from './HeaderFirst';

describe('HeaderFirst', () => {
  it('should render HeaderFirst Component', () => {
    const { container } = render(<HeaderFirst />);

    const allLink = container.querySelectorAll('a');
    expect(allLink.length).toBe(7);

    const allSvgs = container.querySelectorAll('svg');
    expect(allSvgs.length).toBe(6);

    const span = container.querySelector('.span-follow-us');
    expect(span).toBeInTheDocument();

    expect.assertions(3);
  });
});
