//// ftech user data 

async function gituserdata(username){
    const url =`https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url)
        if(!response.ok){
            console.log("An error occur");
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(`error while fetching the data`)
    }
}


gituserdata('Adityadeveloper28')
.then(data=>{
    if(data){
        console.log(data);
    }
})