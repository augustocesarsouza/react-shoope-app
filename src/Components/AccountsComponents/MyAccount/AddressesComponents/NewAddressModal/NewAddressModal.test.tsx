import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import NewAddressModal from './NewAddressModal';

describe('NewAddressModal', () => {
  it('should render NewAddressModal Component', async () => {
    const fn = jest.fn();

    const objUser = {
      id: 'e929a8b1-455a-4e99-aee7-b260ed536042',
      name: 'Augusto',
      email: 'seilaseila@gmail.com',
      phone: '(+55) 23 32323 3223',
      cpf: '23232322323',
      birthDate: '1990-01-01',
      gender: 'm',
    };

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

    render(
      <NewAddressModal
        userLogin={objUser}
        clickedEditAddress={obj1}
        changeValueNewAddressModal={fn}
        createNewUserAddress={fn}
      />
    );

    const span1 = screen.getByText('Editar endereço');
    expect(span1).toBeInTheDocument();

    const container1 = screen.getByText('Nome Completo');
    expect(container1).toBeInTheDocument();

    const inputNameFull = screen.getByPlaceholderText('Nome Completo');
    expect(inputNameFull).toBeInTheDocument();

    const container2 = screen.getByText('Número de Telefone');
    expect(container2).toBeInTheDocument();

    const inputNumberPhone = screen.getByPlaceholderText('Número de Telefone');
    expect(inputNumberPhone).toBeInTheDocument();

    const containerCep = screen.getByText('CEP');
    expect(containerCep).toBeInTheDocument();

    const inputCep = screen.getByPlaceholderText('CEP');
    expect(inputCep).toBeInTheDocument();

    const containerStateCity = screen.getByText('Estado - Cidade');
    expect(containerStateCity).toBeInTheDocument();

    const inputStateCity = screen.getByPlaceholderText('Estado - Cidade');
    expect(inputStateCity).toBeInTheDocument();

    const containerNeighborhood = screen.getByText('Bairro');
    expect(containerNeighborhood).toBeInTheDocument();

    const inputNeighborhood = screen.getByPlaceholderText('Bairro');
    expect(inputNeighborhood).toBeInTheDocument();

    const containerStreetAvenue = screen.getByText('Rua / Avenida');
    expect(containerStreetAvenue).toBeInTheDocument();

    const inputStreetAvenue = screen.getByPlaceholderText('Rua / Avenida');
    expect(inputStreetAvenue).toBeInTheDocument();

    const containerNumberHome = screen.getByText('Número');
    expect(containerNumberHome).toBeInTheDocument();

    const inputNumberHome = screen.getByPlaceholderText('Número');
    expect(inputNumberHome).toBeInTheDocument();

    const containerComplement = screen.getByText(
      'Complemento/Referências Próx./Descrição do Prédio'
    );
    expect(containerComplement).toBeInTheDocument();

    const inputComplement = screen.getByPlaceholderText(
      'Complemento/Referências Próx./Descrição do Prédio'
    );
    expect(inputComplement).toBeInTheDocument();

    const spanSaveAs = screen.getByText('Salvar Como:');
    expect(spanSaveAs).toBeInTheDocument();

    const spanHome = screen.getByText('Casa');
    expect(spanHome).toBeInTheDocument();

    const spanWork = screen.getByText('Trabalho');
    expect(spanWork).toBeInTheDocument();

    const buttonCancel = screen.getByRole('button', { name: /Cancelar/ });
    expect(buttonCancel).toBeInTheDocument();

    const buttonSend = screen.getByRole('button', { name: /Enviar/ });
    expect(buttonSend).toBeInTheDocument();

    expect.assertions(22);
  });
});
