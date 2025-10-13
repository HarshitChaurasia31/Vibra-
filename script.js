const boxes = document.querySelectorAll(".p1");
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
const scrollSections = document.querySelectorAll(".scroll");

scrollSections.forEach((scrollContainer, index) => {
    const btnRight = scrollContainer.parentElement.querySelector(".scrr button");
    const btnLeft = scrollContainer.parentElement.querySelector(".scrl button");

    const updateButtons = () => {
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        btnLeft.disabled = scrollContainer.scrollLeft <= 0;
        btnRight.disabled = scrollContainer.scrollLeft >= maxScroll;

        btnLeft.style.visibility = scrollContainer.scrollLeft <= 0 ? "hidden" : "visible";
        btnRight.style.visibility = scrollContainer.scrollLeft >= maxScroll ? "hidden" : "visible";
    };

    updateButtons();
    const scrollAmount = scrollContainer.clientWidth*0.6;

    btnRight.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    btnLeft.addEventListener("click", () => {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollContainer.addEventListener("scroll", updateButtons);
});