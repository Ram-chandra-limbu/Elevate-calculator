let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        const buttonText = e.target.innerHTML;

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
        let value=document.getElementById('inputBox');
        let result=document.getElementById('resultt')
        let content=value.value;

        if(content == ""){
            content='0';
        }
    
        let arr=content.split('');
        arr.forEach(element => {
           var flagg=checkornot(element)
           if(flagg==false){
            window.location.href("www.facebook.com");
           }    
        });

        let lastChar = content.charAt(content.length - 1);
        let array=['+','-','%','/','*']

        let num=true;
            array.forEach(element => {
                while(element==lastChar){
                    content = content.slice(0, -1);
                    lastChar=content.charAt(content.length - 1)
                  }  
            });
    
        string = evalExpression(content);
        result.innerHTML=string;
        string = evalExpression(content);
        result.innerHTML=string;
}

function evalExpression(expression) {
    return Function('return ' + expression)();
}
function checkornot(item){
    var alpahbet=['1','2','3','4','5','6','7','8','0','9','.','*','-','%','/','+']
    if (item in alpahbet){
        return true;
    }
    else{
        console.log(item)
    }
}