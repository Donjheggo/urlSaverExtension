let myList = []

let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let saveUrls = document.getElementById("save-urls")

saveBtn.addEventListener("click", () => {
    myList.push(inputEl.value)
    renderUrls()
})


function renderUrls(){
    let url = ""
    for(let i = 0; i < myList.length; i++){
        url += `<li> 
                    <a href="${myList[i]}" target="_blank">
                        ${myList[i]}
                    </a>
                </li>`
    }
    saveUrls.innerHTML = url
}


function saveLocalStorage(){
    localStorage.setItem("Save Links", JSON.stringify(myList))
}


