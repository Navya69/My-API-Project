const random = require("random");

function generateRandomNumbers() {
  const numbers = [];
  for (let i = 0; i < 10; i++) {
    const number = random.randint(1, 100);
    numbers.push(number);
  }
  return numbers;
}

function printRandomNumbers(numbers) {
  for (const number of numbers) {
    console.log(number);
  }
}

if (require.main === module) {
  const numbers = generateRandomNumbers();
  printRandomNumbers(numbers);
}
