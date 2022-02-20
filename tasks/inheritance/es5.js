/* eslint-disable func-names */

function Builder(data) {
  this.data = data
}

Builder.prototype.get = function () {
  return this.data
}

function IntBuilder(data = 0) {
  Builder.call(this, data)
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.plus = function (...args) {
  let res = this.data
  for (let index = 0; index < args.length; index += 1) {
    res += args[index]
  }
  this.data = res
  return this
}

IntBuilder.prototype.minus = function (...nums) {
  let res = this.data
  for (let index = 0; index < nums.length; index += 1) {
    res -= nums[index]
  }
  this.data = res
  return this
}

IntBuilder.prototype.multiply = function (n) {
  const res = this.data * n
  this.data = res
  return this
}

IntBuilder.prototype.divide = function (n) {
  const res = this.data / n
  this.data = res
  return this
}

IntBuilder.prototype.mod = function (n) {
  const res = this.data % n
  this.data = res
  return this
}

IntBuilder.random = function (from, to) {
  return Math.floor(Math.random() * (Math.floor(to) - Math.ceil(from) + 1)) + Math.ceil(from)
}
