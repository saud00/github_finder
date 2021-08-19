
class ui{
    constructor(){
        this.profile = document.getElementById('profile')
        this.repoProfile = document.getElementById('repoProfile')
    }

    userData(data){
        console.log(data)
        this.profile.innerHTML = `
        <div class="card card-body">
            <div class="row">
                    <div class="col-sm-3 text-center">
                        <img class="img-fluid" src=${data.avatar_url} alt="dp">
                        <button class="btn btn-primary rounded-pill mt-1">View profile</button>
                    </div>
                    <div class="col-sm-9 mt-3">
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
        <h1> Latest Repos</h1>

        `
        
    }

    repoData(res){

        let output=''
        console.log(res.length)
        if(res.length == 1){
          output=`
            <div class="card card-body">
            <div class="row">
        <div class="col-md-5 text-primary">
        ${res.name}
        </div>
        <div class="col-md-7">
        <div class="badge badge-primary">stars: ${res.stars}</div>
        <div class="badge badge-primary">forks: ${res.forks}</div>
        <div class="badge badge-primary">watchers: ${res.watchers}</div>
        </div>
        </div>
        </div>;`
        }else{
        output = res.forEach(function(val){ 
            console.log(output)
            output +=`
            <div class="card card-body">
            <div class="row">
        <div class="col-md-5 text-primary">
        ${val.name}
        </div>
        <div class="col-md-7">
        <div class="badge badge-primary">stars: ${val.stars}</div>
        <div class="badge badge-primary">forks: ${val.forks}</div>
        <div class="badge badge-primary">watchers: ${val.watchers}</div>
        </div>
        </div>
        </div>;`
    })}
    this.repoProfile.innerHTML =output
    console.log(output)
    
}
}
