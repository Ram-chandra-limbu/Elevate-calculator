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
        
        if (buttonText === '=') {
            try {
                string = evalExpression(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }
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

function evalExpression(expression) {
    return Function('return ' + expression)();
}
