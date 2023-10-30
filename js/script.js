// console.log(Array.from(boxChildren).filter(item => item.innerText > 1));
// console.log(Array.from(boxChildren).map(item => item.innerText = `-=${item.innerText}=-`));

//  const spans = Array.from(boxChildren).map(item => item.innerHTML = `<p>${item.innerText}</p>`).join('');
//  box.innerHTML = spans;

// console.dir(document.body);
// const box = document.querySelector('.box');
// const boxChildren = box.children;

// Array.from(boxChildren).forEach(el => el.addEventListener('click' , function(){
//     Array.from(boxChildren).forEach(el => el.className = 'box-item');
//     if(!this.previousElementSibling){
//         this.nextElementSibling.classList.toggle('next')
//     }else if(!this.nextElementSibling){
//         this.previousElementSibling.classList.toggle('prev')
//     }else{
//         this.previousElementSibling.classList.toggle('prev')
//         this.nextElementSibling.classList.toggle('next')
//     }
//     this.classList.toggle('active')
// }))

const items = document.querySelectorAll(".box-item");
items.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.toggle("next");
    el.parentElement.classList.remove('active');
    items.forEach(el => {
      if (el.classList.contains('next')) {
        el.parentElement.classList.add('active')
      }
    })
  });
});

const accardionItems = [
  {
    title:'Title One',
    text:`Beneath the starry night,Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. whispered secre Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries.ts danced in the gentle breeze, while the moon painted dreams on a canvas of darkness.`,
    img:'./img/first.jpeg',
  },  {
    title:'Title Two',
    text:`In the bustling city, a symphony of car  Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries.horns and footsteps created an urban ballet of lifes constant motion`,
    img:'./img/second.jpeg'

  },  {
    title:'Title Three',
    text:`Amidst the emerald forest, a tranquil stream wh Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries. Amidst the emerald forest, a tranquil stream whispered tales of ancient trees and the secrets they've held for centuries.ispered tales of ancient trees and the secrets theyve held for centuries`,
    img:'./img/therd.jpeg'

  },
]
const accardion = document.querySelector('.accardion');
accardion.innerHTML = accardionItems.map(el => {
return `<div class="accardion-item">
<h2>${el.title}</h2>
<p>${el.text}</p>
<img src="${el.img}" alt="">
<i class="fa-solid fa-xmark fa-lg" style="color: #ffffff;"></i>
</div>`
}).join('');

 const accardionPost = document.querySelectorAll('.accardion-item');
 const closePost = document.querySelectorAll('.fa-xmark');


 accardionPost.forEach( el => {
  el.addEventListener('click', ()=>{
    accardionPost.forEach(el => el.classList.remove('more'))
    el.classList.toggle('more')
  })
 });


 closePost.forEach(el => {
  el.addEventListener('click' , el => {
    el.stopPropagation()
    el.target.closest('.accardion-item').classList.remove('more')
    
  })
 })




