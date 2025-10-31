function formatime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return `${mins}:${secs}`
}
let trend=["songs/perfect.mp3","songs/far.mp3","songs/heat.mp3","songs/tumse-behtar.mp3","songs/dilbar-thamma.mp3","songs/mf-gabru.mp3","songs/lover.mp3","songs/eyes-closed.mp3","songs/badtameez.mp3","songs/apna.mp3","songs/bulleya.mp3","songs/gulabi-aankhien.mp3","songs/dandelions.mp3","songs/chaand-baliyan.mp3","songs/finding-her.mp3"];
let audio=new Audio();
document.querySelectorAll(".s1").forEach((son,index)=>{
    son.addEventListener("click",()=>{
        audio.src=trend[index];
        audio.play();
        document.querySelector(".play-button").innerHTML = "❚❚";
        document.querySelector(".player").style.visibility="visible";
        document.querySelector(".player").style.animation="show-up 0.4s ease-in-out 0s 1";
        document.querySelector(".cover").src=son.querySelector("img").src;
        document.querySelector(".title").innerHTML=son.querySelector("h4").textContent;
        document.querySelector(".singer").innerHTML=son.querySelector("h6").textContent;
    })
})
document.querySelectorAll(".song-play").forEach(btn=>{
    btn.addEventListener("click",()=>{
        if (audio.paused) {
        btn.innerHTML="❚❚";
        document.querySelector(".play-button").innerHTML = "❚❚";
        audio.play();
    } else {
        btn.innerHTML="▶";
        document.querySelector(".play-button").innerHTML = "▶";
        audio.pause();
    }
    })
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
        document.querySelector(".play-button").innerHTML = "❚❚";
    }
    else{
        audio.currentTime=newtime;
        document.querySelector(".play-button").innerHTML = "❚❚";
    }
})
document.querySelector(".player").style.visibility="hidden";
document.querySelectorAll(".song-play").forEach(btn=>{
    btn.addEventListener("click",()=>{
            document.querySelector(".player").style.visibility="visible";
            document.querySelector(".player").style.animation="show-up 0.4s ease-in-out 0s 1";
    })
});
document.querySelector(".mute").addEventListener("click",()=>{
    if(audio.muted){
        audio.muted=false;
        document.querySelector(".mute").innerHTML="🕪";
    }
    else{
        audio.muted=true;
        document.querySelector(".mute").innerHTML="🔇";
    }
})
document.querySelector(".vol").addEventListener("click", (e) => {
  const volBar = document.querySelector(".vol");
  const innerBar = document.querySelector(".volume");
  const width = volBar.offsetWidth;
  const barLeft = volBar.getBoundingClientRect().left;
  let clientX = e.clientX - barLeft;
  if (clientX < 0) clientX = 0;
  if (clientX > width) clientX = width;
  let vol = clientX / width;
  vol = Math.min(1.0, Math.max(0.0, vol));
  audio.volume = vol;
  const displayVol = Math.round(vol * 10) / 10;
  innerBar.style.width = (vol * 100) + "%";
  console.log("Volume:", displayVol);
});

