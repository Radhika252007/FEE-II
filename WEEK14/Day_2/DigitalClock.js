const mainContainer = document.querySelector('.main-container');
setInterval(() => {
    const date = new Date();
    const hours = date.getHours().toLocaleString().padStart(2,"0");
    const minutes = date.getMinutes().toLocaleString().padStart(2,"0");
    const seconds = date.getSeconds().toLocaleString().padStart(2,"0");
    mainContainer.textContent = `${hours}:${minutes}:${seconds}`
}, 1000)