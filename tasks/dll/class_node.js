export default class Node {
  constructor(previous = null, value, next = null) {
    this.previous = previous
    this.value = value
    this.next = next
  }
}
