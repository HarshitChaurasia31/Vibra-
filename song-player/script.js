function formatime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return `${mins}:${secs}`
}
let audio = new Audio("far.mp3");
document.querySelector(".play").addEventListener("click", () => {
    if (audio.paused) {
        document.querySelector(".play").innerHTML = "❚❚";
        // document.querySelector(".duration").classList.toggle("duration")
        audio.play();
    } else {
        document.querySelector(".play").innerHTML = "▶";
        audio.pause();
    }
})
audio.addEventListener("timeupdate", () => {
    document.querySelector(".current").textContent = formatime(audio.currentTime);
    document.querySelector(".duration").textContent = formatime(audio.duration);
    let per = (audio.currentTime / audio.duration) * 100;
    document.querySelector(".len").style.width = per + "%";
})
document.querySelector(".bar").addEventListener("click",(e)=>{
    let width=document.querySelector(".bar").offsetWidth;
    let barleft=document.querySelector(".bar").getBoundingClientRect().left;
    let clickx= e.clientX - barleft;
    if(clickx<0){
        clickx=0;
    }
    if(clickx>width){
        clickx=width;
    }
    let fraction=clickx/width;
    let newtime=fraction*audio.duration;
    if(audio.paused){
        audio.play()
        audio.currentTime=newtime;
        document.querySelector(".play").innerHTML = "❚❚";
    }
    else{
        audio.currentTime=newtime;
        document.querySelector(".play").innerHTML = "❚❚";
    }
})