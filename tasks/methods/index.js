/* eslint-disable linebreak-style */
/* eslint-disable no-extend-native */
/* eslint-disable func-names */

// customMap
Array.prototype.customMap = (callback) => {
  const curArr = this
  const arr = []
  for (let index = 0; index < curArr.length; index += 1) {
    const el = curArr[index]
    const newEl = callback(el, index, curArr)
    arr.push(newEl)
  }
  return arr
}

// reduce
Array.prototype.customReduce = (callback, initValue) => {
  const curArr = this
  let startIndex
  let acc

  if (initValue) {
    acc = initValue
    startIndex = 0
  } else {
    // eslint-disable-next-line prefer-destructuring
    acc = curArr[0]
    startIndex = 1
  }

  for (let index = startIndex; index < curArr.length; index += 1) {
    const el = curArr[index]
    acc = callback(acc, el, index, curArr)
  }
  return acc
}

// filter
Array.prototype.customFilter = (callback) => {
  const curArr = this
  const arr = []
  for (let index = 0; index < curArr.length; index += 1) {
    const el = curArr[index]
    const addToNewArr = callback(el, index, curArr)
    if (addToNewArr) {
      arr.push(el)
    }
  }
  return arr
}

// forEach
Array.prototype.customForEach = (callback) => {
  const curArr = this
  for (let index = 0; index < curArr.length; index += 1) {
    const el = curArr[index]
    callback(el, index, curArr)
  }
}

// Bind
Function.prototype.customBind = function (ctx) {
  const func = this
  return function (...args) {
    return func.apply(ctx, args)
  }
}

// Bind2
Function.prototype.powerBind = function (ctx) {
  const func = function (...args) {
    return func.clearFn.apply(ctx, args)
  }
  func.clearFn = this.clearFn || this
  return func
}
