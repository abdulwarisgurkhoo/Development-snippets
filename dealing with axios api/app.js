let btnp=document.querySelector("#btnp");
let btnimg=document.querySelector("#btnimg");
btnp.addEventListener("click",async()=>{
    let result=await getFact();
    let p=document.querySelector("#para");
    console.log(result);
    p.innerText=result;

});
async function getFact()
{
    try{
        let res=await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    }catch(err)
    {
        console.log("API REQUEST FAILED !")
    }
}
btnimg.addEventListener("click", async()=>{
   let img=await getPic();
   let dgimg=document.querySelector("img");
   dgimg.setAttribute("src",img);
   
})
async function getPic()
{
    try{
        let pic=await axios.get("https://dog.ceo/api/breeds/image/random");
        console.log(pic.data.message);
        return pic.data.message;

    }
    catch(err)
    {
        console.log("error caught --".err);
    }
   

}