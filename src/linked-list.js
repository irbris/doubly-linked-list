const Node = require('./node');

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  //Should add node to the end of the list
  append(data) {
    const node = new Node(data);

    if (this.isEmpty()) {
      this._head = node;
      this._tail = node;
    } else {
      this._tail.next = node;
      node.prev = this._tail;
      this._tail = node;
    }
    
    this.length++;
    return this;
  }

  //Should return data from the head of the list
  head() {
    return this._head.data;
  }

  //Should return data from the tail of the list
  tail() {
    return this._tail.data;
  }


  //Should return data of node by specified index
  at(index) {
    let count = 0;
    let current = this._head;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current.data;
  }

  //Should insert data to specified index
  insertAt(index, data) {
    const node = new Node(data);    
    let current = this._head;
    let count = 0;

    while (count < index) {
      current = current.next;
      current.prev.next = node;
      node.prev = current.prev;
      node.prev = node;
      node.next = current;
      count++;
    }

    return this;
  }

  //Should return true if list is empty, false otherwise
  isEmpty() {
    return !this.length;
  }

  //Should clear the list
  clear() {
    this.length = 0;
    this._head.data = null;
    this._tail.data = null;

    return this;
  }

  //Should delete element by specified index
  deleteAt(index) {
    if (this.length <= 1) {
      return this;
    }      

    let current = this._head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    var prev = current.prev;
    var next = current.next;
    prev.next = next;
    next.prev = prev;

    return this;
  }

  //Should reverse the list
  reverse() {
    let currentNode = this._head;
    let temp;

    while (currentNode) {
      temp = currentNode.prev
      currentNode.prev = currentNode.next;
      currentNode.next = temp;

      currentNode = currentNode.prev;
    }

    temp = this._head;
    this._head = this._tail;
    this._tail = temp;

    return this;
  }

  //Should return index of specified value or -1 if list doesn't contain such
  indexOf(data) {
    let current = this._head;

    for (let i = 0; i < this.length; i++) {
      if (current.data === data) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
}

module.exports = LinkedList;