const API_URL = 'https://api.github.com/users/'

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

async function getUser(username){
    try{
        const {data} = await axios(API_URL + username)
        createUserCard(data)
        getRepos(username)
    }catch(err){
        if(err.response.status == 404){
        createErrorCard('Nenhum perfil encontrado com esse nome de usuário')
    }
    }
}

async function getRepos(username){
    try{
        const {data} = await axios(API_URL + username + '/repos?sort=created')
        addReposToCard(data)
    }
    catch{
        createErrorCard('Repositórios não encontrados')
    }
}

function createUserCard(user){
    const cardHTML = `
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <ul>
                <li><strong>Seguidores</strong> ${user.followers}</li>
                <li><strong>Seguindo</strong> ${user.following}</li>
                <li><strong>Repositórios</strong> ${user.public_repos}</li>
            </ul>

            <div id="repos"></div>
        </div>
    </div>`

    main.innerHTML = cardHTML
}

function createErrorCard(error){
    const errorEl = document.createElement('div')
    const body = document.querySelector('body')

    errorEl.classList.add("error")

    body.appendChild(errorEl)
    main.innerHTML = ''
    errorEl.innerHTML = error
}

function addReposToCard(repos) {
    const reposEl = document.getElementById("repos")

    repos
        .slice(0,10)
        .forEach(repo => {
            const repoLink = document.createElement('a')
            repoLink.classList.add('repo')
            repoLink.href = repo.html_url
            repoLink.target = '_blank'
            repoLink.innerText = repo.name

            reposEl.appendChild(repoLink)
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