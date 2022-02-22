import Node from './class_node'

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(value) {
    const node = new Node(this.previous, value, this.head)
    if (this.head) {
      this.head.previous = node
    }

    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    return this
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  traverse(order) {
    if (order === false) {
      let curNode = this.head
      let previousNode = null
      let nextNode = null

      while (curNode) {
        nextNode = curNode.next
        previousNode = curNode.previous
        curNode.next = previousNode
        curNode.previous = nextNode
        previousNode = curNode
        curNode = nextNode
      }

      this.tail = this.head
      this.head = previousNode
      return this
    }

    return this
  }

  find(value) {
    while (this.head) {
      if (this.head.value === value) {
        return this.head
      }
      this.head = this.head.next
    }

    return null
  }

  addAfter(value, parentNode = this.find(value)) {
    let addedNode = this.add(value)
    let curNode = this.head

    while (curNode) {
      if (curNode.value === parentNode) {
        addedNode = parentNode.next
        if (parentNode === this.head) {
          this.head = addedNode.previous

          if (addedNode === this.tail) {
            this.tail = addedNode.previous
            this.tail.next = null
          } else {
            const previousNode = addedNode.previous
            const nextNode = addedNode.next
            previousNode.next = nextNode
            nextNode.previous = previousNode
          }
        }
      }

      curNode = curNode.next
    }

    return this
  }

  delete(value) {
    let delNode = null
    let curNode = this.head

    while (curNode) {
      if (curNode.value === value) {
        delNode = curNode
        if (delNode === this.head) {
          this.head = delNode.next

          if (this.head) {
            this.head.previous = null
          }

          if (delNode === this.tail) {
            this.tail = null
          }
        } else if (delNode === this.tail) {
          this.tail = delNode.previous
          this.tail.next = null
        } else {
          const previousNode = delNode.previous
          const nextNode = delNode.next
          previousNode.next = nextNode
          nextNode.previous = previousNode
        }
      }

      curNode = curNode.next
    }

    return this
  }

  isExist(value) {
    if (!this.head) {
      return null
    }

    while (this.head) {
      if (this.head.value === value) {
        return true
      }
      this.head = this.head.next
    }

    return false
  }
}

const list = new DoublyLinkedList()

list.add('4').add('3').add('2').add('1')
