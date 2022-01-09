
const form1 = document.getElementById(`form1`);
const form2 = document.getElementById(`form2`);
const form3 = document.getElementById(`form3`);

const next1 = document.getElementById(`next1`);
const next2 = document.getElementById(`next2`);
const back1 = document.getElementById(`back1`);
const back2 = document.getElementById(`back2`);

const step1 = document.getElementById(`step1`);
const step2 = document.getElementById(`step2`);
const step3 = document.getElementById(`step3`);

const progress = document.getElementById(`progress`);

next1.onclick = function(){
    form1.style.left = `-450px`;
    form2.style.left = `40px`;
    progress.style.width = `260px`
    step2.style.color = `white`;
}

back1.onclick = function(){
    form1.style.left = `40px`;
    form2.style.left = `450px`;
    progress.style.width = `130px`
    step2.style.color = `#333`;
}

next2.onclick = function(){
    form2.style.left = `-450px`;
    form3.style.left = `40px`;
    progress.style.width = `380px`
    step3.style.color = `white`;
}

back2.onclick = function(){
    form2.style.left = `40px`;
    form3.style.left = `450px`;
    progress.style.width = `260px`
    step3.style.color = `#333`;
}