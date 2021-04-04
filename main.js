// // let user={
// //     name:'mari',
// //     age:18
// // }

// // console.log(user.name)

// // let clone={}

// // for (let key in user) {
// //     user[key]=clone[key]
// // }
// // clone.name='lafleur'

// // console.log(user.name)


// let person={
//     name:'mari' , lastname:'grey', age:18, hi:function(){
//        console.log(this.name)
//     }
        
    
//   }
// // console.log(person.hasOwnProperty('name'))
// // person.hi()

// // Object.keys(person).forEach(element => {
// //     console.log(element,person[element])
    
// // });

// let spread={...person,isInLove:false}

// console.log(spread)

// const array=['smth','mari']

// const spread2=[...array,'l']

// console.log(spread2)

// let personcopy=Object.values(person)
// let personcopykeys=Object.keys(person)

// // console.log(personcopykeys,personcopy)

// let entries=Object.entries(person)

// console.log(entries)

// let perm1={isAdmin:true}
// let perm2={isActive:false}

// Object.assign(perm1,person,perm2)
// console.log(perm1)

// let create=Object.create(person)

// create.name='mar'
// console.log(person)


// const myConsole={...console}

// myConsole.log('hello')

// console.log(`${person.lastname}`)


// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }


// console.log(`${number1} ${operator} ${number2} = ${result}`);


// let numbers=getElementsById('c','div','÷','1','2','3','4','5','6','7','8','9','x','-','+','=')

// numbers.addEventListener('click',function () {

   
// })



function display(val)
{
   document.getElementById("insidetext").value+=val
}



function operators(opval) {
   document.getElementById("insidetext2").value+=opval
  
}

function gettonum2() {
   document.getElementById("one").removeAttribute("onclick")
   document.getElementById("two").removeAttribute("onclick")
   document.getElementById("three").removeAttribute("onclick")
   document.getElementById("four").removeAttribute("onclick")
   document.getElementById("five").removeAttribute("onclick")
   document.getElementById("six").removeAttribute("onclick")
   document.getElementById("seven").removeAttribute("onclick")
   document.getElementById("eight").removeAttribute("onclick")
   document.getElementById("nine").removeAttribute("onclick")
   document.getElementById("null").removeAttribute("onclick")
   
}




function displaynum2() {
   function display2(val2) {
      document.getElementById("insidetext3").value+=val2
      
   }
   document.getElementById("one").addEventListener('click',function () {
      display2('1')
      
   })
   document.getElementById("two").addEventListener('click',function () {
      display2('2')
      
   })
   document.getElementById("three").addEventListener('click',function () {
      display2('3')
      
   })
   document.getElementById("four").addEventListener('click',function () {
      display2('4')
      
   })
   document.getElementById("five").addEventListener('click',function () {
      display2('5')
      
   })
   document.getElementById("six").addEventListener('click',function () {
      display2('6')
      
   })
   document.getElementById("seven").addEventListener('click',function () {
      display2('7')
      
   })
   document.getElementById("eight").addEventListener('click',function () {
      display2('8')
      
   })
   document.getElementById("nine").addEventListener('click',function () {
      display2('9')
      
   })
   document.getElementById("null").addEventListener('click',function () {
      display2('0')
      
   })
   
}





 function evaluation(){
   let parsenum1=parseInt(document.getElementById("insidetext").value)
   let parsenum2=parseInt(document.getElementById("insidetext3").value)

    if(document.getElementById("insidetext2").value=='+'){
     let ifplus= parsenum1 +parsenum2
     document.getElementById("insidetext3").value=ifplus
    
       
    }else if(document.getElementById("insidetext2").value=='-'){
      let ifminus= parsenum1 - parsenum2
      document.getElementById("insidetext3").value=ifminus
      

    }else if(document.getElementById("insidetext2").value=='*'){
      let x= parsenum1 * parsenum2
      document.getElementById("insidetext3").value=x
    }else if(document.getElementById("insidetext2").value=='/'){
      let division= parsenum1 / parsenum2
      document.getElementById("insidetext3").value=division
    }else if(document.getElementById("insidetext2").value=='%'){
      let div= parsenum1 % parsenum2
      document.getElementById("insidetext3").value=div
    }
   
    
    document.getElementById('insidetext').value=''
   document.getElementById('insidetext2').value=''
    }


    function erasevalue() {
      document.getElementById('insidetext').value=''
      document.getElementById('insidetext2').value=''
      document.getElementById('insidetext3').value=''
    }