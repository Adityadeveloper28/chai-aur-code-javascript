class Queue {
    constructor() {
      this.items = {}; // Use an object to store queue items
      this.frontIndex = 0; // Keep track of the front of the queue
      this.backIndex = 0;  // Keep track of the back of the queue
    }
  
    // Add an element to the back of the queue
    enqueue(element) {
      this.items[this.backIndex] = element;
      this.backIndex++;
    }
  
    // Remove and return the front element of the queue
    dequeue() {
      if (this.isEmpty()) return "Queue is empty";
      const result = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      return result;
    }
  
    // Return the front element of the queue without removing it
    front() {
      if (this.isEmpty()) return "Queue is empty";
      return this.items[this.frontIndex];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.backIndex === this.frontIndex;
    }
  
    // Get the size of the queue
    size() {
      return this.backIndex - this.frontIndex;
    }
  
    // Clear the queue
    clear() {
      this.items = {};
      this.frontIndex = 0;
      this.backIndex = 0;
    }
  }
  
  // Example usage
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue); // true
  console.log(queue.front()); // 1
  console.log(queue.dequeue()); // 1
  console.log(queue.isEmpty()); // false
  console.log(queue.size()); // 1
  queue.clear();
  console.log(queue.isEmpty());
  