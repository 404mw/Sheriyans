let prog: number = 0
const progBar: HTMLDivElement = document.getElementById(`progBar`) as HTMLDivElement
const btn: HTMLButtonElement = document.getElementById(`btn`) as HTMLButtonElement
const progHeader: HTMLHeadingElement = document.getElementById(`prog`) as HTMLHeadingElement

btn.addEventListener(`click`, () => {
  btn.style.pointerEvents = `none`;
  const loading = setInterval(() => {
    prog += 1;
    progHeader.innerHTML = `${prog}%`;
    progBar.style.width = `${prog}%`;
  }, 50);

  setTimeout(() => {
    clearInterval(loading);
    btn.innerHTML = `Downloaded`;
    btn.style.opacity = `0.5`;
  }, 5000);
});