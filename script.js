let div = document.querySelector(".rules");
console.log(div);

let crun = document.querySelector(".crun");
let yrun = document.querySelector(".yrun");
let userchoice = document.querySelectorAll(".your-choice");
let comchoice = document.querySelectorAll(".computer-choice");

let computer = parseInt(localStorage.getItem("cscore")) || 0;
let user = parseInt(localStorage.getItem("yscore")) || 0;
// localStorage.setItem("cscore", computer);
// localStorage.setItem("yscore", user);
yrun.innerHTML = user;
crun.innerHTML = computer;
let mid_div = document.querySelector(".mid");
let win_div = document.querySelector(".win");
let loose_div = document.querySelector(".loose");
let tie_div = document.querySelector(".tie");
let congo_div = document.querySelector(".congo");
let head_div = document.querySelector(".head");

function showHide(display) {
  if (display == 1) {
    div.style.display = "block";
  } else {
    {
      div.style.display = "none";
    }
  }
}

function game(choice) {
  let random = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log("r" + random);
  if (choice == 1 && random == 2) {
    user++;
    yrun.innerHTML = user;
    let winnerdiv =
      '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let looserdiv =
      '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">PC PICKED</P></div> ';
    comchoice[0].innerHTML = looserdiv;
    userchoice[0].innerHTML = winnerdiv;
    mid_div.style.display = "none";
    win_div.style.display = "block";
    tie_div.style.display = "none";
    loose_div.style.display = "none";

    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you win");
  } else if (choice == 1 && random == 3) {
    computer++;
    crun.innerHTML = computer;

    mid_div.style.display = "none";
    win_div.style.display = "none";
    loose_div.style.display = "block";
    tie_div.style.display = "none";

    let looserdiv =
      '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let winnerdiv =
      '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">PC PICKED</P></div> ';
    userchoice[1].innerHTML = looserdiv;
    comchoice[1].innerHTML = winnerdiv;
    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you loose");
  } else if (choice == random) {
    mid_div.style.display = "none";
    win_div.style.display = "none";
    loose_div.style.display = "none";
    tie_div.style.display = "block";
    if (choice == 1) {
      let yourChoice =
        '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">YOU PICKED</P></div>';
      let pcChoice =
        '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">PC PICKED</P></div>';
      userchoice[2].innerHTML = yourChoice;
      comchoice[2].innerHTML = pcChoice;
    } else if (choice == 2) {
      let yourChoice =
        '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">YOU PICKED</P></div>';
      let pcChoice =
        '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">PC PICKED</P></div>';
      userchoice[2].innerHTML = yourChoice;
      comchoice[2].innerHTML = pcChoice;
    } else if (choice == 3) {
      let yourChoice =
        '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">YOU PICKED</P></div>';
      let pcChoice =
        '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">PC PICKED</P></div>';
      userchoice[2].innerHTML = yourChoice;
      comchoice[2].innerHTML = pcChoice;
    }

    console.log("tie match");
  }
  if (choice == 2 && random == 1) {
    computer++;
    crun.innerHTML = computer;
    mid_div.style.display = "none";
    win_div.style.display = "none";
    loose_div.style.display = "block";
    tie_div.style.display = "none";

    let looserdiv =
      '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let winnerdiv =
      '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">PC PICKED</P></div> ';
    userchoice[1].innerHTML = looserdiv;
    comchoice[1].innerHTML = winnerdiv;
    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you loose");
  } else if (choice == 2 && random == 3) {
    user++;
    yrun.innerHTML = user;
    mid_div.style.display = "none";
    win_div.style.display = "block";

    let winnerdiv =
      '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let looserdiv =
      '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">PC PICKED</P></div> ';
    comchoice[0].innerHTML = looserdiv;
    userchoice[0].innerHTML = winnerdiv;
    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you win");
  }
  if (choice == 3 && random == 1) {
    user++;
    yrun.innerHTML = user;
    mid_div.style.display = "none";
    win_div.style.display = "block";
    let winnerdiv =
      '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let looserdiv =
      '<div class="rock "><img src="./images/rock.png"  /><P class="ctext">PC PICKED</P></div> ';
    comchoice[0].innerHTML = looserdiv;
    userchoice[0].innerHTML = winnerdiv;
    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you win");
  } else if (choice == 3 && random == 2) {
    computer++;
    crun.innerHTML = computer;
    mid_div.style.display = "none";
    win_div.style.display = "none";
    loose_div.style.display = "block";

    let looserdiv =
      '<div class="paper "><img src="./images/paper.png"  /><P class="ctext">YOU PICKED</P></div> ';
    let winnerdiv =
      '<div class="scissor "><img src="./images/scissor.png"  /><P class="ctext">PC PICKED</P></div> ';
    userchoice[1].innerHTML = looserdiv;
    comchoice[1].innerHTML = winnerdiv;
    localStorage.setItem("cscore", computer);
    localStorage.setItem("yscore", user);
    console.log("you loose");
  }
}
function playAgain() {
  mid_div.style.display = "block";
  head_div.style.display = "flex";
  win_div.style.display = "none";
  loose_div.style.display = "none";
  tie_div.style.display = "none";
  congo_div.style.display = "none";
}

function congo() {
  mid_div.style.display = "nono";
  win_div.style.display = "none";
  loose_div.style.display = "none";
  tie_div.style.display = "none";
  congo_div.style.display = "block";
  head_div.style.display = "none";
}
