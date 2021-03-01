function IntBuilder(int) {
  this.int = int
  function randome(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
}

IntBuilder.prototype.plus = function (...n) {
  return [...n].reduce((acc, it) => acc + it, this.int)
}

IntBuilder.prototype.minus = function (...n) {
  return [...n].reduce((acc, it) => acc - it, this.int)
}

IntBuilder.prototype.multiply = function (n) {
  let result = 1
  for (let i = 0; i < n; i++) {
    result *= this.int
  }

  return result
}

IntBuilder.prototype.divide = function (n) {
  return (this.int / n).toFixed()
}

IntBuilder.prototype.get = function () {
  return this.int
}

const intBuilder = new IntBuilder(10)
console.log(intBuilder.plus(3, 2).minus(1, 2))
console.log(intBuilder.minus(1, 2))
console.log(intBuilder.multiply(2))
console.log(intBuilder.divide(4))
console.log(intBuilder.get())
