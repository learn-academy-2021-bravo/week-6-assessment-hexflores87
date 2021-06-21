var cubeAndSum2 = [0, 5, 10];
// Expected output: 1125
const sumCubed = (numbers) => {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num * num * num;
  });
  return sum;
};

const sum = sumCubed(cubeAndSum2);
console.log(sum);
