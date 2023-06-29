const carrosel = document.querySelector(".carrosel"),
firstImg = carrosel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14; 

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrosel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    })
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carrosel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
   let positionDiff = e.pageX - prevPageX;
   carrosel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
}

carrosel.addEventListener("mousedown", dragStart);
carrosel.addEventListener("mousemove", dragging);
carrosel.addEventListener("mouseup", dragStop);