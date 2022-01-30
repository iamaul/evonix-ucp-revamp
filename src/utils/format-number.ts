export const formatNumber = (number: number) => {
  return Intl.NumberFormat("en", {
    notation: "compact",
  }).format(number);
};
