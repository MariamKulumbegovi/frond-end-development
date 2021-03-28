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

// display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);


function display(val)
{
   document.getElementById("insidetext").value+=val
}


 function evaluation(){
    
    let x = document.getElementById("insidetext").value
    let y = eval(x)
    document.getElementById("insidetext").value = y

    }

function erasevalue() {
  document.getElementById('insidetext').value=''
  console.log('clicked')
  
}
 
function clear() {
  let lr=document.getElementById('text')
  text.innerText=''
  
}
      
    