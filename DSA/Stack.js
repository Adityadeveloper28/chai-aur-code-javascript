class Stack{
    constructor(){
        this.items=[]
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()) return "stack is empty"
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()) return "stack is empty"
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.isEmpty())