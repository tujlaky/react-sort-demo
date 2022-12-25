function generateNumbers(count: number) {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);
  return numbers.sort((a, b) => 0.5 - Math.random());
}

export default generateNumbers;
