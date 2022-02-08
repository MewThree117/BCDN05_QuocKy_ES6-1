let str = document.querySelector(".heading").innerHTML;
let chars = [...str];

let tachChuoi = () => {
    let content = "";
    for (let kiTu of chars) {
        content += `
            <span>${kiTu}</span>
        `
    }
    document.querySelector(".heading").innerHTML = content;
}

tachChuoi();