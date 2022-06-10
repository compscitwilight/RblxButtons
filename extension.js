console.log("Roblox extension loaded!")

CreateTopbarBtn = (text, href) => {
    let topbar = document.querySelector(".nav")
    let newbtn = document.createElement("li")
    let link = document.createElement("a")

    link.href = href
    link.classList.add("font-header-2", "nav-menu-title", "text-header")
    link.innerHTML = text

    newbtn.appendChild(link)
    topbar.appendChild(newbtn)
}

chrome.storage.sync.get(["buttons"], (result) => {
    const buttons = result.buttons || []
    buttons.forEach((button) => {
        CreateTopbarBtn(button.text, button.href)
    })
})