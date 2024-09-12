import { useNavigate } from 'react-router-dom';
import * as Styled from './styled';
import { useEffect, useState } from 'react';
import { ObjUser } from '../../../../Templates/Home/Home';

const Perfil = () => {
  const [userObj, setUserObj] = useState<ObjUser | null>(null);
  const [valueInput, setValueInput] = useState('');

  const nav = useNavigate();

  useEffect(() => {
    let userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage === null) {
      nav('/login');

      return;
    }

    let userJson = JSON.parse(userLocalStorage);
    setUserObj(userJson);
    setValueInput(userJson.name);
  }, []);

  const onChangeInputNameUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    setValueInput(inputValue);
  };

  return (
    <Styled.ContainerPerfilMain>
      <Styled.ContainerOnlyPerfil>
        <Styled.H1>Meu perfil</Styled.H1>
        <Styled.Span>Gerenciar e proteger sua conta</Styled.Span>
      </Styled.ContainerOnlyPerfil>
      <Styled.ContainerMyPerfilInfo>
        <Styled.Form>
          <Styled.Table>
            <Styled.Tbody>
              <Styled.Tr>
                <Styled.Td>
                  <Styled.Label className="label">Nome de usuário</Styled.Label>
                </Styled.Td>
                <Styled.TdSecond>
                  <Styled.ContainerOnlyInputNameUser>
                    {userObj && (
                      <Styled.Input
                        type="text"
                        placeholder="Nome de usuário"
                        value={valueInput}
                        onChange={(e) => onChangeInputNameUser(e)}
                      />
                    )}
                    <Styled.Span>Nome do usuário pode ser alterado apenas uma vez.</Styled.Span>
                  </Styled.ContainerOnlyInputNameUser>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome>
                  <Styled.Label className="label">Nome</Styled.Label>
                </Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.ContainerOnlyInputNameUser>
                    <Styled.ContainerOnlyInputName>
                      <Styled.Input type="text" placeholder="Nome" />
                    </Styled.ContainerOnlyInputName>
                  </Styled.ContainerOnlyInputNameUser>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome>
                  <Styled.Label className="label">Email</Styled.Label>
                </Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.Link href="#">Inserir</Styled.Link>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome>
                  <Styled.Label className="label">Número de telefone</Styled.Label>
                </Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.ContainerCelPhone>
                    <Styled.Container>***********93</Styled.Container>
                    <Styled.Link href="#">Inserir</Styled.Link>
                  </Styled.ContainerCelPhone>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome>
                  <Styled.Label className="label">Sexo</Styled.Label>
                </Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.ContainerMainInputs>
                    <Styled.ContainerInputs>
                      <Styled.InputCheckbox $showCheckbox={true}>
                        <Styled.CheckBox
                          className="checkbox-gender"
                          $showCheckbox={true}
                        ></Styled.CheckBox>
                      </Styled.InputCheckbox>
                      <Styled.Span>masculino</Styled.Span>
                    </Styled.ContainerInputs>
                    <Styled.ContainerInputs>
                      <Styled.InputCheckbox $showCheckbox={false}>
                        <Styled.CheckBox
                          className="checkbox-gender"
                          $showCheckbox={false}
                        ></Styled.CheckBox>
                      </Styled.InputCheckbox>
                      <Styled.Span>feminino</Styled.Span>
                    </Styled.ContainerInputs>
                    <Styled.ContainerInputs>
                      <Styled.InputCheckbox $showCheckbox={false}>
                        <Styled.CheckBox
                          className="checkbox-gender"
                          $showCheckbox={false}
                        ></Styled.CheckBox>
                      </Styled.InputCheckbox>
                      <Styled.Span>Outros</Styled.Span>
                    </Styled.ContainerInputs>
                  </Styled.ContainerMainInputs>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome>
                  <Styled.Label className="label">CPF/Data de nascimento</Styled.Label>
                </Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.ContainerCelPhone>
                    <Styled.Link href="#">Preencher agora</Styled.Link>
                  </Styled.ContainerCelPhone>
                </Styled.TdSecond>
              </Styled.Tr>
              <Styled.Tr>
                <Styled.TdNome></Styled.TdNome>
                <Styled.TdSecond>
                  <Styled.ContainerButtonSave>
                    <Styled.Button>Gravar</Styled.Button>
                  </Styled.ContainerButtonSave>
                </Styled.TdSecond>
              </Styled.Tr>
            </Styled.Tbody>
          </Styled.Table>
        </Styled.Form>
      </Styled.ContainerMyPerfilInfo>
    </Styled.ContainerPerfilMain>
  );
};

export default Perfil;
