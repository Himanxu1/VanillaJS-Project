const modelBtn = document.querySelector('.model-btn');
const model = document.querySelector('.model-overlay');
const close = document.querySelector('.close');

modelBtn.addEventListener('click',function(){
    model.classList.add('open-model');
})

close.addEventListener('click',function(){
model.classList.remove('open-model')
})