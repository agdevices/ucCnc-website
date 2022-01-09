const buttons = document.querySelectorAll(`.btn`);
const images = document.querySelectorAll(`.gallery-col`);

buttons.forEach(element => {
  element.addEventListener(`click`, (e) => {
    const categoria = e.target.dataset.category;
    toggleBtnActive(categoria)
    showHideImages(categoria);
  })
});

function showHideImages(categoria){
  images.forEach(element => {
    if(categoria === `all`){
      element.classList.add(`show`);
    }else if(element.dataset.category === categoria){
            element.classList.add(`show`);
          }else{
            element.classList.remove(`show`);
          }
  });
}

function toggleBtnActive(categoria){
  buttons.forEach(e => {
    if(e.dataset.category === categoria){
      e.classList.add(`active`);
    }else{
      e.classList.remove(`active`);
    }
  });
}








