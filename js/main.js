// Declarando variaveis
var btnContact = document.querySelector('.jl-btn-contact');
var toggleModal = document.querySelectorAll('.jl-toggle-modal');
var toggleMenu = document.querySelectorAll('.jl-toggle-menu');
var menuMobile = document.querySelector('.jl-menu-mob');
var btnMenuMobileIcon = document.querySelector('.jl-btn-menu-mob ion-icon');
// Alterar icone, abrir e fechar o modal de contato

btnContact.addEventListener('click', function(){

    var boxContact = document.querySelector('.jl-contact-info'); 
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
  });

// Loading sumir dps que carregar conteudo

window.addEventListener('load', function(){
var pagePreloader = this.document.querySelector('.jl-preloader');
pagePreloader.classList.add('jl-fade-out');

setTimeout(function(){
pagePreloader.style.display = 'none';

} ,5000);

} );

// Abrindo e fechando menu

for(var m = 0; m < toggleMenu.length; m++){
  toggleMenu[m].addEventListener('click', function () {
    var overlay = document.querySelector('.jl-menu-overlay');
    overlay.classList.toggle('jl-is-open');
    menuMobile.classList.toggle('jl-menu-is-close');
    menuMobile.classList.toggle('jl-menu-is-open');

    var icon = btnMenuMobileIcon.getAttribute('name');
    if(icon === 'menu'){
      btnMenuMobileIcon.setAttribute('name', 'close');
    }else{      btnMenuMobileIcon.setAttribute('name', 'menu');
  }
  });
}

// Abrindo e fechando modal

for(var i = 0; i < toggleModal.length; i++){
  toggleModal[i].addEventListener('click', function () {

      var modalOrcamento = document.querySelector('#jl-modal-orcamento');
      var overlay = document.querySelector('.jl-overlay');

      overlay.classList.toggle('jl-is-open');
      modalOrcamento.classList.toggle('jl-is-open');
      modalOrcamento.classList.toggle('jl-slide-top-in'); 
                                        
  });
}



  // Animando elementos do topbar usando way points

var triggerTopBar = document.querySelector('.jl-trigger-topbar');
var topBar = document.querySelector('.jl-topbar');
var logo = document.querySelector('.jl-logo');

var waypoint = new Waypoint({
  element: triggerTopBar,
  handler: function(direction) {
   topBar.classList.toggle('jl-topbar-bg')
   logo.classList.toggle('jl-logo-shorten')
   logo.classList.toggle('jl-logo-larger')

  },
  offset: '50px'
});

  

