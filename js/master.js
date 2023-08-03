 // Check If There,s Local Storge Color Option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main--color", mainColors);

  //  Remove Active Class From All Colors List Items
  document.querySelectorAll(".colors-list li ").forEach((element) => {

    element.classList.remove("active");

    //Add Active Class On Element With Data-Color === Local Srtonge Item

    if (element.dataset.color === mainColors) {
      //Add Active Class
      element.classList.add("active");
    }
  });
}
//Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let backgroundInterval;

// Toggle Spin Class On Icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // Toggle Class fa spin for rotation on self
  this.classList.toggle("fa-spin");

  // toggle Class Open main settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

//Check If There,s local Stronge Random Background Item

let backgroundLocalItem = localStorage.getItem("background-option");

//Check If Random Background Local Storge Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-background .yes").classList.add("active");  } else {
    document.querySelector(".random-background .no").classList.add("active");
  }
}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorsLi.forEach((li) => {

  //  Click On Every List Items
  li.addEventListener("click", (e) => {

    // Set Color On Root
    document.documentElement.style.setProperty("--main--color", e.target.dataset.color);

    // Set Color On Local Stronge
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

  });
});


// Switch Random background Option
const randomBackEl = document.querySelectorAll(".random-background span");

// Loop On All Spans
randomBackEl.forEach((span) => {
  //  Clic On Every Span
  span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImags();

      localStorage.setItem("background-option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background-option", false);
    }
  });
});

// Select Landing Page Element

let landingPage = document.querySelector(".landing-page");

// Get Array Of Image
let imgsArray = ["01.png", "02.jpeg", "03.jpeg", "04.jpg", "05.jpg"];

//Function To Randomize I mage
function randomizeImags() {
  if (backgroundOption === true)
    backgroundInterval = setInterval(() => {
      //Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);
      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("imags/' + imgsArray[randomNumber] + '")';
      landingPage.style.backgroundImage;
    }, 1000);
}

    randomizeImags ();

// Select Skills Selector
let ourSkills = document.querySelector(".skills");

  window.onscroll = function () {
  //Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;
  // Window Height
  let windowHeight = this.innerHeight;

  //window ScrollTop
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {

    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }

}
//Creat Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img")

  ourGallery.forEach(img =>{

img.addEventListener('click' , (e) =>{

    // Crreat Overlay Element
    let overlay = document.createElement("div")

    // Add ClassName To Overlay
    overlay.className = 'popup-overlay';
    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup Box

    let popupBox = document.createElement("div")

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading 
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading 
      imgHeading.appendChild(imgText);
    
    popupBox.appendChild(imgHeading);
  }

    // Create The Image
    let popupImage = document.createElement("img")

    // SetnImage Source 
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    //  Append The Box To Body
    document.body.appendChild(popupBox);

    // Create The Close span 
    let closeButton = document.createElement("span")

    // Create The Close Button Text 
    let closeButtonText = document.createTextNode("X");

    // Append Text To Close Button 
    closeButton.appendChild(closeButtonText)

    // Add Close Button
    closeButton.className = 'close-button';

     
    //  Add Close Button To The Popup Box 
    popupBox.appendChild(closeButton)
  });
});


// Close popup 
document.addEventListener("click" , function (e){

  if (e.target.className == 'close-button') {

    //Remove The Current Popup 
    e.target.parentNode.remove();

    //Remove Overlay 
    document.querySelector(".popup-overlay").remove();
  }
  
});
//Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

 //Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollTosomewhere(elements){

  elements.forEach(ele => {

    ele.addEventListener("click" , (e) => {

    e.preventDefault();
 
    document.querySelector(e.target.dataset.section).scrollIntoView({
 
      behavior:'smooth'
    });
   });
 });
}

scrollTosomewhere(allBullets);
scrollTosomewhere(allLinks);

// Handle Active State 
function  handleActive(ev){
   
  //Remove Active Class From All Childrens
  ev.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active")
  });
  //Add Active Class On Self 
  ev.target.classList.add("active")
}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletlocalItem = localStorage.getItem("bullets_option ");

  if(bulletlocalItem !== null){

    bulletsSpan.forEach (span => {

    span.classList.remove("active");
 });

 if (bulletlocalItem === 'block') {
      
      bulletsContainer.style.display = 'block';

      document.querySelector(".bullets-option .yes").classList.add("active");
 }else{

    bulletsContainer.style.display = 'none';

    document.querySelector(".bullets-option .no").classList.add("active");

   }
 }

  bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {
      
      if(span.dataset.display === 'show') {

    bulletsContainer.style.display = 'block';

    localStorage.setItem("bullets_option" , 'block');

 }else {

        bulletsContainer.style.display = 'none'

        localStorage.setItem("bullets_option" ,'none');

      } 
      
      handleActive(e);
    });
});

//Reset Button 

document.querySelector(".reset-options").onclick = function () {

  localStorage.clear();

  /* when do you want remove oll Items your */

  // localStorage.removeItem("color_option");
  // localStorage.removeItem("bullets_option");
  // localStorage.removeItem("background_option");

  //Reload Window
  window.location.reload();
}
 //Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

  // Stop Propagation
  e.stopPropagation();

  // Toggle Class "menu-active" On Button 
    this.classList.toggle("menu-active")

 // Toggle Class "open" On Links 
    tLinks.classList.toggle("open")
};

// Click Anywhere Outside And Toggle Button 

document.addEventListener("click" , (e) => {

  if(e.target !== toggleBtn && e.target !== tLinks) 
  {
    // Check If Menu Is Open 
    if (tLinks.classList.contains("opne")) {
      
    // Toggle Class "menu-active" On Button 
      toggleBtn.classList.toggle("menu-active")
      
    // Toggle Class "open" On Links 
      tLinks.classList.toggle("open")

    }
  }
});

 // Stop Propagation On Menu

 tLinks.onclick = function (e) {
  e.stopPropagation();
 }
