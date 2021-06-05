const NUMBERS_ALPHABET = [
  [48, 57],
  [65, 90],
  [97, 122],
]

const isInRanges = (ranges: Array<Array<number>>) => (input: number) => {
  return ranges.some(([min, max]) => input >= min && input <= max)
}

export const isNumberOrAlphabet = isInRanges(NUMBERS_ALPHABET)
