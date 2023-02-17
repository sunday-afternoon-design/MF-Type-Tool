const fontSizeSlider = document.getElementById("fontsizeslider");
const fontSizeTextInput = document.getElementById("sizetextinput");

function updateFontSizeTextInput() {
    fontSizeTextInput.value = fontSizeSlider.value;
}

function updateFontSizeSlider() {
    fontSizeSlider.value = fontSizeTextInput.value;
}
fontSizeSlider.addEventListener("input", updateFontSizeTextInput);
fontSizeTextInput.addEventListener("input", updateFontSizeSlider);



const typecolor = document.getElementById("fcolorInput")
const bgcolor = document.getElementById("bgcolorInput")
const backgrounddiv = document.getElementById("background")
const bodycolor = document.body

function updateBackgroundcolor() {
    backgrounddiv.style.backgroundColor = bgcolor.value;
}

function updateTypecolor() {
    bodycolor.style.color = typecolor.value;
}
typecolor.addEventListener("input", updateTypecolor);
bgcolor.addEventListener("input", updateBackgroundcolor);

const strength = document.getElementById("myStrengthRange");
const slanttextinput = document.getElementById("slanttextinput")
strength.addEventListener("input", function() {
    slanttextinput.value = strength.value;
})
slanttextinput.addEventListener("input", function() {
    strength.value = slanttextinput.value;
})

const wstrength = document.getElementById("myStrengthRangeweight");
const fieldsizetextinput = document.getElementById("fieldsizetextinput");
wstrength.addEventListener("input", function() {
    fieldsizetextinput.value = wstrength.value;
})
fieldsizetextinput.addEventListener("input", function() {
    wstrength.value = fieldsizetextinput.value;
})


const fontwa = document.getElementById("rangea");
const wAinput = document.getElementById("wAinput");
fontwa.addEventListener("input", function() {
    wAinput.value = fontwa.value;
})
wAinput.addEventListener("input", function() {
    fontwa.value = wAinput.value;
})

const fontwb = document.getElementById("rangeb");
const wBinput = document.getElementById("wBinput");
fontwb.addEventListener("input", function() {
    wBinput.value = fontwb.value;
})
wBinput.addEventListener("input", function() {
    fontwb.value = wBinput.value;
})







const switcher = document.getElementById("swithcer");
document.addEventListener("keydown", (event) => {
    if (event.code === 'KeyM') {
        switcher.checked = !switcher.checked
    }
})