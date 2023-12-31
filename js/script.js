// let string = "";
// let buttons = document.querySelectorAll(".button");
// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (e) => {
//     if (e.target.innerHTML == "=") {
//       string = eval(string);
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML == "AC") {
//       string = " ";
//       document.querySelector("input").value = string;
//     } else if (e.target.innerHTML == "DE") {
//       string = string.toString().slice(0, -1);
//       document.querySelector("input").value = string;
//     } else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       document.querySelector("input").value = string;
//     }
//   })

let str = "";
let buttons = document.querySelectorAll(".button");
buttons.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    if(e.target.innerHTML == "="){
      str = eval(str);
      document.querySelector("input").value= str;
    }else if(e.target.innerHTML == "AC"){
      str = "";
      document.querySelector("input").value= str;
    }else if(e.target.innerHTML == "DE"){
      str =str.toString().slice(0,-1);
      document.querySelector("input").value= str;
    }else{
    str= str + e.target.innerHTML;
    document.querySelector("input").value = str;
    }
  })
})