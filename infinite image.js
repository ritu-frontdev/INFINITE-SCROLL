var container = document.getElementById("container")
const url = "https://api.unsplash.com/photos/random/?client_id=8jP3xQitHC3uClSdvWSwyrZVguDmUf_Q1L1pVTz1b7U&count=10&query=cartoons"
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