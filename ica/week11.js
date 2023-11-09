console.log("test");

const x = 1;
const y = 2;

if (x === y) {
    console.log("success")
}
else {
console.log("fail")
}

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

function random(number) {
    return Math.floor(Math.random  () * number);
}


function draw2() {
    //console.log("Test");
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i<100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(random)";
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),0,2 * Math.LN10,);
        ctx.fill();

    }
}

btn.addEventListener("click", draw2);