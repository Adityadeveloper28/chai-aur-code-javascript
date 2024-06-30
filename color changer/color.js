const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    // another way 😁
    // body.style.backgroundColor = e.target.id;

    // by switch case also
    
});
// buttons.forEach(button=>{
//     button.addEventListener('click',e=>{
//         const color = e.target.id;
//         switch(color){
//             case "grey" :
//             case "white":
//             case "blue":
//             case "yellow":
//                 body.style.backgroundColor=color;
//                 break;
//         }
//     })
// })
// });