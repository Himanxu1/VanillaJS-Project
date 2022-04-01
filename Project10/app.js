const text = [
    `She tried not to judge him. His ratty clothes and unkempt hair made him look homeless. Was he really the next Einstein as she had been told? On the off chance it was true, she continued to try not to judge him.`,
    `There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.`,
    `Indescribable oppression, which seemed to generate in some unfamiliar part of her consciousness, filled her whole being with a vague anguish. It was like a shadow, like a mist passing across her soul's summer day. It was strange and unfamiliar; it was a mood. She did not sit there inwardly upbraiding her husband, lamenting at Fate, which had directed her footsteps to the path which they had taken. She was just having a good cry all to herself. The mosquitoes made merry over her, biting her firm, round arms and nipping at her bare insteps.`,
    `He knew what he was supposed to do. That had been apparent from the beginning. That was what made the choice so difficult. What he was supposed to do and what he would do were not the same. This would have been fine if he were willing to face the inevitable consequences, but he wasn't.`,
    `To the two friends, the treehouse was much more than a treehouse. It was a sanctuary away from the other kids where they could be themselves without being teased or bullied. It was their secret fortress hidden high in the branches of a huge oak that only they knew existed. At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to turn the treehouse into a princess castle by painting the inside pink and putting glitter everywhere.`,
    `It all started with a random letter. Several of those were joined forces to create a random word. The words decided to get together and form a random sentence. They decided not to stop there and it wasn't long before a random paragraph had been cobbled together. The question was whether or not they could continue the momentum long enough to create a random short story.`,
    `They decided to find the end of the rainbow. While they hoped they would find a pot of gold, neither of them truly believed that the mythical pot would actually be there. Nor did they believe they could actually find the end of the rainbow. Still, it seemed like a fun activity for the day, and pictures of them chasing rainbows would look great on their Instagram accounts. They would have never believed they would actually find the end of a rainbow, and when they did, what they actually found there.`,
    `There was a reason for her shyness. Everyone assumed it had always been there but she knew better. She knew the exact moment that the shyness began. It had been that fateful moment at the lake. There are just some events that do that to you.`,
    `He couldn't remember exactly where he had read it, but he was sure that he had. The fact that she didn't believe him was quite frustrating as he began to search the Internet to find the article. It wasn't as if it was something that seemed impossible. Yet she insisted on always seeing the source whenever he stated a fact.`
];


const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector('.lorem-text');
const para = document.querySelector('.para');


form.addEventListener('submit',function(e){
    e.preventDefault();
     const value = parseInt(amount.value);

     const random = Math.floor(Math.random() * text.length);
     if(isNaN(value) || value <= 0 || value > 9){
         result.innerHTML = `<p class="result">${text[random]}</p>`
         
     }else{
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item){
                return `<p class="result">${item}</p>`
        })
        .join("");
         result.innerHTML = tempText;
     }
     
})





