window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//navigation menu item click
navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

for (var i = 0; i < navigationItems.length; i++) {
  navigationItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("clicked");
    current[0].className = current[0].className.replace(" clicked", "");
    this.className += " clicked";
  });
}

 //reveal elements on scroll from top
 window.addEventListener("scroll", reveal);
  
 function reveal(){
   var reveals = document.querySelectorAll(".reveal");
 
   for(var i = 0; i < reveals.length; i++){
     var windowHeight = window.innerHeight;
     var revealTop = reveals[i].getBoundingClientRect().top;
     var revealPoint = 50;
 
     if(revealTop < windowHeight - revealPoint){
       reveals[i].classList.add("active");
     }
     else if(revealTop > windowHeight - revealPoint){
      reveals[i].classList.remove("active");
     }
   }
 }