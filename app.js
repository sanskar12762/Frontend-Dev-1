const p = document.getElementById("p");
const add = document.getElementById("add");
const list = document.getElementById("list");

add.onclick = () => {
    if (p.value === "") return;
    list.innerHTML += `<li>
        <span>${p.value}</span>
        <button class="e">Edit</button>
        <button class="d">Delete</button>
    </li>`;
    p.value = "";
};

list.onclick = (e) => {
    const li = e.target.parentElement;

    if (e.target.className === "d") {
        li.remove();
    }

    if (e.target.className === "e") {
        const span = li.querySelector("span");
        const inp = document.createElement("input");
        inp.value = span.textContent;

        li.replaceChild(inp, span);
        inp.focus();

        const save = (ev) => {
            if (ev.target !== inp) {
                const s = document.createElement("span");
                s.textContent = inp.value;
                li.replaceChild(s, inp);
                document.removeEventListener("click", save);
            }
        };

        setTimeout(() => document.addEventListener("click", save), 0);
    }
};
