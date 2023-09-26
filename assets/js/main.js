window.addEventListener('scroll', function(){
    let nav = this.document.querySelector('#nav');
    nav.classList.toggle('scrolar', window.scrollY > 110)
})
