class github{
    constructor(){
        this.client = `f891c5505b44a26ccc73`
        this.secret = " b3f3c14a13c77b49cfeb73d896651941f4105b7d "
        this.repos_sort = 'created : asc'
        this.repos_count = 5
    }

    async getUser(username){
        const user = await fetch(`https://api.github.com/users/${username}?client_id=${this.client}
        &client_secret=${this.secret}`)
        const data = await user.json()
        return data
    }

    async getRepo(username){
        const repos = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client}
        &client_secret=${this.secret}&per_page=${this.repos_count}&sort=${this.repos_sort}`)
        const repoData = await repos.json()
        return repoData
    }
}