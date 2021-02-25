function Builder(data) {
  this.data = data
}

Builder.prototype.get = function () {
  return this.data
}

Builder.prototype.plus = function (...addedData) {
  const initialData = this.data

  return [...addedData].reduce((acc, current) => {
    acc += current
    return acc
  }, initialData)
}

function IntBuilder(int) {
  this.data = int
}

IntBuilder.random = function (from, to) {
  const rand = from + Math.random() * (to + 1 - from)

  return Math.floor(rand)
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.minus = function (...values) {
  const subtractedValue = [...values].reduce((acc, current) => {
    acc = acc + current

    return acc
  })

  return this.data - subtractedValue
}

IntBuilder.prototype.multiply = function (value) {
  return this.data * value
}

IntBuilder.prototype.divide = function (value) {
  return Math.trunc(this.data / value)
}

IntBuilder.prototype.mod = function (value) {
  return value % this.data
}

const intBuilder = new IntBuilder(10)

console.log(intBuilder.plus(2))
console.log(intBuilder.plus(2).minus(2))

class StringBuilder extends Builder {
  constructor(str) {
    super(str)
    this.str = str
  }

  minus = (value) => {
    return this.str.slice(0, this.str.length - value)
  }

  multiply = (value) => {
    return this.str.repeat(value)
  }

  divide = (value) => {
    const k = Math.floor(this.str.length / value)
    return this.str.slice(0, this.str.length - k)
  }

  remove = (value) => {
    return [...this.str].reduce((acc, current) => {
      if (current !== value) {
        acc = acc + current
      }
      return acc
    }, '')
  }

  sub = (from, substringLength) => {
    return this.str.substring(from, from + substringLength)
  }
}

const strBuilder = new StringBuilder('Hello')

console.log(strBuilder.minus(2))
console.log(strBuilder.minus(2).plus(' x'))

// node ./tasks/inheritance/index.js
