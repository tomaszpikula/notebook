function articleMovement() {
    const scrollValue = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const articleHeightHTML = document.querySelector('.knowledge--html').clientHeight;
    const articleStartHTML = document.querySelector('.knowledge--html').offsetTop
    const articleHeightCSS = document.querySelector('.knowledge--css').clientHeight;
    const articleStartCSS = document.querySelector('.knowledge--css').offsetTop
    const articleHeightJS = document.querySelector('.knowledge--js').clientHeight;
    const articleStartJS = document.querySelector('.knowledge--js').offsetTop
    const articleHeightOther = document.querySelector('.knowledge--other').clientHeight;
    const articleStartOther = document.querySelector('.knowledge--other').offsetTop
 
    if (scrollValue > articleStartHTML + articleHeightHTML/2 - windowHeight) {
      document.querySelector('.knowledge--html').classList.add('active');
    } 
    if (scrollValue > articleStartCSS + articleHeightCSS/2 - windowHeight) {
        document.querySelector('.knowledge--css').classList.add('active');
      } 
    if (scrollValue > articleStartJS + articleHeightJS/2 - windowHeight) {
        document.querySelector('.knowledge--js').classList.add('active');
      } 
    if (scrollValue > articleStartOther + articleHeightOther/2 - windowHeight) {
        document.querySelector('.knowledge--other').classList.add('active');
      }   

   }

window.addEventListener('scroll', articleMovement)