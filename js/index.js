// token from github
const myAccessToken = 
"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"

//add eventlistener to make the search and submitbtm function 
//add DOM
document.addEventListener('DOMContentLoaded',()=>{
        let searchInput = document.getElementById('search')
        let submitBtn = document.getElementById('submitBtn')

        
        submitBtn.addEventListener('click',(event)=>{
            event.preventDefault()
            let userSearch = searchInput.value
            console.log(userSearch);


            //fetch data from the server
            fetch(`https://api.github.com/users/${userSearch}`,{
                headers:{
                    Authorization: `Bearer ${myAccessToken}`
                }
            },
            )
            .then (res => res.json())
            .then(data => {console.log(data)

                createUserCard(data)
               
             
        
            })


        })
        
})
//
function createUserCard(data){
    let usersList = document.getElementById('user-list')
    let divEl =  document.createElement('div')
    usersList.append(divEl)
        divEl.innerHTML = `
        <h3>${data.login}</h3>
        <img src="${data.avatar_url}" alt="">
        <p>Bio ${data.bio}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <a href="${data.twitter_username}">Twitter </p>
        <p>Date Joined: ${data.created_at}</p>


        <p>GitHubURL</p>
    `
}