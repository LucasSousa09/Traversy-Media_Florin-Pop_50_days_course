const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#ffed92',
    water: '#DEF3FD',
    ground: '#F4E7DA',
    rock: '#FCEAFF',
    fairy: '#98D7A5',
    poison: '#ac95ff',
    bug: '#97B3E6',
    dragon: '#EAEDA1',
    psychic: '#F5F5F5',
    flying: '#E6E0D4',
    normal: '#E5E5E5',
    fighting: '#aaaaaa',
}



const fetchPokemons = async () => {
    for(let i = 1; i<= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokeCard(data)
}


fetchPokemons()


function createPokeCard(pokemon){
    console.log(pokemon)    
    const type = pokemon.types[0].type.name
    // const pictureDreamWorld = pokemon.sprites.other.dream_world.front_default
    const id = pokemon.id.toString().padStart(3,0)
    const picture = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    const card = document.createElement('div')
    card.classList.add('pokemon')
    card.style.backgroundColor = colors[type]

    const img_container = document.createElement('div')
    img_container.classList.add('img-container')
    const img = document.createElement('img')
    img.src = picture

    const info = document.createElement('div')
    info.classList.add('info')
    const span = document.createElement('span')
    span.classList.add('number')
    // if(pokemon.id < 10){
    //     span.innerText = '#00'+pokemon.id
    // }
    // else if(pokemon.id < 100){
    //     span.innerText = '#0'+pokemon.id
    // }
    // else{
    //     span.innerText = '#'+pokemon.id
    // }
    span.innerText = '#' + id
    const h3 = document.createElement('h3')
    h3.classList.add('name')
    h3.innerText = name
    const small = document.createElement('small')
    small.classList.add('type')
    small.innerText = 'Tipo: '
    const spanType = document.createElement('span')
    spanType.innerText = pokemon.types[0].type.name

    poke_container.appendChild(card)
    card.appendChild(img_container)
    card.appendChild(info)
    img_container.appendChild(img)
    info.appendChild(span)
    info.appendChild(h3)
    info.appendChild(small)
    small.appendChild(spanType)

    // <div class="pokemon" style="background-color: rgb(222,253,224)">
    //     <div class="img-container">
    //         <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt="">
    //     </div>
    //     <div class="info">
    //         <span class="number">#001</span>
    //         <h3 class="name">Bulbasaur</h3>
    //         <small class="type">Type: <span>grass</span></small>
    //     </div>
    // </div>
}
