export const formatStringTitle = (title: string) => {
  let newString = '';

  newString = title;

  if (title.length >= 60) {
    newString = title.slice(0, 60) + '...';
  }

  return newString;
};

export const formatStringDescription = (description: string) => {
  let newString = '';

  newString = description;

  if (description.length >= 11) {
    newString = description.slice(0, 11) + '...';
  }

  return newString;
};
