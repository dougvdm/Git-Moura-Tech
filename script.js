//'https://api.github.com/users/gleydsonbrito/repos'

const input = document.querySelector('.input-text')
const ul = document.querySelector('.repos')

let allRepositories = []

function render(repos, filter){
        ul.innerHTML = ""

        const filteredRepos = repos.filter(repo => {
            if (filter){
                return repo.name.includes(filter)
            }
            return true 
        } )
        filteredRepos.forEach(repo => {
            const li = document.createElement("li")
            const textItem = document.createTextNode(repo.name)
            li.appendChild(textItem)
            ul.appendChild(li)
        });
}
input.addEventListener('input', event  => {
    const text = event.target.value
    render(allRepositories, text)
})


fetch('https://api.github.com/users/dougvdm/repos')
.then(res => res.json())
.then(repos => {
    allRepositories = repos
    render(allRepositories, '')
})
