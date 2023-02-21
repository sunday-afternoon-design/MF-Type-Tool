import './style.css'
import './js/capture.js'
import './js/basicfunctions'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   base:'/MF-generate-tool/'
// })




let time = 0;

let strtest, splitstr
let splitstrnum;
let MFspan = [];
const p = document.getElementById("mftest");

const switcher = document.getElementById("swithcer");
let randomlogo = document.getElementById("randomlogo");
let hidepanel = document.getElementById("hidepanel");

let x = Math.random() * 1500;
let y = Math.random() * 900 + 100;
let randomx = Math.random() * 1500;
let randomy = Math.random() * 900 + 100;
let mousex, mousey;
const mousexinput = document.getElementById("pointx");
const mouseyinput = document.getElementById("pointy");

const wstrength = document.getElementById("myStrengthRangeweight");
const fontSizeSlider = document.getElementById("fontsizeslider");
const strength = document.getElementById("myStrengthRange");
const fontwa = document.getElementById("rangea");
const fontwb = document.getElementById("rangeb");

let hiddeneditpointer = false
let editpointer = document.getElementById('editpointer');


function initialize() {
    strtest = document.getElementById("textarea").value;

    splitstr = strtest.split('');

    for (let i = 0; i < splitstr.length; i++) {
        let ic = document.createElement("span");
        ic.classList.add("ics");
        ic.innerHTML = splitstr[i];
        MFspan.push(ic)
        p.append(MFspan[i]);
    }
}


initialize()


const tick = () => {
    splitstrnum = splitstr.length;

    time += 0.005;

    strtest = document.getElementById("textarea").value;
    splitstr = strtest.split('');

    if (mousex > 300) {
        document.body.style.cursor = "none"
    } else {
        document.body.style.cursor = "auto"
    }

    if (splitstrnum != splitstr.length) {
        // MFspan.innerHTML = ''

        // for (let i = 0; i < splitstrnum; i++) {
        //     let ic = document.createElement("span")
        //     ic.innerHTML = strtest[i]
        //     ic.classList.add("icsplus");
        //     MFspan.push(ic)
        //     p.append(ic)
        // }
        if (splitstrnum < splitstr.length) {
            let ic = document.createElement("span")
            ic.innerHTML = strtest[splitstrnum]
            ic.classList.add("icsplus");
            MFspan.push(ic)
            p.append(ic)
        }
        if (splitstrnum > splitstr.length) {
            let num = splitstrnum - splitstr.length;
            for (let i = 0; i < num; i++) {
                p.children[0].remove();
                num--;
            }
        }
    }

    if (switcher.checked) {
        x = mousex;
        y = mousey;
        mousexinput.value = mousex;
        mouseyinput.value = mousey;
        editpointer.classList.add('hidden');
    } else {
        x = mousexinput.value
        y = mouseyinput.value
        editpointer.classList.remove('hidden');
    }

    if (hiddeneditpanel) {
        hidepanel.value = "Show the edit panel"
        editpanel.classList.add('hidden');
    } else {
        hidepanel.value = "Hide the edit panel"
        editpanel.classList.remove('hidden');

    }

    logo();

    window.requestAnimationFrame(tick)
}

function logo() {
    for (let i = 0; i < splitstr.length; i++) {
        p.childNodes[i].innerHTML = splitstr[i]

        let posx = getOffset(p.childNodes[i]).left;
        let posy = getOffset(p.childNodes[i]).top;

        let xdist = posx - x;
        let ydist = y - posy;

        let testleft = xdist / 160 * 45 * ydist / 160;
        let testw = (1 - Math.abs(xdist / window.innerWidth) * wstrength.value + 1 - Math.abs(ydist / window.innerHeight) * wstrength.value) * 900;
        testw = clamp(testw, fontwa.value, fontwb.value)

        p.childNodes[i].style.setProperty("--slant", testleft * strength.value);
        p.childNodes[i].style.setProperty("--weight", testw);

        p.childNodes[i].style.fontSize = fontSizeSlider.value + "px"
    }
}




function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left,
        top: rect.top
    };
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

document.addEventListener('mousemove', (e) => {
    mousex = e.clientX;
    mousey = e.clientY;
});

randomlogo.onclick = function() {
    console.log("randomlogo")
    randomx = Math.random() * 1500;
    randomy = Math.random() * 900 + 100;

    mousexinput.value = Math.floor(randomx);
    mouseyinput.value = Math.floor(randomy);
};



let hiddeneditpanel = false
let editpanel = document.getElementById('editpanel');
hidepanel.onclick = function() {
    console.log("hidepanel")
    hiddeneditpanel = !hiddeneditpanel

};

document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyV' && (event.ctrlKey || event.metaKey)) {
        hiddeneditpanel = !hiddeneditpanel
        console.log(hiddeneditpanel)
    };
})

document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyB' && (event.ctrlKey || event.metaKey)) {
        switcher.checked = !switcher.checked
    };
})


tick()