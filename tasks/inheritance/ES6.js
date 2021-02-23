class StringBuilder {
  constructor(str) {
    this.plus = (...strings) => {
      console.log(str.concat(...strings))
    }
  }
}

const a = new StringBuilder('hello')

a.plus(' all', '!')
// node ./tasks/inheritance/ES6.js
