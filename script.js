//'https://api.github.com/users/gleydsonbrito/repos'

const input = document.querySelector('input-text')
const ul = document.querySelector('.repos')

const allRepositories = []

function render(repos, filter){
        ul.innerHTML = ""

        const filteredRepos = repos.filter(repo => {
            if (filter){
                return repo.name.includes(filter)
            }
            return true 
        } )
        filteredRepos.forEach(repo => {
            const li = document.querySelector("li")
            const textItem = document.createTextNode(repo.name)
            li.appendChild(textItem)
            ul.appendChild(li)
        });
}


