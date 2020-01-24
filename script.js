var buttons=document.getElementsByClassName("button");
var answer=document.getElementById("answer");
var past=document.getElementById("previous");
var number1=0;
var number2=null;
var operator=null;
var count=0;
function number(){
	var value=this.getAttribute('data-value');
	if(value=='AC'){
        number1=0;
        number2=null;
        operator=null;
       answer.innerText='';
        past.innerText='';
       count=0;
	}
	
	else if(value=='+/-'){
        number1=parseFloat(answer.innerText);
		answer.innerText=number1*-1;
		count=0;
	}
	else if(value=='%'){
		number1=parseFloat(answer.innerText);
		 past.innerText=number1+'%';
		answer.innerText='';
		operator='%';
		count=0;
		
	}
	else if(value=='/'){
		number1=parseFloat(answer.innerText);
        
         past.innerText=number1+'/';
		answer.innerText='';
        count=0;
		operator='/';
	}
	else if(value=='*'){
		number1=parseFloat(answer.innerText);
		 past.innerText=number1+'*';
		answer.innerText='';
		operator='*';
		count=0;
	}
	else if(value=='-'){
		number1=parseFloat(answer.innerText);
		 past.innerText=number1+'-';
		answer.innerText='';
		operator='-';
		count=0;
	}
	else if(value=='+'){
		count=0;
		number1=parseFloat(answer.innerText);
		 past.innerText=number1+'+';
		answer.innerText='';
		operator='+';
		
	}
	else if(value=='='){
		number2=parseFloat(answer.innerText);
		count=0;
		 past.innerText='';
		answer.innerText=eval(number1+operator+number2);
	}
	else if(value=='.'){
		    if(!isNaN(answer.innerText) && count===0)
			{
				answer.innerText+='.';
				count=1;
			}	
	}
    else if(value=='back'){
    	  number1 = answer.innerText;
    	  if(number1.charAt(number1.length-1)=='.')
    	  	count=0;
          answer.innerText = number1.slice(0, -1);

	}

	else{
		if(isNaN(answer.innerText) && answer.innerText!='.')
			answer.innerText='';
		if(answer.innerText.length<=15)
		answer.innerText+=value;
		
	}
}
for(var i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',number);

}