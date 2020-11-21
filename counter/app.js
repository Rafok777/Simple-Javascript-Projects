// set initial count
let count = 0

let value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.currentTarget.innerHTML == 'decrease') {
            count--
        } else if(e.currentTarget.innerHTML == 'increase') {
            count++
        } else {
            count = 0
        }
        if(count > 0) value.style.color = 'green'
        if(count < 0) value.style.color = 'red'
        if(!count) value.style.color = 'black'
        value.textContent = count;
    })
})