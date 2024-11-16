let hexaColorArray = [];
const arrayOfHexaColors = () => {
    
    const character = "0123456789abcdef";
    let randomHexColorNumber = Math.floor(Math.random() * 400) +1;
    for (let x = 1; x <= randomHexColorNumber; x++){
        let characterPush = "#";
        for (let i = 0; i < 6; i++){
            let randomCharacter = character.charAt(Math.floor(Math.random()* 15));
              characterPush += randomCharacter;
    }
    hexaColorArray.push(characterPush);
    }
    return hexaColorArray;
}
const arrayOfHexaColorsResult = arrayOfHexaColors();

let hexNum = document.getElementById("hex-color-code");

function changeColorToHex(){
    let randomIndex = Math.floor(Math.random() * hexaColorArray.length);
    box.style.backgroundColor = `${arrayOfHexaColorsResult[randomIndex]}`;
    hexNum.textContent = `${arrayOfHexaColorsResult[randomIndex]}`;
    hexNum.style.mixBlendMode = "difference";
    box.style.boxShadow = `0px 2px 30px 0px ${arrayOfHexaColorsResult[randomIndex]}`
    container.style.boxShadow = `0px 0px 72px -29px ${arrayOfHexaColorsResult[randomIndex]}`
    coppiedText.classList.add("hidden");
}

