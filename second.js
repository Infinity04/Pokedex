const container = document.querySelector('#container');
// const base = 'https://raw.githubusercontent.com/monikode/pokedex/master/assets/pokemon/'

// for(let i=100 ; i<899 ;i++)
// {
//     const divi = document.createElement('div')
//     divi.classList.add('period');

//     const tag = document.createElement('p');
//     const imga = document.createElement('img');
//     imga.src = `${base}${i}.png`
//     container.append(divi)
//     divi.appendChild(imga)
// }

//  const back = document.querySelector('body');
// // back.setAttribute('style','background-color:red')
// const clicka = document.querySelectorAll('.period');
// for(const box of clicka){
// box.addEventListener('click',function(){
//     let r = Math.floor(Math.random()*255)
//     let g = Math.floor(Math.random()*255)
//     let b = Math.floor(Math.random()*255)
// back.setAttribute('style',`background-color:rgb(${r},${g},${b}`)
// })}

const form = document.querySelector('#form')
const div = document.getElementById('div2');
var i = 0 ;
form.addEventListener('submit',async function(e)
{
    e.preventDefault();
    const search = form.elements.input.value;
    console.log(search);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    createimg(res.data);
    console.log(i)
})

createimg = (data) => {
    if(i==0)
    {
    const img1 = document.createElement('img')
    img1.src = data.sprites.front_default;
    img1.setAttribute('id','img1');
    div.appendChild(img1);
    i++;
    }
    else{
        delimg();
        createimg(data);
    }
}

delimg = () =>
{
    const del = document.getElementById('img1');
    del.remove();
    i--;
}
