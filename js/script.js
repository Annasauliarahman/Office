let myPanel1 = document.querySelectorAll(".panel-box")[0];
let subpanel1 = document.querySelectorAll(".box")[0];

let myPanel2 = document.querySelectorAll(".panel-box")[1];
let subpanel2 = document.querySelectorAll(".box")[1];

let myPanel3 = document.querySelectorAll(".panel-box")[2];
let subpanel3 = document.querySelectorAll(".box")[2];

let myPanel4 = document.querySelectorAll(".panel-box")[3];
let subpanel4 = document.querySelectorAll(".box")[3];


// panel satu

myPanel1.onmousemove = transformPanel;
myPanel1.onmouseenter = handleMouseEnter;
myPanel1.onmouseleave = handleMouseLeave;

let mouseX, mouseY;

let transformAmount = 5;

function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel1.offsetLeft + myPanel1.clientWidth / 2;
    const centerY = myPanel1.offsetTop + myPanel1.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel1.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel1.clientHeight / 2));

    console.log(percentX + " dan " + percentY);

    subpanel1.style.transform = "perspective(800px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter() {
    setTimeout(() => {
        subpanel1.style.transition = "";
    }, 100);
    subpanel1.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
    subpanel1.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel1.style.transition = "";
    }, 100);

    subpanel1.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
}

// panel dua

myPanel2.onmousemove = transformPanel2;
myPanel2.onmouseenter = handleMouseEnter2;
myPanel2.onmouseleave = handleMouseLeave2;

let mouse2X, mouse2Y;

let transformAmount2 = 5;

function transformPanel2(mouseEvent) {
    mouse2X = mouseEvent.pageX;
    mouse2Y = mouseEvent.pageY;

    const centerX = myPanel2.offsetLeft + myPanel2.clientWidth / 2;
    const centerY = myPanel2.offsetTop + myPanel2.clientHeight / 2;

    const percentX = (mouse2X - centerX) / (myPanel2.clientWidth / 2);
    const percentY = -((mouse2Y - centerY) / (myPanel2.clientHeight / 2));

    console.log(percentX + " dan " + percentY);

    subpanel2.style.transform = "perspective(800px) rotateY(" + percentX * transformAmount2 + "deg) rotateX(" + percentY * transformAmount2 + "deg)";
}

function handleMouseEnter2() {
    setTimeout(() => {
        subpanel2.style.transition = "";
    }, 100);
    subpanel2.style.transition = "transform 0.1s";
}

function handleMouseLeave2() {
    subpanel2.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel2.style.transition = "";
    }, 100);

    subpanel2.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
}


// panel tiga

myPanel3.onmousemove = transformPanel3;
myPanel3.onmouseenter = handleMouseEnter3;
myPanel3.onmouseleave = handleMouseLeave3;

let mouse3X, mouse3Y;

let transformAmount3 = 5;

function transformPanel3(mouseEvent) {
    mouse3X = mouseEvent.pageX;
    mouse3Y = mouseEvent.pageY;

    const centerX = myPanel3.offsetLeft + myPanel3.clientWidth / 2;
    const centerY = myPanel3.offsetTop + myPanel3.clientHeight / 2;

    const percentX = (mouse3X - centerX) / (myPanel3.clientWidth / 2);
    const percentY = -((mouse3Y - centerY) / (myPanel3.clientHeight / 2));

    console.log(percentX + " dan " + percentY);

    subpanel3.style.transform = "perspective(800px) rotateY(" + percentX * transformAmount3 + "deg) rotateX(" + percentY * transformAmount3 + "deg)";
}

function handleMouseEnter3() {
    setTimeout(() => {
        subpanel3.style.transition = "";
    }, 100);
    subpanel3.style.transition = "transform 0.1s";
}

function handleMouseLeave3() {
    subpanel3.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel3.style.transition = "";
    }, 100);

    subpanel3.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
}



// panel empat

myPanel4.onmousemove = transformPanel4;
myPanel4.onmouseenter = handleMouseEnter4;
myPanel4.onmouseleave = handleMouseLeave4;

let mouse4X, mouse4Y;

let transformAmount4 = 5;

function transformPanel4(mouseEvent) {
    mouse4X = mouseEvent.pageX;
    mouse4Y = mouseEvent.pageY;

    const centerX = myPanel4.offsetLeft + myPanel4.clientWidth / 2;
    const centerY = myPanel4.offsetTop + myPanel4.clientHeight / 2;

    const percentX = (mouse4X - centerX) / (myPanel4.clientWidth / 2);
    const percentY = -((mouse4Y - centerY) / (myPanel4.clientHeight / 2));

    console.log(percentX + " dan " + percentY);

    subpanel4.style.transform = "perspective(800px) rotateY(" + percentX * transformAmount4 + "deg) rotateX(" + percentY * transformAmount4 + "deg)";
}

function handleMouseEnter4() {
    setTimeout(() => {
        subpanel4.style.transition = "";
    }, 100);
    subpanel4.style.transition = "transform 0.1s";
}

function handleMouseLeave4() {
    subpanel4.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel4.style.transition = "";
    }, 100);

    subpanel4.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
}






// left and right

const containsSlide1 = document.querySelectorAll('.panel-box');
const txtSlide = document.querySelectorAll('.txt-slide');

const right = document.querySelector(".right");
const left = document.querySelector(".left");

let slideIndex = 1;
    showImg(slideIndex);

    function nextSlide(e){
        showImg(slideIndex += e);
    }

    function dotSlide(e){
        showImg(slideIndex = e)
    }


function showImg(e) {
    let i;

    // layer satu

    if(e > containsSlide1.length) {
        slideIndex = 1;
    }

    if(e < 1 ) {
        slideIndex = containsSlide1.length;
    }

    for(i=0; i<containsSlide1.length; i++){
        containsSlide1[i].classList.remove("active");
    }

    containsSlide1[slideIndex - 1].classList.add('active');


    for(i=0; i<txtSlide.length; i++){
        txtSlide[i].classList.remove("active");
    }
    txtSlide[slideIndex - 1].classList.add('active');
}


const container = document.querySelector('.container');

window.addEventListener('scroll', (event) => {
    let value = window.scrollY / 2 ;

    console.log(value);
    container.style.transform ="translateY(" + -value + "deg)";
})






// slide 

// const panel = document.querySelector(".box");
// const subPanel = document.querySelector("img");

// panel.onmousemove = transformPanel;
// panel.onmouseenter = handleMouseEnter;
// panel.onmouseleave = handleMouseLeave;

// let mouseX, mouseY;

// let transformAmount = 5;

// function transformPanel(mouseEvent) {
//     mouseX = mouseEvent.pageX;
//     mouseY = mouseEvent.pageY;

//     const centerX = panel.offsetLeft + panel.clientWidth / 2;
//     const centerY = panel.offsetTop + panel.clientHeight / 2;

//     const percentX = (mouseX - centerX) / (panel.clientWidth / 2);
//     const percentY = -((mouseY - centerY) / (panel.clientHeight / 2));

//     subPanel.style.transform = "perspective(800px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
// }

// function handleMouseEnter() {
//     setTimeout(() => {
//         subPanel.style.transition = "";
//     }, 100);
//     subPanel.style.transition = "transform 0.1s";
// }

// function handleMouseLeave() {
//     subPanel.style.transition = "transform 0.1s";
//     setTimeout(() => {
//         subPanel.style.transition = "";
//     }, 100);

//     subPanel.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
// }





































