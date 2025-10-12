const boxes = document.querySelectorAll(".s1");
boxes.forEach(box => {
    const p = box.querySelector(".play");
    box.addEventListener("mouseover", () => {
        p.style.visibility = "visible";
        p.style.animation = "rollup 0.2s ease-in-out 0s 1";
    })
    box.addEventListener("mouseout", () => {
        p.style.visibility = "hidden";
        p.style.animation = "none";
        // p.style.animationIterationCount= "0";
    })
})
const scrollContainer = document.querySelector(".tsongs");
const btnRight = document.querySelector(".scroll-r button");
const btnLeft = document.querySelector(".scroll-l button");
function updatebutton(){
    const maxscroll=scrollContainer.scrollWidth-scrollContainer.clientWidth;
    btnLeft.disabled = scrollContainer.scrollLeft <= 0;
    btnRight.disabled = scrollContainer.scrollLeft >= maxscroll;
    if(scrollContainer.scrollLeft <= 0){
        btnLeft.style.visibility="hidden";
    }
    else {
        btnLeft.style.visibility="visible";
    }
    if(scrollContainer.scrollLeft >=maxscroll){
        btnRight.style.visibility="hidden";
    }
    else {
        btnRight.style.visibility="visible";
    }
}
updatebutton();
const scrollAmount = 700;
btnRight.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
});
btnLeft.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
scrollContainer.addEventListener("scroll", updatebutton);