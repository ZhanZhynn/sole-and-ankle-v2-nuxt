// export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
//   notation: "compact",
//   maximumFractionDigits: 1,
// });

export const formatNumber = (price: number) => {
  if (price >= 0) {
    return "MYR" + price / 100;
  } else {
    return "";
  }
};

export const isNewRelease = (date: number): boolean => {
  const currentDate = new Date();
  const releaseDate = new Date(date);
  const diffInMs = currentDate.getTime() - releaseDate.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays < 30;
};
