const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''))

  const transpose = letters[0].map((col, i) => letters.map(row => row[i]));
  const verticalJoin = transpose.map(ls => ls.join(''))


  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true
    }
  }
  for (let x of verticalJoin) {
    if (x.includes(word)) {
      return true
    }
  }

  return false
}

module.exports = wordSearch

