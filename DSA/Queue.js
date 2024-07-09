///Queue

class Queue{
    constructor(){
        this.items=[]
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.isEmpty()) return "queue is empty"
        return this.items.shift()
    }
    front(){
        if(this.isEmpty()) return "queue is empty"
        return this.items[0]
    }
    last(){
        if(this.isEmpty()) return "queue is empty"
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length===0
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log("last ",queue.last());
console.log("front",queue.front());
console.log("dequeue ",queue.dequeue());
console.log("after dequeue front element",queue.front());

console.log(queue.isEmpty());