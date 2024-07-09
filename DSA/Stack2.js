//// using simple logic

class Stack{
    constructor(){
        this.items={}
        this.count=0
    }
    push(element){
        this.items[this.count]=element
        this.count++
    }

    pop(){
        if (this.isEmpty()) {
            return "stack is empty"
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek(){
        if(this.isEmpty()) return "stack is empty"
        return this.items[this.count-1]
    
    }

    isEmpty(){
        return this.count===0

    }
    size(){
        return this.count
    }
    clear(){
        this.item={}
        this.count =0
    }
}



const stack = new Stack()
stack.push(10)
stack.push(12)
console.log(stack.peek());
console.log(stack.pop())
console.log(stack.peek());
console.log(stack.isEmpty())
console.log(stack.size()); // 1

stack.clear()
console.log(stack.isEmpty());