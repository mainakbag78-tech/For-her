// -------------------------
// Intro Typing Animation
// -------------------------

const messages = [
    "Hey Praggya ❤️",
    "I made something just for you...",
    "Please don't leave yet 🥺"
];

const typing = document.getElementById("typing");
const intro = document.getElementById("intro");
const card = document.querySelector(".card");

let messageIndex = 0;

function showMessage() {

    typing.innerHTML = messages[messageIndex];

    messageIndex++;

    if (messageIndex < messages.length) {

        setTimeout(showMessage, 2200);

    } else {

        setTimeout(() => {

            intro.style.display = "none";
            card.style.display = "block";

        }, 2200);

    }

}

showMessage();


// -------------------------
// Buttons
// -------------------------

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");


// -------------------------
// Moving NO Button
// -------------------------

function moveButton() {

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 70);

    noButton.style.position = "fixed";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

}

noButton.addEventListener("click", moveButton);
noButton.addEventListener("touchstart", moveButton);


// -------------------------
// YES Button
// -------------------------

yesButton.addEventListener("click", () => {

document.body.innerHTML = `

<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background:linear-gradient(135deg,#ff4e8d,#ff914d);
color:white;
text-align:center;
padding:20px;
font-family:Arial;
">

<h1>💖 SHE SAID YES 💖</h1>

<h2>I am the happiest person today ❤️</h2>

<p style="margin-top:20px;font-size:20px;line-height:1.6;max-width:600px;">

Thank you for making my day so beautiful.

I promise to respect you,

support you,

and always try my best to keep you smiling.

❤️

</p>

</div>

`;

});


// -------------------------
// Floating Hearts
// -------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const hearts = ["💓","💕","💖","💗","💘","❤️"];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.fontSize =
    (Math.random()*25+15)+"px";

    const direction =
    Math.floor(Math.random()*4);

    if(direction===0){

        heart.style.left=Math.random()*100+"vw";
        heart.style.bottom="-40px";
        heart.style.animationName="floatUp";

    }

    else if(direction===1){

        heart.style.left="-40px";
        heart.style.top=Math.random()*100+"vh";
        heart.style.animationName="floatRight";

    }

    else if(direction===2){

        heart.style.right="-40px";
        heart.style.top=Math.random()*100+"vh";
        heart.style.animationName="floatLeft";

    }

    else{

        heart.style.left="-40px";
        heart.style.bottom="-40px";
        heart.style.animationName="floatDiagonal";

    }

    heart.style.animationDuration =
    (Math.random()*3+3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,400);
