const qKey = document.getElementById("qKey");
const wKey = document.getElementById("wKey");
const eKey = document.getElementById("eKey");
const rKey = document.getElementById("rKey");
const tKey = document.getElementById("tKey");
const yKey = document.getElementById("yKey");
const uKey = document.getElementById("uKey");
const iKey = document.getElementById("iKey");
const oKey = document.getElementById("oKey");


qKey.addEventListener("click", () => {
    document.getElementById("tom").pause();
    document.getElementById("tom").currentTime = 0;
    document.getElementById("tom").play();
})

wKey.addEventListener("click", () => {
    document.getElementById("kick").pause();
    document.getElementById("kick").currentTime = 0;
    document.getElementById("kick").play();
})

eKey.addEventListener("click", () => {
    document.getElementById("snare").pause();
    document.getElementById("snare").currentTime = 0;
    document.getElementById("snare").play();
})

rKey.addEventListener("click", () => {
    document.getElementById("boom").pause();
    document.getElementById("boom").currentTime = 0;
    document.getElementById("boom").play();
})

tKey.addEventListener("click", () => {
    document.getElementById("clap").pause();
    document.getElementById("clap").currentTime = 0;
    document.getElementById("clap").play();
})

yKey.addEventListener("click", () => {
    document.getElementById("hihat").pause();
    document.getElementById("hihat").currentTime = 0;
    document.getElementById("hihat").play();
})

uKey.addEventListener("click", () => {
    document.getElementById("openhat").pause();
    document.getElementById("openhat").currentTime = 0;
    document.getElementById("openhat").play();
})

iKey.addEventListener("click", () => {
    document.getElementById("ride").pause();
    document.getElementById("ride").currentTime = 0;
    document.getElementById("ride").play();
})

oKey.addEventListener("click", () => {
    document.getElementById("tink").pause();
    document.getElementById("tink").currentTime = 0;
    document.getElementById("tink").play();
})

document.addEventListener("keydown", (e) => {
    console.log(e)
    if (e.key == "q") {
        document.getElementById("tom").pause();
        document.getElementById("tom").currentTime = 0;
        document.getElementById("tom").play();
    } else if (e.key == "w") {
        document.getElementById("kick").pause();
        document.getElementById("kick").currentTime = 0;
        document.getElementById("kick").play();
    } else if (e.key == "e") {
        document.getElementById("snare").pause();
        document.getElementById("snare").currentTime = 0;
        document.getElementById("snare").play();
    } else if (e.key == "r") {
        document.getElementById("boom").pause();
        document.getElementById("boom").currentTime = 0;
        document.getElementById("boom").play();
    } else if (e.key == "t") {
        document.getElementById("clap").pause();
        document.getElementById("clap").currentTime = 0;
        document.getElementById("clap").play();
    } else if (e.key == "y") {
        document.getElementById("hihat").pause();
        document.getElementById("hihat").currentTime = 0;
        document.getElementById("hihat").play();
    }else if (e.key == "u") {
        document.getElementById("openhat").pause();
        document.getElementById("openhat").currentTime = 0;
        document.getElementById("openhat").play();
    }else if (e.key == "i") {
        document.getElementById("ride").pause();
        document.getElementById("ride").currentTime = 0;
        document.getElementById("ride").play();
    }else if (e.key == "o") {
        document.getElementById("tink").pause();
        document.getElementById("tink").currentTime = 0;
        document.getElementById("tink").play();
    } 
})