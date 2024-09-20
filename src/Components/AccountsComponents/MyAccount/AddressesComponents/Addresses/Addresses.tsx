import { useLocation } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useRef, useState } from 'react';
import SvgAddresses from '../../SvgMyAccount/SvgAddresses/SvgAddresses';

enum InputsNames {
  FullName = 'fullName',
  NumberPhone = 'numberPhone',
  Cep = 'cep',
  StateCity = 'stateCity',
  Neighborhood = 'neighborhood',
  Street = 'street',
  Number = 'number',
  Complement = 'complement',
}

const Addresses = () => {
  const location = useLocation();
  const [newAddressModal, setNewAddressModal] = useState(true);

  useEffect(() => {
    if (location.state) {
      const objState = location.state;
      // console.log(objState);
    }
  }, []);

  const RefContainerNameFull = useRef<HTMLDivElement | null>(null);
  const RefContainerNamberPhone = useRef<HTMLDivElement | null>(null);
  const RefContainerCep = useRef<HTMLDivElement | null>(null);
  const RefContainerStateCity = useRef<HTMLDivElement | null>(null);
  const RefContainerNeighborhood = useRef<HTMLDivElement | null>(null);
  const RefContainerStreet = useRef<HTMLDivElement | null>(null);
  const RefContainerNumber = useRef<HTMLDivElement | null>(null);
  const RefContainerComplement = useRef<HTMLDivElement | null>(null);

  const onClickInsertNewAddress = () => {
    setNewAddressModal(true);
  };

  const setValueInputStyled = (
    input: EventTarget & HTMLInputElement,
    refContainerNameFull: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (refContainerNameFull === null || refContainerNameFull.current === null || input === null)
      return;

    if (input.value.length <= 0) {
      refContainerNameFull.current.style.display = 'none';
    } else {
      refContainerNameFull.current.style.display = 'block';
    }
  };

  const onChangeInputNameFull = (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    e.preventDefault();
    if (RefContainerNameFull === null || RefContainerNameFull.current === null || e.target === null)
      return;
    let input = e.target;

    if (inputName === InputsNames.FullName) {
      setValueInputStyled(input, RefContainerNameFull);
    } else if (inputName === InputsNames.NumberPhone) {
      setValueInputStyled(input, RefContainerNamberPhone);
    } else if (inputName === InputsNames.Cep) {
      setValueInputStyled(input, RefContainerCep);
    } else if (inputName === InputsNames.StateCity) {
      setValueInputStyled(input, RefContainerStateCity);
    } else if (inputName === InputsNames.Neighborhood) {
      setValueInputStyled(input, RefContainerNeighborhood);
    } else if (inputName === InputsNames.Street) {
      setValueInputStyled(input, RefContainerStreet);
    } else if (inputName === InputsNames.Number) {
      setValueInputStyled(input, RefContainerNumber);
    } else if (inputName === InputsNames.Complement) {
      setValueInputStyled(input, RefContainerComplement);
    }
  };

  return (
    <Styled.ContainerMain>
      <Styled.ContainerMainAddresses>
        <Styled.H1>Meus endereços</Styled.H1>
        <Styled.ContainerInsertAddressMain>
          <Styled.ContainerInsertAddress onClick={() => onClickInsertNewAddress()}>
            <Styled.ContainerSvgPlus>
              <svg
                enableBackground="new 0 0 10 10"
                viewBox="0 0 10 10"
                x="0"
                y="0"
                className="shopee-svg-icon icon-plus-sign"
              >
                <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
              </svg>
            </Styled.ContainerSvgPlus>
            <Styled.Span>Inserir novo endereço</Styled.Span>
          </Styled.ContainerInsertAddress>
        </Styled.ContainerInsertAddressMain>
      </Styled.ContainerMainAddresses>

      <Styled.ContainerSvgThereIsNoAddresses>
        <SvgAddresses></SvgAddresses>
        <Styled.Span>Você ainda não tem endereços.</Styled.Span>
      </Styled.ContainerSvgThereIsNoAddresses>

      {newAddressModal && (
        <Styled.ContainerModalNewAddress>
          <Styled.ContainerModalInner>
            <Styled.Span>Novo Endereço</Styled.Span>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerNameFull}>
                  Nome Completo
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Nome Completo"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.FullName)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerNamberPhone}>
                  Número de Telefone
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Número de Telefone"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.NumberPhone)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerCep}>CEP</Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="CEP"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.Cep)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerStateCity}>
                  Estado - Cidade
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Estado - Cidade"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.StateCity)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerNeighborhood}>
                  Bairro
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Bairro"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.Neighborhood)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerStreet}>
                  Rua / Avenida
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Rua / Avenida"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.Street)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
              <Styled.ContainerInputAll $width="35%">
                <Styled.ContainerNameInput ref={RefContainerNumber}>
                  Número
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Número"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.Number)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerAllInputs>
              <Styled.ContainerInputAll $width="100%">
                <Styled.ContainerNameInput ref={RefContainerComplement}>
                  Complemento/Referências Próx./Descrição do Prédio
                </Styled.ContainerNameInput>
                <Styled.Input
                  type="text"
                  placeholder="Complemento/Referências Próx./Descrição do Prédio"
                  onChange={(e) => onChangeInputNameFull(e, InputsNames.Complement)}
                ></Styled.Input>
              </Styled.ContainerInputAll>
            </Styled.ContainerAllInputs>
            <Styled.ContainerSaveAs>
              <Styled.Span>Salvar Como:</Styled.Span>
              <Styled.ContainerSaveHomeWork>
                <Styled.ContainerSaveHome>
                  <Styled.Span>Casa</Styled.Span>
                </Styled.ContainerSaveHome>
                <Styled.ContainerSaveWork>
                  <Styled.Span>Trabalho</Styled.Span>
                </Styled.ContainerSaveWork>
              </Styled.ContainerSaveHomeWork>
            </Styled.ContainerSaveAs>
            <Styled.ContainerTwoButton>
              <Styled.ButtonCancel>Cancelar</Styled.ButtonCancel>
              <Styled.ButtonSend>Enviar</Styled.ButtonSend>
            </Styled.ContainerTwoButton>
          </Styled.ContainerModalInner>
        </Styled.ContainerModalNewAddress>
      )}
    </Styled.ContainerMain>
  );
};

export default Addresses;
