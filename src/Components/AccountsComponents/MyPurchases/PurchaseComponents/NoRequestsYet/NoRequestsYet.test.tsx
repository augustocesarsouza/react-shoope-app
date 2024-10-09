import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import NoRequestsYet from './NoRequestsYet';

describe('NoRequestsYet', () => {
  it('should render NoRequestsYet Component', async () => {
    const { debug } = render(<NoRequestsYet />);
    debug();

    const heading1 = screen.getByRole('heading', { name: 'Ainda não há pedidos' });
    expect(heading1).toBeInTheDocument();

    // const span2 = screen.getByText('A Pagar');
    // expect(span2).toBeInTheDocument();

    expect.assertions(1);
  });
});
