import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import * as Styled from './styled';
import FirstStepCreateAccount from '../AllStepFollowToCreateAccount/FirstStepCreateAccount/FirstStepCreateAccount';
import { useState } from 'react';
import SecondStepCreateAccount from '../AllStepFollowToCreateAccount/SecondStepCreateAccount/SecondStepCreateAccount';

const FirstStepToCreateAccount = () => {
  const [whatStepIsNow, setWhichStepIsNow] = useState(2);

  return (
    <Styled.ContainerStepOneMain>
      <Styled.ContainerHeaderCreateAccount>
        <Styled.ContainerFirstBall $colorgreen={true}>
          <Styled.Container>
            <Styled.Span>1</Styled.Span>
          </Styled.Container>
          <Styled.Span>Verifique número de telefone</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow $colorgreen={whatStepIsNow >= 2}></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={whatStepIsNow === 2}>
          <Styled.Container>
            <Styled.Span>2</Styled.Span>
          </Styled.Container>
          <Styled.Span>Criar senha</Styled.Span>
        </Styled.ContainerFirstBall>
        <Styled.ContainerArrow $colorgreen={whatStepIsNow >= 3}></Styled.ContainerArrow>
        <Styled.ContainerFirstBall $colorgreen={false}>
          <Styled.Container>
            <FontAwesomeIcon icon={faCheck} />
          </Styled.Container>
          <Styled.Span>Concluído</Styled.Span>
        </Styled.ContainerFirstBall>
      </Styled.ContainerHeaderCreateAccount>
      {whatStepIsNow === 1 && (
        <FirstStepCreateAccount setWhichStepIsNow={setWhichStepIsNow}></FirstStepCreateAccount>
      )}
      {whatStepIsNow === 2 && <SecondStepCreateAccount></SecondStepCreateAccount>}
    </Styled.ContainerStepOneMain>
  );
};

export default FirstStepToCreateAccount;
