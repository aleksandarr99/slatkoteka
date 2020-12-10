const cS = document.querySelector('.cs');
const cI = document.querySelectorAll('.cs img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = cI[0].clientWidth;

cS.style.transform = 'translateX('+(-size* counter) + 'px)';


//button listeners

nextBtn.addEventListener('click',()=>{
    if (counter >= cI.length-1) return;
    cS.style.transition = "transform 0.4s ease-in-out";
    counter++;
    console.log(counter);
    cS.style.transform = 'translateX('+(-size* counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter<= 0) return;
    cS.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter);
    cS.style.transform = 'translateX('+(-size* counter) + 'px)';
});

cS.addEventListener('transitionend', ()=>{
    console.log(cI[counter]);
   if (cI[counter].id === 'lastClone'){
       cS.style.transition = "none";
       counter = cI.length - 2;
       cS.style.transform = 'translateX('+(-size* counter) + 'px)';
   }
   if (cI[counter].id === 'firstClone'){
    cS.style.transition = "none";
    counter = cI.length - counter;
    cS.style.transform = 'translateX('+(-size* counter) + 'px)';
}
});
