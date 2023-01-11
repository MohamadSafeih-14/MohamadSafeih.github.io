let animate = document.querySelector(".services-page");
let spns = document.querySelectorAll(".conta div")
let s1 = document.querySelector(".s1");
let s3 = document.querySelector(".s3");
let s2 = document.querySelector(".s2");
window.onscroll = function () {
    if (window.scrollY = animate.offsetTop + "1000px") {
        spns.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}

let p3 = document.querySelector(".text-container");
let sectios = document.querySelector(".about-section");
let texti = "hello my name is mohamad safieh and i am a web developer based in syria and now i am living in turkey and i hope thsi will be so good";

console.log(texti.length)

