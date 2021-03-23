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
        li.style.marginLeft='120px'
        li.style.marginTop='15px'

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


setTimeout(() => {
    total.addEventListener('click',function () {
        products.forEach(element => {
    
         var m=parseInt(element.price)
        
        
        })
        
    })

        
    
    
           
}, 0)


// console.log(q+=q)

// var array = {"nR": 22, "nH": 7, "totB": "2", "nSR": 1, "htRb": "1"}


  