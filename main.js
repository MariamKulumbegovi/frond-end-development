var priceinput=document.getElementById('thepriceinput')
var nameinput=document.getElementById('thenameinput')
var button=document.getElementById('btn')
var list=document.getElementById('productsul')

var products=[]

    
var rendering=function () {
    productsul.innerHTML=''
    products.forEach(item => {
        var li=document.createElement('li')
        var em=document.createElement('em')
        var span=document.createElement('span')
        n=item.name
        pr=item.price
        em.innerText=n
        span.innerText=pr
        li.appendChild(em)
        li.appendChild(span)
        productsul.appendChild(li)
        span.style.marginLeft='20px'
        em.style.borderBottom='solid'
        span.style.borderBottom='solid'
        li.style.display='flex'
        li.style.justifyContent='space-between'
        li.style.width='351px'
        li.style.marginTop='15px'
        li.className += "names-li"

    })
    thenameinput.value=''
    thepriceinput.value=''
};


setTimeout(() => {
    btn.addEventListener('click',function () {
        var names=thenameinput.value
        var prices=thepriceinput.value
        products.push({'name':names,'price':prices})
        console.log(products)
        rendering()

    })
}, 0);


var totalp=document.getElementById('total')
var final=document.getElementById('finalresult')
var totals=[]
var r=[]


// var totalrender=function () {

//     // var p=document.createElement('p')
//     // p.innerText=finalprice
//     // finalresult.appendChild(p)
// }

setTimeout(() => {
    total.addEventListener('click',function () {
        products.forEach(element => {
            var sum = 0;
             parskey = parseInt(element.price);
            var t=sum += parskey;
            totals.push(t)
        
            })
            var finalprice=totals.reduce(function(acc, val) { return acc + val; }, 0)
            r.push(finalprice)
            const [lastNumber] = r.slice(-1);
            // console.log(lastNumber)
            var p=document.createElement('p')
             p.innerText=lastNumber
             finalresult.appendChild(p)
    })

   
    
    
           
}, 0)



  