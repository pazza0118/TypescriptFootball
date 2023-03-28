export const dateStringToDate = (dateString: string): Date => {
  let dateArr = dateString.split("/").map((element: string): number => {
    return parseInt(element);
  });
  return new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
};
// export const stringToNumber = ()
