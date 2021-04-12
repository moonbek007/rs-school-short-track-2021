const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.traverse = this.queue;
  }

  get size() {
    return this.queue.length;
  }

  enqueue(element) {
    this.traverse.next = new ListNode();
    this.traverse.value = element;
    this.traverse = this.traverse.next;
  }

  dequeue() {
    const answer = this.queue.value;
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return answer;
  }
}

module.exports = Queue;
