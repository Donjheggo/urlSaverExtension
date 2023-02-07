let myUrls = []

const inputEl = document.getElementById("input-el");
const saveInput = document.getElementById("save-input");
const deleteRecent = document.getElementById("delete-recent")
const deleteAll = document.getElementById("delete-all")
const saveUrls = document.getElementById("save-urls");
const saveTab = document.getElementById("save-tab")


let localStorageItems = JSON.parse(localStorage.getItem("saveUrls"))

if(localStorageItems){
    myUrls = localStorageItems
    render(myUrls);
}

saveInput.addEventListener("click", () => {
    myUrls.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("saveUrls", JSON.stringify(myUrls))
    render(myUrls)
})

saveTab.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
        myUrls.push(tabs[0].url)
        localStorage.setItem("saveUrls", JSON.stringify(myUrls))
        render(myUrls)
    })
})

deleteRecent.addEventListener("click", () => {
    myUrls.pop()
    localStorage.setItem("saveUrls", JSON.stringify(myUrls))
    render(myUrls)
})

deleteAll.addEventListener("click", () => {
    localStorage.clear();
    myUrls = []
    render(myUrls);
})

function render(urls) {
    let url = ""
    for(let i = 0; i < urls.length; i++){
        url += `<li>
                    <a href="${urls[i]}" target="_blank">
                        ${urls[i]}
                    </a>
                </li>`
    }
    saveUrls.innerHTML = url
}


