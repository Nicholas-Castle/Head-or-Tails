const coin = ["heads", "tails"];

//show
const show = function (e) {
	e.classList.add('tails');
};

// Hide
const hide = function (e) {
	e.classList.remove('tails');
};

let aniCoin = function () {
	document.querySelector(".toggle").classList.toggle("animate");
};

let removeClass = function () {
	document.querySelector(".toggle").classList.remove("animate");
};

function flipCoin() {
  let randomNum = Math.floor(Math.random() * (coin.length));
  if(randomNum === 0) {
      document.getElementById("coinResult").innerHTML = "heads";
			hide(document.querySelector(".toggle"));
			console.log("Heads");
     }
  else {
    document.getElementById("coinResult").innerHTML = "tails";
	  show(document.querySelector(".toggle"));
	  console.log("Tails");
  }
aniCoin();
}

function removeDiv () {
	let element = document.getElementById("element");
	element.classList.remove("animate");
}

document.getElementById("button").addEventListener("click", flipCoin, function(e) {
	e.preventDefualt;
}, false);
document.getElementById("button").addEventListener("mouseup", removeClass);
