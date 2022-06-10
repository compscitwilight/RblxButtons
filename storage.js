const nameInput = document.querySelector("#name-input")
const hrefInput = document.querySelector("#href-input")
const addBtn = document.querySelector("button")

chrome.storage.sync.get(["buttons"], (result) => {
    const buttons = result.buttons || []
    const existingBtns = document.querySelector("ul")

    // displaying all buttons in extension storage
    buttons.forEach((button) => {
        const btn = document.createElement("button")
        btn.innerHTML = button.text
        existingBtns.append(btn)

        // adding a click event for each button that will remove it from storage when it is clicked
        btn.addEventListener("click", (event) => {
            if (button.text === event.target.innerHTML) buttons.splice(buttons.indexOf(button), 1)
            btn.remove()

            chrome.storage.sync.set({ buttons: buttons })
        })
    })
})

addBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const name = nameInput.value
    const href = hrefInput.value

    chrome.storage.sync.get(["buttons"], (result) => {
        const buttons = result.buttons || []
        buttons.push({
            text: name,
            href: href
        })

        chrome.storage.sync.set({
            buttons: buttons
        })
    })
})