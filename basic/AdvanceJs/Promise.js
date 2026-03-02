function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let success=true;
           if(success){
            resolve("Data fetched successfully!");
           }else{
            reject("Failed to fetch data.");
           }
        }, 4000);
});
}
fetchData()
.then((data) => {
    console.log(data);
    return `Shrishti`;
    return data.toLowerCase();
})
.then((name)=>{
    console.log(`My name is ${name}`);
})
.catch((error) => {
    console.error(error);
});