export const getMaxTime = () => {
  let date = new Date();
  return `${date.getFullYear() - 18}-${`${date.getMonth() + 1}`.padStart(
    2,
    0
  )}-${`${date.getDate()}`.padStart(2, 0)}`;
}
