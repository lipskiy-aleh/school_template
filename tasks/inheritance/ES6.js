class Builder {
  constructor(str) {
    this.str = str
  }

  get() {
    return this.str
  }
}

class StringBuilder extends Builder {
  plus(...s) {
    [...s].reduce((acc, it) => acc + it, this.str)
    return this
  }

  minus(n) {
    return this.str.slice(0, -n)
  }

  multiply(int) {
    return this.str.repeat(int)
  }

  divide(n) {
    return this.str.substring(Math.floor(this.str.length / n), 0)
  }

  remove(l) {
    for (let i = 0; i < this.str.length; i++) {
      const item = this.str[i]
      if (item === l) {
        this.str.slice(i)
      }
    }
    return this.str
  }

  sub(from, n) {
    return this.str.substr(from, n)
  }
}

const strBuilder = new StringBuilder('Hello')
console.log(strBuilder)
console.log(strBuilder.plus(' all', '!'))
console.log(strBuilder.minus(4))
console.log(strBuilder.multiply(3))
console.log(strBuilder.divide(4))
console.log(strBuilder.remove('l'))
console.log(strBuilder.sub(1, 1))
console.log(strBuilder.get())
