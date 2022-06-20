const nf = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0
});

export const format = (value: number = 0): string => {
  return value ? nf.format(value.toFixed() as number) : "0";
};
