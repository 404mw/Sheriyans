const main: HTMLDivElement = document.querySelector(`main`) as HTMLDivElement
const btn: HTMLButtonElement = document.getElementById(`btn`) as HTMLButtonElement

btn.addEventListener(`click`, () => {
    const div: HTMLDivElement = document.createElement(`div`)
    const x: number = Math.floor(Math.random()*101)
    const y: number = Math.floor(Math.random()*101)
    const s: number = Math.floor(Math.random()*361)
    const c1: number = Math.floor(Math.random()*256)
    const c2: number = Math.floor(Math.random()*256)
    const c3: number = Math.floor(Math.random()*256)

    div.style.width = `100px`
    div.style.height = `100px`
    div.style.position = `absolute`
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
    div.style.left = `${x}%`
    div.style.top = `${y}%`
    div.style.rotate = `${s}deg`


    main.appendChild(div)

    console.log(div);
    
})