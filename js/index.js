

$(document).ready(function(){
 
  // hide our element on page load
  $('.pics-to-animate').css('opacity', 0);
  $('.element-to-animate').css('opacity', 0);
    $('.staff').css('opacity', 0);

  $('.element-to-animate').waypoint(function() {
      $('.element-to-animate').addClass('fadeInUp');
  }, { offset: '80%' });
$('.pics-to-animate').waypoint(function() {
      $('.pics-to-animate').addClass('fadeInUp');
  }, { offset: '80%' });
$('.staff').waypoint(function() {
      $('.staff').addClass('fadeInUp');
  }, { offset: '80%' });
$('#footer').waypoint(function() {
      $('#footer').addClass('fadeInUp');
      $('.foot-head').addClass('fadeInUp');
  }, { offset: '90%' });
});

/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}*/


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#f0d0cd"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#f0d0cd"
      },
      "polygon": {
        "nb_sides": 9
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#f0d0cd",
      "opacity": 0.4,
      "width": .8
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "random",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": .7
        }
      },
      "bubble": {
        "distance": 400,
        "size": 5,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


var imgArray = ['img/a.jpg', 'img/b.jpg','img/c.jpg'];

$('#change').hover(function() {
  setInterval(function(){ 
    alert(imgArray[0])
   }, 3000);
})

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
