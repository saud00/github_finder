
class ui{
    constructor(){
        this.profile = document.getElementById('profile')
        this.repoProfile = document.getElementById('repoProfile')
    }

    userData(data){
        this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                    <div class="col-sm-3 mt-1 text-center">
                        <img class="img-fluid" src=${data.avatar_url} alt="dp">
                        <button class="btn btn-primary rounded-pill mt-1">View profile</button>
                    </div>
                    <div class="col-sm-9 mt-1">
                    <span>
                            <button class="btn btn-primary btn-sm" disabled>Public repos: ${data.public_repos} </button>
                        </span><span>
                            <button class="btn btn-secondary btn-sm" disabled>Public gists: ${data.public_gists} </button>
                        </span><span>
                            <button class="btn btn-success btn-sm" disabled>Followers: ${data.followers}</button>
                        </span><span>
                        <button class="btn btn-dark btn-sm" disabled>Following: ${data.following}</button>
                        </span>
                        <ul class="list-group mt-2">
                                    <li class="list-group-item">company: ${data.company}</li>
                                    <li class="list-group-item">Website: ${data.blog}</li>
                                    <li class="list-group-item">Location: ${data.location}</li>
                                    <li class="list-group-item">Member since: ${data.created_at}</li>
                        </ul>
                </div>
            </div>
        </div>
        <h1 class='mt-5'> Latest Repos</h1>

        `
        
    }

    repoData(res){

        let output=''
        
        res.forEach(function(val){ 
            
            output +=`
            <div class="card card-body">
            <div class="row">
        <div class="col-md-5 text-primary">
        ${val.name}
        </div>
        <div class="col-md-7">
        <span class="badge bg-primary">stars: ${val.stars}</span>
        <span class="badge bg-secondary">forks: ${val.forks}</span>
        <span class="badge bg-info">watchers: ${val.watchers}</span>
        </div>
        </div>
        </div>`
        
    })
    this.repoProfile.innerHTML = output
}
}
