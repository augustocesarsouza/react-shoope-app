import { useEffect, useState } from 'react';
import * as Styled from './styled';
import FlashSaleWhiteSvg from '../../../Svg/FlashSaleWhiteSvg/FlashSaleWhiteSvg';
import ClocksSvg from '../../../Svg/ClocksSvg/ClocksSvg';

interface FlashSaleCountdownAfterClickedProductProps {
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeLeftProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const FlashSaleCountdownAfterClickedProduct = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
}: FlashSaleCountdownAfterClickedProductProps) => {
  const [totalTimeInMillis] = useState(
    hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000
  );
  const [targetTime] = useState(new Date().getTime() + totalTimeInMillis);
  const [animate, setAnimate] = useState({ hours: false, minutes: false, seconds: false });

  const calculateTimeLeft = () => {
    const currentTime = new Date().getTime();
    const difference = targetTime - currentTime;

    let timeLeft: TimeLeftProps = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeftProps>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();

      setAnimate({
        hours: newTimeLeft.hours !== timeLeft.hours,
        minutes: newTimeLeft.minutes !== timeLeft.minutes,
        seconds: newTimeLeft.seconds !== timeLeft.seconds,
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <Styled.ContainerFlashDealsMain>
      <Styled.ContainerFlashDealsHeader>
        <FlashSaleWhiteSvg />
      </Styled.ContainerFlashDealsHeader>
      <Styled.ContainerFinishInAndChronometer>
        <Styled.ContainerFinishIn>
          <Styled.ContainerChronometer>
            <ClocksSvg ColorSvgStroke={'#fff'} />
          </Styled.ContainerChronometer>
          <Styled.H1>TERMINA EM</Styled.H1>
        </Styled.ContainerFinishIn>
        <Styled.CountdownContainer>
          <Styled.DigitBox>{String(timeLeft.hours || '00').padStart(2, '0')}</Styled.DigitBox>
          <Styled.DigitBox>{String(timeLeft.minutes || '00').padStart(2, '0')}</Styled.DigitBox>
          <Styled.DigitBox>{String(timeLeft.seconds || '00').padStart(2, '0')}</Styled.DigitBox>
        </Styled.CountdownContainer>
      </Styled.ContainerFinishInAndChronometer>
    </Styled.ContainerFlashDealsMain>
  );
};

export default FlashSaleCountdownAfterClickedProduct;
