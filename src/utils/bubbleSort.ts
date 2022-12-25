function bubbleSortStep(numbers: number[], j: number) {
  const tmpNumbers = [...numbers];

  if (numbers[j] > numbers[j + 1]) {
    const tmp = tmpNumbers[j];
    tmpNumbers[j] = tmpNumbers[j + 1];
    tmpNumbers[j + 1] = tmp;
  }

  return tmpNumbers;
}

export default bubbleSortStep;
