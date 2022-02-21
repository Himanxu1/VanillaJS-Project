const reveiw = [{
    id: 1,
    name: "Bille",
    job: "UX-Designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"

},
{

    id: 2,
    name: "Susan",
    job: "Web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."
},

{

    id: 3,
    name: "Sam",
    job : "Senior Developer",
    img: "https://images.unsplash.com/photo-1645389689761-cdfb84a85b7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
},

{
    id: 4,
    name: "Nile",
    job: "Senior content manager",
    img: "https://images.unsplash.com/photo-1645364053092-c3cf318ee585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. "
}

]

// Select Item

const img = document.getElementById('person-img') ;
const author = document.getElementById('author') ;
const job = document.getElementById('job') ;
const info = document.getElementById('info') ;

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem =0;

window.addEventListener('DOMContentLoaded',function(){
   showPerson(currentItem);
})

function showPerson(person){
    const item = reveiw[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

prevBtn.addEventListener('click',function(){
    currentItem--
    
    if(currentItem < 0){
        currentItem = reveiw.length - 1;
    }
    showPerson(currentItem);
})

nextBtn.addEventListener('click',function(){
  currentItem++
  
  if(currentItem > reveiw.length -  1){
      currentItem = 0;
  }

  showPerson(currentItem);
})


function getRandomNumber(){
    return Math.floor(Math.random()*reveiw.length);
}

randomBtn.addEventListener('click',function(){
    showPerson(getRandomNumber());
})








