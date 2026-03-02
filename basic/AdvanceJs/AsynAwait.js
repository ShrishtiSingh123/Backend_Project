function FetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject({name:"Chikorita",url:"https://pokeapi.co/api/v2/pokemon/152/"})
        },3000);
    });
}

async function getUserData(params) {
    try{
        console.log("Fetching user data...");
        const userData=await FetchUserData();
        console.log("User data fetched:",userData);
    } catch(error){
        console.error("Error fetching user data:",error);
    }
    
}
getUserData();