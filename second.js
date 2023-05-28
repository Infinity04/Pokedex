const container = document.querySelector('#container');
const form = document.querySelector('#form')
const div = document.getElementById('player');
const comp = document.getElementById('computer');
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
    if(i<6)
    {
    const img1 = document.createElement('img')
    img1.src = data.sprites.other['official-artwork'].front_default;
    img1.setAttribute('id','img1');
    div.appendChild(img1);
    const para = document.createElement('h3');
    console.log(data.name);
    para.textContent = data.name.toUpperCase();
    i++;
    div.appendChild(para);
    compimg();
    }
    else{
 
    }
}

delimg = (data) =>
{
    console.log(data);
    const del = document.getElementById(`${data}`);
    del.remove();
    i--;
}

compimg = async () =>
{
    var a = getRandomInt();
     const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`);
     createimgc(res.data);
     

}
createimgc = (data) => {
    const img2 = document.createElement('img')
    img2.src = data.sprites.other['official-artwork'].front_default;
    img2.setAttribute('id','img2');
    comp.appendChild(img2);
    const para = document.createElement('h3');
    console.log(data.name);
    para.textContent = data.name.toUpperCase();
    comp.appendChild(para);
    i++;
}
function getRandomInt() {
    min = 1
    max = 350
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }