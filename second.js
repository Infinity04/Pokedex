const container = document.querySelector('#container');
const base = 'https://raw.githubusercontent.com/monikode/pokedex/master/assets/pokemon/'

for(let i=100 ; i<899 ;i++)
{
    const divi = document.createElement('div')
    divi.classList.add('period');

    const tag = document.createElement('p');
    const imga = document.createElement('img');
    imga.src = `${base}${i}.png`
    container.append(divi)
    divi.appendChild(imga)
}

 const back = document.querySelector('body');
// back.setAttribute('style','background-color:red')
const clicka = document.querySelectorAll('.period');
for(const box of clicka){
box.addEventListener('click',function(){
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
back.setAttribute('style',`background-color:rgb(${r},${g},${b}`)
})}

