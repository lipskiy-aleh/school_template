const array = [
  { name: 'Tom', age: 23, wages: 500 },
  { name: 'Bob', age: 25, wages: 640 },
  { name: 'Bill', age: 20, wages: 450 },
  { name: 'Pol', age: 18, wages: 370 },
]

// -----ForEach-----

function customForEach() {
  for (let i = 0; i < array.length; i += 1) {
    console.log(array[i])
  }
}
customForEach(array)

// -----Map-----
function customMap() {
  const result = []
  for (let i = 0; i < array.length; i += 1) {
    const newElem = array[i].age + 2
    result.push(newElem)
  }
  return result
}
customMap(array)

// -----Filter-----

function customFilter() {
  const result = []
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].age >= 23) {
      result.push(array[i])
    }
  }
  return result
}
customFilter(array)

// -----Reduce-----

function customReduce() {
  let sum = 0
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i].wages
  }
  return sum
}
customReduce(array)
