const imageContainerEl = document.querySelector(".image-container")
const btnEl = document.querySelector(".btn")

function addNewImages(){
    for (let index = 0; index < 6; index++) {
        const newImage = document.createElement("img")
        newImage.src = `https://picsum.photos/300/300?random=${Math.floor(Math.random()* 2000)}`
        imageContainerEl.appendChild(newImage) }
    }

    btnEl.addEventListener("click",()=>{
        addNewImages()
    })