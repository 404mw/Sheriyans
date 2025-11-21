let colorBox = document.getElementById(`colorBox`);
let btn = document.getElementById(`btn`);
btn.addEventListener(`click`, () => {
    let r1 = Math.floor(Math.random() * 256);
    let r2 = Math.floor(Math.random() * 256);
    let r3 = Math.floor(Math.random() * 256);
    colorBox.style.backgroundColor = `rgb(${r1}, ${r2}, ${r3})`;
});
export {};
