

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

window.onscroll = function() {stickyNav()};//window scroll starts myFunction
const navbar = document.getElementById("nav");//getting the nav
const sticky = navbar.offsetTop;//get offset postion of the nav


function stickyNav() {
      if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      } else {
      navbar.classList.remove("sticky");
      }
    }
  window.addEventListener("scroll", stickyNav);


      function initMap() {
        var myLatLng = { lat: 33.3062, lng: -111.8413 };
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: myLatLng
        });
        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,

        });
      }

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
