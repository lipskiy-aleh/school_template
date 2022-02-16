/* eslint-disable func-names */

function Builder(data) {
  this.data = data
}

Builder.prototype.get = function () {
  return this.data
}

class StringBuilder extends Builder {
  constructor(data = '') {
    super(data)
    this.get = this.get.bind(this)
  }

  plus(...args) {
    let str = this.data
    for (let index = 0; index < args.length; index += 1) {
      str = args.join('')
    }
    this.data = str
    return this
  }

  minus(n) {
    const str = this.data
    const charsToDel = str.slice(0, str.length - n)
    this.data = charsToDel
    return this
  }

  multiply(count) {
    const str = this.data
    const currStr = str.repeat(count)
    this.data = currStr
    return this
  }

  divide(n) {
    const str = this.data
    const k = Math.floor(str.length / n)
    const currStr = str.slice(0, k)
    this.data = currStr
    return this
  }

  remove(str) {
    const string = this.data
    const indexStart = string.indexOf(str)
    const currStr = string.slice(0, indexStart) + string.slice(indexStart + str.length)
    this.data = currStr
    return this
  }

  sub(from, n) {
    const str = this.data
    const currStr = str.slice(from, n + 1)
    this.data = currStr
    return this
  }
}

const myString = new StringBuilder('Hello!')
myString.plus('world')
