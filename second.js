const container = document.querySelector('#container');
const form = document.querySelector('#form')
const div = document.getElementById('player');
const comp = document.getElementById('computer');
const div1 = document.getElementById('div1');
var i = 0 ;
var numbers = [];
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
    if(i<5)
    {
    const img1 = document.createElement('img')
    img1.src = data.sprites.other['official-artwork'].front_default;
    img1.setAttribute('id','img1');
    div.appendChild(img1);
    const para = document.createElement('h3');
    console.log(data.name);
    para.textContent = data.name.toUpperCase();
    numbers[i] = data.base_experience; 
    i++;
    div.appendChild(para);
    compimg();
    }

    else{
        
        alert("YOU CAN ONLY PICK 3")
    }
}

// delimg = (data) =>
// {
//     console.log(data);
//     const del = document.getElementById(`${data}`);
//     del.remove();
//     i--;
// }

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
    numbers[i] = data.base_experience; 
    i++;
    if(i==6)
    {
        winner();
    }
}
function getRandomInt() {
    min = 1
    max = 350
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

winner = () =>
{ var count = 0 ;
    if(numbers[0]>numbers[1]){
        count++;
    }
   if(numbers[2]>numbers[3])
   {
    count++;
   }
   if(numbers[4]>numbers[5])
    {
        count++;
    }
    const para = document.createElement('h1');
    if(count>=2)
    {
        
        para.textContent = "YOU WON" 
        
    }
    else{
        para.textContent = "YOU LOST" 
    }
    div1.appendChild(para);
}