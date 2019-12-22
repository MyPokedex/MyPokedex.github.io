/*var apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: 25,
}

if(localStorage.getItem("pidKey"))
    apiData.id = localStorage.getItem("pidKey");
else
    localStorage.setItem("pidKey",apiData.id);
var {url, type, id} = apiData

var apiUrl = `${url}${type}/${id}`
*/

fetch('https://pokeapi.co/api/v2/pokemon/?limit=802')
    .then((data)=>data.json())
    .then((pokemon)=>listPokemon(pokemon))
    //.then((pokemon)=>createDropdown(pokemon))
/*
fetch(apiUrl)
    .then((data)=>data.json())
    .then((pokemon)=>generateHtml(pokemon))
    .catch(function(){
        const err = `Invalid Pokemon Name/ID ${apiData.id}`
        alert(err);
    })
*/
function upper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var generateHtml = (data)=> {
    //localStorage.setItem("pidKey", data.id);
    var abilities = ``
    for(var i = 0; i < data.abilities.length; i++) {
        abilities += upper(data.abilities[i].ability.name);
        if(i<data.abilities.length-1)
            abilities += `<br>`
    }

    var types = ``
    for(var i = 0; i < data.types.length; i++) {
        types += upper(data.types[i].type.name);
        if(i<data.types.length-1)
            types += `<br>`
    }

    if(localStorage.getItem("type")){
        if (types.indexOf(localStorage.getItem("type"))<0)
            return;
    }
/*  Single Page Entry  
    const html = `
        <div class="pokemonBG">
        <h2>#${data.id}: ${data.name}</h2>
        <img src=${data.sprites.front_default} height="150" width="150">
        <div class="details">
            <span>Height: ${data.height}, Weight: ${data.weight}</span><br>
            <span>${abilities}</span><br>
            <span>HP: ${data.stats[5].base_stat}, Atk: ${data.stats[4].base_stat}, Def: ${data.stats[3].base_stat},</span><br>
            <span>Sp. Atk: ${data.stats[2].base_stat}, Sp. Def: ${data.stats[1].base_stat}, Speed: ${data.stats[0].base_stat}</span>
        </div>
        </div>
    `
*/

    // Create each row
    const html = `
        <td align="center" class="pokemonBG">#${data.id}</td>
        <td align="center" class="pokemonBG"><img src=${data.sprites.front_default} height="75" width="75"></td>
        <td align="center" class="pokemonBG">${upper(data.name)}</td>
        <td align="center" class="pokemonBG">${types}</td>
        <td align="center" class="pokemonBG">${abilities}</td>
        <td align="center" class="pokemonBG">${data.stats[5].base_stat}</td>
        <td align="center" class="pokemonBG">${data.stats[4].base_stat}</td>
        <td align="center" class="pokemonBG">${data.stats[3].base_stat}</td>
        <td align="center" class="pokemonBG">${data.stats[2].base_stat}</td>
        <td align="center" class="pokemonBG">${data.stats[1].base_stat}</td>
        <td align="center" class="pokemonBG">${data.stats[0].base_stat}</td>
    `
    var newPokemon = document.createElement('tr');
    newPokemon.innerHTML = html;

    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.appendChild(newPokemon)

/*  Arrow functionality for single pages
    var arrowHtml = ``
    if(data.id>1)
        arrowHtml += `<a href="#" class="prev" id="prev"><-    </a>`;
    if(data.id<806)
        arrowHtml += `<a href="#" class="next" id="next">    -></a>`

    const arrowDiv = document.querySelector('.arrows')
    arrowDiv.innerHTML = arrowHtml

    const prev = document.getElementById('prev')
    if(prev)
        prev.addEventListener('click', prevData);

    const next = document.getElementById('next')
    if(next)
        next.addEventListener('click', nextData);
    */
}

//Search bar
//const clicked = document.getElementById('pokeid')
//clicked.addEventListener('click', getData);

/* Dropdown menu for single page navigation
var createDropdown = (data)=> {
    var html = `<select onchange="getDropdownData()" name="SelectPokemon" size="1" id="SelectPokemon">`
    html += `<option>--Select Pokemon--</option>`
    for(var j = 0; j < 802; j++) {
        html += `<option value="${j+1}">${upper(data.results[j].name)} - ${j+1}</option>`;
    }
    html += `</select>`;
    const dropdownDiv = document.querySelector('.dropdown')
    dropdownDiv.innerHTML = html
}
*/

var listPokemon = async(data)=> {
    for(var i = 0; i < 802; i++) {
        fetch(data.results[i].url)
            .then((data)=>data.json())
            .then((pokemon)=>generateHtml(pokemon))
    }
    //Loading screen
    setTimeout(function(){
        document.body.style.overflow = "visible";
        document.body.style.height = "";
        document.body.removeChild(document.getElementById('mask'));
    },2500);    
}

const bug = document.getElementById('bug')
bug.addEventListener('click', function(){changeTypeFilter('Bug')});
const dark = document.getElementById('dark')
dark.addEventListener('click', function(){changeTypeFilter('Dark')});
const dragon = document.getElementById('dragon')
dragon.addEventListener('click', function(){changeTypeFilter('Dragon')});
const electric = document.getElementById('electric')
electric.addEventListener('click', function(){changeTypeFilter('Electric')});
const fairy = document.getElementById('fairy')
fairy.addEventListener('click', function(){changeTypeFilter('Fairy')});
const fight = document.getElementById('fight')
fight.addEventListener('click', function(){changeTypeFilter('Fight')});
const fire = document.getElementById('fire')
fire.addEventListener('click', function(){changeTypeFilter('Fire')});
const flying = document.getElementById('flying')
flying.addEventListener('click', function(){changeTypeFilter('Flying')});
const ghost = document.getElementById('ghost')
ghost.addEventListener('click', function(){changeTypeFilter('Ghost')});
const grass = document.getElementById('grass')
grass.addEventListener('click', function(){changeTypeFilter('Grass')});
const ground = document.getElementById('ground')
ground.addEventListener('click', function(){changeTypeFilter('Ground')});
const ice = document.getElementById('ice')
ice.addEventListener('click', function(){changeTypeFilter('Ice')});
const normal = document.getElementById('normal')
normal.addEventListener('click', function(){changeTypeFilter('Normal')});
const poison = document.getElementById('poison')
poison.addEventListener('click', function(){changeTypeFilter('Poison')});
const psychic = document.getElementById('psychic')
psychic.addEventListener('click', function(){changeTypeFilter('Psychic')});
const rock = document.getElementById('rock')
rock.addEventListener('click', function(){changeTypeFilter('Rock')});
const steel = document.getElementById('steel')
steel.addEventListener('click', function(){changeTypeFilter('Steel')});
const water = document.getElementById('water')
water.addEventListener('click', function(){changeTypeFilter('Water')});
const all = document.getElementById('all')
all.addEventListener('click', function(){changeTypeFilter('')});

function changeTypeFilter(type) {
    localStorage.setItem("type", type);
    window.location.reload(false);
}

/* Functions for single page navigation
function getData() {
    if(isNaN(document.getElementById('pid').value))
    localStorage.setItem("pidKey", document.getElementById('pid').value.toLowerCase());
    else
        localStorage.setItem("pidKey", document.getElementById('pid').value);
    window.location.reload(false); 
}

function prevData() {
    localStorage.setItem("pidKey", +localStorage.getItem("pidKey")-1);
    window.location.reload(false); 
}

function nextData() {
    localStorage.setItem("pidKey", +localStorage.getItem("pidKey")+1);
    window.location.reload(false); 
}

function getDropdownData() {
    var x = document.getElementById("SelectPokemon").selectedIndex; 
    var y = document.getElementsByTagName("option")[x].value;
    localStorage.setItem("pidKey", y);
    localStorage.setItem("index", x);
    window.location.reload(false); 
}
*/