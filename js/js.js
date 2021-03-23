let btnMnu=document.querySelector('.btn-menu');
let menu=document.querySelector('.list-container');
let containerMenu= document.querySelector('.menu');
let activador = true;
// menu de navegacion

btnMnu.addEventListener('click',() =>{
    document.querySelector('.btn-menu i').classList.toggle('fa-time');

    if(activador){

        menu.style.left='0';
        menu.style.transition='0.5s';

        activador=false;

    }else{
        activador=false;

    menu.style.left='-100%';
    menu.style.transition='0.5s';

    activador=true;
    }
    
});
//intercalar clase activos
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((Element) =>{

    Element.addEventListener('click',(Event)=>{

        enlaces.forEach((link)=>{
            link.classList.remove('activo');

        });
        Event.target.classList.add('activo')

    });

});
//Efectos Scroll 

let prevScrollPos = window.pageYOffset;
let gotop = document.querySelector('.go-top');

window.onscroll = () => {

    let currenScrollPos = window.pageYOffset;

    //mostrar y ocurtar menu
    if(prevScrollPos > currenScrollPos ){
        containerMenu.style.top = "0";
        containerMenu.style.transition="0.5s"
    }else{
        containerMenu.style.top="-60px"
        containerMenu.style.transition="0.5s";
    }
    prevScrollPos=currenScrollPos;
    // mostrar y ocurtar scrooll estilos

    let arriba = window.pageYOffset;
    if(arriba<=600){
        containerMenu.style.borderBottom = "nose";
        gotop.style.right = "100%";

    }else{
        containerMenu.style.borderBottom = "2px solid #ff2e63";
        gotop.style.right = "0";
        gotop.style.transition="0.5s";
    }

}
gotop.addEventListener('click',()=>{
    document.body.scroll=0; // para navegador safasi
    document.documentElement.scrollTop =0;
});
let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click',() => {

    document.body.scrollTop=-600;
    document.documentElement.scrollTop=600;
});

