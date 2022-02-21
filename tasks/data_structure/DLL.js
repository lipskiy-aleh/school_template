/* eslint-disable max-classes-per-file */
class Node {
  constructor(data, previous = null, next = null) {
    this.data = data
    this.previous = previous
    this.next = next
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHead() {
    return `The head-node has value '${this.head.data}'`
  }

  getTail() {
    return `The tail-node has value '${this.tail.data}'`
  }

  traverse(order = true) {
    if (!this.head) {
      return null
    }
    const nodes = []
    let curNode = this.head
    if (!order) {
      while (curNode) {
        nodes.push(curNode.data)
        curNode = curNode.next
      }
      return `${nodes.reverse().join(' -> ')}`
    }
    while (curNode) {
      nodes.push(curNode.data)
      curNode = curNode.next
    }
    return `${nodes.join(' -> ')}`
  }

  add(value) {
    const newNode = new Node(value)
    if (this.tail) {
      this.tail.next = newNode
    }
    newNode.previous = this.tail
    this.tail = newNode

    if (!this.head) {
      this.head = newNode
    }
    return this
  }

  find(value) {
    if (!this.head) {
      return null
    }
    let curNode = this.head
    while (curNode) {
      if (curNode.data === value) {
        return curNode
      }
      curNode = curNode.next
    }
    return null
  }

  addAfter(value, parentNode) {
    const findParentNode = this.find(parentNode)
    const newNode = new Node(value, findParentNode, findParentNode.next)
    if (!findParentNode) {
      return null
    } if (findParentNode === this.tail) {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }
    findParentNode.next = newNode
    return this
  }

  delete(value) {
    if (!this.head) {
      return null
    }
    let curNode = this.find(value)
    if (curNode === this.head) {
      this.head = this.head.next
      this.head.previous = null
      return this
    } if (curNode === this.tail) {
      this.tail = this.tail.previous
      this.tail.next = null
      return this
    }
    curNode.previous.next = curNode.next
    curNode.next.previous = curNode.previous
    curNode = null
    return this
  }

  isExist(value) {
    if (!this.head) {
      return false
    }
    let curNode = this.head
    while (curNode) {
      if (curNode.data === value) {
        return true
      }
      curNode = curNode.next
    }
    return false
  }
}

const dll = new DoubleLinkedList()
dll.add(1).add(2).add(3).add(4)
