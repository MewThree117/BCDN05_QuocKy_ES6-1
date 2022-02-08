const colorList = [
    "pallet",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

let showColorButton = (colorList) => {
    let content = "";
    for(let color in colorList) {
        // console.log(colorList[color]);
        
        if(color == 0) {
            content += `
                <button class="color-button ${colorList[color]} active"></button>
            `
        } else {
            content += `
                <button class="color-button ${colorList[color]}"></button>
            `
        }
    }
    document.getElementById("colorContainer").innerHTML = content;
}

showColorButton(colorList);

let btnContainer = document.getElementById("colorContainer");
let btns = btnContainer.getElementsByClassName("color-button");

for (let i = 0; i<btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        for(let color in colorList) {
            if(i == color) {
                let currentColor = colorList[color];
                let house = document.getElementById("house");
                house.classList.add(currentColor);
            } else {
                let currentColor = colorList[color];
                house.classList.remove(currentColor);
            }
        }
    });
}