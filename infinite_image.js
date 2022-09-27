var container = document.getElementById("container")
const url = "https://api.unsplash.com/photos/random/?client_id=8l-ROW38-Qlf0XPcPOMSo9oGOsGtv_AtCNyf1rFpqU8&count=10"
function getdata(){
    fetch(url).then(response=>response.json()).then(data=>{
        //console.log(data);
        data.forEach(i => {
            var img = document.createElement("img");
            img.src = i.urls.small
            img.alt = i.alt_description
            img.title = i.alt_description
            container.appendChild(img);
                
        });


    });

}
getdata();
window.addEventListener("scroll", loadimg)
function loadimg(){
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        getdata();
    }
}
function preload(){
    var load = document.querySelector(".loader");
    load.style.display = "none";
    
}
setInterval(preload,1000)
