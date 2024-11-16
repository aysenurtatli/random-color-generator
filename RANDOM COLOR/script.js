//rgb color generator
let rgbColorArray = [];
    const arrayOfRgbColors = () => {
    
    let totalRgb = Math.floor(Math.random()* 200) + 1;
    
    for (let x = 1; x <= totalRgb; x++){
        let rgbColor = "";
        for (let i = 0; i < 3; i++){
            let randomNumberGenerator = Math.floor(Math.random()* 256);
            rgbColor += randomNumberGenerator;
             if(i < 2){
            rgbColor += ",";
            }
        }
        rgbColorArray.push(rgbColor);
        
    }
    return rgbColorArray;
}
const arrayOfRgbColorsResult = arrayOfRgbColors();

//variables
const box = document.getElementById("random-color");
const btn = document.getElementById("color-change-btn");
let rgbNum = document.getElementById("rgb-color-code");
const coppiedText = document.querySelector(".coppied");
const container = document.querySelector(".container");



//rgb color change 
function changeColor(){
    let randomIndex = Math.floor(Math.random() * rgbColorArray.length);
    box.style.backgroundColor = `rgb(${arrayOfRgbColorsResult[randomIndex]})`;
    rgbNum.textContent = `rgb (${arrayOfRgbColorsResult[randomIndex]})`;
    rgbNum.style.mixBlendMode = "difference";
    box.style.boxShadow = `0px 2px 30px 0px rgb(${arrayOfRgbColorsResult[randomIndex]})`
    container.style.boxShadow = `0px 0px 72px -29px rgb(${arrayOfRgbColorsResult[randomIndex]})`
    coppiedText.classList.add("hidden");
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") { // Eğer boşluk tuşuna basıldıysa
      event.preventDefault(); // Sayfanın aşağı kaymasını engeller
      btn.click(); // Butonun click olayını tetikler
    }
  });



//button animation
window.onload = () => {
    document.querySelectorAll("button.particleButton").forEach(btn => {
        let btnBg = btn.parentNode.querySelector(".particles")
        let initalListener = () => {
            btnBg.classList.add("animated")
            btn.removeEventListener("click", initalListener)
            
        }
        btn.addEventListener("click", initalListener)
    })
};

//copied color code
const copyText = async() => {
    const pageType = document.body.getAttribute('data-page');
    
    if (pageType === 'rgb-color'){
        let rgbNum = document.getElementById("rgb-color-code").innerHTML;
    try {
        await navigator.clipboard.writeText(rgbNum);
        if (rgbNum === ""){
            coppiedText.textContent = "generate a color";
        }
        coppiedText.classList.remove("hidden");
        console.log("copy");
        
    }
     catch (err){
        console.error("failed :", err);
    }
}

    
    if (pageType === 'hex-color'){
        let hexNum = document.getElementById("hex-color-code").innerHTML;
    try {
        await navigator.clipboard.writeText(hexNum);
        if (hexNum === ""){
            coppiedText.textContent = "generate a color";
        }
        coppiedText.classList.remove("hidden");
        console.log("copy");
        
    }
     catch (err){
        console.error("failed :", err);
    }
}
}



//dark mode- light mode
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }

  function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? "Light mode" : "Dark mode";
    buttonEl.setAttribute("aria-label", newCta);
    buttonEl.innerText = newCta;
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
  }

  const button = document.querySelector("[data-theme-toggle]");
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
  updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
    updateThemeOnHtmlEl({ theme: currentThemeSetting });
    button.addEventListener("click", (event) => {
        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
      
        localStorage.setItem("theme", newTheme);
        updateButton({ buttonEl: button, isDark: newTheme === "dark" });
        updateThemeOnHtmlEl({ theme: newTheme });
      
        currentThemeSetting = newTheme;
      });
      
//hamburger menu
const toggleMobileMenu = menu => {
    menu.classList.toggle('open');
}