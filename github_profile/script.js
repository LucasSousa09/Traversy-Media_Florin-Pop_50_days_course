const API_URL = 'https://api.github.com/users/'
const API_URL_LIST = 'https://api.github.com/search/users?q='

const form = document.getElementById("form")
const search = document.getElementById("search")
const select = document.getElementById("select")
const main = document.getElementById("main")

let id = 0
let page = 1


function setSelection(){
    if(select.value === "username"){
        console.log('username')
    }
    else{
        console.log('name')
    }
}


async function getUser(username){
    main.innerHTML = ''
    if(select.value === "username"){
        try{
            const {data} = await axios(API_URL + username)
            createUserCard(data)
            
        }catch(err){
            if(err.response.status == 404){
            createErrorCard('Nenhum perfil encontrado com esse nome de usuário')
            }
        }
    }
    else{
        try{
            const {data} = await axios(API_URL_LIST + username + `&page=${page}&per_page=4`)
            const users = data.items
            users.forEach(user => {
                axios(user.url).then(userInfo => {
                    const data = userInfo.data 
                    createUserCard(data)
                })
            })
            createButtons(username)
            setTimeout(() => {
                id = 0
            },1000) 
        }catch(err){
            if(err.response.status == 404){
            createErrorCard('Nenhum perfil encontrado com esse nome de usuário')
            }
        }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(API_URL + username + '/repos?sort=created')
        addReposToCard(data)
    }
    catch(err){
        console.log(err)
        createErrorCard('Repositórios não encontrados')
    }
}


async function createUserCard(user){

    const card = document.createElement('div')
    card.classList.add('card')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    img.classList.add('avatar')
    const userInfo = document.createElement('div')
    userInfo.classList.add('user-info')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const ul = document.createElement('ul')
    const liFollowers = document.createElement('li')
    const liFollowing = document.createElement('li')
    const liRepos = document.createElement('li')
    const repos = document.createElement('div')
    repos.classList.add('repos')
    repos.setAttribute('id', `repo${id}`)

    main.appendChild(card)
    card.appendChild(imgDiv)
    card.appendChild(userInfo)
    imgDiv.appendChild(img)
    userInfo.appendChild(h2)
    userInfo.appendChild(p)
    userInfo.appendChild(ul)
    userInfo.appendChild(repos)
    ul.appendChild(liFollowers)
    ul.appendChild(liFollowing)
    ul.appendChild(liRepos)

    img.src = user.avatar_url
    h2.innerText = user.name
    p.innerText = user.bio
    liRepos.innerHTML = `<strong>Repositórios</strong> ${user.public_repos}`
    liFollowers.innerHTML = `Seguidores</strong> ${user.followers}`
    liFollowing.innerHTML = `<li><strong>Seguindo</strong> ${user.following}</li>`

    await getRepos(user.login)
    id++
    
    // const cardHTML = `
    // <div class="card">
    //     <div>
    //         <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    //     </div>
    //     <div class="user-info">
    //         <h2>${user.name}</h2>
    //         <p>${user.bio}</p>
    //         <ul>
    //             <li><strong>Seguidores</strong> ${user.followers}</li>
    //             <li><strong>Seguindo</strong> ${user.following}</li>
    //             <li><strong>Repositórios</strong> ${user.public_repos}</li>
    //         </ul>

    //         <div id="repos"></div>
    //     </div>
    // </div>`

    // main.innerHTML = cardHTML
}

function createErrorCard(error){
    const errorEl = document.createElement('div')
    const body = document.querySelector('body')

    errorEl.classList.add("error")

    body.appendChild(errorEl)
    main.innerHTML = ''
    errorEl.innerHTML = error
    setTimeout(()=> {
        errorEl.remove()
    },10000)
}

function createButtons(username){
    const body = document.querySelector('body')
    const buttons = document.querySelector('.buttons')
    const button1 = document.createElement('button')
    button1.classList.add('prev')
    button1.innerText = 'Anterior'
    const button2 = document.createElement('button')
    button2.classList.add('next')
    button2.innerText = 'Próximo'

    buttons.appendChild(button1)
    buttons.appendChild(button2)

    button1.addEventListener("click", () => {
        if(page > 1){
            page--
            buttons.innerHTML = ''
            
            getUser(username)
        }
    })
    button2.addEventListener("click", () => {
        page++
        buttons.innerHTML = ''
        
        getUser(username)
    })
}

function addReposToCard(repos) {
    const reposEl = document.querySelectorAll(`.repos`)
        repos
            .slice(0,4)
            .forEach((repo) => {
                const repoLink = document.createElement('a')
                repoLink.classList.add('repo')
                repoLink.href = repo.html_url
                repoLink.target = '_blank'
                repoLink.innerText = repo.name 
                reposEl[id].appendChild(repoLink)              
            })       
}
    

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const user = search.value
    const errorEl = document.querySelector('.error')

    if(errorEl){
        errorEl.remove(errorEl)
    }

    if(user){
        getUser(user)
        search.value = ''
    }

})