const pokemon = document.getElementById("searchPokemon");
const addbtn = document.getElementById('addbtn');
const myteam = document.getElementById('myteam');
const fightbtn = document.getElementById('fightbtn');
const popup = document.getElementById('popup');
const win = document.getElementById('win');
const lost = document.getElementById('lost');
const closebtn = document.getElementById('closebtn');
const gobtn = document.getElementById('gobtn');
var i = 0, j = 3;
var numbers = [];

addbtn.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(pokemon.value);
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.value}`)
    createimg(res.data);
    console.log(i)
})

createimg = (data) => {
    if (i < 3) {
        const div = document.createElement('div');
        myteam.appendChild(div);
        const img1 = document.createElement('img')
        img1.src = data.sprites.other['official-artwork'].front_default;
        img1.setAttribute('id', 'img1');
        div.appendChild(img1);
        const para = document.createElement('h3');
        console.log(data.name);
        para.textContent = data.name.toUpperCase();
        div.appendChild(para);
        numbers[i] = data.base_experience;
        i++;
        const img2 = document.createElement('img')
        img2.src = data.sprites.other['official-artwork'].front_default;
        img2.setAttribute('id', 'img2');
        playerTeam.appendChild(img2);
        const para2 = document.createElement('h3');
        console.log(data.name);
        para2.textContent = data.name.toUpperCase();
        playerTeam.appendChild(para2);
        compimg();
    }

    else {
        alert("YOU CAN ONLY PICK 3")
    }
}

fightbtn.addEventListener('click', () => {
    popup.classList.add('popup2');
})
closebtn.addEventListener('click', () => {
    // popup.classList.remove('popup2');
    // win.classList.remove('matchResult');
    // lost.classList.remove('matchResult');
    location.reload();
})

gobtn.addEventListener('click', () => {
    var count = 0;
    if (numbers[0] > numbers[3]) {
        count++;
    }
    if (numbers[1] > numbers[4]) {
        count++;
    }
    if (numbers[2] > numbers[5]) {
        count++;
    }
    if (count >= 2) {
        win.classList.add('matchResult');
        console.log('h');
    }
    else {
        console.log('n');
        lost.classList.add('matchResult');
    }
})
function getRandomInt() {
    min = 1
    max = 350
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
compimg = async () => {
    var a = getRandomInt();
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${a}`);
    createimgc(res.data);
}
createimgc = (data) => {
    const img3 = document.createElement('img')
    img3.src = data.sprites.other['official-artwork'].front_default;
    img3.setAttribute('id', 'img3');
    compTeam.appendChild(img3);
    const para3 = document.createElement('h3');
    console.log(data.name);
    para3.textContent = data.name.toUpperCase();
    compTeam.appendChild(para3);
    numbers[j] = data.base_experience;
    j++;
}

// delimg = (data) => {
//     console.log(data);
//     const del = document.getElementById(`${data}`);
//     del.remove();
//     i--;
// }