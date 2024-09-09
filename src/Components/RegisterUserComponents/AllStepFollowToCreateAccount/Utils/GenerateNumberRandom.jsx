export const GeneratorNumberRandomA = () => {
  let numberRandom = '';

  for (let i = 0; i < 6; i++) {
    const code = Math.floor(Math.random() * 9) + 1;
    numberRandom += code;
  }

  return numberRandom;
};
