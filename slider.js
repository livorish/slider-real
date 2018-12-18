const next = document.getElementById('next');
const prev = document.getElementById('prev');
const imageBlock = document.getElementById('sl');
const images = ["img/cat.jpg", "img/sugar-gliders-pet.jpg", "img/lorikeet.jpg", "img/manatee.jpg", "img/namdapha-flying-squirrel.jpg", "img/rabbit.jpg", "img/tooanimal.jpg", "img/wolf.jpg"];
const len = images.length;
let pattern,
   matching,
   source,
   indexOfImages;

function findIndex() {
   pattern = /img\/\w+\S+\.jpg/gi;
   matching = imageBlock.src.match(pattern);
   source = matching.toString();
   indexOfImages = images.indexOf(source);
   return indexOfImages;
}

function nextButt() {
   findIndex();
   let increase = indexOfImages + 1;
   if (increase < len) {
      imageBlock.src = images[increase];
   } else {
      increase = 0;
      imageBlock.src = images[increase];
   }
}

function prevButt() {
   findIndex();
   let decrease = indexOfImages - 1;
   if (indexOfImages <= 0) {
      imageBlock.src = images[len - 1];
      indexOfImages = [len - 1];
   } else {
      imageBlock.src = images[decrease];
      count = decrease + 1;
   }

}

next.addEventListener("click", nextButt);
prev.addEventListener("click", prevButt);
