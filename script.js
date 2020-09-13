/*====================Convert Text====================*/
let convertBtn = document.getElementsByClassName('btn__convert')[0];

convertBtn.addEventListener('click', () => {
    let text = document.getElementById('text__before').value;
    let func = getSum(text)

    document.querySelector('.box span').innerHTML = text;
})

function getSum(n) {
    return n;
}
/*====================Reset input====================*/
function resetFunction1 () {
    let divEL = document.querySelector('.label-1')
    let spanEL = document.querySelector('#text__before')
    
    divEL.removeChild(spanEL)
    
    let spanNew = document.createElement('textarea')
    spanNew.id = "text__before"
    divEL.appendChild(spanNew)
}
/*====================Reset span=====================*/
let resetBtn2 = document.getElementsByClassName('btn__reset-2')[0];

resetBtn2.addEventListener('click', () => {
    let text = '';
    let func = resetFunction2(text)

    document.querySelector('.box span').innerHTML = text;
})

function resetFunction2(n) {
    return n;
}




