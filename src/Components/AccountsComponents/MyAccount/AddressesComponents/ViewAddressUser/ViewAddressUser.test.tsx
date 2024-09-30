import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import ViewAddressUser from './ViewAddressUser';

describe('ViewAddressUser', () => {
  it('should render ViewAddressUser Component', async () => {
    const fn = jest.fn();

    const userAddress = [];
    const obj1 = {
      id: '450bdbc0-8aa5-4b88-88ee-7b81f09d8e8f',
      cep: '35580-970',
      fullName: 'Augusto Cesar',
      neighborhood: 'Jardim Aero Rancho',
      numberHome: '2420',
      phoneNumber: '(+55) 23 32323 3223',
      stateCity: 'Mato Grosso do Sul - Campo Grande',
      street: 'Rua cajazeira',
      complement: 'Proximo Escola Maria lucia',
      defaultAddress: 1,
    };

    const obj2 = {
      id: '831d237b-0ef4-421c-a056-76f8878b655b',
      cep: '66033-828',
      fullName: 'Lucas Daniel',
      neighborhood: 'Tiradentes',
      numberHome: '2425',
      phoneNumber: '(+55) 45 41854 3223',
      stateCity: 'Mato Grosso do Sul - Campo Grande',
      street: 'Rua Profeta Daniel',
      complement: '',
      defaultAddress: 0,
    };

    userAddress.push(obj1);
    userAddress.push(obj2);

    render(
      <ViewAddressUser
        userAddress={userAddress}
        changeValueNewAddressModal={fn}
        updateNewUserAddressDefault={fn}
        wasClickedDeleteAddress={fn}
        wasClickedEditAddress={fn}
      />
    );

    const span1 = screen.getByText('Endereço');
    expect(span1).toBeInTheDocument();

    const spanFullName1 = screen.getByText(obj1.fullName);
    expect(spanFullName1).toBeInTheDocument();

    const spanPhoneNumber2 = screen.getByText(obj1.phoneNumber);
    expect(spanPhoneNumber2).toBeInTheDocument();

    const buttonAll = screen.getAllByRole('button', { name: /Editar/ });
    expect(buttonAll).toHaveLength(2);

    const span4 = screen.getByText(
      `${obj1.street}, ${obj1.numberHome}, ${obj1.complement}, ${obj1.neighborhood}`
    );
    expect(span4).toBeInTheDocument();

    let testSpanStateCityAndCep = `${obj1.stateCity.split('-')[1].trim()}, ${obj1.stateCity
      .split('-')[0]
      .trim()}, ${obj1.cep.replace('-', '')}`;

    const span5 = screen.getByText(testSpanStateCityAndCep);
    expect(span5).toBeInTheDocument();

    const buttonDefineDefaultAll = screen.getAllByRole('button', { name: /Definir como padrão/ });
    const buttonDefineDefault = buttonDefineDefaultAll[0];
    expect(buttonDefineDefault).toBeInTheDocument();

    const buttonDefault = screen.getByRole('button', { name: /Padrão/ });
    expect(buttonDefault).toBeInTheDocument();

    const spanFullName2 = screen.getByText(obj2.fullName);
    expect(spanFullName2).toBeInTheDocument();

    const spanPhoneNumber3 = screen.getByText(obj2.phoneNumber);
    expect(spanPhoneNumber3).toBeInTheDocument();

    const buttonDelete = screen.getByRole('button', { name: /Excluir/ });
    expect(buttonDelete).toBeInTheDocument();

    const span6 = screen.getByText(`${obj2.street}, ${obj2.numberHome}, ${obj2.neighborhood}`);
    expect(span6).toBeInTheDocument();

    let testSpanStateCityAndCep2 = `${obj2.stateCity.split('-')[1].trim()}, ${obj2.stateCity
      .split('-')[0]
      .trim()}, ${obj2.cep.replace('-', '')}`;
    const span7 = screen.getByText(testSpanStateCityAndCep2);
    expect(span7).toBeInTheDocument();

    expect.assertions(13);
  });
});
