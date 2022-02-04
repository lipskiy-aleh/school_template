// eslint-disable-next-line no-extend-native
Function.prototype.customBind = function (context, ...rest) {
  const func = this
  return function (...args) {
    const id = Symbol('id')
    context[id] = func
    const result = context[id](...[...rest, ...args])
    delete context[id]
    return result
  }
}

// result
const user = {
  name: 'Nikita',
  age: 28,
}

function getNameAge(profession) {
  return `${this.name}  ${this.age} ${profession}`
}

const func = getNameAge.customBind(user, 'developer')
const func2 = getNameAge.customBind(user)
console.log(func())
console.log(func2('developer'))
