function BaseBuilder(value) {
  this.value = value
}

BaseBuilder.prototype.plus = function plus(...args) {
  for (let arg = 0; arg < args.length; arg + 1) {
    this.value += args[arg]
  }

  return this
}

BaseBuilder.prototype.get = function get() {
  return this.value
}

function IntBuilder(value) {
  BaseBuilder.call(this, value)
}

IntBuilder.prototype = Object.create(BaseBuilder.prototype)
IntBuilder.prototype.constructor = BaseBuilder

IntBuilder.prototype.minus = function minus(...args) {
  for (let arg = 0; arg < args.length; arg + 1) {
    this.value -= args[arg]
  }

  return this
}

IntBuilder.prototype.multiply = function multiply(n) {
  this.value *= n

  return this
}

IntBuilder.prototype.divide = function divide(n) {
  this.value /= n

  return this
}

IntBuilder.prototype.mod = function mod(n) {
  this.value %= n

  return this
}

IntBuilder.random = function random(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue)) + minValue
}

class StringBuilder extends BaseBuilder {
  minus(cutNumber) {
    this.value = this.value.slice(0, this.value.length - cutNumber)

    return this
  }

  multiply(repeatNumber) {
    this.value = this.value.repeat(repeatNumber)

    return this
  }

  divide(divideNumber) {
    const endValue = Math.floor(this.value.length / divideNumber)

    this.value = this.value.slice(0, endValue)

    return this
  }

  remove(removeString) {
    const index = this.value.search(removeString)

    if (index !== -1) {
      this.value = this.value.slice(0, index)
        + this.value.slice(index + removeString.length)
      this.remove(removeString)
    }

    return this
  }

  sub(from, n) {
    this.value = this.value.slice(from, from + n)

    return this
  }
}

IntBuilder.random(10, 100)

const intBuilder = new IntBuilder(10)
intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get()

const strBuilder = new StringBuilder('Hello')
strBuilder
  .plus(' all', '!')
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove('l')
  .sub(1, 1)
  .get()
