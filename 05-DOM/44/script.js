const main = document.querySelector(`main`);
const btn = document.getElementById(`btn`);
btn.addEventListener(`click`, () => {
    const div = document.createElement(`div`);
    const x = Math.floor(Math.random() * 101);
    const y = Math.floor(Math.random() * 101);
    const s = Math.floor(Math.random() * 361);
    const c1 = Math.floor(Math.random() * 256);
    const c2 = Math.floor(Math.random() * 256);
    const c3 = Math.floor(Math.random() * 256);
    div.style.width = `100px`;
    div.style.height = `100px`;
    div.style.position = `absolute`;
    div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
    div.style.left = `${x}%`;
    div.style.top = `${y}%`;
    div.style.rotate = `${s}deg`;
    main.appendChild(div);
    console.log(div);
});
export {};
//# sourceMappingURL=script.js.map