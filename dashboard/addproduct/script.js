const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const textarea = document.querySelector("#product-description");
const save_changes = document.querySelector(".save-changes");

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
    
    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');

    textarea.style.backgroundColor = "black";
    textarea.style.color = "white";
    save_changes.style.backgroundColor ="var(--color-primary)";
    save_changes.style.color = "var(--primary-color)";
}

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    menuBtn.style.color = "var(--primary-color)";
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    save_changes.style.backgroundColor ="var(--color-primary)";
    save_changes.style.color = "var(--primary-color)";
    textarea.style.backgroundColor = "black";
    textarea.style.color = "white";

    if(document.body.classList.contains('dark-theme-variables')){
        localStorage.setItem('theme', 'dark-theme-variables');
    } else {
        textarea.style.backgroundColor = "white";
        textarea.style.color = "black";
        save_changes.style.backgroundColor = "var(--color-light)"
        localStorage.setItem('theme', 'light');
    }
});
   