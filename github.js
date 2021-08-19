class github{
    constructor(){
        this.client = `f891c5505b44a26ccc73`
        this.secret = " b3f3c14a13c77b49cfeb73d896651941f4105b7d "
    }

    async getUser(username){
        const user = await fetch(`https://api.github.com/users/${username}`)
        const data = await user.json()
        return data
    }

    async getRepo(username){
        const repos = await fetch(`https://api.github.com/users/${username}/repos`)
        const repoData = await repos.json()
        return repoData
    }
}