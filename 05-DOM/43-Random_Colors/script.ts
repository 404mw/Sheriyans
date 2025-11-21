let colorBox: HTMLDivElement = document.getElementById(`colorBox`) as HTMLDivElement
let btn: HTMLButtonElement = document.getElementById(`btn`) as HTMLButtonElement


btn.addEventListener(`click`, () => {
    let r1: Number = Math.floor(Math.random()*256)
    let r2: Number = Math.floor(Math.random()*256)
    let r3: Number = Math.floor(Math.random()*256)
    colorBox.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`
})