const input = document.getElementById('input')
const profile = document.getElementById('profile')

const obj = new github
const UiObj = new ui

let inputVal
input.addEventListener('keyup', (e)=>{
    inputVal = e.target.value

    if(inputVal !== ""){  

        input.className="form-control is-valid"
        console.log(inputVal)

        // get user
        obj.getUser(inputVal)
        .then(res => {
            if(res.message === "Not Found"){
                userNotFound()
            }else{
                userFound(res)
            }
        })
        .catch(err=> console.log(err))


    }else{ 
        input.className="form-control is-invalid"
}

})


function userNotFound(){
    document.getElementById('danger').className= 'danger text-danger d-block text-light bg-danger p-2'
    input.className ="form-control is-invalid"
    profile.innerHTML = null
}

function userFound(res){
    document.getElementById('danger').className = 'danger text-danger d-none text-light bg-danger p-2'
    console.log(res)

    UiObj.userData(res)

    
    // get Repo
    obj.getRepo(inputVal)
    .then(res => {
        if(res.message === "Not Found"){
            repoNotFound()
        }else{
            UiObj.repoData(res)
           
        }
    })
    .catch(err=> console.log(err))
}

function repoNotFound(){

}