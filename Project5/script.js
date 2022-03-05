//  Classlist - show/gets all classes
//  contains - checks classlist for specific class
//  add - add class
//  remove - remove class
//  toggle - toggle class


const navToggle = document.querySelector('.navtoggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click',function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));

if(links.classList.contains('show-links')){
    links.classList.remove('show-links');
}
else{
    links.classList.add('show-links');
}

})