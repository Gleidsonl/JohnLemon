var overlay = document.querySelector('.jl-overlay');
var frameImage = document.querySelector('.jl-gallery-frame-image');
var frameContainer = document.querySelector('.jl-gallery-frame-container');
var galleryImages = document.querySelectorAll('.jl-thumb-box');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');
var btnNext = document.querySelector('.jl-item-next');
var btnPrev = document.querySelector('.jl-item-prev');
var currCounter = document.querySelector('.jl-current-slide');
var totalCounter = document.querySelector('.jl-total-slide');
var skeletonLoading = document.querySelector('.jl-skeleton-loading');

var postGallery = document.querySelector('.jl-post-gallery');
var postGalleryHeight = postGallery.clientHeight;
postGallery.style.height = (postGalleryHeight - 270) + 'px';

// Counter Formater  acrescenta 0 caso seja menor que 10
var counterFormatter = function(n){
    if(n<10){
        return '0'  + n;
    }
    else{
        return n;
    }
}

// contador quantidade slide
totalCounter.innerHTML = counterFormatter(galleryImages.length);

// Skeleton loading
const skeletonAnim = function(imagem){
var myImage = new Image();
myImage.src = imagem;
myImage.addEventListener('load', function(){
 skeletonLoading.classList.add('jl-fade-out');
     setTimeout(function(){
         skeletonLoading.style.display = 'none';
     }, 2000);
});
}

// Open gallery modal
const getImageSrc = function() {
    for(var i = 0 ; i < galleryImages.length; i++){
        galleryImages[i].addEventListener( 'click', function() {
           var imageSrc = this.querySelector('img').getAttribute('data-src');
           var itemNum = this.querySelector('img').getAttribute('data-item');

           skeletonLoading.style.display = 'flex';
          
           frameImage.setAttribute('src', imageSrc);
           frameImage.setAttribute('data-index', itemNum);

           overlay.classList.add('jl-is-open');
           frameContainer.classList.add('jl-is-open');
           currCounter.innerHTML = counterFormatter(itemNum);
 
           skeletonAnim(imageSrc);         
        });
    }
}

getImageSrc();

for(var c = 0 ; c < closeGallery.length; c++) {
    closeGallery[c].addEventListener('click', function() {
        overlay.classList.remove('jl-is-open');
        frameContainer.classList.remove('jl-is-open');
    });
}

const nextItem = function(){

// identificar o item atual no frame
var currItemNum = frameImage.getAttribute('data-index');

// definir nº proximo item = atual + 1
var nextItemNum = parseInt(currItemNum) + 1 ;

// fazemos Loop e identificamos qual item faz match com o numero prox item
for(var n = 0 ; n < galleryImages.length; n++){
    var item = galleryImages[n].querySelector('img');
    var itemNum = parseInt(item.getAttribute('data-item'));

    if(itemNum === nextItemNum ){
        // capturando o data-src
        var nextSrc = item.getAttribute('data-src');
        var nextIndex = item.getAttribute('data-item');
        skeletonLoading.style.display = 'flex';

        // Passando o data-src para a tag de img no frame
        frameImage.setAttribute('src', nextSrc);
        frameImage.setAttribute('data-index', nextIndex);

        currCounter.innerHTML = counterFormatter(nextIndex);
        skeletonAnim(nextSrc);         
    }
}
// definir nº anterior item
}

const prevItem = function(){

    // identificar o item atual no frame
    var currItemNum = frameImage.getAttribute('data-index');
    
    // definir nº proximo item = atual + 1
    var prevItemNum = parseInt(currItemNum) - 1 ;
    
    // fazemos Loop e identificamos qual item faz match com o numero prox item
    for(var p = 0 ; p < galleryImages.length; p++){
        var item = galleryImages[p];
        var itemNum = parseInt(item.getAttribute('data-item'));
    
        if(itemNum === prevItemNum ){
            // capturando o data-src
            var prevSrc = item.getAttribute('data-src');
            var prevIndex = item.getAttribute('data-item');
            skeletonLoading.style.display = 'flex';
            // Passando o data-src para a tag de img no frame
            frameImage.setAttribute('src', prevSrc);
            frameImage.setAttribute('data-index', prevIndex);

            currCounter.innerHTML = counterFormatter(prevIndex);
            skeletonAnim(prevSrc);         
        }
    }
    // definir nº anterior item
    }

btnNext.addEventListener('click', function (){
    nextItem();
})

btnPrev.addEventListener('click', function (){
    prevItem();
})