const firstDayOfCurrentYear = new Date(
  Date.UTC(new Date().getFullYear(), 0, 1)
);
const lastDayOfCurrentYear = new Date(
  Date.UTC(new Date().getFullYear(), 11, 31, 23, 59, 59, 999)
);

const getFirstDayOfYear = (year: number) => new Date(Date.UTC(year, 0, 1));
const getLastDayOfYear = (year: number) =>
  new Date(Date.UTC(year, 11, 31, 23, 59, 59, 999));

const firstDayOfCurrentMonth = new Date(
  Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1)
);

const getFirstDayOfMonth = (year: number, month: number) =>
  new Date(Date.UTC(year, month, 1));
const getLastDayOfMonth = (year: number, month: number) =>
  new Date(Date.UTC(year, month + 1, 0, 23, 59, 59, 999));

const getDateGroup = (startDate: Date, endDate: Date): string => {
  const dateDiffInDays =
    Math.abs(endDate.getTime() - startDate.getTime()) / 24 / 60 / 60 / 1000;

  if (dateDiffInDays / 366 > 1) return "YEAR";
  if (dateDiffInDays / 31 > 1) return "MONTH";
  if (dateDiffInDays > 7) return "WEEK";
  return "DAY";
};

export {
  firstDayOfCurrentYear,
  firstDayOfCurrentMonth,
  lastDayOfCurrentYear,
  getFirstDayOfYear,
  getFirstDayOfMonth,
  getLastDayOfYear,
  getLastDayOfMonth,
  getDateGroup,
};
