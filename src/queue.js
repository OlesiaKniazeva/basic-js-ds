const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null; // First element (front of the queue)
    this.tail = null; // Last element (end of the queue)
  }

  getUnderlyingList() {
    return this.head; // Returns the head node, which represents the list
  }

  enqueue(value) {
    const newNode = new ListNode(value); // Create a new node with the given value
    
    if (this.tail) {
      this.tail.next = newNode; // Link the current tail node to the new node
    }
    
    this.tail = newNode; // Update the tail to the new node
    
    if (!this.head) {
      this.head = newNode; // If the queue was empty, head also points to the new node
    }
  }

  dequeue() {
    if (!this.head) {
      return null; // If the queue is empty, return null
    }
    
    const dequeuedValue = this.head.value; // Get the value from the head node
    this.head = this.head.next; // Move head to the next node
    
    if (!this.head) {
      this.tail = null; // If the queue becomes empty, reset the tail
    }
    
    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
