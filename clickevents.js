const main = document.querySelector("main");

const button = document.querySelector("button");

const foo = document.getElementById("foo");
const bar = document.getElementById("bar");
const foobar = document.getElementById("foobar");

const body = document.querySelector("body");

button.addEventListener("click", responseToClick)

foo.addEventListener("click", responseToClick)

function responseToClick(foo) {
    const pTag = document.createElement('h3');
    pTag.textContent = "foo";
    main.appendChild(pTag);
}

bar.addEventListener("click", responseToClick2)

function responseToClick2(bar) {
    const barTag = document.createElement('h3');
    barTag.textContent = "bar";
    main.appendChild(barTag);
}

foobar.addEventListener("click", responseToClick3)

function responseToClick3(foobar) {
    const foobarTag = document.createElement('h3');
    foobarTag.textContent = "foobar";
    main.appendChild(foobarTag);
}