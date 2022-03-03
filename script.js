// Rolamento suave
const menuItems = document.querySelectorAll('.navbar a');
const scrollBtn = document.querySelector('.scroll-link');

scrollBtn.addEventListener("click", function(btn){
  scrollBtn.scrollToPosition();
});

menuItems.forEach((item) =>{
    item.addEventListener('click', scrollToIdOnClick);
})

//ligando os links
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

//prevenir comportamento padrão
function scrollToIdOnClick(event){
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
}

//mudança de posição
function scrollToPosition(to){
    window.scroll({
        top:to,
        behavior: "smooth",
    })
}

//esconder barra de navegação
const nav = document.querySelector('.navbar', ".sidebar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", ()=>{
    if(lastScrollY < window.scrollY){
     nav.classList.add("nav--hidden", "sidebar--hidden")
    }
    else{
        nav.classList.remove("nav--hidden", "sidebar--hidden")
    }

    lastScrollY = window.scrollY;
})

//esconder barra lateral
const showSidebar = document.querySelector(".hamburguer");
const closeSidebar = document.querySelector(".close-sidebar")
const sidebar = document.querySelector(".sidebar")

showSidebar.addEventListener('click', function(){
    if(sidebar.classList.contains("open-sidebar")){
        sidebar.classList.remove('open-sidebar')
    }
    else{
        sidebar.classList.add('open-sidebar')
    }
})

closeSidebar.addEventListener("click", function(){
    sidebar.classList.remove("hamburguer");
})