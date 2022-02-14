/* eslint-disable linebreak-style */
/* eslint-disable func-names */

function Builder(data) {
  this.data = data
}

Builder.prototype.getData = function () {
  return this.data
}

Builder.prototype.plus = function (...args) {
  if (typeof this.data === 'string') {
    let str = this.data
    const arr = [str].concat(...args)
    for (let index = 0; index < arr.length; index += 1) {
      str = arr.join(' ')
    }
    this.data = str
  } else if (typeof this.data === 'number') {
    const arr = [].concat(...args)
    let res = this.data
    for (let index = 0; index < arr.length; index += 1) {
      res += arr[index]
    }
    this.data = res
  }
  return this.data
}

function IntBuilder(data = 0) {
  Builder.call(this, data)
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.minus = function (...nums) {
  const numsArr = [].concat(...nums)
  let res = this.data
  for (let index = 0; index < numsArr.length; index += 1) {
    res -= numsArr[index]
  }
  this.data = res
  return this.data
}

IntBuilder.prototype.multiply = function (n) {
  const res = this.data * n
  this.data = res
  return this.data
}

IntBuilder.prototype.divide = function (n) {
  const res = this.data / n
  this.data = res
  return this.data
}

IntBuilder.prototype.mod = function (n) {
  const res = this.data % n
  this.data = res
  return this.data
}

IntBuilder.random = function (from, to) {
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from)
}
