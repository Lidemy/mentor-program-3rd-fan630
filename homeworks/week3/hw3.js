function isPrime (n) {
  if (n === 1) return false
  if (n === 2) return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  } return true
}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(37))

module.exports = isPrime
