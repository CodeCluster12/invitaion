
let coverNumber = 1
let btn = document.querySelector(".btn")
const removeCovers = () =>{
    let div = document.querySelector(".covers")
    if(div.classList.contains(`${coverNumber}`) === true){
        div.remove()
        coverNumber += 1
    }
    if(coverNumber === 6) btn.style.display = "none"

} 



btn.addEventListener("click", ()=>{
    removeCovers()
})