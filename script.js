let nine = document.querySelector('.nine')
let eight = document.querySelector('.eight')
let seven = document.querySelector('.seven')
let six = document.querySelector('.six')
let five = document.querySelector('.five')
let four = document.querySelector('.four')
let three = document.querySelector('.three')
let two = document.querySelector('.two')
let one = document.querySelector('.one')
let zero = document.querySelector('.zero')
let twoZeros = document.querySelector('.twoZeros')
let dot = document.querySelector('.dot')

let btnArray = [nine,eight,seven,six,five,four,three,two,one,zero,twoZeros,dot]

let currentInput = document.querySelector('.currentInput')

let display=()=>{
    currentInput.innerText = value
}

let value = " ";

let valueArray = []

btnArray.map((btn)=>{
     btn.addEventListener('click',()=>{
        value += btn.value
        console.log(value)
        display()
     })
})

let add = document.querySelector('.add')
let sub = document.querySelector('.sub')
let mul = document.querySelector('.mul')
let div = document.querySelector('.div')
let mod = document.querySelector('.mod')

let calArray = [add,sub,mul,div,mod]

calArray.map((calBtn)=>{
    calBtn.addEventListener('click',()=>{
        value+=calBtn.value
        display()
    })
})

let equal = document.querySelector('.equal')
let displayAns = document.querySelector('.displayAns')

let result 

equal.addEventListener('click',()=>{
    result = eval(value)
    
    let initialZero = (result==undefined)?'0':result;
    console.log(result)
    displayAns.innerHTML = `= ${initialZero}`
})

let clear = document.querySelector('.clear')

clear.addEventListener('click',()=>{
    currentInput.innerText = 0
    value = ' '
    displayAns.innerHTML = 0
    result = 0
})










