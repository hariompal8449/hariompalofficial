// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuToggle.innerHTML = '<i class="fas fa-times"></i>';
        } else {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}



// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("theme-toggle");

try {
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }
} catch (e) {}

if (themeBtn) {

    const icon = themeBtn.querySelector("i");

    function updateIcon() {
        if (document.body.classList.contains("light-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    }

    updateIcon();

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        try {
            localStorage.setItem(
                "theme",
                document.body.classList.contains("light-mode")
                    ? "light"
                    : "dark"
            );
        } catch (e) {}

        updateIcon();
    });
}

// ==========================
// Typing Animation
// ==========================

const words = [
    "YouTuber",
    "Graphic Designer",
    "Video Editor",
    "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    if (!deleting && charIndex > current.length) {
        deleting = true;
        setTimeout(typeEffect, 1200);
        return;
    }

    if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// ==========================
// Loader
// ==========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
function openGallery(name){
    if(name=="gallery1"){
        window.location.href="gallery1.html";
    }
    if(name=="gallery2"){
        window.location.href="gallery2.html";
    }
    if(name=="gallery3"){
        window.location.href="gallery3.html";
    }
    if(name=="gallery4"){
        window.location.href="gallery4.html";
    }
}
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchBtn && searchBox) {
    searchBtn.addEventListener("click", function () {
        if (searchBox.style.display === "none" || searchBox.style.display === "") {
            searchBox.style.display = "block";
           searchInput.focus();
searchInput.click(); 
        } else {
            searchBox.style.display = "none";
        }
    });
}
// 
// 
// ==========================
// AI Smart Search
// ==========================

const smartSearch = {

"video":"index.html#portfolio",
"videos":"index.html#portfolio",
"youtube":"https://youtube.com/@hariompaloffical",
"yt":"https://youtube.com/@hariompaloffical",

"logo":"index.html#portfolio",
"logos":"index.html#portfolio",

"thumbnail":"index.html#portfolio",
"thumbnails":"index.html#portfolio",

"design":"index.html#services",
"designer":"index.html#services",
"graphic":"index.html#services",
"graphics":"index.html#services",

"website":"index.html#portfolio",
"web":"index.html#portfolio",
"developer":"index.html#services",

"contact":"index.html#contact",
"email":"index.html#contact",
"phone":"index.html#contact",

"about":"index.html#about",
"me":"index.html#about",
"hariom":"index.html#about",

"gallery":"gallery.html",
"photo":"gallery.html",
"photos":"gallery.html",
"image":"gallery.html",
"images":"gallery.html"

};

const searchItems = [

{title:"Home",icon:"🏠",link:"#home"},
{title:"About",icon:"👤",link:"#about"},
{title:"My Gallery",icon:"🖼️",link:"gallery.html"},
{title:"Gallery 1",icon:"📷",link:"gallery1.html"},
{title:"Gallery 2",icon:"📷",link:"gallery2.html"},
{title:"Gallery 3",icon:"📷",link:"gallery3.html"},
{title:"Gallery 4",icon:"📷",link:"gallery4.html"},
{title:"Graphic Design",icon:"🎨",link:"#services"},
{title:"Video Editing",icon:"🎬",link:"#services"},
{title:"Web Development",icon:"💻",link:"#services"},
{title:"Portfolio",icon:"📁",link:"#portfolio"},
{title:"Contact",icon:"☎️",link:"#contact"},
{title:"YouTube",icon:"▶️",link:"https://youtube.com/@hariompaloffical"},
{title:"Instagram",icon:"📷",link:"https://instagram.com/hariompal2006"}

];

if (searchInput && searchResults) {

searchInput.addEventListener("input", () => {

let value=searchInput.value.toLowerCase();

searchResults.innerHTML="";

if(value==""){

searchResults.style.display="none";
return;

}

let result=searchItems.filter(item=>

item.title.toLowerCase().includes(value)

);

if(result.length==0){

searchResults.innerHTML="<div class='search-item'>❌ No Result Found</div>";

}else{

result.forEach(item=>{

searchResults.innerHTML+=`

<div class="search-item" onclick="window.location='${item.link}'">

<span>${item.icon}</span>

<span>${item.title}</span>

</div>

`;

});

}

searchResults.style.display="block";

});

}
const voiceBtn = document.getElementById("voiceBtn");

if (voiceBtn) {

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "en-IN";
    recognition.interimResults = false;

   let listening = false;

voiceBtn.addEventListener("click", () => {

    if (listening) return;

    listening = true;
    recognition.start();

});
    recognition.onresult = function(event){

        let speech = event.results[0][0].transcript;

        searchInput.value = speech;

        searchInput.dispatchEvent(new Event("input"));

    };
recognition.onend = function () {
    listening = false;
};

recognition.onerror = function () {
    listening = false;
};
}
// ==========================
// Push Notification
// ==========================

if ("Notification" in window) {

    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    window.addEventListener("load", () => {

        if (Notification.permission === "granted") {

            setTimeout(() => {

                new Notification("👋 Welcome!", {
                    body: "Welcome to Hariom Pal Official Website",
                    icon: "images/logo.png"
                });

            }, 3000);

        }

    });

}