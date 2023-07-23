// let input = document.getElementById('inputBox');
// let buttons = document.querySelectorAll('button');
// let string = "";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML === '=') {
//             string = eval(string);
//             input.value = string;
//         } 
//         else if (e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }  
//         else if(e.target.innerHTML== 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });


let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerHTML;

        // if(window.KeyboardEvent('enter')){
        //     console.log("Enter")
        // }
        let fielld=document.getElementById('inputBox')
        fielld.onkeydown=function(e){
            if (e.k == 13) {
                alert('enter key pressed');
              }}
        
        if (buttonText === '=') {
            result();
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});
function result(){
    try {
        let value=document.getElementById('inputBox');
        console.log(value.value)

        string = evalExpression(value.value);
        input.value = string;
    } catch (error) {
        input.value = "Error";
    }
}

function evalExpression(expression) {
    return Function('return ' + expression)();
}

