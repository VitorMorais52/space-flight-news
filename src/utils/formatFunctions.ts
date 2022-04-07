export const dateFormatToShow = (dateISO: string) => {
  //dd/MM/yyyy HH:MM
  const date = new Date(dateISO);

  const formatPad = (data: number): string => data.toString().padStart(2, "0");

  const hoursAndMinutes =
    formatPad(date.getHours()) + ":" + formatPad(date.getMinutes());

  return new Intl.DateTimeFormat("pt-br").format(date) + " " + hoursAndMinutes;
};
