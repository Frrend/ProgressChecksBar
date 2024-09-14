let progression = document.querySelector('.progression');

let progressLength = 0;

let wakeUp = document.querySelector('.wakeUp');
let getUp = document.querySelector('.getUp');
let shit = document.querySelector('.shit');
let breakfest = document.querySelector('.breakfast');
let teeth = document.querySelector('.teeth');

const list = [wakeUp, getUp, shit, breakfest, teeth];

for (let i = 0  ; i < list.length; i++) {
    list[i].addEventListener('click', () => {
        list[i].classList.toggle('onClass');
        if (list[i].classList.contains('onClass')) {
            progressLength = i + 1;
        }
        progress(progressLength)

        if (progressLength === i + 1) {
            progressLength = i;
        }
    })
}

function progress(steps) {
    progression.style.width = `calc(100%/5*${steps})`;
    progressLength = steps;
}
