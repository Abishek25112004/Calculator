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

let btnArray = [nine,eight,seven,six,five,four,three,two,one,zero,twoZeros]

let currentInput = document.querySelector('.currentInput')

let display=(btnValue)=>{
    currentInput.innerText = value
}

let value = " ";

btnArray.map((btn)=>{
     btn.addEventListener('click',()=>{
        value = value+btn.value
        console.log(value)

        display(value)
     })
})


