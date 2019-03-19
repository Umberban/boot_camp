const galleryItems = [
  { preview: './Img/FisrtSmall.jpg', fullview: './Img/FisrtLarge.jpg', alt: "alt text 1" },
  { preview: './Img/SecondSmall.jpg', fullview: './Img/SecondLarge.jpg', alt: "alt text 2" },
  { preview: './Img/ThirdSmall.jpg', fullview: './Img/ThirdLarge.jpg', alt: "alt text 3" },
  { preview: './Img/FiveSmall.jpg', fullview: './Img/FiveLarge.jpg', alt: "alt text 4" },
  { preview: './Img/SixSmall.jpg', fullview: './Img/SixLarge.jpg', alt: "alt text 5" },
];

// const box = document.querySelector('.js-image-gallery');

// window.addEventListener("DOMContentLoaded", hello);



// function hello(){
//   const full = document.createElement('div');
//   full.classList.add('fullview');
//   let fullImg = `<img class='big' style= 'width:100%' src=${galleryItems[0].preview} data-fullview = ${galleryItems[0].fullview} alt=${galleryItems[0].alt}>`;
//   full.innerHTML= fullImg;
//   box.appendChild(full);
//   full.style.textAlign ="center";
// const preview = document.createElement('ul');
// preview.classList.add('preview');
// preview.style.display = 'flex';
// preview.style.listStyle = 'none';
// box.style.width = "700px";
// box.style.margin = "auto";




// let previewList = galleryItems.reduce((acc,i) => acc + `<li><img style= 'width:100% height = 100px 'src=${i.preview} data-fullview = ${i.fullview} alt=${i.alt}> </li>`,"");
// preview.innerHTML= previewList;
// box.appendChild(preview);
// const bigImg = document.querySelector('.big');

// box.addEventListener('click', function(e){
//   if(e.target.nodeName !== "IMG") return;
//   bigImg.src = e.target.dataset.fullview;
// });
// }


class Gallery{
  constructor(items, parentNode, defaultActiveItem){
  this.items = items,
  this.parentNode = parentNode,
  this.defaultActiveItem = defaultActiveItem;
  }

 get createNewGallery(){
  let full = document.createElement('div');
  full.classList.add('fullview');
  let fullImg = `<img class='big' style= 'width:100%' src=${this.items[this.defaultActiveItem].fullview} >`;
  full.innerHTML= fullImg;
  this.parentNode.appendChild(full);
 
    let preview = document.createElement('ul');
    preview.classList.add('preview');
    let addImage = this.items.reduce((acc ,i) => acc + `<li><img style= 'width:100% height = 100px 'src=${i.preview} data-fullview = ${i.fullview} alt=${i.alt}> </li>`,"" );
    preview.innerHTML= addImage;
    this.parentNode.appendChild(preview);
  }
  get clicker(){
  this.parentNode.addEventListener('click', function(e){
      const bigImg = document.querySelector('.big');
      if(e.target.nodeName !== "IMG") return;
      bigImg.src = e.target.dataset.fullview;
    });
    }
  }


const gallery = new Gallery(
  galleryItems,
  document.querySelector('.image-gallery'),
  1
);

gallery.createNewGallery;
gallery.clicker;
