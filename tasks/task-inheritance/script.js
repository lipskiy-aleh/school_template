function IntBuilder(int) {
    this.int = int

    this.random = function (min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

IntBuilder.prototype.plus = function (...n) {
    const result = [...n].reduce((acc, val) => acc + val, this.int)
    this.int = result
    return result
}

IntBuilder.prototype.minus = function (...n) {
    const result = [...n].reduce((acc, val) => acc - val, this.int)
    this.int = result
    return result
}
IntBuilder.prototype.multiply = function (n) {
    this.int = n * this.int
    return this.int
}
IntBuilder.prototype.devide = function (n) {
    this.int = this.int / n
    return this.int
}
IntBuilder.prototype.mod = function (n) {
    this.int = this.int % n
    return this.int
}
IntBuilder.prototype.get = function () {
    return this.int
}
const intBuilder = new IntBuilder(10)
console.log(intBuilder.plus(2, 3, 2))
console.log(intBuilder.minus(1, 2))
console.log(intBuilder.multiply(2))
console.log(intBuilder.devide(4))
console.log(intBuilder.mod(3))
console.log(intBuilder.get())

class StringBuilder {
    constructor(str) {

        this.str = str
    }
    plus(value, val) {
        this.str = this.str + value + val
        return this.str
    }
    minus(value) {
        this.str = this.str.slice(0, -value)
        return this.str
    }
    multiply(value) {
        this.str = this.str.repeat(value)
        return this.str
    }
    devide(value) {
        this.str = this.str.slice(0, this.str.length / value)
        return this.str
    }
    remove(value) {
        this.str = this.str.replaceAll(value, "")
        return this.str
    }
    sub(value, val) {
        this.str = this.str.substr(value, val)
        return this.str
    }
    get() {
        return this.str
    }
}

let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
console.log(strBuilder.plus(' all', '!'))
console.log(strBuilder.minus(4))
console.log(strBuilder.multiply(3))
console.log(strBuilder.devide(4))
console.log(strBuilder.remove('l'))
console.log(strBuilder.sub(1,1))
console.log(strBuilder.get())                         
                                  

