interface Argv {
  i: number
  j: number
  status: number
}

type Report = (argv: Argv) => void

const naivePatternSearchingAlgorithm =
  (report: Report) =>
  (string: string, pattern: string): Array<number> => {
    // external
    let status = 0

    const indexes = []
    for (let i = 0; i < string.length - pattern.length; i++) {
      let j

      for (j = 0; j < pattern.length; j++) {
        if (string[i + j] !== pattern[j]) {
          status = 0
          break
        }
      }

      if (j == pattern.length) {
        indexes.push(i)
        status = 1
      }

      report({
        i,
        j,
        status,
      })
    }
    return indexes
  }

export default naivePatternSearchingAlgorithm
