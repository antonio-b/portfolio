

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

window.onscroll = function() {stickyNav()};//window scroll starts myFunction
const navbar = document.getElementById("nav");//getting the nav
const sticky = navbar.offsetTop;//get offset postion of the nav

const cvs = document.querySelector("canvas");
const c = cvs.getContext("2d");//set canvas to 2d

cvs.width = window.innerWidth;//set canvas to full screen
cvs.height = window.innerHeight;

window.addEventListener("resize", function() {
  cvs.width = window.innerWidth;
  cvs.height = window.innerHeight;
});

let mouse = {
  x: undefined,
  y: undefined
};

window.addEventListener("mousemove", function(e) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Diamond {
  constructor(x, y, dx, dy, width) {
    this.x = x;
    this.y = y;
    this.dx = dx;//x and y velocity
    this.dy = dy;
    this.width = width;
    this.minWidth = width;//set min width to original and max * 3 width
    this.maxWidth = width * 3;

    let colorArray = ["#F63609", "#090c0b", "#0d2527", "#267368", "#00b1a0"];

    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw = () => {
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x - this.width / 2, this.y);
    c.lineTo(this.x, this.y + this.width / 2);
    c.lineTo(this.x + this.width / 2, this.y);
    c.lineTo(this.x, this.y - this.width / 2);
    c.lineTo(this.x - this.width / 2, this.y);
    c.closePath();

    c.fillStyle = this.color;
    c.fill();

    this.update();
  };

  update = () => {
    if (
      this.x + this.width / 2 >= window.innerWidth ||
      this.x - this.width / 2 <= 0
    ) {
      this.dx = -this.dx;
    }

    if (
      this.y + this.width / 2 >= window.innerHeight ||
      this.y - this.width / 2 <= 0
    ) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if (
      mouse.x - this.x < 80 &&
      mouse.x - this.x > -80 &&
      mouse.y - this.y < 80 &&
      mouse.y - this.y > -80 &&
      this.width < this.maxWidth
    ) {
      this.width += 1;
      this.x -= 1;
      this.y -= 1;
    } else if (this.width > this.minWidth) {
      this.width -= 1;
      this.x += 1;
      this.y += 1;
    }
  };
}

let diamondArray = [];

for (let i = 0; i < 500; i++) {
  let width = Math.random() * 20 + 4;
  let x = Math.random() * window.innerWidth;
  let dx = (Math.random() - 0.5) * 1;
  let y = Math.random() * window.innerHeight;
  let dy = (Math.random() - 0.5) * 1;
  diamondArray.push(new Diamond(x, y, dx, dy, width));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  diamondArray.forEach(diamond => {
    diamond.draw();
  });
}

animate();

// List of sentences
var content = [
	"Front End Developer",
	"Back End Developer",
	"Full Stack Developer",
];
// Current sentence being processed
var sentence = 0; // Character number of the current sentence being processed
var sentenceIndex = 0; // Holds the handle returned from setInterval
var interval;
var textContent = document.querySelector("#text");
var cursor = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text =  content[sentence].substring(0, sentenceIndex + 1);
	textContent.innerHTML = text;
	sentenceIndex++; // If full sentence has been displayed then start to delete the sentence after some time
	if(text === content[sentence]) { // Hide the cursor
		cursor.style.display = 'none';
    clearInterval(interval);
		setTimeout(function() {
			interval = setInterval(Delete, 50);
		}, 1000);
	}
}
// Implements deleting effect
function Delete() { // Get substring with 1 characater deleted
	var text =  content[sentence].substring(0, sentenceIndex - 1);
	textContent.innerHTML = text;
	sentenceIndex--; // If sentence has been deleted then start to display the next sentence
  	if(text === '') {
  		clearInterval(interval); // If current sentence was last then display the first one, else move to the next
  		if(sentence == (content.length - 1))
  			sentence = 0;
  		else
  			sentence++;
        sentenceIndex = 0; // Start to display the next sentence after some time
		setTimeout(function() {
			cursor.style.display = 'inline-block';
			interval = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
interval = setInterval(Type, 100);


function stickyNav() {
      if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      } else {
      navbar.classList.remove("sticky");
      }
    }
  window.addEventListener("scroll", stickyNav);


const albumPic = document.getElementsByClassName("album");
const front = document.querySelector('.face-front');
const back = document.querySelector('.face-back');
const flip = document.querySelector('.book-content');
const uno = document.querySelectorAll('.book');
const portada = document.querySelectorAll('#portada');




let contZindex = 2;
let customZindex = 1;
for (var i = 0; i < uno.length ; i++) {
    uno[i].addEventListener('click', flipPage, false);
    uno[i].style.zIndex = customZindex;
    customZindex--;
}

function flipPage(e){

         let tgt = e.target;
         let unoThis = this;

         unoThis.style.zIndex = contZindex;
         contZindex++;

         if (tgt.getAttribute('class') == 'face-front'){
             unoThis.style.zIndex = contZindex;
             contZindex += 20;
             setTimeout(function(){
                 unoThis.style.transform = 'rotateY(-180deg)';
             },500);
         }
        else if (tgt.getAttribute("class") == 'face-back'){
             unoThis.style.zIndex = contZindex;
             contZindex +=20;

             setTimeout(function(){
                 unoThis.style.transform = 'rotateY(0deg)';
         },500);
     }

        else if (tgt.getAttribute('id')== 'portada'){
             flip.classList.remove("trnsf-reset");
             flip.classList.add("trnsf");
         }
        else if (tgt.getAttribute('id')== 'trsf'){
             flip.classList.remove("trnsf-reset");
             flip.classList.add("trnsf");
         } else {

         }

 }

 function viewSource(){
    var source = "<html>";
    source += document.getElementsByTagName('html')[0].innerHTML;
    source += "</html>";
    source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    source = "<pre>"+source+"</pre>";
    sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
    sourceWindow.document.write(source);
    sourceWindow.document.close();
    if(window.focus) sourceWindow.focus();
}
