/// creating your own method using object and constructor 

let anotherUser = "chaiaurcode    "

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true lenght is : ${this.trim().length}`)
}

anotherUser.truelength()
"Aditya".truelength()
"designStudio".truelength()