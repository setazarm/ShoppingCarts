const FORMATTER = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});
export const formatCurrency = (number: number) => {
  return FORMATTER.format(number);
};
