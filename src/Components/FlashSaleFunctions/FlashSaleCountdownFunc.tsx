export const FlashSaleCountdownFunc = (time: Date): FlashSaleCountdown => {
  let dateNow = new Date();

  const diffInMilliseconds = time.getTime() - dateNow.getTime(); // diferença em milissegundos
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60)); // converter para minutos
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const hours = Math.floor(diffInMinutes / 60);
  const minutes = diffInMinutes % 60;
  const seconds = diffInSeconds % 60;

  var flashSaleCountdown: FlashSaleCountdown = { hours, minutes, seconds };

  return flashSaleCountdown;
};

export interface FlashSaleCountdown {
  hours: number;
  minutes: number;
  seconds: number;
}
