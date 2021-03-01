function Builder(data) {
  this.data = data
}

Builder.prototype.get = function () {
  return this.data
}

Builder.prototype.plus = function (...addedData) {
  this.data = addedData.reduce((acc, current) => acc + current, this.data)
  return this
}

function IntBuilder(int) {
  this.data = int
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.random = function (from, to) {
  return Math.floor(from + Math.random() * (to + 1 - from))
}

IntBuilder.prototype.minus = function (...values) {
  this.data -= values.reduce((acc, current) => acc + current)

  return this
}

IntBuilder.prototype.multiply = function (value) {
  this.data *= value

  return this
}

IntBuilder.prototype.divide = function (value) {
  this.data = Math.trunc(this.data / value)

  return this
}

IntBuilder.prototype.mod = function (value) {
  this.data %= value

  return this
}

const intBuilder = new IntBuilder(10)

console.log(IntBuilder.random(5, 10))

console.log(intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get())

class StringBuilder extends Builder {
  minus(value) {
    this.data = this.data.slice(0, this.data.length - value)

    return this
  }

  multiply(value) {
    this.data = this.data.repeat(value)

    return this
  }

  divide(value) {
    const k = Math.floor(this.data.length / value)
    this.data = this.data.slice(0, this.data.length - k)

    return this
  }

  remove(value) {
    this.data = [...this.data].reduce((acc, current) => {
      let newStr = acc
      if (current !== value) {
        newStr += current
      }
      return newStr
    }, '')

    return this
  }

  sub(from, substringLength) {
    this.data = this.data.substring(from, from + substringLength)

    return this
  }
}

const strBuilder = new StringBuilder('Hello')

console.log(strBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1, 1)
  .get())
