const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('sidebar');


sidebar.addEventListener('click',function(){
    
    if(navbar.classList.contains('closebar')){
        navbar.classList.remove('closebar');
    }else{
        navbar.classList.add('closebar');
    }
})
