type Output = [Array<number>, Array<Report>]

interface Report {
  i: number
  j: number
  status: 1 | 2 | 3
}

const naivePatternSearchingAlgorithm = (
  string: string,
  pattern: string
): Output => {
  const indexes: Array<number> = []
  const report: Array<Report> = []

  for (let i = 0; i <= string.length - pattern.length; i++) {
    let j

    for (j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) {
        report.push({ i, j, status: 1 })
        break
      }

      report.push({ i, j, status: 2 })
    }

    if (j == pattern.length) {
      indexes.push(i)
      report[report.length - 1].status = 3
    }
  }
  return [indexes, report]
}

export default naivePatternSearchingAlgorithm
