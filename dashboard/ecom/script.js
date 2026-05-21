
const links = document.querySelectorAll('#navbar a');
  let currentPage = window.location.pathname.split("/").pop();

  // Fix for homepage ("/" → index.html)
  if (currentPage === "") {
    currentPage = "index.html";
  }

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });

}

if(close){
    close.addEventListener('click', ()=>{
        navbar.classList.remove('active');
    })
}

// let MainImg = document.getElementById("MainImg");
let imgClass = document.getElementsByClassName("pro");

for(let i=0; i<imgClass.length; i++){
    imgClass[i].addEventListener('click', function(){
        window.location.href = "sproduct.html";
    });
}