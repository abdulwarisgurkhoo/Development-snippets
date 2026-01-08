let hd=document.querySelector("h1");
function changeColor(newColor,delay)
{
    setTimeout(()=>{
        hd.style.color=newColor;
    }
    ,delay);
}
changeColor("red",1000);
changeColor("blue",2000);
changeColor("violet",3000);
changeColor("pink",5000);
setTimeout(()=>{
    hd.style.color="red";
},1000);
setTimeout(()=>{
    hd.style.color="blue";
},2000);
setTimeout(()=>{
    hd.style.color="pink";
},3000);
setTimeout(()=>{
    hd.style.color="green";
},5000);
function changeColor(newColor,delay,nextColorChange)
{
    setTimeout(()=>{
        h1.style.color=newColor;
        if(newColorChange)
        {
            newColorChange();
        }
    },delay);
}
changeColor("red",1000,()=>{changeColor("pink",2000)});
function savetoDB(data,success,failure)
{
    let speed=Math.floor((Math.random)*10)+1;
    if(speed>4)
    {
        success();
    }
    else {
        failure();
    }
}

savetoDB("abdul waris ",()=>{console.log("success:data saved to DB")},()=>{console.log("failure:data is not saved to DB")});
function saveDB(data)
{
    return new Promise ((resolve,reject)=>{
        let Internetspeed=Math.floor(Math.random()*10)+1;
        if(Internetspeed>4)
        {
            resolve("success:data saved");

        }
        else{
            reject("failed : weak connection");
        }
    })
}
let request=saveDB("abdulwarisgurkhoo")
.then((result)=>{
    console.log("data1 saved");
    console.log(result);
    return saveDB("is a coder");

})
.then((result)=>{
    console.log("data2 was saved");
    console.log(result);
    return saveDB("c c++ java +git-github");
})
.then ((result)=>{
    console.log("data3 was saved");
    console.log(result);
})
.catch((err)=>{
    console.log("weak connection-data was not saved in database");
    console.log(err);
});