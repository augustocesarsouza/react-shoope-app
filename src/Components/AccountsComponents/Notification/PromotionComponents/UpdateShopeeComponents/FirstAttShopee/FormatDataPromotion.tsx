export const FormatDataPromotion = (date: string) => {
  let dateSliceT = date.split('T');
  let dateSliceTrace = dateSliceT[0].split('-');
  let dateOnlyDayMonthYear = `${dateSliceTrace[2]}/${dateSliceTrace[1]}/${dateSliceTrace[0]}`;

  let dateSliceTraceTime = dateSliceT[1].split(':');
  let dateOnlyMinHourSecond = `${dateSliceTraceTime[0]}:${dateSliceTraceTime[1]}`;

  let stringDateAndHour = `${dateOnlyDayMonthYear} ${dateOnlyMinHourSecond}`;

  return stringDateAndHour;
};
