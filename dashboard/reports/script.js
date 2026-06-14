const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const select_date = document.getElementById("select_id");

//Show Sidebar
menuBtn.addEventListener('click',() =>{
      sideMenu.style.display = "block";
})

//Close Sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = "none";
})

//==================Change Theme=========================
const currentTheme = localStorage.getItem('theme');

if(currentTheme === 'dark-theme-variables'){
    document.body.classList.add('dark-theme-variables');
    menuBtn.style.color = "var(--primary-color)";
    select_date.style.backgroundColor = "var(--color-primary)";
    select_date.style.color = "var(--primary-color)";
    

    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');
}

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    menuBtn.style.color = "var(--primary-color)";
    select_date.style.backgroundColor = "var(--color-primary)";
    select_date.style.color = "var(--primary-color)";

    

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    if(document.body.classList.contains('dark-theme-variables')){
        localStorage.setItem('theme', 'dark-theme-variables');
    } else {
        select_date.style.backgroundColor = "var(--color-light)";
        localStorage.setItem('theme', 'light');

    }
});
   