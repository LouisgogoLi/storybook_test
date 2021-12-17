export const thousandsSeparator = (num) => {
  const sNum = num + "";
  const aNumArr = sNum.split("").reverse();
  const aOverArr = [];
  let i = 0;
  aNumArr.forEach((item) => {
    i++;
    if (i > 3) {
      i = 1;
      aOverArr.push(",");
    }
    aOverArr.push(item);
  });
  aOverArr.reverse();
  return aOverArr.join("");
};
