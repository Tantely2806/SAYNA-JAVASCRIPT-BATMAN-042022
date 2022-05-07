const navheader = document.getElementById("nav-menu");
const socialsection = document.getElementById("section-media");
window.addEventListener("scroll", ()=>{
    if(window.scrollY>navheader.offsetHeight){
        socialsection.classList.add("stay");
    }else{
        socialsection.classList.remove("stay");
    }
})