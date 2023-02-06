let myList = []

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");
const saveUrls = document.getElementById("save-urls")

const localStorageItems = JSON.parse(localStorage.getItem("saveUrls"))

if(localStorageItems){
    myList = localStorageItems
    renderUrls()
}

saveBtn.addEventListener("click", () => {
    myList.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("saveUrls", JSON.stringify(myList))
    renderUrls()
})

deleteBtn.addEventListener("click", () => {
    localStorage.clear()
    myList = []
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

