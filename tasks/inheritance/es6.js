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

class StringBuilder extends Builder {
  constructor(data = '') {
    super(data)
    this.getData = this.getData.bind(this)
  }

  minus(n) {
    const str = this.data
    const charsToDel = str.slice(0, str.length - n)
    this.data = charsToDel
    return this.data
  }

  multiply(count) {
    const str = this.data
    const currStr = str.repeat(count)
    this.data = currStr
    return this.data
  }

  divide(n) {
    const str = this.data
    const k = Math.floor(str.length / n)
    const currStr = str.slice(0, k)
    this.data = currStr
    return this.data
  }

  remove(str) {
    const string = this.data
    const indexStart = string.indexOf(str)
    const currStr = string.slice(0, indexStart) + string.slice(indexStart + str.length)
    this.data = currStr
    return this.data
  }

  sub(from, n) {
    const str = this.data
    const currStr = str.slice(from, n + 1)
    this.data = currStr
    return this.data
  }
}

const myString = new StringBuilder('Hello!')
myString.plus('world')
