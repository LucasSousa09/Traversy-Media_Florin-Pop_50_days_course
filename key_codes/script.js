const search = document.querySelector(".search")


window.addEventListener("keydown", (evt) => {
    search.innerHTML = `
        <div class="key">
            ${evt.key === " " ? evt.code : evt.key}
        <small>event.key</small>
        </div>

        <div class="key">
            ${evt.keyCode}
        <small>event.keyCode</small>
        </div>

        <div class="key">
            ${evt.code}
        <small>event.code</small>
        </div>
    `
})