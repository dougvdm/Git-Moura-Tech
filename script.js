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
}