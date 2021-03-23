const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".text", {y:"0%", duration: 1, stagger: 0.25});
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1.5");
tl.fromTo(".nav-div", {opacity:0}, {opacity:1, duration: 1});

var i = 0;
var images = [];
var time = 3000;

images[0]= document.createElement("img");

images[0].src ="https://blog.redletterdays.co.uk/wp-content/uploads/2018/04/CORNWALL-featured-image.jpg";

images[1]= document.createElement("img");

images[1].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQzLmiOHFjT2xrftU3so3rs0kinfutxsMAA&usqp=CAU";

images[2]= document.createElement("img");

images[2].src = "https://images.sunshine.co.uk/ss/backgrounds/other/2019-holidays-s.jpg";


function changeImg(){
  document.getElementById("image-div").src = images[i].src;
  
  if(i < images.length - 1){
    i++;
  } else{
    i=0;
  }
  setTimeout("changeImg()", time);
};

window.onload = changeImg; 

console.log("hello world")