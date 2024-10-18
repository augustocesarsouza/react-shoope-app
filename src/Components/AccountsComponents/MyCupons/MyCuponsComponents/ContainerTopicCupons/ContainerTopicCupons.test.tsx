import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ContainerTopicCupons from './ContainerTopicCupons';

describe('ContainerTopicCupons', () => {
  it('should render ContainerTopicCupons Component', async () => {
    const objCuponTotal = {
      id: 'f9200fe0-e2be-47ef-84ed-a47430844b7c',
      whichCupon: 1,
      quantityCupons: 2,
      nameTopCupon: 'Todos',
    };

    const fn = jest.fn();

    render(<ContainerTopicCupons el={objCuponTotal} whatTopicClicked={fn} />);

    const spanValue = `${objCuponTotal.nameTopCupon} (${objCuponTotal.quantityCupons})`;

    const span1 = screen.getByText(spanValue);
    expect(span1).toBeInTheDocument();

    expect.assertions(1);
  });
});
